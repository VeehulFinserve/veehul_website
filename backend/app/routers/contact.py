from fastapi import APIRouter, status, HTTPException
from pydantic import BaseModel, EmailStr
import smtplib
import os # Import the os module to read environment variables
from email.mime.text import MIMEText

# Best practice: Load credentials from environment variables.
# This keeps sensitive information out of your code.
# You would set these variables in your hosting environment.
# For local testing, you can use a .env file and a library like python-dotenv.
SMTP_SERVER = os.getenv("SMTP_SERVER", "smtpout.secureserver.net")
SMTP_PORT = int(os.getenv("SMTP_PORT", 587))
EMAIL_ADDRESS = os.getenv("EMAIL_ADDRESS", "support@veehul.com")
EMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD", "Serveup@2025") # Set your actual password here

router = APIRouter()

class ContactForm(BaseModel):
    name: str
    email: EmailStr
    phone: str = ""
    subject: str
    message: str

@router.post("/send", status_code=status.HTTP_200_OK)
async def send_contact_email(form: ContactForm):
    # Compose email
    body = f"""
    Name: {form.name}
    Email: {form.email}
    Phone: {form.phone}
    Subject: {form.subject}
    Message: {form.message}
    """
    
    msg = MIMEText(body)
    msg["Subject"] = f"Contact Form Submission: {form.subject}"
    msg["From"] = EMAIL_ADDRESS
    msg["To"] = EMAIL_ADDRESS

    try:
        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls()
            server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
            server.send_message(msg)
        return {"success": True, "message": "Email sent!"}
    except Exception as e:
        # Log the detailed error for debugging purposes on the server side
        print(f"Error sending email: {e}")
        # Return a generic error to the client for security
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to send email. Please try again later."
        )
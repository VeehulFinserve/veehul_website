from fastapi import FastAPI
from .routers import blog, calculators, contact, auth, testimonials
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Veehul Finserve LLP API")

origins = [
    "http://localhost:3000",  # Your React app's URL
    "http://127.0.0.1:3000",
    # Add your production front-end URL here when you deploy
    # "https://www.veehul.com",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this to your needs
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(blog.router, prefix="/blog", tags=["Blog"])
app.include_router(calculators.router, prefix="/calculators", tags=["Calculators"])
app.include_router(contact.router, prefix="/routers/contact", tags=["Contact"])
app.include_router(auth.router, prefix="/auth", tags=["Auth"])
app.include_router(testimonials.router, prefix="/testimonials", tags=["Testimonials"])

@app.get("/")
def read_root():
    return {"company": "Veehul Finserve LLP", "message": "Welcome to the API!"} 
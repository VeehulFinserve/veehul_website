import os
from fastapi import FastAPI
from app.routers import blog, calculators, contact, auth, testimonials
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Veehul Finserve LLP API")

# Read environment (default: development)
ENV = os.getenv("ENV", "development")

if ENV == "production":
    origins = [
        "https://www.veehul.com",  # your real domain
    ]
else:
    origins = [
        "http://localhost:3000",   # React dev server
        "http://127.0.0.1:3000",
    ]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routers
app.include_router(blog.router, prefix="/blog", tags=["Blog"])
app.include_router(calculators.router, prefix="/calculators", tags=["Calculators"])
app.include_router(contact.router, prefix="/api/contact", tags=["Contact"])
app.include_router(auth.router, prefix="/auth", tags=["Auth"])
app.include_router(testimonials.router, prefix="/testimonials", tags=["Testimonials"])

@app.get("/")
def read_root():
    return {"company": "Veehul Finserve LLP", "message": "Welcome to the API!"}

import React, { useState } from 'react';
import { useParams, Link, useNavigate} from 'react-router-dom';
import logo from './logo.png';
import './ServiceDetail.css';
import './App.css';



const serviceDetails = {
    1: {
        title: "Your Financial GPS: A Simple Guide to Financial Planning",
        intro_paragraph: "Think of financial planning as your personal GPS for life. It's not about being rich; it’s about making smart, intentional choices with your money to get where you want to go. Just like a GPS helps you navigate traffic and find the fastest route, a financial plan helps you avoid money mistakes and reach your life goals.",
        sections: [
            {
                section_title: "What Exactly Is a Financial Plan?",
                content: "A financial plan is simply a roadmap. It’s a detailed look at your money today and a strategic plan for tomorrow. This isn't a one-time thing. Your plan should evolve as your life changes—new job, marriage, kids, or even a new life goal. A great financial plan covers more than just investing; it's a comprehensive strategy that includes:",
                list_items: [
                    {
                        title: "Budgeting and Spending",
                        description: "The foundation of any plan. It's about knowing where your money comes from and where it goes."
                    },
                    {
                        title: "Managing Debt",
                        description: "Creating a clear strategy to pay off high-interest debt and stay on track."
                    },
                    {
                        title: "Building an Emergency Fund",
                        description: "Your financial safety net for unexpected events, like a job loss or a major car repair."
                    },
                    {
                        title: "Planning for Retirement",
                        description: "Investing now to ensure you have a secure and comfortable future."
                    },
                    {
                        title: "Protecting What You Have",
                        description: "Using insurance to protect yourself and your family from financial hardship."
                    },
                    {
                        title: "Investing for Growth",
                        description: "Making your money work for you so it grows over time."
                    }
                ]
            },
            {
                section_title: "Why You Can’t Afford to Skip This Step",
                content: "Without a plan, money decisions often feel random and stressful. A financial plan gives you control and clarity. It helps you:",
                list_items: [
                    {
                        title: "Turn Dreams into Reality",
                        description: "Whether you want to buy a house, start a business, or travel the world, a plan provides the steps to get there."
                    },
                    {
                        title: "Reduce Stress",
                        description: "Knowing you’re on the right track can significantly lower financial anxiety. No more worrying about 'what if'."
                    },
                    {
                        title: "Prepare for the Unexpected",
                        description: "Life is full of surprises. A solid plan ensures you're ready for bumps in the road, big or small."
                    }
                ]
            },
            {
                section_title: "Getting Started: Three Simple Steps",
                content: "Ready to start your journey? You don't need to be a financial whiz. Just begin with these simple steps:",
                ordered_list_items: [
                    {
                        step_number: 1,
                        step_title: "Know Your Starting Point",
                        description: "Take an honest look at your current finances. What do you earn? What do you owe? This is your starting location."
                    },
                    {
                        step_number: 2,
                        step_title: "Define Your Destination",
                        description: "What are your goals? Be specific. 'I want to be debt-free in five years' is a much better goal than 'I want to save more'."
                    },
                    {
                        step_number: 3,
                        step_title: "Map Your Route",
                        description: "Create a budget that aligns with your goals. Start saving and investing, even if it's a small amount. The key is to be consistent."
                    }
                ]
            }
        ],
        conclusion: "Remember, a financial plan isn't about perfection; it's about progress. Start small, stay consistent, and you'll be well on your way to a more secure future."
    },
    2: {
        "title": "Your Financial GPS: A Simple Guide to Financial Planning",
        "intro_paragraph": "Imagine you're building a house you'll live in for the rest of your life, starting from the day you stop working. This isn't just a regular house; it's a 'retirement home' that needs to be extra strong and stable to withstand inflation and a long, happy life. Retirement planning works the exact same way. It's about building a solid, long-lasting 'house' for your future, piece by piece.",
        "sections": [
            {
                "section_title": "Why It's So Important: The Power of Compounding",
                "content": "Why build this house early? The key is the 'magic' of compounding. Every rupee you invest today starts working for you, earning returns that also start to earn returns. The earlier you begin, the more time your money has to grow exponentially. This small habit today can lead to a massive corpus tomorrow.",
                "list_items": [
                    {
                        "title": "Early Start, Less Stress",
                        "description": "Starting early allows you to achieve your goals with smaller, more manageable contributions. You won't have to scramble with large investments later in life."
                    },
                    {
                        "title": "Beat Inflation",
                        "description": "Inflation erodes the value of money. A planned investment strategy ensures your money grows faster than inflation, preserving your purchasing power for a comfortable retirement."
                    }
                ]
            },
            {
                "section_title": "The Construction Process: Step-by-Step",
                "content": "Building your retirement home requires a clear process. Here’s a simple three-step plan:",
                "ordered_list_items": [
                    {
                        "step_number": 1,
                        "step_title": "Know Your Foundation (Financial Health & Goals)",
                        "description": "First, assess your current financial situation. How much do you earn and spend? How much debt do you have? Then, define your retirement goals. What will your monthly expenses be? Do you want to travel? Be specific. This is your blueprint."
                    },
                    {
                        "step_number": 2,
                        "step_title": "Choose Your Materials (Products & Investments)",
                        "description": "This is where you select the best financial products to build with. The key is to diversify your portfolio to balance risk and reward. Think of these as your building materials."
                    },
                    {
                        "step_number": 3,
                        "step_title": "Start Building (Regular Investments)",
                        "description": "Consistency is key. Automate your investments through a Systematic Investment Plan (SIP) in mutual funds or regular contributions to your EPF/PPF. Building your house one brick at a time is the most effective way."
                    }
                ]
            },
            {
                "section_title": "The Building Materials: Key Products",
                "content": "Your retirement house needs a mix of materials for a strong structure. Here are the most common products used in India:",
                "list_items": [
                    {
                        "title": "Mutual Funds (Equity and Debt)",
                        "description": "These are the most versatile materials. Through a Systematic Investment Plan (SIP), you can invest in a basket of stocks (Equity Funds) for higher growth, or a basket of bonds (Debt Funds) for stability. They are the engine of your retirement plan."
                    },
                    {
                        "title": "EPF (Employee Provident Fund)",
                        "description": "For salaried individuals, this is the main foundation. Mandatory contributions from both you and your employer, combined with tax-free returns, create a powerful and stable base for your retirement."
                    },
                    {
                        "title": "PPF (Public Provident Fund)",
                        "description": "A government-backed savings scheme that offers tax-exempt returns. It's an excellent, low-risk way to add a secure wall to your retirement house, separate from your salaried income."
                    },
                    {
                        "title": "NPS (National Pension System)",
                        "description": "A government-regulated scheme that allows you to choose your investment mix. It's a great product for those who want a blend of market-linked returns and government supervision."
                    },
                    {
                        "title": "FDs & Bonds",
                        "description": "These are your stable, low-risk materials. Fixed Deposits and Bonds provide guaranteed returns, making them ideal for the portion of your portfolio that you cannot afford to lose."
                    }
                ]
            },
            {
                "section_title": "The Benefits of Early Planning",
                "content": "Starting your construction early provides incredible advantages that you cannot get back later:",
                "list_items": [
                    {
                        "title": "Less Investment, More Corpus",
                        "description": "A small, consistent investment made at age 25 can grow into a much larger corpus than a larger investment made at age 40. This is the simple math of compounding."
                    },
                    {
                        "title": "Flexibility and Peace of Mind",
                        "description": "With a strong plan in place, you have the flexibility to take risks or handle financial setbacks without derailing your retirement goals. It brings immense peace of mind."
                    },
                    {
                        "title": "Financial Freedom",
                        "description": "Early planning gives you the chance to achieve true financial freedom—the ability to live life on your terms without the constant worry of money."
                    }
                ]
            },
            {
                "section_title": "Conclusion",
                "content": "Your retirement house won't build itself. Take the first step today. Start with a plan, choose the right materials, and begin the construction. A little effort today will ensure a comfortable and secure home for your future."
            }
        ]
    },
    // Add more services as needed
    3: {
  "title": "Safeguard Your Family and Assets with Comprehensive Insurance Coverage",
  "intro_paragraph": "Life is full of unexpected twists and turns. While we can't control everything, we can prepare for it. Think of insurance as your personal superhero, a safety net designed to protect your family and the things you've worked hard for. Our comprehensive coverage options are here to provide peace of mind and financial security against life's uncertainties.",
  "sections": [
    {
      "section_title": "Why Insurance Is Your Financial Shield",
      "content": "Insurance isn't just another expense; it's a vital part of your financial plan. It protects you from the devastating financial impact of unforeseen events. Without it, a single accident, illness, or disaster could wipe out your life savings and put your family’s future at risk. It’s the shield that stands between you and financial ruin.",
      "list_items": [
        {
          "title": "Protecting Your Family's Future",
          "description": "Life insurance and health insurance ensure your loved ones are taken care of, even if you're no longer there to provide for them. It covers medical costs and replaces lost income."
        },
        {
          "title": "Preserving Your Assets",
          "description": "Your home, car, and valuables are a reflection of your hard work. Property and vehicle insurance protect these assets from damage, theft, or disaster."
        },
        {
          "title": "Reducing Stress and Worry",
          "description": "Knowing you have a safety net in place allows you to live with confidence. You can focus on what matters most, knowing your financial well-being is protected."
        }
      ]
    },
    {
      "section_title": "Our Comprehensive Coverage Options",
      "content": "We offer a range of insurance products tailored to your specific needs. Our goal is to provide a complete and integrated safety net for every aspect of your life.",
      "list_items": [
        {
          "title": "Life Insurance",
          "description": "Secures your family's financial future in the event of your passing. We offer Term Plans, which provide high coverage at a low cost, and Endowment Plans that combine savings with life cover."
        },
        {
          "title": "Health Insurance",
          "description": "Covers medical expenses, hospitalisation, and critical illness. It's essential to protect yourself from the rising costs of healthcare and ensure you receive the best treatment without financial stress."
        },
        {
          "title": "Vehicle Insurance",
          "description": "Protects your car or two-wheeler from damage, theft, or third-party liability. It's a mandatory safeguard that protects your vehicle and your finances."
        },
        {
          "title": "Home Insurance",
          "description": "Safeguards your most valuable asset—your home—from events like fire, natural disasters, theft, or damage. It protects the structure and its contents."
        },
        {
          "title": "Personal Accident Cover",
          "description": "Provides a lump sum payout in the event of an accidental death or disability. It acts as an additional layer of protection beyond your regular life or health insurance."
        }
      ]
    },
    {
      "section_title": "How to Get Started",
      "content": "Building your insurance shield is a straightforward process. Here’s how you can get started today:",
      "ordered_list_items": [
        {
          "step_number": 1,
          "step_title": "Assess Your Needs",
          "description": "Evaluate your family's financial obligations, your assets, and your risk tolerance. How much coverage do you need to be fully protected?"
        },
        {
          "step_number": 2,
          "step_title": "Get a Personalized Quote",
          "description": "Our experts will help you identify the right combination of products and provide a quote tailored to your unique situation. We make the process simple and transparent."
        },
        {
          "step_number": 3,
          "step_title": "Secure Your Coverage",
          "description": "Once you've made your decision, we'll help you complete the paperwork and secure your policies. You'll have peace of mind knowing you and your loved ones are protected."
        }
      ]
    },
    {
      "section_title": "Conclusion",
      "content": "Don't leave your family and assets exposed to risk. Insurance is the most effective way to safeguard your financial future and provide peace of mind. Let us help you build a comprehensive shield against life's uncertainties today."
    }
  ]
},
4: {
  "title": "Minimize Tax Liability, Maximize Savings: Strategic Tax Planning Solutions",
  "intro_paragraph": "Tax planning isn't just a yearly chore; it's a powerful tool to build wealth. By strategically managing your investments and expenses, you can significantly reduce your tax liability and keep more of your hard-earned money. Our solutions are designed to help you navigate the complexities of tax laws and turn tax season from a burden into an opportunity for savings.",
  "sections": [
    {
      "section_title": "Why Tax Planning is a Smart Financial Move",
      "content": "Most people think of tax filing as simply a way to comply with the law. However, smart tax planning is about much more. It's about optimizing your financial life. Without a plan, you might pay more in taxes than necessary, missing out on opportunities to grow your wealth. Tax planning is an active process that helps you:",
      "list_items": [
        {
          "title": "Boost Your Savings",
          "description": "Every rupee saved on taxes is a rupee you can invest for your future. Tax-saving investments not only reduce your tax bill but also help you achieve your long-term financial goals."
        },
        {
          "title": "Achieve Financial Goals Faster",
          "description": "By minimizing tax outflow, you have more capital to invest in a retirement fund, a child's education, or a down payment on a home. Tax planning directly contributes to your financial freedom."
        },
        {
          "title": "Ensure Compliance and Avoid Penalties",
          "description": "A well-thought-out tax plan ensures you are fully compliant with the tax laws, helping you avoid last-minute rush, errors, and potential penalties."
        }
      ]
    },
    {
      "section_title": "Our Strategic Tax Planning Approach",
      "content": "Our approach is not about finding loopholes, but about using the tax code to your advantage. We help you create a personalized plan that fits your financial profile and goals.",
      "list_items": [
        {
          "title": "Investment-Linked Tax Savings",
          "description": "We help you select tax-saving investments under Section 80C like ELSS (Equity Linked Savings Scheme), PPF (Public Provident Fund), and Sukanya Samriddhi Yojana, which not only save tax but also grow your wealth over time."
        },
        {
          "title": "Expense-Based Deductions",
          "description": "We guide you on how to leverage deductions for expenses like health insurance premiums (Section 80D), interest on education loans (Section 80E), and donations to charitable organizations (Section 80G)."
        },
        {
          "title": "Optimizing Your Income",
          "description": "We provide advice on how to structure your income and investments to take advantage of various tax benefits, such as a lower tax rate on long-term capital gains from equity investments."
        },
        {
          "title": "Holistic Financial Integration",
          "description": "Our tax solutions are not standalone. They are integrated with your overall financial plan, including retirement, insurance, and investment goals, to provide a comprehensive and effective strategy."
        }
      ]
    },
    {
      "section_title": "The Tax Planning Process: How It Works",
      "content": "Our process is simple and designed to empower you with the right knowledge and tools.",
      "ordered_list_items": [
        {
          "step_number": 1,
          "step_title": "Financial Review",
          "description": "We start with a detailed review of your income, current investments, and financial goals. This helps us understand your unique tax situation and potential opportunities."
        },
        {
          "step_number": 2,
          "step_title": "Create a Customized Plan",
          "description": "Based on the review, we create a personalized tax plan outlining the best mix of tax-saving investments and deductions for you to maximize your savings."
        },
        {
          "step_number": 3,
          "step_title": "Implement and Monitor",
          "description": "We help you implement the plan and monitor its progress throughout the year, ensuring you stay on track and are prepared well before the tax-filing deadline."
        }
      ]
    },
    {
      "section_title": "Conclusion",
      "content": "Don't let tax season be a source of stress. Take control of your financial future by adopting a proactive tax planning strategy. By making smart decisions today, you can save money, build wealth, and achieve your financial goals faster. Let us help you turn tax planning into a powerful tool for your prosperity."
    }
  ]
},
5:{
  "title": "Secure Your Child's Educational Dreams with Systematic Education Funding Strategies",
  "intro_paragraph": "Every parent dreams of providing their child with the best possible education. However, the rising costs of schooling, college, and specialized courses can be a major financial challenge. Education funding is not about a single large investment; it's a marathon. By starting early and using systematic strategies, you can build a strong financial foundation to turn your child’s educational dreams into a reality.",
  "sections": [
    {
      "section_title": "Why a Systematic Approach is Crucial",
      "content": "Relying on last-minute savings or loans for your child's education can be stressful and expensive. A systematic approach to education funding helps you stay ahead of the curve, especially when factoring in inflation. The power of compounding is your best friend here—a small, consistent investment made today can grow into a substantial corpus over the long term, making your goal feel much more achievable.",
      "list_items": [
        {
          "title": "Beat Education Inflation",
          "description": "Education costs in India often rise faster than general inflation. A well-planned investment strategy ensures your savings grow at a rate that keeps pace with or outpaces these rising costs."
        },
        {
          "title": "Benefit from Compounding",
          "description": "Starting early allows your investments to benefit from the power of compounding. For example, a monthly SIP of ₹5,000 for 15 years can grow into a much larger sum than a much higher monthly amount started later."
        },
        {
          "title": "Instill Financial Discipline",
          "description": "Systematic investing, like through a SIP, ensures you are consistently saving. It becomes a disciplined habit that guarantees you are always moving closer to your goal."
        }
      ]
    },
    {
      "section_title": "The Step-by-Step Funding Process",
      "content": "Securing your child's future is a straightforward process. Here’s a simple three-step plan to get you started:",
      "ordered_list_items": [
        {
          "step_number": 1,
          "step_title": "Estimate the Future Cost",
          "description": "Begin by researching the current cost of your child's desired education. Then, use an inflation calculator to project what that cost will be in the future. This gives you a clear and realistic target corpus to save for."
        },
        {
          "step_number": 2,
          "step_title": "Choose the Right Tools",
          "description": "Select a mix of financial products that align with your time horizon and risk tolerance. For a long-term goal like a child's education, a blend of equity-linked and secure debt instruments is often the best strategy."
        },
        {
          "step_number": 3,
          "step_title": "Start Investing Systematically",
          "description": "Set up a Systematic Investment Plan (SIP) or other recurring investments. Consistency is more important than the amount. Start with what you can afford and increase the amount as your income grows."
        }
      ]
    },
    {
      "section_title": "Our Recommended Funding Products",
      "content": "We recommend a mix of products to build a robust education fund, each with its own role:",
      "list_items": [
        {
          "title": "Mutual Funds via SIP",
          "description": "Equity-oriented Mutual Funds through a SIP are a powerful tool for long-term goals. They provide the potential for high returns that can beat inflation, making them the engine of your child's education fund."
        },
        {
          "title": "Public Provident Fund (PPF)",
          "description": "A government-backed, low-risk, and tax-exempt investment. PPF provides a stable foundation for your child's education corpus and is especially useful for conservative investors."
        },
        {
          "title": "Sukanya Samriddhi Yojana (SSY)",
          "description": "A dedicated, government-run scheme for a girl child. It offers an attractive interest rate and excellent tax benefits, making it an ideal core investment for a daughter's education."
        },
        {
          "title": "Child Plans & Insurance",
          "description": "These products combine insurance and investment. In addition to a savings component, they provide a crucial 'Waiver of Premium' benefit, ensuring your child's education is funded even in case of an unfortunate event."
        }
      ]
    },
    {
      "section_title": "Conclusion",
      "content": "Your child's potential is limitless. Don't let financial constraints be a barrier to their dreams. By adopting a systematic education funding strategy, you are not just saving money; you are investing in their future success, happiness, and peace of mind. Start today, and give your child the gift of a financially secure educational journey."
    }
  ]
}
    
};
const ServiceDetail = () => {
    const { serviceId } = useParams();
    const detail = serviceDetails[serviceId];
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    if (!detail) return <div>Service not found.</div>;

    return (
        <>
            {/* Header */}
            <header className="header">
                <div className="container">
                    <div className="header-content">
                        <div className="logo">
                            <div className="logo-icon">
                                <img src={logo} alt="Veehul Finserve LLP" className="logo-image" />
                            </div>
                            <span className="logo-text">Veehul Finserve LLP</span>
                        </div>
                        <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
                            <Link to="/" className="nav-link">Home</Link>
                            <Link to="/about" className="nav-link">About</Link>
                            <Link to="/services" className="nav-link active">Services</Link>
                            <Link to="/calculators" className="nav-link">Calculators</Link>
                            {/* <Link to="/blog" className="nav-link">Blog</Link> */}
                            <Link to="/faq" className="nav-link">FAQs</Link>
                            <Link to="/contact" className="nav-link">Contact Us</Link>
                        </nav>
                        <button
                            className="mobile-menu-btn"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </header>

            <div className="service-detail">
                <button
                    onClick={() => navigate(-1)}
                    className="back-button"
                >
                    &lt; Back
                </button>
                <h1>{detail.title}</h1>
                <p>{detail.intro_paragraph}</p>
                {detail.sections && detail.sections.map((section, idx) => (
                    <div key={idx} className="service-section">
                        <h2>{section.section_title}</h2>
                        <p>{section.content}</p>
                        {section.list_items && (
                            <ul>
                                {section.list_items.map((item, i) => (
                                    <li key={i}>
                                        <strong>{item.title}:</strong> {item.description}
                                    </li>
                                ))}
                            </ul>
                        )}
                        {section.ordered_list_items && (
                            <ol>
                                {section.ordered_list_items.map((item, i) => (
                                    <li key={i}>
                                        <strong>{item.step_title}:</strong> {item.description}
                                    </li>
                                ))}
                            </ol>
                        )}
                    </div>
                ))}
                {detail.conclusion && <p className="service-conclusion"><strong>{detail.conclusion}</strong></p>}
            </div>
        </>
    );
};

export default ServiceDetail;
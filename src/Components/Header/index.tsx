import { useCallback, useEffect, useRef, useState } from 'react'
import styles from './style.module.scss'
import 'animate.css';  // Import the Animate.css library
import WOW from 'wow.js';  // Import the Wow.js library
import classNames from 'classnames';
import logo from '../../assets/images/photo_2025-01-20_15-12-38-removebg-preview.png'
import { clearTimeout } from 'timers';

import ReactDOMServer from "react-dom/server";
// const content =   [
//     {"name":"10 Indicators of a Love Scam: A Comprehensive Checklist", "id":"10-indicators-of-a-love-scam-a-comprehensive-checklist", part:"Digital"},
//     {"name":"Online Fraud Protection: A Practical Guide", "id":"online-fraud-protection-a-practical-guide", part:"Digital"},
//     {"name":"Printable Fraud Awareness Workbook with Exercises", "id":"printable-fraud-awareness-workbook-with-exercises", part:"Digital"},
//     {"name":"Fraud Awareness Masterclass with Detailed Presentation", "id":"fraud-awareness-masterclass-with-detailed-presentation", part:"Digital"},
//     {"name":"Cryptocurrency Transaction Risk Analysis", "id":"cryptocurrency-transaction-risk-analysis", part:"cryptocurrency"},
//     {"name":"Asset Location and Tracing Services", "id":"asset-location-and-tracing-services", part:"cryptocurrency"},
//     {"name":"Expert Cryptocurrency Witness Services", "id":"expert-cryptocurrency-witness-services", part:"cryptocurrency"},
//     {"name":"Business-Focused Cryptocurrency Intelligence Report", "id":"business-focused-cryptocurrency-intelligence-report", part:"cryptocurrency"},
//     {"name":"In-Depth Cryptocurrency Investigation Services", "id":"in-depth-cryptocurrency-investigation-services", part:"cryptocurrency"},
//     {"name":"General Cryptocurrency Intelligence Reports", "id":"general-cryptocurrency-intelligence-report", part:"cryptocurrency"},
//     {"name":"Support for Cryptocurrency Data Collection", "id":"support-for-cryptocurrency-data-collection", part:"cryptocurrency"},
//     {"name":"Due Diligence Services", "id":"due-diligence-services", part:"Disputes"},
//     {"name":"Dispute Settlement “Premium Package”", "id":"dispute-settlement-premium-package", part:"Disputes"},
//     {"name":"Dispute Settlement “Optimal Package”", "id":"dispute-settlement-optimal-package", part:"Disputes"},
//     {"name":"Dispute Settlement “Special Package”", "id":"dispute-settlement-special-package", part:"Disputes"},
//     {"name":"Dispute Settlement “Basic Package”", "id":"dispute-settlement-basic-package", part:"Disputes"},
//     {"name":"Chargeback Consultation", "id":"chargeback-consultation", part:"Documental"},
//     {"name":"Technical translation (non-certified)", "id":"technical-document-translation-non-certified", part:"Documental"},
//     {"name":"Case Assessment & Compilation Services", "id":"case-evaluation-and-documentation-services", part:"Documental"},
//     {"name":"Application Processing / Drafting", "id":"application-drafting-and-processing-support", part:"Documental"},
//     {"name":"Evaluation and Initial Consultation", "id":"initial-consultation-and-assessment-services", part:"Documental"},
//     {"name":"Employee Background Check Services", "id":"background-check-services-for-employees", part:"Business"},
//     {"name":"Corporate Background Check", "id":"corporate-background-verification-services", part:"Business"},
//     {"name":"Corporate Fraud Investigation", "id":"corporate-fraud-investigation-solutions", part:"Business"},
//     {"name": "Company Valuation", "id":"business-valuation-and-assessment-services", part:"Business"},
//     {"name": "Chargeback Process for Merchants", "id":"merchant-chargeback-assistance-process", part:"Business"}
//   ]
const content = [
    {"name":"10 Indicators of a Love Scam: A Comprehensive Checklist", "id":"10-indicators-of-a-love-scam-a-comprehensive-checklist", part:"Digital Products"},
    {"name":"Online Fraud Protection: A Practical Guide", "id":"online-fraud-protection-a-practical-guide", part:"Digital Products"},
    {"name":"Printable Fraud Awareness Workbook with Exercises", "id":"printable-fraud-awareness-workbook-with-exercises", part:"Digital Products"},
    {"name":"Fraud Awareness Masterclass with Detailed Presentation", "id":"fraud-awareness-masterclass-with-detailed-presentation", part:"Digital Products"},
    {"name":"Merchant Chargeback Assistance Process", "id":"merchant-chargeback-assistance-process", part:"Digital Products"},

    {"name":"Comprehensive Due Diligence Solutions", "id":"comprehensive-due-diligence-solutions", part:"Investigation and Disputes"},
    {"name":"Premium Dispute Settlement Package", "id":"premium-dispute-settlement-package", part:"Investigation and Disputes"},
    {"name":"Optimal Dispute Settlement Package", "id":"optimal-dispute-settlement-package", part:"Investigation and Disputes"},
    {"name":"Special Dispute Settlement Package", "id":"special-dispute-settlement-package", part:"Investigation and Disputes"},
    {"name":"Basic Dispute Settlement Package", "id":"basic-dispute-settlement-package", part:"Investigation and Disputes"},

    {"name":"Technical Document Translation (Non-Certified)", "id":"technical-document-translation-non-certified", part:"Consulting and Documental Support"},
    {"name":"Case Evaluation and Documentation Services", "id":"case-evaluation-and-documentation-services", part:"Consulting and Documental Support"},
    {"name":"Application Drafting and Processing Support", "id":"application-drafting-and-processing-support", part:"Consulting and Documental Support"},
    {"name":"Initial Consultation and Assessment Services", "id":"initial-consultation-and-assessment-services", part:"Consulting and Documental Support"},
    {"name":"Chargeback Consultation", "id":"chargeback-consultation", part:"Consulting and Documental Support"},

    {"name":"Cryptocurrency Transaction Risk Analysis", "id":"cryptocurrency-transaction-risk-analysis", part:"Cryptocurrency Investigation and Compliance"},
    {"name":"Asset Location and Tracing Services", "id":"asset-location-and-tracing-services", part:"Cryptocurrency Investigation and Compliance"},
    {"name":"Expert Cryptocurrency Witness Services", "id":"expert-cryptocurrency-witness-services", part:"Cryptocurrency Investigation and Compliance"},
    {"name":"Business-Focused Cryptocurrency Intelligence Report", "id":"business-focused-cryptocurrency-intelligence-report", part:"Cryptocurrency Investigation and Compliance"},
    {"name":"In-Depth Cryptocurrency Investigation Services", "id":"in-depth-cryptocurrency-investigation-services", part:"Cryptocurrency Investigation and Compliance"},
    {"name":"General Cryptocurrency Intelligence Reports", "id":"general-cryptocurrency-intelligence-report", part:"Cryptocurrency Investigation and Compliance"},
    {"name":"Support for Cryptocurrency Data Collection", "id":"support-for-cryptocurrency-data-collection", part:"Cryptocurrency Investigation and Compliance"},

    {"name":"Comprehensive Due Diligence Solutions", "id":"comprehensive-due-diligence-solutions", part:"Business Services"},
    {"name":"Cryptocurrency Transaction Risk Analysis", "id":"cryptocurrency-transaction-risk-analysis", part:"Business Services"},
    {"name":"Background Check Services for Employees", "id":"background-check-services-for-employees", part:"Business Services"},
    {"name":"Corporate Background Verification Services", "id":"corporate-background-verification-services", part:"Business Services"},
    {"name":"Corporate Fraud Investigation Solutions", "id":"corporate-fraud-investigation-solutions", part:"Business Services"},
    {"name":"Business Valuation and Assessment Services", "id":"business-valuation-and-assessment-services", part:"Business Services"}
];
//   const category = [
//     {"id": "why-you-shouldnt-face-banks-alone-the-importance-of-professional-help-in-scam-cases", "name": "Why You Shouldn’t Face Banks Alone: The Importance of Professional Help in Scams"},
//     {"id": "common-ticket-scams", "name": "Common Ticket Scams – What You Need to Know and How to Protect Yourself"},
//     {"id": "business-identity-theft", "name": "Business Identity Theft – How to Identify and Respond to it"},
//     {"id": "how-to-report-a-scam-in-portugal", "name": "Report a Scam in Portugal"},
//     {"id": "how-to-report-a-scam-in-norway", "name": "How to report a scam in Norway?"},
//     {"id": "how-to-report-a-scam-in-spain", "name": "How to report a Scam in Spain?"},
//     {"id": "estafas-de-empleo-falso", "name": "Cuidado con las Estafas de Completar Tareas y Empleo Falso: Protégete del Fraude en Línea"}, 
//     {"id": "fake-employment-scams", "name": "Cuidado con las Estafas de Completar Tareas y Empleo Falso: Protégete del Fraude en Línea"},
//     {"id": "facebook-marketplace-scams", "name": "Navigating Scams on Facebook Marketplace"},
//     {"id": "report-scam-in-new-zealand", "name": "How to Report a Scam in New Zealand"},
//     {"id": "report-scam-in-qatar", "name": "How to Report a Scam in Qatar?"},
//     {"id": "report-scam-in-france", "name": "How to Report a Scam in France"},
//     {"id": "report-scam-in-canada", "name": "How to Report a Scam in Canada"},
//     {"id": "cryptocurrency-fraud","name": "Unmasking Cryptocurrency Fraud: Recent Case Breakdowns by Greyzone Consulting" },
//     {"id": "background-checks-checklist", "name": "A-Z of Business Security – Your Background Checks Checklist"},
//     {"id": "report-fraud-in-south-africa", "name": "How to Report Fraud in South Africa"},
//     {"id": "cryptocurrency-investigations", "name": "What is a Cryptocurrency Investigation?"},
//     {"id": "due-diligence-buying-a-small-business", "name": "Due Diligence When Buying a Small Business"},
//     {"id": "due-diligence-when-buying-a-business", "name": "Mastering Due Diligence When Buying a Business"},
//     {"id": "how-to-report-fraud-in-germany", "name": "Guide: How to Report Fraud in Germany"},
//     {"id": "due-diligence-services-importance", "name": "The Indispensable Role of Due Diligence Services in Business"},
//     {"id": "ai-blockchain-digital-surveillance", "name": "AI, Blockchain and Digital Surveillance: A Comprehensive Exploration"},                                       
//   ]
const category = [
    {"id": "the-crucial-role-of-expert-support-when-dealing-with-banks-in-fraud-cases", "name": "The Crucial Role of Expert Support When Dealing with Banks in Fraud Cases"},
    {"id": "understanding-common-ticket-scams-essential-tips-for-protection", "name": "Understanding Common Ticket Scams Essential Tips for Protection"},
    {"id": "identifying-and-handling-business-identity-theft-what-you-should-know", "name": "Identifying and Handling Business Identity Theft What You Should Know"},
    {"id": "a-guide-to-reporting-scams-in-portugal", "name": "A Guide to Reporting Scams in Portugal"},
    {"id": "a-guide-to-reporting-scams-in-norway", "name": "A Guide to Reporting Scams in Norway"},
    {"id": "a-guide-to-reporting-scams-in-spain", "name": "A Guide to Reporting Scams in Spain"},
    {"id": "beware-of-task-completion-and-fake-job-scams-protect-yourself-from-online-fraud", "name": "Beware of Task Completion and Fake Job Scams: Protect Yourself from Online Fraud"},
    {"id": "navigating-scams-on-facebook-marketplace", "name": "Navigating Scams on Facebook Marketplace"},
    {"id": "step-by-step-guide-to-reporting-a-scam-in-new-zealand", "name": "Step-by-Step Guide to Reporting a Scam in New Zealand"},
    {"id": "how-to-file-a-scam-report-in-qatar", "name": "How to File a Scam Report in Qatar"},
    {"id": "a-complete-guide-to-reporting-scams-in-france", "name": "A Complete Guide to Reporting Scams in France"},
    {"id": "reporting-scams-in-canada-what-you-need-to-know", "name": "Reporting Scams in Canada: What You Need to Know"},
    {"id": "exposing-cryptocurrency-fraud-case-studies-by-th-consulting", "name": "Exposing Cryptocurrency Fraud: Case Studies by T&H Consulting"},
    {"id": "comprehensive-business-security-your-background-check-guide", "name": "Comprehensive Business Security: Your Background Check Guide"},
    {"id": "fraud-reporting-in-south-africa-a-how-to-guide", "name": "Fraud Reporting in South Africa: A How-To Guide"},
    {"id": "understanding-cryptocurrency-investigations-key-insights", "name": "Understanding Cryptocurrency Investigations: Key Insights"},
    {"id": "essential-due-diligence-tips-for-small-business-purchases", "name": "Essential Due Diligence Tips for Small Business Purchases"},
    {"id": "due-diligence-mastery-a-guide-for-business-buyers", "name": "Due Diligence Mastery: A Guide for Business Buyers"},
    {"id": "how-to-effectively-report-fraud-in-germany", "name": "How to Effectively Report Fraud in Germany"},
    {"id": "why-due-diligence-services-are-crucial-for-business-success", "name": "Why Due Diligence Services Are Crucial for Business Success"},
    {"id": "exploring-ai-blockchain-and-digital-surveillance-in-depth", "name": "Exploring AI, Blockchain, and Digital Surveillance in Depth"}
];


  const category_loop =  category.map(data => {return { path:`/blog/${data.id}` , name: `${data.name}`}});
  const digital_loop = content.map(data => {
    return data.part === 'Digital' ?  { path:`/solutions/digital-goods/${data.id}` , name: `${data.name}`} : 
    data.part === 'Business' ?   { path:`/solutions/corporate-services/${data.id}` , name: `${data.name}`} : 
    data.part === 'Documental' ?   { path:`/solutions/advisory-and-documentation-assistance/${data.id}` , name: `${data.name}`} : 
    data.part === 'Disputes' ? { path:`/solutions/research-and-dispute-resolution/${data.id}` , name: `${data.name}`} :   
    { path:`/solutions/cryptocurrency-investigations-and-regulatory-compliance/${data.id}` , name: `${data.name}`} 
  })
    const routes = [
    { path: "/", name: "Home" },
    { path: "/about-us" ,name: "About Us"  },
    { path: "/terms-and-conditions" ,name: "Terms and Conditions"  },
    { path: "/privacy-policy" ,name: "Privacy Policy"  },
    { path: "/blog" ,name: "Blog" },
    { path: "/contact-us" ,name: "Contact Us"  },
    { path:"/fraud-awareness" , name: "Fraud" },
    { path:"/faq" , name: "Faq"},   
        {path:"/our-certificates" , name: "Certificates"},
    { path:"/our-team" , name: "Team"}, 
    { path:"/solutions" , name: "Solutions"  },
    { path:"/partners" , name: "Partners" },
    { path:"/solutions/research-and-dispute-resolution" , name: "Investigations"  },
    { path:"/solutions/advisory-and-documentation-assistance" , name: "Consulting"  },
    { path:"/solutions/cryptocurrency-investigations-and-regulatory-compliance" , name: "Cryptocurrency"  },
    { path:"/solutions/digital-goods" , name: "Digital"  },
    { path:"/solutions/corporate-services" , name: "Business" },
    { path:"/my-account" , name: "My Account" },
    { path:"/my-account/lost-password" , name: "Lost Password"}, 
    ...digital_loop,
    ...category_loop
    ];

function App(props: any) {
    const [ Modal , setModal ] = useState(false)
    const [ designs , setDesign ] = useState(false)
    const [ About , setAbout ] = useState(false)
    const [ Solution , setSolution ] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const modalRef: any = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        new WOW().init();
    }, []);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    const {pathname} = props
    const color =  pathname ? "#fff" : "#fff"
    const icon = logo
    // pathname ? 'https://tandhconsult.com/wp-content/uploads/2021/05/logo-black.png' : 'https://tandhconsult.com/wp-content/uploads/2021/05/logo.png'
    const option = ["Terms and Conditions", "Privacy Policy", "Fraud Awareness", "Partners", "FAQ"]
    const options = !option ? [""] : option;
    const solution = [    
        "Digital Goods",
        "Cryptocurrency Investigations and Regulatory Compliance",
        "Research and Dispute Resolution",
        "Advisory and Documentation Assistance",
        "Corporate Services"
    ]
    const solutions = !solution ? [""] : solution;
    const Modalopen = useCallback(() => {
        const body = document.querySelector('body')
        if(body){
            body.style.overflow = 'hidden'
        } 
    },[])
    const Modalclose = useCallback(() => {
        const body = document.querySelector('body')
        if(body){
            body.style.overflow = 'scroll'
        } 
    },[])

    const filter = pathname ? pathname.split('').map((data: any) => data === '-' ? ' ': data).join('') : 'home'

    // Toggle modal state
    const handleToggleModal = () => {
        setIsModalOpen((prev) => !prev);
    };

    // Handle click outside modal
    const handleClickOutside = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsModalOpen(false); // Close the modal when clicking outside
        }
    };

    useEffect(() => {
        if (isModalOpen) {
        document.addEventListener("mousedown", handleClickOutside);
        } else {
        document.removeEventListener("mousedown", handleClickOutside);
        }

        // Cleanup the event listener when the component is unmounted or modal state changes
        return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isModalOpen]); // Re-run the effect when modal state changes

    type Procedure = (...args: any[]) => void;

    const debounce = (func: Procedure, delay: number): Procedure => {
      let timer: number | null = null; // Use `number` for browser environment
    
      return (...args: any[]) => {
        if (timer !== null) {
          clearTimeout(timer); // Clear the timeout using the browser's clearTimeout
        }
    
        timer = window.setTimeout(() => {
          func(...args); // Call the function after the delay
        }, delay);
      };
    };
    
    const debouncedLog = debounce(handleToggleModal, 500);

    const [searchTerm, setSearchTerm] = useState("");

    // Helper function to extract text content from a component
    const extractTextContent = (component: any) => {
      const htmlString = ReactDOMServer.renderToStaticMarkup(component);
      return htmlString.replace(/<\/?[^>]+(>|$)/g, ""); // Strip HTML tags
    };
  
    // Filter routes based on search term
    const filteredRoutes = routes.filter((route: any) => {
      const textContent = extractTextContent(route.component);
      return (
        route.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        route.path.toLowerCase().includes(searchTerm.toLowerCase()) ||
        textContent.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    console.log(filteredRoutes, 'filteredRoutes')
  return (
    <>
    <div className={styles.heading}>
        <div className={styles.header_part}>
            <div className={styles.header_row}>
                {
                    screenWidth < 1034 &&
                    Modal && 
                    <article className={classNames(styles.Modal, designs ? styles.openModal : styles.closeModal)} >
                        <ul className={styles.wrapperModal}>
                            <li> <a href="/" style={{color: filter === 'home' ? '#012555' : ''}}>Home</a> </li>
                            <li className={styles.arrow_down} onClick={()=> setAbout(!About)}>
                                <a href="/about-us" style={{color: filter === 'about us' ? '#012555' : ''}} >About us</a> 
                                <ul style={{display: About ? 'block' : 'none'}}>
                                    <li><a href="/terms-and-conditions">Terms and Condition</a></li>
                                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                                    <li><a href="/fraud-awareness">Fraud Awareness</a></li>
                                    <li><a href="/partners">Partners</a></li>
                                    <li><a href="/faq">FAQ</a></li>
                                </ul>
                            </li>
                            <li> <a href="/our-team" style={{color: filter === 'our team' ? '#012555' : ''}}>Our Team</a> </li>
                            <li> <a href="/our-certificates" style={{color: filter === 'our certificates' ? '#012555' : ''}}>Certificates</a> </li>
                            <li className={styles.arrow_down} onClick={()=> setSolution(!Solution)}>
                                <a href="/solutions" style={{color: filter === 'solutions' ? '#012555' : ''}}>Solutions</a> 
                                <ul style={{display: Solution ? 'block' : 'none'}}>
                                    <li><a href="/solutions/research-and-dispute-resolution">Research and Dispute Resolution</a></li>
                                    <li><a href="/solutions/advisory-and-documentation-assistance">Advisory and Documentation Assistance</a></li>
                                    <li><a href="/solutions/cryptocurrency-investigations-and-regulatory-compliance">Cryptocurrency Investigations and Regulatory Compliance</a></li>
                                    <li><a href="/solutions/corporate-services">Corporate Services</a></li>
                                </ul>
                            </li>
                            <li> <a href="/blog" style={{color: filter === 'category/blog' ? '#012555' : ''}}>Blog</a> </li>
                            <li> <a href="/contact-us" style={{color: filter === 'contact us' ? '#012555' : ''}} >Contact Us</a> </li>
                        </ul>
                    </article>
                }
                <div className={styles.img_container}>
                    <a href="/" className={classNames(`${styles.header_logo} wow animate__animated animate__fadeInDown`)}>
                        <img src={icon} alt="Logo"  />
                    </a>
                </div>
                <div className={classNames(styles.header_inner, `wow animate__animated animate__fadeInDown`)}>
                    {
                    
                        !Modal ?
                        <a className={styles.header__toggle} onClick={()=>{setModal(true), setDesign(true), Modalopen()}}><span style={{background: `${color}`}}></span><span style={{background: `${color}`}}></span><span style={{background: `${color}`}}></span><span style={{background: `${color}`}}></span></a>
                        :
                        <a className={styles.header__toggle__active} onClick={()=>{setTimeout(()=>{setModal(false)},500), setDesign(false), Modalclose()}}><span style={{background: `${color}`}}></span><span style={{background: `${color}`}}></span><span style={{background: `${color}`}}></span><span style={{background: `${color}`}}></span></a>
                    }
                    <div className={styles.otherside}>
                        {/* {<div className='dropdown'>sss</div>} */}
                        <div className={classNames(`${styles.controls} wow animate__animated animate__fadeInRight`)}>
                            <div ref={modalRef} style={{display:'contents'}}>
                                { isModalOpen && 
                                <div className={styles.modal_input}>
                                    <input type="text" placeholder="Search components or text..." onChange={(e)=>setSearchTerm(e.target.value)}  className={styles.search_input} />
                                    { searchTerm !== "" &&
                                        <div className={styles.classList}>
                                            {filteredRoutes.map((data: any) => {return(<> <p style={{width:"max-content", cursor:"pointer"}} onClick={()=>{window.location.pathname = data.path}}>{data.name}</p></>)})}
                                        </div>
                                    }
                                </div>
                                }
                                <a  style={{width: "1.2rem", cursor:'pointer', zIndex: '2'}} onClick={() => {debouncedLog()}}  >
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                </a>
                            </div>
                            <span className={styles.header__controlls_separate} style={{backgroundColor:`${color === "#fff" ? '#fff': '' }`}}/>
                            {/* <a  style={{width: "12rem", cursor:'pointer'}} onClick={cart}>
                                <svg viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2.23737 2.28845C1.84442 2.15746 1.41968 2.36983 1.28869 2.76279C1.15771 3.15575 1.37008 3.58049 1.76303 3.71147L2.02794 3.79978C2.70435 4.02524 3.15155 4.17551 3.481 4.32877C3.79296 4.47389 3.92784 4.59069 4.01426 4.71059C4.10068 4.83049 4.16883 4.99538 4.20785 5.33722C4.24907 5.69823 4.2502 6.17 4.2502 6.883L4.2502 9.55484C4.25018 10.9224 4.25017 12.0247 4.36673 12.8917C4.48774 13.7918 4.74664 14.5497 5.34855 15.1516C5.95047 15.7535 6.70834 16.0124 7.60845 16.1334C8.47542 16.25 9.57773 16.25 10.9453 16.25H18.0002C18.4144 16.25 18.7502 15.9142 18.7502 15.5C18.7502 15.0857 18.4144 14.75 18.0002 14.75H11.0002C9.56479 14.75 8.56367 14.7484 7.80832 14.6468C7.07455 14.5482 6.68598 14.3677 6.40921 14.091C6.17403 13.8558 6.00839 13.5398 5.9034 13H16.0222C16.9817 13 17.4614 13 17.8371 12.7522C18.2128 12.5045 18.4017 12.0636 18.7797 11.1817L19.2082 10.1817C20.0177 8.2929 20.4225 7.34849 19.9779 6.67422C19.5333 5.99996 18.5058 5.99996 16.4508 5.99996H5.74526C5.73936 5.69227 5.72644 5.41467 5.69817 5.16708C5.64282 4.68226 5.52222 4.2374 5.23112 3.83352C4.94002 3.42965 4.55613 3.17456 4.1137 2.96873C3.69746 2.7751 3.16814 2.59868 2.54176 2.38991L2.23737 2.28845Z" ></path> <path d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z" ></path> <path d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z" ></path> </g></svg>
                            </a>
                            <span className={styles.header__controlls_separate} style={{backgroundColor:`${color === "#fff" ? '#fff': '' }`}}/> */}
                            <a  style={{width: "1.2rem", cursor:'pointer'}}>
                                <svg fill={color} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z"></path></g></svg>
                            </a>
                            <span className={styles.txtlogin} style={{color:`${color}`, cursor: 'pointer'}} onClick={() => {window.location.pathname = '/my-account'}} >Register</span>
                        </div>
                        {/* <a onClick={click} className={classNames(`${styles.btn_quote} wow animate__animated animate__fadeInRight`)}>
                                GET A QUOTE
                        </a> */}
                    </div>
                    <header className={styles.App_header}>
                        <ul className="wow animate__animated animate__fadeInDown">
                            {/* <li  className={styles.nav_header}>
                                <a className={styles.page} style={{color: `${ filter === 'home' ? '#012555' : color}`}} href="/" >Home</a>
                            </li> */}
                            <li  className={ classNames(`${styles.nav_header} ${ color === "#fff"? styles.arrow : styles.arrow} ${styles.down}`)}>
                                <a className={styles.page} style={{color: `${filter === 'about us' ? '#012555' :color}`}} href="/about-us"  >About Us</a>
                                <ul className={classNames(`absolute left-0 w-[14.5rem] left-[-5rem] top-[1.5rem] h-[auto] mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-10 `, styles.hover)}>
                                    {options.map((option, index) => {
                                        const url = option.toLowerCase().replace(/\s+/g, '-')
                                    return(
                                        <li
                                            key={index}
                                            className={classNames(`hover:[color:#55719F!important] cursor-pointer`, styles.btn_a)}
                                            onClick={() => {window.location.pathname = url}}
                                        >
                                            {option}
                                        </li> 
                                    )
                                    })}
                                </ul>
                            </li>
                            <li  className={styles.nav_header}>
                                <a className={styles.page} style={{color: `${filter === 'our team' ? '#012555' : color}`}} href="/our-team">Our Team</a>
                            </li>
                            <li  className={ classNames(`${styles.nav_header} `)}>
                                <a className={styles.page} style={{color: `${filter === 'our certificates' ? '#012555' : color}`}} href="/our-certificates">Certificate</a>
                            </li>
                            <li  className={classNames(`${styles.nav_header} ${ color === "#fff"? styles.arrow : styles.arrow} ${styles.down}`)}>
                                <a className={styles.page} style={{color: `${filter === 'solutions' ? '#012555' : color}`}} href='/solutions'>Solutions</a>
                                <ul className={classNames(`absolute left-0 w-[26rem] left-[-10.5rem] top-[1.5rem] h-[auto] mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-10 `, styles.hover)}>
                                    {solutions.map((option, index) => {
                                    const url = option.toLowerCase().replace(/\s+/g, '-')
                                    return(
                                    <li
                                        key={index}
                                        className={classNames(`hover:[color:#55719F!important] cursor-pointer`, styles.btn_a)}
                                        onClick={() => {window.location.pathname = `solutions/${url}`}}
                                    >
                                        {option}
                                    </li>
                                    )})}
                                </ul>
                            </li>
                            <li  className={ classNames(`${styles.nav_header}`)}>
                                <a className={styles.page} style={{color: `${filter === 'category/blog' ? '#012555' : color}`}} href="/blog">Blog</a>
                            </li>
                            <li  className={styles.nav_header}>
                                <a className={styles.page} style={{color: `${filter === 'contact us' ? '#012555' : color}`}} href="/contact-us">Contact Us</a>
                            </li>
                        </ul>
                    </header>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default App

import { useCallback, useEffect, useRef, useState } from 'react'
import styles from './style.module.scss'
import 'animate.css';  
import WOW from 'wow.js';  
import classNames from 'classnames';
import logo from '../../assets/images/photo_2025-01-20_15-12-38-removebg-preview.png'
import { clearTimeout } from 'timers';
import bg_banner from '../../assets/images/pexels-goumbik-577210.jpeg'
import ReactDOMServer from "react-dom/server";

const content = [
    {"name":"10 Indicators of a Love Scam: A Comprehensive Checklist", "id":"10-indicators-of-a-love-scam-a-comprehensive-checklist" ,img: `${import.meta.env.VITE_REDIRECT}/img/indicators.jpeg`, part:"Digital Products"},
    {"name":"Online Fraud Protection: A Practical Guide", "id":"online-fraud-protection-a-practical-guide", img: `${import.meta.env.VITE_REDIRECT}/img/indicators.jpeg`, part:"Digital Products"},
    {"name":"Printable Fraud Awareness Workbook with Exercises", "img": `${import.meta.env.VITE_REDIRECT}/img/printable.jpeg`,"id":"printable-fraud-awareness-workbook-with-exercises", part:"Digital Products"},
    {"name":"Fraud Awareness Masterclass with Detailed Presentation", "img": `${import.meta.env.VITE_REDIRECT}/img/masterclass.jpeg`,"id":"fraud-awareness-masterclass-with-detailed-presentation", part:"Digital Products"},
    {"name":"Merchant Chargeback Assistance Process", "img": `${import.meta.env.VITE_REDIRECT}/img/chargeback.jpeg`,"id":"merchant-chargeback-assistance-process", part:"Digital Products"},
    {"name":"Comprehensive Due Diligence Solutions", "img": `${import.meta.env.VITE_REDIRECT}/img/due_diligence.jpeg`,"id":"comprehensive-due-diligence-solutions", part:"Investigation and Disputes"},
    {"name":"Premium Dispute Settlement Package", "img": `${import.meta.env.VITE_REDIRECT}/img/premium_dispute.jpeg`,"id":"premium-dispute-settlement-package", part:"Investigation and Disputes"},
    {"name":"Optimal Dispute Settlement Package", "img": `${import.meta.env.VITE_REDIRECT}/img/optimal_dispute.jpeg`,"id":"optimal-dispute-settlement-package", part:"Investigation and Disputes"},
    {"name":"Special Dispute Settlement Package", "img": `${import.meta.env.VITE_REDIRECT}/img/special_dispute.jpeg`,"id":"special-dispute-settlement-package", part:"Investigation and Disputes"},
    {"name":"Basic Dispute Settlement Package", "img": `${import.meta.env.VITE_REDIRECT}/img/basic_dispute.jpeg`,"id":"basic-dispute-settlement-package", part:"Investigation and Disputes"},
    {"name":"Technical Document Translation (Non-Certified)", "img": `${import.meta.env.VITE_REDIRECT}/img/technical_document.jpeg`,"id":"technical-document-translation-non-certified", part:"Consulting and Documental Support"},
    {"name":"Case Evaluation and Documentation Services", "img": `${import.meta.env.VITE_REDIRECT}/img/case_evaluation.jpeg`,"id":"case-evaluation-and-documentation-services", part:"Consulting and Documental Support"},
    {"name":"Application Drafting and Processing Support", "img": `${import.meta.env.VITE_REDIRECT}/img/Application_Drafting.jpeg`,"id":"application-drafting-and-processing-support", part:"Consulting and Documental Support"},
    {"name":"Initial Consultation and Assessment Services", "img": `${import.meta.env.VITE_REDIRECT}/img/initial_consult_assess.jpeg` ,"id":"initial-consultation-and-assessment-services", part:"Consulting and Documental Support"},
    {"name":"Chargeback Consultation", img: `${import.meta.env.VITE_REDIRECT}/img/chargeback.jpeg`,"id":"chargeback-consultation", part:"Consulting and Documental Support"},
    {"name":"Cryptocurrency Transaction Risk Analysis", img: `${import.meta.env.VITE_REDIRECT}/img/Analysis_crypto.jpeg`,"id":"cryptocurrency-transaction-risk-analysis", part:"Cryptocurrency Investigation and Compliance"},
    {"name":"Asset Location and Tracing Services", img: `${import.meta.env.VITE_REDIRECT}/img/asset_location.jpeg`,"id":"asset-location-and-tracing-services", part:"Cryptocurrency Investigation and Compliance"},
    {"name":"Expert Cryptocurrency Witness Services", img: `${import.meta.env.VITE_REDIRECT}/img/expert_crypto.jpeg`,"id":"expert-cryptocurrency-witness-services", part:"Cryptocurrency Investigation and Compliance"},
    {"name":"Business-Focused Cryptocurrency Intelligence Report", img: `${import.meta.env.VITE_REDIRECT}/img/business_focused.jpeg`,"id":"business-focused-cryptocurrency-intelligence-report", part:"Cryptocurrency Investigation and Compliance"},
    {"name":"In-Depth Cryptocurrency Investigation Services", "img": `${import.meta.env.VITE_REDIRECT}/img/In_depthCrypto.jpeg`,"id":"in-depth-cryptocurrency-investigation-services", part:"Cryptocurrency Investigation and Compliance"},
    {"name":"General Cryptocurrency Intelligence Reports", img: `${import.meta.env.VITE_REDIRECT}/img/Intelligence_report.jpeg`,"id":"general-cryptocurrency-intelligence-report", part:"Cryptocurrency Investigation and Compliance"},
    {"name":"Support for Cryptocurrency Data Collection", img: `${import.meta.env.VITE_REDIRECT}/img/Data_Collection.jpeg` ,"id":"support-for-cryptocurrency-data-collection", part:"Cryptocurrency Investigation and Compliance"},
    {"name":"Background Check Services for Employees", img: `${import.meta.env.VITE_REDIRECT}/img/background_check.jpeg`,"id":"background-check-services-for-employees", part:"Business Services"},
    {"name":"Corporate Background Verification Services", img: `${import.meta.env.VITE_REDIRECT}/img/background_verification.jpeg`,"id":"corporate-background-verification-services", part:"Business Services"},
    {"name":"Corporate Fraud Investigation Solutions", img: `${import.meta.env.VITE_REDIRECT}/img/fraud_investigate.jpeg` , "id":"corporate-fraud-investigation-solutions", part:"Business Services"},
    {"name":"Business Valuation and Assessment Services", img: `${import.meta.env.VITE_REDIRECT}/img/business_valuation.jpeg` ,"id":"business-valuation-and-assessment-services", part:"Business Services"}
];

const category = [
    {
    "name": "The Crucial Role of Expert Support When Dealing with Banks in Fraud Cases",
    "id": "the-crucial-role-of-expert-support-when-dealing-with-banks-in-fraud-cases/",
    "img": "/img/we_can_help.jpeg",
    },
    {
    "id": "understanding-common-ticket-scams-essential-tips-for-protection/",
    "img": "/img/ticket_scam.jpeg",
    "name": "Understanding Common Ticket Scams: Essential Tips for Protection",
    },
    {
    "id": "identifying-and-handling-business-identity-theft-what-you-should-know/",
    "img": "/img/business_identity_theft.jpeg",
    "name": "Identifying and Handling Business Identity Theft: What You Should Know",
    },
    {
    "id": "a-guide-to-reporting-scams-in-norway/",
    "img": "/img/report_scam_norway.jpeg",
    "name": "A Guide to Reporting Scams in Norway",
    },
    {
    "id": "a-guide-to-reporting-scams-in-spain/",
    "img": "/img/report_scam_spain.jpeg",
    "name": "A Guide to Reporting Scams in Spain",
    },
    {
    "id": "beware-of-task-completion-and-fake-job-scams-how-to-protect-yourself-from-online-fraud/",
    "img": "/img/fake_job_scam.jpeg",
    "name": "Beware of Task Completion and Fake Job Scams: How to Protect Yourself from Online Fraud",
    },
    {
    "id": "fake-employment-scams/",
    "img": "https://tandhconsult.com/wp-content/uploads/2024/04/dall·e-2024-04-12-15.05.47-an-image-of-a-person-seen-from-behind-working-at-a-very-small-and-humble-desk-in-a-cozy-dimly-lit-room.-the-computer-screen-displays-sad-emoticons-a.webp",
    "name": "Beware of Task Completion and Fake Employment Scams: Protect Yourself from Online Fraud",
    },
    {
    "name": "Navigating Scams on Facebook Marketplace",
    "id": "navigating-scams-on-facebook-marketplace",
    "img": "/img/blog_v2/navigating_scams.jpg",
    },
    {
    "id": "step-by-step-guide-to-reporting-a-scam-in-new-zealand/",
    "img": "/img/blog_v2/newzealand.jpg",
    "name": "Step-by-Step Guide to Reporting a Scam in New Zealand",
    },
    {
    "id": "how-to-file-a-scam-report-in-qatar/",
    "img": "/img/blog_v2/qatar.jpeg",
    "name": "How to File a Scam Report in Qatar",
    },
    {
    "id": "a-complete-guide-to-reporting-scams-in-france/",
    "img": "/img/blog_v2/france.jpeg",
    "name": "A Complete Guide to Reporting Scams in France",
    },
    {
    "name": "A Complete Guide to Reporting Scams in France",
    "id": "a-complete-guide-to-reporting-scams-in-france/",
    "img": "/img/blog_v2/france.jpeg",
    },
    {
    "name": "Reporting Scams in Canada: What You Need to Know",
    "id": "reporting-scams-in-canada-what-you-need-to-know/",
    "img": "/img/blog_v2/canada.jpeg"
    },
    {
    "name": "Exposing Cryptocurrency Fraud: Case Studies by Greyzone Consulting",
    "id": "exposing-cryptocurrency-fraud-case-studies-by-greyzone-consulting/",
    "img": "/img/blog_v2/exposing_crypto_fraud.jpeg"
    },
    {
    "name": "Comprehensive Business Security: Your Background Check Guide",
    "id": "comprehensive-business-security-your-background-check-guide/",
    "img": "/img/blog_v2/business_security.jpeg"
    },
    {
    "name": "Fraud Reporting in South Africa: A How-To Guid",
    "id": "fraud-reporting-in-south-africa-a-how-to-guide/",
    "img": "/img/blog_v2/south_africa.jpeg"
    },
    {
    "name": "Understanding Cryptocurrency Investigations: Key Insights",
    "id": "understanding-cryptocurrency-investigations-key-insights/",
    "img": "/img/blog_v2/understanding_crypto.jpeg"
    },
    {
    "name": "Essential Due Diligence Tips for Small Business Purchases",
    "id": "essential-due-diligence-tips-for-small-business-purchases/",
    "img": "/img/blog_v2/essential_duediligence.jpeg"
    },
    {
    "name": "Due Diligence Mastery: A Guide for Business Buyers",
    "id": "due-diligence-mastery-a-guide-for-business-buyers/",
    "img": "/img/blog_v2/mastery_duediligence.jpeg",
    },
    {
    "name": "How to Effectively Report Fraud in Germany",
    "id": "how-to-effectively-report-fraud-in-germany/",
    "img": "/img/blog_v2/germany.jpeg"
    },
    {
    "name": "Why Due Diligence Services Are Crucial for Business Success",
    "id": "why-due-diligence-services-are-crucial-for-business-success/",
    "img": "/img/blog_v2/why_duediligence.jpeg"
    },
    {
    "name": "Exploring AI, Blockchain, and Digital Surveillance in Depth",
    "id": "exploring-ai-blockchain-and-digital-surveillance-in-depth/",
    "img": "/img/blog_v2/exploring_ai_blockchain.jpeg"
    }
]



  const category_loop =  category.map(data => {return { path:`/blog/${data.id}`, img: data.img , name: `${data.name}`}});
  const digital_loop = content.map(data => {
    return data.part === 'Digital' ?  { path:`/solutions/digital-goods/${data.id}`, img: data.img , name: `${data.name}`} : 
    data.part === 'Business' ?   { path:`/solutions/corporate-services/${data.id}`, img: data.img , name: `${data.name}`} : 
    data.part === 'Documental' ?   { path:`/solutions/advisory-and-documentation-assistance/${data.id}`, img: data.img , name: `${data.name}`} : 
    data.part === 'Disputes' ? { path:`/solutions/research-and-dispute-resolution/${data.id}`, img: data.img , name: `${data.name}`} :   
    { path:`/solutions/cryptocurrency-investigations-and-regulatory-compliance/${data.id}`, img: data.img , name: `${data.name}`} 
  })
    const routes = [
    { path: "/", name: "Home", img: `${bg_banner}` },
    { path: "/about-us" ,name: "About Us", img: `${import.meta.env.VITE_REDIRECT}/img/about-us.jpeg`  },
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
    // { path:"/my-account" , name: "My Account" },
    // { path:"/my-account/lost-password" , name: "Lost Password"}, 
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
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight)
    };
    useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    const {pathname, click} = props
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
            setSearchTerm("")
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
    const [load, setload] = useState(false)
    const [timer, settimer] = useState(false)
    const filteredRoutes = routes.filter((route: any) => {
        const textContent = extractTextContent(route.component);
        return (
            route.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            route.path.toLowerCase().includes(searchTerm.toLowerCase()) ||
            textContent.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });
    // useEffect(()=>{
    //     setload(true)
    //     setTimeout(()=>{
    //         setload(false)
    //         if(filteredRoutes.length === 0){
    //             settimer(false)
    //         }else{
    //             settimer(true)
    //         }
    //     },1000)
    // },[timer])
    const loadingPart = () => {
        setload(true)
        settimer(true)
        setTimeout(()=>{
            setload(false)
            if(filteredRoutes.length === 0){
                console.log('here',false)
                settimer(false)
            }else{
                settimer(true)
            }
        },1000)
    }

    console.log('timer:', timer, 'load:', load, 'searchTerm:', searchTerm, 'routes:',routes.length, 'filteredRoutes:',filteredRoutes)
  return (
    <>
    <div className={styles.heading}>
        <div className={styles.header_part}>
            <div className={styles.header_row}>
                {
                    screenWidth < 1034 &&
                    Modal && 
                    <article className={classNames(styles.Modal, designs ? styles.openModal : styles.closeModal)} >
                        <ul className={styles.wrapperModal_v2}>
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
                                    <input type="text" placeholder="Search here" value={searchTerm} onChange={(e)=>{  setSearchTerm(e.target.value), loadingPart()}}  className={styles.search_input} />
                                    { searchTerm !== "" && timer ?
                                        <div className={styles.classList} style={{maxHeight: `${screenHeight - 184}px`, alignItems: !load ? '': 'center'}}>
                                            {
                                                load ?
                                                <div className={styles.loader}/>  
                                                :
                                                filteredRoutes.map((data: any) => {return( <div className={classNames(styles.searchItem, `${ !data.img && styles.othersides}`)} onClick={()=>{window.location.pathname = data.path}}>{ data.img &&<div className={styles.img}>{!data.img ? 'SSS' : <img src={data.img}/>}</div> } <span>{data.name}</span></div>)})
                                                
                                            }
                                        </div>
                                        :
                                        ''
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
                            <span className={styles.txtlogin} style={{color:`${color}`, cursor: 'pointer'}} onClick={click} >Register</span>
                        </div>
                        {/* <a onClick={click} className={classNames(`${styles.btn_quote} wow animate__animated animate__fadeInRight`)}>
                                GET A QUOTE
                        </a> */}
                    </div>
                    <header className={styles.App_header}>
                        <ul className="wow animate__animated animate__fadeInDown">
                            <li  className={styles.nav_header}>
                                <a className={styles.page} style={{color: `${ filter === 'home' ? '#012555' : color}`}} href="/" >Home</a>
                            </li>
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

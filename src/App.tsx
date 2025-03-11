import Home from "./Pages/Home/index";
import "./App.css";
import Footer from "./Components/Footer/index";
import Header from "./Components/Header/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Pages/AboutUs/index";
import Terms from "./Pages/Terms/index";
import Privacy from "./Pages/Privacy/index";
import Fraud from "./Pages/Fraud/index";
import Faq from "./Pages/Faq";
import Certificate from "./Pages/Certificate/index";
import Team from "./Pages/Team/index";
import Solutions from "./Pages/Solutions/index";
import Partner from "./Pages/Partner/index";
import Investigation from "./Pages/Investigation/index";
import Documental from "./Pages/Documental/index";
import Cryptocurrency from "./Pages/Cryptocurrency/index";
import Business from "./Pages/Business/index";
import Contact from "./Pages/Contact/index";
import Blog from "./Pages/Blog/index";
import Login from "./Pages/Login/index";
import { Helmet } from "react-helmet";
import { createContext, useCallback, useEffect, useState } from "react";
import Modal from "./Components/Modal/index";
import Cart from "./Components/Cart/index";
import Lost from "./Pages/Lost_Password/index";
import Reset from "./Pages/Reset_Link/index";
import Digital from "./Components/Reusable/Content/index";
import DigitalProduct from "./Pages/Digital/index";
import Category from "./Components/Reusable/Category/index";
import { edit } from "./Components/Reusable/Addition/index";
import NotFound from "./Pages/404/index";
// import TidioChat from './Components/Tidio/index'
// import FingerprintJS from "@fingerprintjs/fingerprintjs";
// import axios from 'axios';

interface useConText {
  theme: string;
  toggleTheme: (d: string) => void;
  Animate: (d: boolean) => void;
}
export const ThemeContext = createContext<useConText | undefined>(undefined);
function App() {
  const [quote, setquote] = useState(false);
  // const [cart, setcart] = useState(false)
  const path = window.location.pathname;
  const category = path?.split("/").filter((data) => data !== "");
  const Capitalize =
    category.join("") === ""
      ? []
      : category?.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  let Edit: any;
  let Add: any = [];
  Edit = Capitalize.map((data) =>
    data
      .split("")
      .map((data) => (data === "-" ? " " : data))
      .join("")
  );
  Add = [...Edit];

  const Modalopen = useCallback(() => {
    const body = document.querySelector("body");
    if (body) {
      body.style.overflow = "hidden";
    }
  }, []);
  const Modalclose = useCallback(() => {
    const body = document.querySelector("body");
    if (body) {
      body.style.overflowY = "scroll";
    }
  }, []);
  // const [machineId, setMachineId] = useState("");

  // useEffect(() => {

  //   // const sheetId = "1P-CjNuqB_JJ9kWjCy3qWq9JVjGayoybMw_M0dai2lE4"; // Your Sheet ID
  //   // const apiKey = "0da80e5f95fbde61a391f5df2897f87018ecc132"; // Get this from Google Cloud Console
  //   // const sheetName = "Number of visited"; // Change if your sheet has a different name

  //   // const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetName}?key=${apiKey}`;

  //   // fetch(url)
  //   //   .then(response => response.json())
  //   //   .then(data => {
  //   //     console.log(data.values); // This will log the sheet data
  //   //   })
  //   //   .catch(error => console.error("Error fetching data:", error));
  //   const API_URL = "https://script.google.com/macros/s/AKfycbyeE1pKoXSIM6qjxHD2V0AojbnXASLaKi1YXYZg9yl_rthjxZf3deXfm-QrdcvkVdXb/exec"
  //   const sendData = async () => {
  //     try {
  //       const response = await axios.post(
  //         API_URL,
  //         {
  //           name: "John Doe",
  //           email: "johndoe@example.com",
  //           message: "Hello from frontend!"
  //         },
  //         {
  //           headers: {
  //             "Content-Type": "application/json"
  //           }
  //         }
  //       );

  //       console.log("Success:", response.data);
  //     } catch (error) {
  //       console.error("Error:", error);
  //     }
  //   };

  //   // Call the function
  //   sendData();

  //   fetch('https://script.google.com/macros/s/AKfycbyeE1pKoXSIM6qjxHD2V0AojbnXASLaKi1YXYZg9yl_rthjxZf3deXfm-QrdcvkVdXb/exec', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //     body: new URLSearchParams({ test: "hello" })
  //   })
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  //   .catch(error => console.error(error));

  //   fetch("https://script.google.com/macros/s/AKfycbyeE1pKoXSIM6qjxHD2V0AojbnXASLaKi1YXYZg9yl_rthjxZf3deXfm-QrdcvkVdXb/exec")
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  //   .catch(error => console.error("Error:", error));

  //   const fetchMachineId = async () => {
  //     const fp = await FingerprintJS.load();
  //     const result = await fp.get();
  //     setMachineId(result.visitorId);
  //   };

  // }, []);
  const [theme, setTheme] = useState("");
  const [animate, setAnimate] = useState(Boolean);
  const toggleTheme = (e: string) => {
    setTheme(e);
  };
  const Animate = (e: boolean) => {
    setAnimate(e);
  };

  useEffect(()=>{
    localStorage.setItem('warning','true')
  },[])
  return (
    <>
      <Helmet>
        <title>{Add.length === 0 ? "Home" : Add[Add.length - 1]}</title>
      </Helmet>

      <ThemeContext.Provider value={{ theme, toggleTheme, Animate }}>
        {
          !localStorage.getItem('warning') && 
          <div className="warning">
            <span>
              BEWARE IMPERSONATION SCAMS! Ensure you're communicating with
              official Greyzone Consulting via info@greyzoneconsulting.com emails.
              <a href="/fraud-awareness" style={{ color: "red" }}>
                Learn more &gt;&gt;&gt;
              </a>
            </span>
          </div>
        }
        <div className="main_homepage">
          <Header
            pathname={path.replace("/", "")}
            click={() => {
              Modalopen(), setquote(true);
            }}
            // cart={()=>{Modalopen(), setcart(true)}}
          />
          {Add.length !== 0 && (
            <div className="pt-[10rem]">
              <div className="wow animate__animated animate__fadeInUp bread ">
                <div className="separator_container" style={{overflowX: 'scroll'}}>
                  <div className="flex items-center " style={{width: "max-content"}}>
                    <div
                      className="bread__link"
                      onClick={() => (window.location.pathname = "/")}
                    >
                      Home
                    </div>
                    {Add.map((data: any, id: number) => {
                      return (
                        <div key={id} className="flex items-center">
                          <div className="breadcrumbs__separator" />
                          <a
                            className="bread__link"
                            onClick={() => {
                              Add.length - 1 !== id
                                ? (window.location.pathname = edit(
                                    Add.slice(0, 1 + id).join("/")
                                  ))
                                : "";
                            }}
                          >
                            {data}
                          </a>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/terms-and-conditions" element={<Terms />} />
              <Route path="/privacy-policy" element={<Privacy />} />
              <Route path="/fraud-awareness" element={<Fraud />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/our-certificates" element={<Certificate />} />
              <Route path="/our-team" element={<Team />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/partners" element={<Partner />} />
              <Route
                path="/solutions/research-and-dispute-resolution"
                element={<Investigation />}
              />
              <Route
                path="/solutions/research-and-dispute-resolution/:id"
                element={<Digital />}
              />
              <Route
                path="/solutions/advisory-and-documentation-assistance"
                element={<Documental />}
              />
              <Route
                path="/solutions/advisory-and-documentation-assistance/:id"
                element={<Digital />}
              />
              <Route
                path="/solutions/cryptocurrency-investigations-and-regulatory-compliance"
                element={<Cryptocurrency />}
              />
              <Route
                path="/solutions/cryptocurrency-investigations-and-regulatory-compliance/:id"
                element={<Digital />}
              />
              <Route
                path="/solutions/digital-goods"
                element={<DigitalProduct />}
              />
              <Route
                path="/solutions/digital-goods/:id"
                element={<Digital />}
              />
              <Route
                path="/solutions/corporate-services"
                element={<Business />}
              />
              <Route
                path="/solutions/corporate-services/:id"
                element={<Digital />}
              />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<Category />} />
              <Route path="/my-account" element={<Login />} />
              <Route path="/my-account/lost-password" element={<Lost />} />
              <Route
                path="/my-account/lost-password/reset_link_true"
                element={<Reset />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
          <Footer />
        </div>
        {quote && <Modal func={Modalclose} func2={() => setquote(false)} />}
        {animate && <Cart func={Modalclose} />}
      </ThemeContext.Provider>
    </>
  );
}

export default App;

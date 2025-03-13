import ShadowDOM from 'react-shadow';

const index = () => {
  return (
    <ShadowDOM.div>
    <style>
        {`
            @import url(https://tandhconsult.com/wp-content/themes/th/style.css);
            .slick-track{
            gap: 1rem;
            }
            // .i-time-management{
            //     // mask-image: url(https://tandhconsult.com/wp-content/themes/th/img/icons/time-management.svg);
            //     z-index: 3;
            //     display: inline-block;
            //     background: url(https://tandhconsult.com/wp-content/themes/th/img/icons/time-management.svg);
            // }
            @media only screen and (max-width: 700px){
                .dispute__info{
                    color: #181a18;
                    font-weight: bolder;
                }
                .dispute__subinfo{
                    color: #181a18;
                    font-weight: bolder;
                }
            }
        `}
        
    </style>
        <section className="solutions" id="solutions">
            <div className="container">
                <h2 className="title solutions__title wow animate__animated animate__fadeInLeft" >
                    <span>Digital Goods</span>
                </h2>
                <div className="dispute__info wow animate__animated animate__fadeInLeft" >
                    <p>
                        Explore our range of digital products designed to enhance your knowledge and skills in fraud prevention and online security. Our offerings include comprehensive workbooks, detailed self-assessments, interactive exercises, and curated resources that provide valuable insights and practical tools for staying vigilant against scams. Each product is crafted to help you improve your fraud detection capabilities, implement effective security practices, and stay informed about the latest fraud prevention techniques. Perfect for individuals and professionals looking to boost their cybersecurity measures and protect themselves from fraudulent activities.
                    </p>
                </div>

                <div className="dispute__wrapper wow animate__animated-delay">
                <a
                    className="dispute__link wow animate__animated animate__fadeInUp"
                    
                    href="/solutions/digital-goods/10-indicators-of-a-love-scam-a-comprehensive-checklist"
                >
                    <picture className="dispute__pic">
                    <img src={`${import.meta.env.VITE_REDIRECT}/img/indicators.jpeg`} alt="indicators" />
                    </picture>
                    <span className="dispute__name">10 Indicators Of A Love Scam: A Comprehensive Checklist</span>
                    <span className="dispute__more">See more<i className="i i-arrow-right"></i></span>
                </a>

                <a
                    className="dispute__link wow animate__animated animate__fadeInUp"
                    
                    href="/solutions/digital-goods/online-fraud-protection-a-practical-guide"
                >
                    <picture className="dispute__pic">
                    <img src={`${import.meta.env.VITE_REDIRECT}/img/online_fraud.jpeg`} alt="online_fraud" />
                    </picture>
                    <span className="dispute__name">Online Fraud Protection: A Practical Guide</span>
                    <span className="dispute__more">See more<i className="i i-arrow-right"></i></span>
                </a>

                <a
                    className="dispute__link wow animate__animated animate__fadeInUp"
                    
                    href="/solutions/digital-goods/printable-fraud-awareness-workbook-with-exercises"
                >
                    <picture className="dispute__pic">
                    <img src={`${import.meta.env.VITE_REDIRECT}/img/printable.jpg`} alt="printable" />
                    </picture>
                    <span className="dispute__name">Printable Fraud Awareness Workbook with Exercises</span>
                    <span className="dispute__more">See more<i className="i i-arrow-right"></i></span>
                </a>

                <a
                    className="dispute__link wow animate__animated animate__fadeInUp"
                    
                    href="/solutions/digital-goods/fraud-awareness-masterclass-with-detailed-presentation"
                >
                    <picture className="dispute__pic">
                    <img src={`${import.meta.env.VITE_REDIRECT}/img/masterclass.jpeg`} alt="masterclass" />
                    </picture>
                    <span className="dispute__name">Fraud Awareness Masterclass with Detailed Presentation</span>
                    <span className="dispute__more">See more<i className="i i-arrow-right"></i></span>
                </a>
                </div>

                <div className="e-pagination wow animate__animated fadeInUp cn-mt-100"></div>

                <h2 className="title dispute__subtitle wow animate__animated animate__fadeInUp">
                <span>Benefits of working with us</span>
                </h2>
                <div className="dispute__subinfo wow animate__animated animate__fadeInUp" >
                <p>“Highly qualified staff”, our staff that has been working with cases of individuals and businesses on the daily basis for many years now, therefore, it enables them to swiftly understand and identify their needs and give offer them tailor-made solutions.</p>
                <p>Besides, the certifications of our staff provide with necessary assurance and surety that you are in good hands and persons that you are dealing with are certified professionals with a proven track record and excellent reputation which in most cases is paramount.</p>
                <p>Professional certifications can also help give your independent business a solid foundation. The advanced training, information, and knowledge you gain from specialized coursework can provide you with up-to-date tools and technical strategies that will serve to guide and direct you in the execution of your projects, allowing you to manage all aspects of your work more effectively.</p>
                <p>In order to increase earning potential, solving the complex blockchain problems and investigating the prompt ways with the industry-leading tool is a huge asset, let alone it being the trend of the world that we live in.</p>
                <p>The biggest challenge for the majority of people is the understanding of the crypto world and its dynamics, just like any new major adaptation it will take its own time, and thereby organizations and individuals are pacing up to adapt and partake in the revolutionary transformation of cryptocurrencies in order to stay updated and meet current demands of the market.</p>
                </div>

                <div className="dispute__benef" >
                    <div className="dispute__benef-item wow animate__animated animate__fadeInUp" >
                        <i className="i i-time-management" style={{maskImage:'none', WebkitMaskImage: 'none', background: 'url(https://tandhconsult.com/wp-content/themes/th/img/icons/time-management.svg)'}}></i>
                        <div className="dispute__benef-content">
                        <span className="dispute__benef-name">Expert Help</span>
                        <span className="dispute__benef-pos">You can now get expert help across a wide range of areas – and help is at hand as soon as you need it.</span>
                        </div>
                    </div>

                    <div className="dispute__benef-item wow animate__animated animate__fadeInUp" >
                        <i className="i i-time-management" style={{maskImage:'none', WebkitMaskImage: 'none', background: "url(https://tandhconsult.com/wp-content/uploads/2021/05/help.svg)"}}></i>
                        <div className="dispute__benef-content">
                        <span className="dispute__benef-name">Establish Professional Credibility</span>
                        <span className="dispute__benef-pos">A relationship built on trust and honesty can strengthen any business.</span>
                        </div>
                    </div>

                    <div className="dispute__benef-item wow animate__animated animate__fadeInUp" >
                        <i className="i i-time-management" style={{maskImage:'none', WebkitMaskImage: 'none', background: "url(https://tandhconsult.com/wp-content/uploads/2021/05/help.svg)"}}></i>
                        <div className="dispute__benef-content">
                        <span className="dispute__benef-name">Faster, Easier Implementation</span>
                        <span className="dispute__benef-pos">Faster, easier and more cost-effective than any other provider.</span>
                        </div>
                    </div>

                    <div className="dispute__benef-item wow animate__animated animate__fadeInUp" >
                        <i className="i i-time-management" style={{maskImage:'none', WebkitMaskImage: 'none', background: "url(https://tandhconsult.com/wp-content/uploads/2021/05/shield.svg)"}}></i>
                        <div className="dispute__benef-content">
                        <span className="dispute__benef-name">Build Trust</span>
                        <span className="dispute__benef-pos">We are here for you – because we are Built to Care.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </ShadowDOM.div>
  )
}

export default index


import styles from './style.module.scss'
import classNames from 'classnames'
// import Button from '../../Components/Reusable/Buttons/index'
import Carousel from '../../Components/Reusable/Swiper'
import Consult from '../../Components/Reusable/Form/Consult/index'
const index = () => {
  return (
    <>
        <section className={styles.overlay}>
            <picture className={classNames(`${styles.overlay_bg} wow animate__animated animate__fadeIn`)}>
                <img src={`${import.meta.env.VITE_REDIRECT}/img/about-us.jpg`} alt="overlay" />
            </picture>
            <div className={styles.container}>
                <h1 className={classNames(`${styles.overlay_title} wow animate__animated animate__fadeInUp`)}>About Us</h1>
            </div>
        </section>
        <section className={styles.abt}>
            <div className={styles.container}>
                <div className={styles.abt_row}>
                    <div className={classNames(`${styles.abt_sidebar} wow animate__animated animate__fadeInUp`)}>
                        <ul className={styles.abit_sidebar_list}>
                            <li className={styles.abt_sidebar_item }>
                                <a href="/terms-and-conditions">
                                Terms and Conditions
                                <i className={styles.arrow_right_icon}></i>
                                </a>
                            </li>
                            <li className={styles.abt_sidebar_item }>
                                <a href="/privacy-policy">
                                    Privacy and Policy
                                    <i className={styles.arrow_right_icon}></i>
                                </a>
                            </li>
                            <li className={styles.abt_sidebar_item }>
                                <a href="/our-team">
                                    Our Team
                                    <i className={styles.arrow_right_icon}></i>
                                </a>
                            </li>
                            <li className={styles.abt_sidebar_item }>
                                <a href="/our-certificates">
                                    Certificates
                                    <i className={styles.arrow_right_icon}></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={classNames(`${styles.abt_content} wow animate__animated animate__fadeInUp`)}>
                        <article className={styles.abt_block}>
                            <h2 className={classNames(`${styles.title} ${styles.abt_title}`)}> <span> Our Values</span> </h2>
                            <p>
                                <strong>At Greyzone we believe in operating with honesty and integrity. </strong><br/>
                                Our goal is to grow by the mutual success of our clients and our employees. We build trust with clients through constructive and transparent communication that serves the common good. We believe in a set of core values that will not just help us further grow and excel but also allow us to better serve our clients. In addition, we believe that every employee should consider honesty and integrity as the standard for their everyday behavior and decisions. As these will help us do the right thing, especially in difficult situations.
                            </p>
                            <p>
                                Moreover, we also believe in constant dedication to providing a safe working environment for everyone – employees and clients alike. We helping our employees grow alongside the company. We provide constant training and improve their professional and technical skills so that we may provide our clients with the best possible service.
                            </p>
                            <p>
                                All of these, of course, are impossible without respect. We put respect as the core of our values. It allows us to cultivate long-term relationships with both our clients as well as our employees. Whether they’re an employee, vendors, subcontractor, or partner, each member of the team is treated with the utmost respect. Which allows for an environment conducive to teamwork and cooperation.
                            </p>
                        </article>
                        <article className={styles.abt_block}>
                            <h2 className={classNames(`${styles.title} ${styles.abt_title}`)}><span>Our Mission</span></h2>
                            <p>Greyzone Consulting team strives to provide our clients with the highest quality services. By constantly meeting and exceeding their expectations without fail we have solidified our reputation. For instance, as one of the most well-established companies in providing them with professional services in the aforementioned industries.</p>
                            <p>We create a media space for our clients to keep abreast of events. We raise awareness of the industry’s significant changes, maintain a blog, write articles, take interviews, and sharing case studies.&nbsp;Greyzone Consulting strives to continuously follow this Mission and sustain its supporting Values &ZeroWidthSpace;&ZeroWidthSpace;by:</p>
                            <ol>
                            <li>Providing our clients with the best possible service using a unique combination of our tested and proven methods as well as our team of highly skilled specialists</li>
                            <li>Ensuring that we are as accurate and efficient as possible by using the most advanced software and methods in our projects</li>
                            <li>Creating a workplace environment for our employees that is conducive to further learning, growth, and excellence in their performance</li>
                            <li>Addressing the needs and concerns of the clients that lead to the success of the project</li>
                            <li>Cultivating long-lasting relationships with our clients. That will help us further understand their needs and wants for better execution of their vision</li>
                            </ol>
                        </article>
                        <article className={styles.abt_block}>
                        <h2 className={classNames(`${styles.title} ${styles.abt_title}`)}><span>Our Vision</span></h2>
                            <p>We are committed to promoting continued economic and sustainable growth by investing in our team members and collaborating partners who share the same values, to do so. We use our expertise in the fields of finance, consulting, and coaching to help transform people’s lives. By taking the burden of responsibility, providing clients with guidance and support, we take part in their individual journey as well as contributing to a better world.</p>
                            <p>Moreover, we aim to create relationships that are solid and long-lasting. Our contributions go beyond what’s visible and tangible.<br/>
                            Our work provides our clients with the necessary tools that will help people to become more informed, confident, and sure about their future. We don’t just change the present; we help build the future as well.</p>
                        </article>
                        <article className={styles.abt_block}>
                            <h2 className={classNames(`${styles.title} ${styles.abt_title}`)}><span>Greyzone Consulting by numbers</span></h2>
                            <div className={styles.abt_platform}>
                                <div className={classNames(`${styles.abt_platform_item} wow animate_animated animate__fadeInUp`)}>
                                    <i className={styles.client_icon}></i>
                                    <div className={classNames(`${styles.abt_platform_content}`)}><span className={classNames(`${styles.abt_platform_name}`)}><span>Individual clients</span></span><span className={classNames(`${styles.abt_platform_count}`)}><span>19 500+</span></span></div>
                                </div>
                                <div className={classNames(`${styles.abt_platform_item} wow animate_animated animate__fadeInUp`)}>
                                <i className={styles.client_icon}></i>
                                <div className={classNames(`${styles.abt_platform_content}`)}><span className={classNames(`${styles.abt_platform_name}`)}><span>Languages</span></span><span className={classNames(`${styles.abt_platform_count}`)}><span>16</span></span></div>
                                </div>
                                <div className={classNames(`${styles.abt_platform_item} wow animate_animated animate__fadeInUp`)}>
                                <i className={styles.fake_news_icon}></i>
                                <div className={classNames(`${styles.abt_platform_content}`)}><span className={classNames(`${styles.abt_platform_name}`)}><span>Certificates</span></span><span className={classNames(`${styles.abt_platform_count}`)}><span>10+</span></span></div>
                                </div>
                                <div className={classNames(`${styles.abt_platform_item} wow animate_animated animate__fadeInUp`)}>
                                <i className={styles.traded_icon}></i>
                                <div className={classNames(`${styles.abt_platform_content}`)}><span className={classNames(`${styles.abt_platform_name}`)}><span>Serve Clients</span></span><span className={classNames(`${styles.abt_platform_count}`)}><span>Worldwide</span></span></div>
                                </div>
                            </div>
                            <div className={classNames(`${styles.outer} wow animate_animated animate__fadeInUp`)} >
                                {/* <div className={classNames(`${styles.abt_app} wow animate_animated animate__fadeInUp`)}>
                                    <h3 className={styles.abt_app_title}><span>Interested in getting to know more about us?</span></h3>
                                    <span className={styles.abt_app_text}>Consulting is more than giving advice. Here you can find out more about our company, approach to work and certificates.</span>
                                    <div className={classNames(styles.abt_app_row, 'gap-[.8rem]')}>
                                        <Button direct='https://tandhconsult.com/wp-content/uploads/2022/01/th-consulting_b2b-services.pdf' 
                                        style={{    
                                        fontSize:" 14px",
                                        fontWeight:" bold",
                                        lineHeight:" 1.4",
                                        overflow:" hidden",
                                        minHeight:" 60px",
                                        padding:" 15px 30px",
                                        transition:" background-position .5s ease",
                                        textAlign: "center",
                                        color:" #fff",
                                        borderRadius:" 5px",
                                        background:" linear-gradient(to right, #32509d, #6faadb, #32509d)",
                                        textTransform: "uppercase",
                                        backgroundSize:" 300% 100%",
                                        position:"relative",
                                        display:" inline-flex",
                                        outlineWidth:"0",
                                        alignItems:"center",
                                        }}
                                        element=""
                                        >
                                            <span>Download our Company Presentation</span>
                                        </Button>
                                        <Button direct='/our-certificates'
                                        style={{    
                                            fontSize:" 14px",
                                            fontWeight:" bold",
                                            lineHeight:" 1.4",
                                            overflow:" hidden",
                                            minHeight:" 60px",
                                            padding:" 15px 30px",
                                            transition:" background-position .5s ease",
                                            textAlign: "center",
                                            color:" #fff",
                                            borderRadius:" 5px",
                                            background:" linear-gradient(to right, #32509d, #6faadb, #32509d)",
                                            backgroundSize:" 300% 100%",
                                            position:"relative",
                                            display:" inline-flex",
                                            outlineWidth:"0",
                                            textTransform: "uppercase",
                                            alignItems:"center",
                                            }}
                                            element=""
                                        >
                                            <span>Check out our certificates</span>
                                        </Button>
                                    </div>
                                </div> */}
                            </div>
                        </article>
                        <Carousel></Carousel>
                        <article className={classNames(`${styles.abt_block_2} wow animate_animated animate__fadeInUp mt-20`)}>
                            {/* <h2 className={classNames(`${styles.title} ${styles.abt_title}`)}><span>Explore more:</span></h2>
                            <div className={classNames(`${styles.abt_explore}`)}>
                                <a className={classNames(`${styles.abt_explore_item}`)} href="/partners">
                                    <i className={styles.partner_icon}></i>
                                    <span className={classNames(`${styles.abt_explore_name}`)}>Partner with us</span>
                                </a>
                                <a className={classNames(`${styles.abt_explore_item}`)}  href="/contact-us">
                                    <i className={styles.fake_news_icon}></i>
                                    <span className={classNames(`${styles.abt_explore_name}`)}>Report fraud</span>
                                </a>
                                <a className={classNames(`${styles.abt_explore_item}`)}  href="/contact-us">
                                    <i className={styles.complain_icon}></i>
                                    <span className={classNames(`${styles.abt_explore_name}`)}>Submit a complaint</span>
                                </a>
                                <a className={classNames(`${styles.abt_explore_item}`)}  href="https://www.linkedin.com/company/30123626">
                                    <i className={styles.join_icon}></i>
                                    <span className={classNames(`${styles.abt_explore_name}`)}>Join our Team</span>
                                </a>                     
                            </div> */}
                        </article>
                    </div>
                </div>
            </div>
            <div className='mt-20'>
                <Consult></Consult>
            </div>
        </section>
    </>
  )
}

export default index

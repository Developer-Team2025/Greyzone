import styles from './style.module.scss'
import classNames from 'classnames'
import Button from '../../Components/Reusable/Buttons/index'
import ImageBox from '../../Components/Reusable/ImageBox/index'
import Consult from '../../Components/Reusable/Form/Consult/index'
import Solutions from '../Solutions/index'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Carousell from '../../Components/Reusable/Swiper'
import bg_banner from '../../assets/images/pexels-goumbik-577210.jpeg'
import {edit} from '../../Components/Reusable/Addition/index'
const index = () => {
  return (
    <>
      {/* <div className={styles.chatbot}>
        <span>Chat with us</span>
      </div> */}
      <div className={styles.homepage}>
        <section className={styles.first_banner}>
          <picture className={styles.banner_bg}>
            <img src={bg_banner} alt="bg_banner" />
          </picture>
          <div className={styles.container}>
            <div className={styles.inner_banner}>
              <h1 className='wow  animate__lightSpeedInLeft animate__animated'>
                Cryptocurrency Forensics, Conflict Resolution, and Advisory Services
              </h1>
              <div className={classNames(`${styles.banner_info} wow  animate__fadeInUp animate__animated`)}>
                <h2>
                  With expertise in blockchain, we provide comprehensive investigation solutions, dispute resolution, compliance guidance, and strategic consulting for both individuals and businesses operating in the cryptocurrency sector.
                </h2>
              </div>
              <Button direct='/about-us' element="">
                <span>About Us</span>
              </Button>
              <div className={classNames(`${styles.banner_star} wow  animate__fadeInUp animate__animated`)}>
                <span className={styles.banner_stars_text}>
                  Excellent
                </span>
                  <div className={styles.banner_stars_star}>
                    <div className={classNames(`${styles.banner_star_item} ${styles.banner_star_item_active}`)}>
                    <i className={styles.star_shine}/>
                    </div>
                    <div className={classNames(`${styles.banner_star_item} ${styles.banner_star_item_active}`)}>
                      <i className={styles.star_shine}/>
                    </div>
                    <div className={classNames(`${styles.banner_star_item} ${styles.banner_star_item_active}`)}>
                      <i className={styles.star_shine}/>
                    </div>
                    <div className={classNames(`${styles.banner_star_item} ${styles.banner_star_item_active}`)}>
                      <i className={styles.star_shine}/>
                    </div>
                    <div className={styles.banner_star_item}>
                      <i className={styles.star_shine}/>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </section>
        <Solutions/>
        <section className={styles.banner_about_us}>
          <div className={styles.container}>
            <h2 className={classNames(`${styles.title_about} wow  animate__fadeInLeft animate__animated`)}><span>About us</span></h2>
            <div className={styles.about_wrapper}>
              <picture className={classNames(`${styles.about_pic} wow  animate__zoomIn animate__animated`)}>
                <img src={`${import.meta.env.VITE_REDIRECT}/img/about_us.jpeg`} alt="about us" />
              </picture>
              <div className={classNames(`${styles.about_content} wow  animate__fadeInRight animate__animated`)}>
                <h3 className={styles.about_subtitle}> <span>Thorough Blockchain Investigations</span> </h3>
                <div className={styles.about_info}>
                  <p>We provide comprehensive reports on blockchain transactions, aiding clients in collaborating effectively with law enforcement agencies, financial institutions, and cryptocurrency platforms for a smooth process.</p>
                </div>
                <h3 className={styles.about_subtitle}> <span>Streamlined Digital Solutions</span></h3>
                <div className={styles.about_info}>
                  <p>By utilizing advanced digital tools, we optimize time and cost savings for our clients. Our commitment is to deliver exceptional value while reducing inefficiencies, supported by partnerships with leading industry experts to ensure top-tier services.</p>
                </div>
                <h3 className={styles.about_subtitle}> <span>Certified Experts You Can Trust</span></h3>
                <div className={styles.about_info}>
                  <p>Our team is made up of skilled, dedicated professionals ready to embrace challenges. They consistently produce high-quality work, exceeding client expectations and driving innovation in our services. Check out our certifications page for our latest accomplishments.</p>
                </div>
                <h3 className={styles.about_subtitle}> <span>Transparent Pricing Structure</span></h3>
                <div className={styles.about_info}>
                  <p>We emphasize clarity in our pricing. You'll always know the factors influencing costs, the services included, and the anticipated outcomes of implementing our recommendations.</p>
                </div>
                <h3 className={styles.about_subtitle}><span>Empowering Knowledge and Industry Insights</span></h3>
                <div className={styles.about_info}>
                  <p>Stay informed with our curated content hub, offering valuable updates and insights. Explore our blog, articles, interviews, and case studies as we work to equip businesses with the latest industry knowledge.</p>
                </div>
                <Button direct="/about-us" element="">
                  <span>About Us</span>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.banner_digital}>
          <picture className={styles.digital_bg}>
            <img src={`${import.meta.env.VITE_REDIRECT}/img/digital.jpeg`} alt="digital_bg" />
          </picture>
          <div className={styles.container}>
            <h2 className={classNames(`${styles.digital_title} wow  animate__fadeInUp animate__animated`)}>It's challenging to capture everything Greyzone Consulting represents in just one statement, but here are a few key highlights.</h2>
            <div className={styles.digital_wrapper}>
              <div className={classNames(`${styles.digital_item} wow  animate__fadeInLeft animate__animated`)}>
                <div className={styles.digital_icon}>
                  <i className={styles.headphone_icon}/>
                </div>
                <span className={styles.digital_text}>
                  Operating from our headquarters in Budapest, Greyzone Consulting, in collaboration with international partners and industry experts, provides services to clients around the globe.
                </span>
              </div>
              <div className={classNames(`${styles.digital_item} wow  animate__fadeInLeft animate__animated`)}>
                <div className={styles.digital_icon}>
                  <i className={styles.triplet_star_icon}/>
                </div>
                <span className={styles.digital_text}>
                  Greyzone Consulting is independently owned by its directors, each committed to a singular goal: ensuring excellence and efficiency in every aspect of our work.
                </span>
              </div>
              <div className={classNames(`${styles.digital_item} wow  animate__fadeInLeft animate__animated`)}>
                <div className={styles.digital_icon}>
                  <i className={styles.board_icon}/>
                </div>
                <span className={styles.digital_text}>
                  When partnering with businesses or private clients, we conduct a thorough and transparent analysis and evaluation. Our priority is to deliver exceptional service and achieve tangible results.
                </span>
              </div>
              <div className={classNames(`${styles.digital_item} wow  animate__fadeInLeft animate__animated`)}>
                <div className={styles.digital_icon}>
                  <i className={styles.PC_icon}/>
                </div>
                <span className={styles.digital_text}>
                  We utilize the most advanced cryptocurrency investigation tools available, capable of connecting real-world entities to blockchain activities.
                </span>
              </div>
            </div>
          </div>
        </section>
        <Carousell></Carousell>
        <section className={styles.banner_solution}>
          <div className={styles.container}>
            <h2 className={classNames(`${styles.title_solution} wow  animate__fadeInLeft animate__animated`)}>
              <span>Blog</span>            
            </h2>
            <div className={styles.solution_wrapper}>
              <div className={styles.card}>
                <div className={classNames(styles.design, ' wow  animate__fadeInLeft animate__animated')}/>
                <ImageBox image={`${import.meta.env.VITE_REDIRECT}/img/we_can_help.jpeg`} href={`/blog/${edit('The Crucial Role of Expert Support When Dealing with Banks in Fraud Cases')}/`} style={{minHeight: '315px', height: '20rem', borderRadius: '3rem', boxShadow: '6px 8px 10px #888888'}} name="The Crucial Role of Expert Support When Dealing with Banks in Fraud Cases" size="100%"></ImageBox>
              </div>  
              <div className={styles.card}>
                <div className={classNames(styles.design, ' wow  animate__fadeInLeft animate__animated')}/>
                <ImageBox image={`${import.meta.env.VITE_REDIRECT}/img/ticket_scam.jpeg`} href={`/blog/${edit('Understanding Common Ticket Scams Essential Tips for Protection')}/`} style={{minHeight: '315px', height: '20rem', borderRadius: '3rem', boxShadow: '6px 8px 10px #888888'}} name="Understanding Common Ticket Scams: Essential Tips for Protection" size="100%"></ImageBox>
              </div>
              <div className={styles.card}>
                <div className={classNames(styles.design, ' wow  animate__fadeInLeft animate__animated')}/>
                <ImageBox image={`${import.meta.env.VITE_REDIRECT}/img/business_identity_theft.jpeg`} href={`/blog/${edit('Identifying and Handling Business Identity Theft What You Should Know')}/`} style={{minHeight: '315px', height: '20rem', borderRadius: '3rem', boxShadow: '6px 8px 10px #888888'}} name="Identifying and Handling Business Identity Theft: What You Should Know" size="100%"></ImageBox>
              </div>
              <div className={styles.card}>
                <div className={classNames(styles.design, ' wow  animate__fadeInLeft animate__animated')}/>
                <ImageBox image={`${import.meta.env.VITE_REDIRECT}/img/report_scam_norway.jpeg`} href={`/blog/${edit('A Guide to Reporting Scams in Norway')}/`} style={{minHeight: '315px', height: '20rem', borderRadius: '3rem', boxShadow: '6px 8px 10px #888888'}} name="A Guide to Reporting Scams in Norway" size="100%"></ImageBox>
              </div>
              <div className={styles.card}>
                <div className={classNames(styles.design, ' wow  animate__fadeInLeft animate__animated')}/>
                <ImageBox image={`${import.meta.env.VITE_REDIRECT}/img/report_scam_spain.jpeg`} href={`/blog/${edit('A Guide to Reporting Scams in Spain')}/`} style={{minHeight: '315px', height: '20rem', borderRadius: '3rem', boxShadow: '6px 8px 10px #888888'}} name="A Guide to Reporting Scams in Spain" size="100%"></ImageBox>
              </div>
              <div className={styles.card}>
                <div className={classNames(styles.design, ' wow  animate__fadeInLeft animate__animated')}/>  
                <ImageBox image={`${import.meta.env.VITE_REDIRECT}/img/fake_job_scam.jpeg`} href={`/blog/${edit('Beware of Task Completion and Fake Job Scams How to Protect Yourself from Online Fraud')}/`} style={{minHeight: '315px', height: '20rem', borderRadius: '3rem', boxShadow: '6px 8px 10px #888888'}} name="Beware of Task Completion and Fake Job Scams: How to Protect Yourself from Online Fraud" size="100%"></ImageBox>
              </div>
            </div>
          </div>
          {/* <div className={classNames(`${styles.more_details} wow  animate__fadeInUp animate__animated`)}>
            <a href="/blog" className={styles.moreLink}>
                <span>View all articles</span><i className={styles.arrow_right} style={{background:"#000"}}></i>
            </a>
          </div> */}
        </section>
        <Consult></Consult>
      </div>
    </>
  )
}

export default index

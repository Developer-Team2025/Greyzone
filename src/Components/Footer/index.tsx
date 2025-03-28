import styles from './style.module.scss'
import classNames from 'classnames'
import logo from '../../assets/images/logo_v2.png'
const index = () => {

  return (
    <div className={styles.footer_part}>
        <div className={styles.footer_container}>
            <div className={styles.inner_footer}>
                <div className=' wow animate__animated animate__fadeInUp'>
                    <a className={styles.footer_logo} href="/">
                        <img src={logo} alt="icon" />
                    </a>
                    <div className={styles.footer_text}>
                        <p>Helping you prove the facts and turning it into an <br/> obtainable outcome</p>
                    </div>
                    {}
                </div>
                <div className={classNames(styles.add_foot,'wow animate__animated animate__fadeInUp')}>
                    <span className={styles.footer_title}>Menu</span>
                    <ul>
                        <li className={styles.list_Footer}><a href="/">Home</a></li>
                        <li className={styles.list_Footer}><a href="/partners">Partners</a></li>
                        <li className={styles.list_Footer}><a href="/blog">Blog</a></li>
                        <li className={styles.list_Footer}><a href="/contact-us">Contact Us</a></li>
                    </ul>
                </div>
                <div className={classNames(styles.add_foot,'wow animate__animated animate__fadeInUp')}>
                    <span className={styles.footer_title}>About Us</span>
                    <ul>
                        <li className={styles.list_Footer}><a href="/terms-and-conditions">Terms and Condition</a></li>
                        <li className={styles.list_Footer}><a href="/privacy-policy">Privacy Policy</a></li>
                        <li className={styles.list_Footer}><a href="/our-team">Our Team</a></li>
                        <li className={styles.list_Footer}><a href="/our-certificates">Certificates</a></li>
                    </ul>
                </div>
                <div className={classNames(styles.add_foot,'wow animate__animated animate__fadeInUp')}>
                    <span className={styles.footer_title}>Solutions</span>
                    <ul>
                        <li className={styles.list_Footer}><a href="/solutions/research-and-dispute-resolution">Research and Dispute Resolution</a></li>
                        <li className={styles.list_Footer}><a href="/solutions/advisory-and-documentation-assistance">Advisory and Documentation Assistance</a></li>
                        <li className={styles.list_Footer}><a href="/solutions/corporate-services">Corporate Services</a></li>
                        <li className={styles.list_Footer}><a href="/solutions/cryptocurrency-investigations-and-regulatory-compliance">Cryptocurrency Investigations and Regulatory Compliance</a></li>
                    </ul>
                </div>
                <div className={classNames(styles.footer__col__contacts,'wow animate__animated animate__fadeInUp')}>
                    <span className={styles.footer_title}>Contact Us</span>
                    <div>
                        {/* <div className={classNames(`${styles.list_Footer} ${styles.footer_contact_line}`)}><div className={styles.sizeIcon}><i className={styles.phone_Icon}></i></div><p className={styles.style_content_phone}><a href="" className={styles.contact_line}>+3619010272</a></p></div> */}
                        <div className={classNames(`${styles.list_Footer} ${styles.footer_contact_line}`)}><div className={styles.sizeIcon}><i className={styles.email_Icon}></i></div><p className={styles.style_content_phone}><a href="" className={styles.contact_line}>info@greyzoneconsulting.com</a></p></div>
                        <div className={classNames(`${styles.list_Footer} ${styles.footer_contact_line}`)}><div className={styles.sizeIcon}><i className={styles.email_Icon}></i></div><p className={styles.style_content_phone}><a href="" className={styles.contact_line}>support@greyzoneconsulting.com</a></p></div>
                        <div className={classNames(`${styles.list_Footer} ${styles.footer_contact_line}`)}><div className={styles.sizeIcon}><i className={styles.pin_Icon}></i></div><p className={styles.style_content_phone}><a href="" className={styles.contact_line}>Headquarters: 1052, Vármegye u. 3-5, 2nd floor, Budapest</a></p></div>
                    </div>
                </div>
                <div className='wow animate__animated animate__fadeInUp'>
                    <span className={styles.footer_title}>Business Hours</span>
                    <ul>
                        <li className={styles.list_Footer}><p >Monday-Friday: 9am to 6pm (CET)</p></li>
                        <li className={styles.list_Footer}><p >Saturday: By Appointment</p></li>
                        <li className={styles.list_Footer}><p >Sunday: Closed</p></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className={styles.footer_bottom}>
            <div className={styles.footer_container}>
                <div className={styles.copyr}>
                <h4>© 2019 – 2025 Greyzone Consulting – All Rights Reserved.<br/>
                Greyzone Consulting International KFT | Registration number –<a href="https://www.nemzeticegtar.hu/nemzeticegtar/cegadat/16196807/TH-Consulting-International-Kft"> 16-19-6807</a></h4>
                <h4>Disclaimer: Please note that Greyzone Consulting offers a free consultation to all new clients, but any services that will be commissioned subsequently will incur fees and/or commissions. The fees and commissions will vary based on the specific services requested, as well as the complexity of each individual case. Greyzone Consulting does not offer any investments, financial services, or advice.</h4>
                <h4>Greyzone Consulting International KFT does not provide services to residents of England and Wales.</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default index

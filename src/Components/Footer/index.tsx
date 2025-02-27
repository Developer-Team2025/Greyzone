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
                    {/* <div className={styles.footer_soc}>
                        <a href="https://www.linkedin.com/uas/login?session_redirect=%2Fcompany%2F30123626%2F" className={styles.footer_socItem}>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="#012555" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2 0C0.895432 0 0 0.895508 0 2V28C0 29.1045 0.895432 30 2 30H28C29.1046 30 30 29.1045 30 28V2C30 0.895508 29.1046 0 28 0H2ZM20.9998 16.5986L20.9968 21H18.5143V17.0996C18.5143 16.1699 18.4953 14.978 17.2208 14.978C15.9273 14.978 15.7293 15.9883 15.7293 17.0327V20.9995H13.2443V12.9883H15.6308V14.0806H15.6658C15.9973 13.4512 16.8093 12.7871 18.0193 12.7871C20.5363 12.7871 20.9998 14.4453 20.9998 16.5986ZM9.19786 12.9888H11.6859V21H9.19786V12.9888ZM9 10.4409C9 9.64551 9.64549 9 10.441 9C11.236 9 11.8815 9.64551 11.882 10.4409C11.882 11.2363 11.2365 11.8955 10.441 11.8955C9.64549 11.8955 9 11.2363 9 10.4409Z" fill="#012555"/>
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/tandhconsult/" className={styles.footer_socItem}>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="#012555" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.8364 0H2.16362C0.968628 0 0 0.968628 0 2.16362V27.8364C0 29.0314 0.968628 30 2.16362 30H27.8364C29.0314 30 30 29.0314 30 27.8364V2.16362C30 0.968628 29.0314 0 27.8364 0V0ZM23.5613 18.5511C23.5197 19.468 23.3739 20.094 23.161 20.6419C22.7135 21.7989 21.7989 22.7135 20.6419 23.161C20.0942 23.3739 19.468 23.5194 18.5513 23.5613C17.6328 23.6032 17.3394 23.6133 15.0002 23.6133C12.6608 23.6133 12.3676 23.6032 11.4489 23.5613C10.5322 23.5194 9.90601 23.3739 9.35829 23.161C8.78334 22.9447 8.26286 22.6057 7.83257 22.1674C7.39449 21.7374 7.05551 21.2167 6.83922 20.6419C6.62636 20.0942 6.48056 19.468 6.4389 18.5513C6.39656 17.6326 6.38672 17.3392 6.38672 15C6.38672 12.6608 6.39656 12.3674 6.43867 11.4489C6.48033 10.532 6.6259 9.90601 6.83876 9.35806C7.05505 8.78334 7.39426 8.26263 7.83257 7.83257C8.26263 7.39426 8.78334 7.05528 9.35806 6.83899C9.90601 6.62613 10.532 6.48056 11.4489 6.43867C12.3674 6.39679 12.6608 6.38672 15 6.38672C17.3392 6.38672 17.6326 6.39679 18.5511 6.4389C19.468 6.48056 20.094 6.62613 20.6419 6.83876C21.2167 7.05505 21.7374 7.39426 22.1677 7.83257C22.6057 8.26286 22.9449 8.78334 23.161 9.35806C23.3741 9.90601 23.5197 10.532 23.5616 11.4489C23.6034 12.3674 23.6133 12.6608 23.6133 15C23.6133 17.3392 23.6034 17.6326 23.5613 18.5511Z" fill="#012555"/>
                            <path d="M18 15C18 16.6569 16.6569 18 15 18C13.3431 18 12 16.6569 12 15C12 13.3431 13.3431 12 15 12C16.6569 12 18 13.3431 18 15Z" fill="#012555"/>
                            <path d="M21.6563 9.96422C21.5194 9.59347 21.3012 9.2579 21.0176 8.98245C20.7421 8.69883 20.4068 8.48056 20.0358 8.34374C19.7349 8.22689 19.283 8.08781 18.4505 8.04992C17.5499 8.00885 17.2799 8 15.0001 8C12.7201 8 12.4501 8.00862 11.5497 8.04969C10.7173 8.08781 10.2651 8.22689 9.96444 8.34374C9.59347 8.48056 9.2579 8.69883 8.98268 8.98245C8.69906 9.2579 8.48079 9.59325 8.34374 9.96422C8.22689 10.2651 8.08781 10.7173 8.04992 11.5497C8.00885 12.4501 8 12.7201 8 15.0001C8 17.2799 8.00885 17.5499 8.04992 18.4505C8.08781 19.283 8.22689 19.7349 8.34374 20.0358C8.48079 20.4068 8.69883 20.7421 8.98245 21.0176C9.2579 21.3012 9.59325 21.5194 9.96422 21.6563C10.2651 21.7733 10.7173 21.9124 11.5497 21.9503C12.4501 21.9914 12.7198 22 14.9999 22C17.2802 22 17.5502 21.9914 18.4503 21.9503C19.2827 21.9124 19.7349 21.7733 20.0358 21.6563C20.7804 21.369 21.369 20.7804 21.6563 20.0358C21.7731 19.7349 21.9122 19.283 21.9503 18.4505C21.9914 17.5499 22 17.2799 22 15.0001C22 12.7201 21.9914 12.4501 21.9503 11.5497C21.9124 10.7173 21.7733 10.2651 21.6563 9.96422ZM15.0001 19.3844C12.5785 19.3844 10.6154 17.4215 10.6154 14.9999C10.6154 12.5783 12.5785 10.6154 15.0001 10.6154C17.4215 10.6154 19.3846 12.5783 19.3846 14.9999C19.3846 17.4215 17.4215 19.3844 15.0001 19.3844ZM19.5579 11.4667C18.9921 11.4667 18.5333 11.0079 18.5333 10.4421C18.5333 9.87618 18.9921 9.4174 19.5579 9.4174C20.1238 9.4174 20.5826 9.87618 20.5826 10.4421C20.5824 11.0079 20.1238 11.4667 19.5579 11.4667Z" fill="#012555"/>
                            </svg>

                        </a>
                        <a href="https://www.facebook.com/tandhconsult/" className={styles.footer_socItem}>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="#012555" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2 0C0.895432 0 0 0.895508 0 2V28C0 29.1045 0.895432 30 2 30H28C29.1046 30 30 29.1045 30 28V2C30 0.895508 29.1046 0 28 0H2ZM19.0007 9.65674H17.54C16.3947 9.65674 16.1733 10.2192 16.1727 11.0415V13.0005H18.7573L18.4033 15.8447H16.1733V23H13.324V15.8442H11V13H13.324V10.7593C13.324 8.32471 14.7667 7 16.8727 7C17.882 7 18.7487 7.07812 19.0007 7.11279V9.65674Z" fill="#012555"/>
                            </svg>

                        </a>
                        <a href="https://t.me/thconsult_news" className={styles.footer_socItem}>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="#012555" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2 0C0.895432 0 0 0.895508 0 2V28C0 29.1045 0.895432 30 2 30H28C29.1046 30 30 29.1045 30 28V2C30 0.895508 29.1046 0 28 0H2Z" fill="#012555"/>
                            <path d="M6.79157 13.7797L21.8678 8.06988C22.5675 7.82157 23.1787 8.23756 22.9519 9.27687L22.9532 9.27559L20.3862 21.1548C20.196 21.997 19.6865 22.2018 18.9737 21.805L15.0646 18.975L13.1791 20.7593C12.9706 20.9641 12.7947 21.1369 12.3908 21.1369L12.6683 17.2292L19.9132 10.8C20.2286 10.5274 19.8429 10.3738 19.4272 10.6451L10.474 16.1822L6.61435 14.9995C5.77649 14.7384 5.75825 14.1765 6.79157 13.7797Z" fill="white"/>
                            </svg>
                        </a>
                        <a href="https://t.me/thconsult_news" className={styles.footer_socItem}>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="#012555" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2 0C0.895432 0 0 0.895508 0 2V28C0 29.1045 0.895432 30 2 30H28C29.1046 30 30 29.1045 30 28V2C30 0.895508 29.1046 0 28 0H2Z" fill="#012555"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M22.086 7.90649C20.2059 6.0332 17.7056 5.0011 15.0418 5C9.55291 5 5.08574 9.44568 5.08353 14.9098C5.08279 16.6565 5.54129 18.3616 6.41277 19.8645L5 25L10.279 23.6218C11.7336 24.4115 13.3712 24.8276 15.0378 24.8281H15.0419C20.5302 24.8281 24.9979 20.3821 25 14.9177C25.0011 12.2695 23.9662 9.77966 22.086 7.90649ZM15.0418 23.1544H15.0384C13.5533 23.1538 12.0967 22.7566 10.8257 22.0062L10.5236 21.8276L7.39096 22.6455L8.22711 19.6058L8.03025 19.2942C7.2017 17.9827 6.76418 16.4668 6.76491 14.9104C6.76663 10.3688 10.4797 6.67383 15.0451 6.67383C17.2559 6.67456 19.3341 7.53247 20.8967 9.08948C22.4594 10.6465 23.3195 12.7161 23.3187 14.9171C23.3168 19.4591 19.6039 23.1544 15.0418 23.1544ZM19.5819 16.9851C19.3331 16.8611 18.1097 16.2622 17.8816 16.1794C17.6537 16.0968 17.4876 16.0557 17.3219 16.3035C17.1559 16.5513 16.6792 17.1091 16.534 17.2743C16.3887 17.4396 16.2437 17.4603 15.9949 17.3363C15.746 17.2124 14.9443 16.9508 13.9938 16.1072C13.2542 15.4506 12.7549 14.6396 12.6097 14.3918C12.4647 14.1438 12.6084 14.0227 12.7188 13.8865C12.9882 13.5536 13.2579 13.2046 13.3408 13.0394C13.4239 12.8741 13.3823 12.7295 13.32 12.6056C13.2579 12.4817 12.7603 11.2628 12.553 10.7668C12.3508 10.2842 12.1459 10.3494 11.9931 10.3418C11.8481 10.3346 11.6821 10.3331 11.5162 10.3331C11.3503 10.3331 11.0807 10.395 10.8526 10.6431C10.6246 10.891 9.98185 11.49 9.98185 12.7089C9.98185 13.9277 10.8734 15.1052 10.9978 15.2705C11.1222 15.4358 12.7524 17.937 15.2484 19.0095C15.842 19.2649 16.3054 19.4171 16.6669 19.5313C17.263 19.7197 17.8053 19.6931 18.2341 19.6294C18.7122 19.5582 19.7061 19.0303 19.9136 18.4519C20.1209 17.8734 20.1209 17.3777 20.0586 17.2743C19.9966 17.171 19.8306 17.1091 19.5819 16.9851Z" fill="white"/>
                            </svg>

                        </a>
                    </div> */}
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
                <h4>© 2019 – 2024 Greyzone Consulting – All Rights Reserved.<br/>
                Greyzone Consulting International Kft | Registration number –<a href="https://www.nemzeticegtar.hu/nemzeticegtar/cegadat/0109350838/TH-Consulting-International-Kft"> 01-09-350838</a> | VAT No. HU27125508</h4>
                <h4>Disclaimer: Please note that Greyzone Consulting offers a free consultation to all new clients, but any services that will be commissioned subsequently will incur fees and/or commissions. The fees and commissions will vary based on the specific services requested, as well as the complexity of each individual case. Greyzone Consulting does not offer any investments, financial services, or advice.</h4>
                <h4>Greyzone Consulting International KFT does not provide services to residents of England and Wales.</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default index

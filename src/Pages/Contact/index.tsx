
import Map from '../../Components/Map/index'
import Contact from '../../Components/Reusable/Form/Contact/index'
import styles from './style.module.scss'
import classNames from 'classnames'
const index = () => {
    
  return (
    <>
      <div className={styles.contacts}>
        <div className={styles.container}>
          <h1 className={classNames(styles.title, styles.contacts__title, 'wow', 'animate__animated','animate__fadeInLeft')} >
            <span>Contact Us</span>
          </h1>
          <div className={styles.contacts__row}> 
            <div className={classNames(styles.contacts__left, 'wow', 'animate__animated','animate__fadeInUp')}>
              <div className={styles.contacts__info}>
                <p>
                  Thank you for reaching out to us. Do you have an inquiry but do not know where to turn? Want to talk about business? 
                  Then contact us by the web inquiry form, online chat, or email listed below and we will respond to you within one business day. 
                  Or you can give us a call.
                </p>
              </div>
              <span className={styles.contacts__subinfo}>Here are all the ways you can contact Greyzone consulting:</span>
              <div className={styles.contacts__line}>
                <div className={styles.contacts__col}>
                  <div className={classNames(styles.contacts__item, styles.contact__item__tel)}>
                    <div className={styles.contacts__item__icon}><i className={styles.i_phone_call}></i></div>
                    <div className={styles.contacts__item__content}>
                      <p><em>Phone: </em><a href="tel:+3619010272">+3619010272</a></p>
                    </div>
                  </div>
                  <div className={styles.contacts__item}>
                    <div className={styles.contacts__item__icon}><i className={styles.i_email}></i></div>
                    <div className={styles.contacts__item__content}>
                      <p><em>Email: </em><a href="mailto:info@greyzone.com">info@greyzone.com</a></p>
                    </div>
                  </div>
                </div>

                <div className={styles.contacts__col}>
                  <div className={styles.contacts__item}>
                    <div className={styles.contacts__item__icon}><i className={styles.i_pin}></i></div>
                    <div className={classNames(styles.contacts__item__content, styles.contacts__item_adrres)}>
                      <p><em>Headquarters:</em> 1052, Vármegye u. 3-5, 2nd floor, Budapest</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={classNames(styles.contacts__item, styles.contacts__item__last)}>
                <div className={styles.contacts__item__icon}><i className={styles.i_time}></i></div>
                <div className={classNames(styles.contacts__item__content, styles.contacts__item_content__sm)}>
                  <p>Monday–Thursday: 9 am to 6 pm Central European Time (CET).</p>
                  <p>Friday: 9 am to 5 pm Central European Time (CET).</p>
                  <p>Saturday: Only by appointment.<br/>Sunday: Closed.</p>
                </div>
              </div>
              <div className={styles.footer_soc} >
                <a href="" className={styles.footer_socItem}><i className={styles.linkedIn_Icon}></i></a>
                <a href="" className={styles.footer_socItem}><i className={styles.insta_Icon}></i></a>
                <a href="" className={styles.footer_socItem}><i className={styles.facebook_Icon}></i></a>
                <a href="" className={styles.footer_socItem}><i className={styles.telegram_Icon}></i></a>
                <a href="" className={styles.footer_socItem}><i className={styles.viber_Icon}></i></a>
              </div>
              <div className={styles.contacts__from}>
                <div className={styles.contacts__from_item}>
                  <p>For technical support, and other questions: support@greyzone.com</p>
                </div>
                <div className={styles.contacts__from_item}>
                  <p>For business inquiries, you can contact us: partners@greyzone.com</p>
                </div>
              </div>

              <div className={styles.contacts__last}>
                <p>We will reply to your questions as soon as possible. Greyzone Consulting is open to answer calls and email messages from 9:00 a.m. to 6:00 p.m (CET) In Weekdays.</p>
              </div>
            </div>
            <div className={classNames(styles.contact__right ,`wow animate__animated animate__fadeInUp`)}>
              <Contact/>
            </div>
          </div>
          <div className={styles.contacts__row}>
            <div className={classNames(styles.contacts__left, 'wow', 'animate__animated', 'animate__fadeInUp')}>
              <h3 className={classNames(styles.title, styles.contacts__title, 'wow', 'animate__animated', 'animate__fadeInLeft')} data-wow-delay="0.4s">
                <span>Details</span>
              </h3>
              <div className={styles.contacts__info}>
                <h3>Greyzone Consulting International KFT (Greyzone Consulting International LLC.)</h3>
                <p>
                  Registration address: 1052, Vármegye u. 3-5, 2nd floor, Budapest<br />
                  Headquarters: 1052, Vármegye u. 3-5, 2nd floor, Budapest<br />
                  Tax number: 27125508-2-42<br />
                  Company registration number: 01-09-350838<br />
                  EU VAT identification number: HU27125508
                </p>
              </div>
              <a className={classNames(styles.btn, styles.btn__gradient, styles.contacts__last_btn)} href="#modal-header" data-modal="">
                <span>Make an appointment</span>
              </a>
            </div>
            <div className={classNames(styles.contact__right,' h-[34rem] overflow-hidden wow animate__animated animate__fadeInUp')}>
              <Map/>
            </div>
          </div>
          <article className={classNames(`${styles.abt_block_2} wow animate__animated animate__fadeInUp mt-20`)}>
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


    </>
  )
}

export default index

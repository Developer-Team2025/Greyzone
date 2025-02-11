import styles from './style.module.scss'
import classNames from 'classnames'
const index = () => {
  return (
    <>
        <section className={styles.overlay}>
            <picture className={classNames(`${styles.overlay_bg} wow animate__animated animate__fadeIn`)}>
                <img src="https://tandhconsult.com/wp-content/uploads/2021/05/overlay-bg-2.jpg" alt="overlay" />
            </picture>
            <div className={styles.container}>
                <h1 className={classNames(`${styles.overlay_title} wow animate__animated animate__fadeInUp`)}>Partners</h1>
            </div>
        </section>
        
        <section className={styles.partner} id="partners">
      <div className={styles.container}>
        <h2
          className={classNames(`${styles.title}`, styles.partner__title, 'wow', 'animate__animated', 'animate__fadeInLeft')}
        >
          <span>Who's working with us?</span>
        </h2>
        <p
          className={classNames(styles.partner__text, 'wow', 'animate__animated', 'animate__fadeInLeft')}

        >
          By working together with our brand partners, we achieve far more than we could alone. <br />
          Get in touch to discuss how we could work together.
        </p>

        {/* Partners List */}
        <article className={classNames(`${styles.partner__wrapper} flex`)}>
          <picture
            className={classNames(styles.partner__pic, 'wow','animate__animated', 'animate__fadeInLeft')}
          >
            <img
              src="https://tandhconsult.com/wp-content/uploads/2022/12/screenshot-2022-12-14-at-17.17.02-e1671034905304.png"
              alt=""
            />
          </picture>
          <div className={classNames(styles.partner__content, 'wow', 'animate__animated','animate__fadeInRight')}>
            <h3 className={classNames(`${styles.title}`, styles.partner__name)}>
              <a href="#2" target="_blank">
                <span>Blockchain Intelligence Group - Manage Risk & Investigate Crypto</span>
              </a>
            </h3>
            <div className={styles.partner__text__block}>
              <p className="p1">
                Blockchain Intelligence Group is a technology company that builds solutions to power compliance and
                intelligence for the blockchain-centric future. They help us transact cryptocurrency and power complex
                investigations into criminal activity using digital currencies.
              </p>
            </div>
          </div>
        </article>

        <article className={classNames(`${styles.partner__wrapper} flex`)}>
          <picture
            className={classNames(styles.partner__pic, 'wow','animate__animated' , 'animate__fadeInLeft')}
          >
            <img
              src="https://tandhconsult.com/wp-content/uploads/2022/12/logo3.webp"
              alt=""
            />
          </picture>
          <div className={classNames(styles.partner__content, 'wow', 'animate__animated','animate__fadeInRight')}>
            <h3 className={classNames(`${styles.title}`, styles.partner__name)}>
              <a href="" target="_blank">
                <span>Crystal Blockchain - Building a Better & Safer Blockchain Future</span>
              </a>
            </h3>
            <div className={styles.partner__text__block}>
              <p>
                Crystal powers cryptocurrency transaction analysis and monitoring on the blockchain, bringing
                best-in-class AML compliance and risk management solutions to exchanges, banks, and FIs. Crystal
                analyzes and monitors 100% of blockchain transactions up to 100,000 hops.
              </p>
              <p>They equip us with the tools we need to conduct a thorough and compliant investigation.</p>
            </div>
          </div>
        </article>

        <article className={classNames(`${styles.partner__wrapper} flex`)}>
          <picture
            className={classNames(styles.partner__pic, 'wow','animate__animated', 'animate__fadeInLeft')}
          >
            <img
              src="https://tandhconsult.com/wp-content/uploads/2022/01/logo-black.png"
              alt=""
            />
          </picture>
          <div className={classNames(styles.partner__content, 'wow', 'animate__animated', 'animate__fadeInRight')}>
            <h3 className={classNames(`${styles.title}`, styles.partner__name)}>
              <a href="https://www.tradesurety.com" target="_blank">
                <span>Tradesurety</span>
              </a>
            </h3>
            <div className={styles.partner__text__block}>
              <p>
                Tradesurety is a platform, which brings the best forex education and strategies together. One place
                where you can grab knowledge on trading, investing and learning the right forex trading strategies and
                techniques. Our signals based on more than 300 billion lines of data, each signal is generated with a
                strong track record. Whether you are a newbie trader or professional trader, Tradesurety is your ultimate
                guide to the fast-growing Forex market.
              </p>
              <h3 className="about__podzagolovok title wow animate__fadeInDown">
                Tradesurety is an elite, world-class service oriented company
              </h3>
              <div className="about__text wow animate__fadeInDown">
                <p>
                  Investing in Forex without understanding the fundamentals is like building a house on sand. At
                  Tradesurety, we have been placed at the heart of the global financial market to help you build a strong
                  and prosperous portfolio. We offer guidance on good practices and trading strategies. We don’t take
                  advantage of any financial information; we combine all that knowledge with our experience, so you can
                  take your next investment decisions as easy as possible! This Is Where You Need To Be For Your Next
                  Investment!
                </p>
              </div>
            </div>
          </div>
        </article>

        <article className={classNames(`${styles.partner__wrapper} flex`)}>
          <picture
            className={classNames(styles.partner__pic, 'wow','animate__animated', 'animate__fadeInLeft')}
          >
            <img
              src="https://tandhconsult.com/wp-content/uploads/2023/08/learnvent_colour.png"
              alt=""
            />
          </picture>
          <div className={classNames(styles.partner__content, 'wow', 'animate__animated','animate__fadeInRight')}>
            <h3 className={classNames(`${styles.title}`, styles.partner__name)}>
              <a href="https://www.learnvent.com" target="_blank">
                <span>Learnvent - Learn. Grow. Explore. Online Webinars and Trainings for your business</span>
              </a>
            </h3>
            <div className={styles.partner__text__block}>
              <p>
                One of our esteemed partners is Learnvent. As a trailblazing conference organizing company, Learnvent is
                redefining the realm of business events. Even though they are relatively new to the scene, their knack for
                spotting and collaborating with top-tier talents is unparalleled. Their curated events feature
                industry-leading speakers, ensuring participants not only gain knowledge but also actionable skills to
                propel their careers forward.
              </p>
              <p>
                In today’s fast-paced world, carving out time for self-improvement can be a challenge. Recognizing this,
                Learnvent is committed to making personal and professional development more accessible and impactful. By
                offering a diverse range of masterclasses and conferences, they ensure that learning opportunities are not
                just beneficial but also convenient. Their vision? To put individuals back in control, rejuvenating their
                drive, passion, and professional journey.
              </p>
              <p>
                Together, Greyzone Consulting and Learnvent are pushing boundaries and creating enriching experiences for all our
                clients.
              </p>
            </div>
          </div>
        </article>

        <article className={classNames(`${styles.partner__wrapper} flex`)}>
          <picture
            className={classNames(styles.partner__pic, 'wow', 'animate__animated','animate__fadeInLeft')}
          >
            <img
              src="https://tandhconsult.com/wp-content/uploads/2023/08/navy-1.png"
              alt=""
            />
          </picture>
          <div className={classNames(styles.partner__content, 'wow', 'animate__animated', 'animate__fadeInRight')}>
            <h3 className={classNames(`${styles.title}`, styles.partner__name)}>
              <a href="https://www.adnsol.com" target="_blank">
                <span>AdnSol - Empowering Your Business Growth</span>
              </a>
            </h3>
            <div className={styles.partner__text__block}>
              <p>
                AdnSol specializes in guiding businesses, especially small to medium enterprises, through the multifaceted
                journey of entrepreneurship. They offer comprehensive services from business analysis to execution,
                ensuring every challenge is met with expertise. Born from a desire to revamp the traditional consulting
                approach, AdnSol provides an all-in-one solution for businesses to seamlessly transition from startups to
                scale-ups. With a deep understanding of the entrepreneurial spirit, AdnSol is dedicated to equipping
                businesses with the tools they need to thrive and make a positive impact. Together, Greyzone and AdnSol are
                championing transformative business solutions.
              </p>
            </div>
          </div>
        </article>
        
      </div>
    </section>
    <section className={classNames(`${styles.banner_partner} wow  animate__fadeIn animate__animated`)}>
      <div className={styles.container}>
        <div className={styles.partner_slider}>
          <div className={styles.slick_list}>
            <div className={styles.slick_track}>
              <picture className={styles.partner_pic}><img src="https://tandhconsult.com/wp-content/uploads/2024/04/nordvpn_logo_rgb_primary_blue_black.png" alt="1" /></picture>
              <picture className={styles.partner_pic}><img src="https://tandhconsult.com/wp-content/uploads/2021/09/bitrank_registersymbol_2019_oneline_329x70.png" alt="2" /></picture>
              <picture className={styles.partner_pic}><img src="https://tandhconsult.com/wp-content/uploads/2022/12/logo3.webp" alt="3" /></picture>
              <picture className={styles.partner_pic}><img src="https://tandhconsult.com/wp-content/uploads/2024/04/logotype-color-horizontal.png" alt="4" /></picture>
              <picture className={styles.partner_pic}><img src="https://tandhconsult.com/wp-content/uploads/2021/09/qlue_tm_2019_193x55.png" alt="5" /></picture>
              <picture className={styles.partner_pic}><img src="https://tandhconsult.com/wp-content/uploads/2023/08/learnvent_colour.png" alt="6" /></picture>
              <picture className={styles.partner_pic}><img src="https://tandhconsult.com/wp-content/uploads/2023/08/navy-1.png" alt="7" /></picture>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <section className={styles.call} id="call">
      <div className={styles.container}>
        <div className={classNames(styles.callRow, 'wow', 'animate__fadeIn')}>
          <div className={classNames(styles.callCol, styles.callColTitle)}>
            <h2 className={styles.callTitle}>Become a partner</h2>
            <span className={styles.callSubtitle}>Interested in working with us?</span>
          </div>
          <div className={classNames(styles.callCol, styles.callColContacts)}>
            <span className={styles.callTeamText}>
              <i className={styles.i_phone_call}></i>Contact the team on
            </span>
            <div className={styles.callTeam}>
              <div className={styles.callLink}>
                <p>
                  <a href="tel:+3614088556">+36 1 408 8556</a>
                  <br />
                  <a href="tel:+36212620640">+36 2 126 20640</a>
                </p>
                <div className={styles.footerContactsLine}>
                  <div className={styles.footerContactsIcon}></div>
                  <div className={styles.footerContactsContent}></div>
                </div>
              </div>
            </div>
            <div className={styles.callMail}>
              <p>
                <a href="mailto:partners@greyzone.com">partners@greyzone.com</a>
              </p>
            </div>
          </div>
          <div className={classNames(styles.callCol, styles.callColBtn)}>
            <a
              className={classNames(styles.btn, styles.btnWhite, styles.callBtn)}
              href="#modal-header"
              data-modal=""
            >
              <span>Apply now</span>
            </a>
          </div>
        </div>
      </div>
    </section> */}
    </>
  )
}

export default index

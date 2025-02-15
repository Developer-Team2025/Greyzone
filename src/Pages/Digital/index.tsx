import ShadowDOM from 'react-shadow';
import styles from '../../themes.module.scss'
const index = () => {
  return (
    <ShadowDOM.div>
    <style>
        {/* {`
            @import url(https://tandhconsult.com/wp-content/themes/th/styles.css);
            .slick-track{
            gap: 1rem;
            }
            .i-time-management{
                mask-image: url(https://tandhconsult.com/wp-content/themes/th/img/icons/time-management.svg);
                z-index: 3;
                display: inline-block;
                background: url(https://tandhconsult.com/wp-content/themes/th/img/icons/time-management.svg);
            }
        `} */}
    </style>
        <section className={styles.solutions} id="solutions">
        <div className={styles.container}>
            <h2 className={`${styles.title} ${styles.solutions__title} wow animate__animated animate__fadeInLeft`}>
            <span>Digital Goods</span>
            </h2>
            <div className={`${styles.dispute__info} wow animate__animated animate__fadeInLeft`}>
            <p>
                Explore our range of digital products designed to enhance your knowledge and skills in fraud prevention and online security...
            </p>
            </div>
            
            <div className={`${styles.dispute__wrapper} wow animate__animated-delay`}>
            {[{
                href: "/solutions/digital-goods/10-indicators-of-a-love-scam-a-comprehensive-checklist",
                imgSrc: "indicators.jpg",
                name: "10 Indicators Of A Love Scam: A Comprehensive Checklist"
            }, {
                href: "/solutions/digital-goods/online-fraud-protection-a-practical-guide",
                imgSrc: "online_fraud.jpg",
                name: "Online Fraud Protection: A Practical Guide"
            }, {
                href: "/solutions/digital-goods/printable-fraud-awareness-workbook-with-exercises",
                imgSrc: "printable.jpg",
                name: "Printable Fraud Awareness Workbook with Exercises"
            }, {
                href: "/solutions/digital-goods/fraud-awareness-masterclass-with-detailed-presentation",
                imgSrc: "masterclass.jpg",
                name: "Fraud Awareness Masterclass with Detailed Presentation"
            }].map((item, index) => (
                <a key={index} className={`${styles.dispute__link} wow animate__animated animate__fadeInUp`} href={item.href}>
                <picture className={styles.dispute__pic}>
                    <img src={`${import.meta.env.VITE_REDIRECT}/img/${item.imgSrc}`} alt={item.imgSrc.split('.')[0]} />
                </picture>
                <span className={styles.dispute__name}>{item.name}</span>
                <span className={styles.dispute__more}>See more<i className="i i-arrow-right"></i></span>
                </a>
            ))}
            </div>
            
            <div className={`${styles.ePagination} wow animate__animated fadeInUp cn-mt-100`}></div>
            
            <h2 className={`${styles.title} ${styles.dispute__subtitle} wow animate__animated animate__fadeInUp`}>
            <span>Benefits of working with us</span>
            </h2>
            <div className={`${styles.dispute__subinfo} wow animate__animated animate__fadeInUp`}>
            <p>“Highly qualified staff”...</p>
            </div>
            
            <div className={styles.dispute__benef}>
            {[{
                icon: "time-management",
                name: "Expert Help",
                desc: "You can now get expert help across a wide range of areas – and help is at hand as soon as you need it."
            }, {
                icon: "help.svg",
                name: "Establish Professional Credibility",
                desc: "A relationship built on trust and honesty can strengthen any business."
            }, {
                icon: "help.svg",
                name: "Faster, Easier Implementation",
                desc: "Faster, easier and more cost-effective than any other provider."
            }, {
                icon: "shield.svg",
                name: "Build Trust",
                desc: "We are here for you – because we are Built to Care."
            }].map((item, index) => (
                <div key={index} className={`${styles.dispute__benef_item} wow animate__animated animate__fadeInUp`}>
                <i className={`i i-${item.icon}`} style={item.icon.includes('.svg') ? {maskImage: `url(https://tandhconsult.com/wp-content/uploads/2021/05/${item.icon})`, background: `url(https://tandhconsult.com/wp-content/uploads/2021/05/${item.icon})`} : {}}></i>
                <div className={styles.dispute__benef_content}>
                    <span className={styles.dispute__benef_name}>{item.name}</span>
                    <span className={styles.dispute__benef_pos}>{item.desc}</span>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    </ShadowDOM.div>
  )
}

export default index

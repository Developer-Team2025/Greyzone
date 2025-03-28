
import classNames from 'classnames';
import styles from './style.module.scss';
import ImageBox from '../../Components/Reusable/ImageBox/index'
import Consult from '../../Components/Reusable/Form/Consult'
const index = () => {
  return (
    <>
        <section className={classNames(styles.solutions)} id="solutions">
            <div className={classNames(styles.container)}>
            <h2
                className={classNames(styles.title, styles.solutionsTitle, 'wow', 'animate__animated', 'animate__fadeInLeft')}
                data-wow-delay="0.4s"
            >
                <span>Research and Dispute Resolution</span>
            </h2>

            <div
                className={classNames(styles.disputeInfo, 'wow', 'animate__animated', 'animate__fadeInLeft')}
                data-wow-delay="0.6s"
            >
                <p style={{color:'rgba(0,0,0,1)'}}>
                Greyzone Consulting’s Research and Dispute Resolution solutions help
                clients manage complex demands with expert analysis, advice, and
                intelligence in intricate investigations and litigation. Our team
                combines in-depth investigative experience with cutting-edge
                technology to deliver actionable intelligence, enabling clients
                to mitigate risks and make informed decisions.
                </p>
            </div>
            <div className={classNames(styles.disputeWrapper)}>
                {[
                {
                    delay: "0.1s",
                    href: "/solutions/research-and-dispute-resolution/comprehensive-due-diligence-solutions/",
                    imgSrc:
                    `${import.meta.env.VITE_REDIRECT}/img/due_diligence.jpeg?v=2`,
                    name: "Comprehensive Due Diligence Solutions",
                },
                {
                    delay: "0.2s",
                    href: "/solutions/research-and-dispute-resolution/premium-dispute-settlement-package/",
                    imgSrc:
                    `${import.meta.env.VITE_REDIRECT}/img/premium_dispute.jpeg?v=2`,
                    name: "Premium Dispute Settlement Package",
                },
                {
                    delay: "0.3s",
                    href: "/solutions/research-and-dispute-resolution/optimal-dispute-settlement-package/",
                    imgSrc:
                    `${import.meta.env.VITE_REDIRECT}/img/optimal_dispute.jpeg?v=2`,
                    name: "Optimal Dispute Settlement Package",
                },
                {
                    delay: "0.4s",
                    href: "/solutions/research-and-dispute-resolution/special-dispute-settlement-package/",
                    imgSrc:
                    `${import.meta.env.VITE_REDIRECT}/img/special_dispute.jpeg?v=2`,
                    name: "Special Dispute Settlement Package",
                },
                {
                    delay: "0.5s",
                    href: "/solutions/research-and-dispute-resolution/basic-dispute-settlement-package/",
                    imgSrc:
                    `${import.meta.env.VITE_REDIRECT}/img/basic_dispute.jpeg?v=2`,
                    name: "Basic Dispute Settlement Package",
                },
                ].map((item, idx) => (
                    <ImageBox image={item.imgSrc} name={item.name} key={idx} size="" href={item.href}  style={{ maxWidth: "100%", height: "100%" }}  more={true} />
                ))}
            </div>

            <h2
                className={classNames(styles.title, styles.disputeSubtitle, 'wow', 'animate__animated', 'animate__fadeInUp')}
            >
                <span>Benefits of working with us</span>
            </h2>

            <div
                className={classNames(styles.disputeSubinfo, 'wow', 'animate__animated', 'animate__fadeInUp')}
                data-wow-delay="0.2s"
                style={{color:'rgba(0,0,0,1)'}}
            >
                {[
                "“Highly qualified staff”—our team has been working with individuals and businesses on a daily basis for many years, which enables them to quickly understand and identify your needs, offering you tailor-made solutions.",
                "Furthermore, the certifications of our staff provide the necessary assurance that you are in good hands. The professionals you are working with are certified, with a proven track record and excellent reputation, which is paramount in most cases.",
                "Professional certifications also help give your independent business a solid foundation. The advanced training, knowledge, and information you gain from specialized coursework equip you with up-to-date tools and technical strategies. These will guide and direct you in executing your projects, allowing you to manage all aspects of your work more effectively.",
                "To increase earning potential, solving complex blockchain problems and investigating prompt solutions with industry-leading tools is a huge asset, especially as it is the trend in today's world.",
                "The biggest challenge for most people is understanding the crypto world and its dynamics. Just like any major new adaptation, it takes time. Therefore, organizations and individuals are quickly adapting to partake in the revolutionary transformation of cryptocurrencies, staying updated to meet current market demands.",
                ].map((text, index) => (
                <p key={index}>{text}</p>
                ))}
            </div>

            <div className={classNames(styles.abt_explore)}>
                {[
                {
                    icon:
                    "https://tandhconsult.com/wp-content/uploads/2021/05/time-management.svg",
                    name: "Expert Help",
                    pos: "You can now get expert help across a wide range of areas – and help is at hand as soon as you need it.",
                },
                {
                    icon: "https://tandhconsult.com/wp-content/uploads/2021/05/help.svg",
                    name: "Establish Professional Credibility",
                    pos: "A relationship built on trust and honesty can strengthen any business.",
                },
                {
                    icon: "https://tandhconsult.com/wp-content/uploads/2021/05/help.svg",
                    name: "Faster, Easier Implementation",
                    pos: "Faster, easier and more cost-effective than any other provider.",
                },
                {
                    icon: "https://tandhconsult.com/wp-content/uploads/2021/05/shield.svg",
                    name: "Build Trust",
                    pos: "We are here for you – because we are Built to Care.",
                },
                ].map((item, index) => (
                <div
                    key={index}
                    className={classNames(styles.abt_explore_item, 'wow', 'animate__animated', 'animate__fadeInUp')}
                    data-wow-delay="0.1s"
                >
                    <i
                    className={classNames(styles.disputeIcon)}
                    style={{
                        width: '56px',
                        height: '56px',
                        // background: 'linear-gradient(to right, #32509d 0%, #70abdc 100%)',
                        display: 'inline-block',
                        zIndex: "3",
                        // maskImage: `url(${item.icon})`,
                        background: `url(${item.icon})`,
                    }}
                    ></i>
                    <div className={classNames(styles.disputeBenefContent)}>
                    <span className={classNames(styles.abt_explore_name)}>{item.name}</span>
                    <span className={classNames(styles.disputeBenefPos)}>{item.pos}</span>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </section>
        <Consult></Consult>
    </>
  );
};

export default index;

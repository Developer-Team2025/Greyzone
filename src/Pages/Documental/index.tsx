
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
                <span> Advisory and Documentation Assistance</span>
            </h2>

            <div
                className={classNames(styles.disputeInfo, 'wow', 'animate__animated', 'animate__fadeInLeft')}
                data-wow-delay="0.6s"
            >
            <p>
                At Greyzone Consulting, we pride ourselves on delivering comprehensive consulting and documental support. Our experts assist in the preparation of crucial documentation, including evidence of incidents, correspondence with authorities, case reports, and applications to various institutions. We delve deep into research and analysis to provide intelligent, tailored solutions for our clients. Our adept team swiftly identifies key facts, assesses their relevance, and crafts sound, professionally-presented recommendations.
            </p>
            </div>

            {/* <div className={classNames(styles.woocommerceNoticesWrapper)}></div>
            <p className={classNames(styles.woocommerceResultCount)}>Showing all 5 results</p>
            <form className={classNames(styles.woocommerceOrdering)} method="get">
                <select
                name="orderby"
                className={classNames(styles.orderby)}
                aria-label="Shop order"
                >
                <option value="menu_order" defaultValue="">
                    Default sorting
                </option>
                <option value="popularity">Sort by popularity</option>
                <option value="date">Sort by latest</option>
                <option value="price">Sort by price: low to high</option>
                <option value="price-desc">Sort by price: high to low</option>
                </select>
                <input
                type="hidden"
                name="paged"
                value="1"
                data-gaconnector-tracked="true"
                />
            </form> */}
            <div className={classNames(styles.disputeWrapper)}>
                {[
                {
                    delay: "0.1s",
                    href: "/solutions/advisory-and-documentation-assistance/chargeback-consultation/",
                    imgSrc:
                    `${import.meta.env.VITE_REDIRECT}/img/chargeback.jpg`,
                    name: "Chargeback Consultations",
                },
                {
                    delay: "0.2s",
                    href: "/solutions/advisory-and-documentation-assistance/technical-document-translation-non-certified/",
                    imgSrc:
                   `${import.meta.env.VITE_REDIRECT}/img/technical_document.jpg`,
                    name: "Technical Document Translation (Non-Certified)",
                },
                {
                    delay: "0.3s",
                    href: "/solutions/advisory-and-documentation-assistance/case-evaluation-and-documentation-services/",
                    imgSrc:
                   `${import.meta.env.VITE_REDIRECT}/img/case_evaluation.jpg`,
                    name: "Case Evaluation and Documentation Services",
                },
                {
                    delay: "0.4s",
                    href: "/solutions/advisory-and-documentation-assistance/application-drafting-and-processing-support/",
                    imgSrc:
                   `${import.meta.env.VITE_REDIRECT}/img/Application_Drafting.jpg`,
                    name: "Application Drafting and Processing Support",
                },
                {
                    delay: "0.5s",
                    href: "/solutions/advisory-and-documentation-assistance/initial-consultation-and-assessment-services/",
                    imgSrc:
                   `${import.meta.env.VITE_REDIRECT}/img/initial_consult_assess.jpg`,
                    name: "Initial Consultation and Assessment Services",
                },
                ].map((item, idx) => (
                    <ImageBox image={item.imgSrc} name={item.name} key={idx} size="" href={item.href}   style={{ maxWidth: "100%", height: "100%" }}  more={true} />
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
            >
                {[
                "“Highly qualified staff”, our staff that has been working with cases of individuals and businesses on the daily basis for many years now, therefore, it enables them to swiftly understand and identify their needs and give offer them tailor-made solutions.",
                "Besides, the certifications of our staff provide with necessary assurance and surety that you are in good hands and persons that you are dealing with are certified professionals with a proven track record and excellent reputation which in most cases is paramount.",
                "Professional certifications can also help give your independent business a solid foundation. The advanced training, information, and knowledge you gain from specialized coursework can provide you with up-to-date tools and technical strategies that will serve to guide and direct you in the execution of your projects, allowing you to manage all aspects of your work more effectively.",
                "In order to increase earning potential, solving the complex blockchain problems and investigating the prompt ways with the industry-leading tool is a huge asset, let alone it being the trend of the world that we live in.",
                "The biggest challenge for the majority of people is the understanding of the crypto world and its dynamics, just like any new major adaptation it will take its own time, and thereby organizations and individuals are pacing up to adapt and partake in the revolutionary transformation of cryptocurrencies in order to stay updated and meet current demands of the market.",
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
                    className={classNames(styles.abt_explore_item, 'wow', 'animate__animated',  'animate__fadeInUp')}
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
                        maskImage: `url(${item.icon})`,
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

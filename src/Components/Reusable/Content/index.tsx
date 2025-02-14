import classNames from "classnames";
import styles from "./style.module.scss";
import { useParams } from "react-router-dom";
import ShadowDOM from "react-shadow";
import Slider from "react-slick";
interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

// Define the custom arrows as separate components with types
export const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <button
      className="related__arrow related__arrow--prev slick-arrow wow animate__animated animate__fadeInLeft"
      onClick={onClick}
      style={{ backgroundColor: "transparent", border: "none" }}
    >
      <i
        style={{
          width: "32px",
          height: "14px",
          display: "inline-block",
          filter: "brightness(0) invert(1)",
          background:
            " url(https://tandhconsult.com/wp-content/themes/th/img/icons/arrow-right.svg)",
          maskImage:
            "url(https://tandhconsult.com/wp-content/themes/th/img/icons/arrow-right.svg)",
          rotate: "180deg",
        }}
      ></i>
    </button>
  );
};

export const NextArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <button
      className="related__arrow related__arrow--next slick-arrow wow animate__animated animate__fadeInLeft"
      onClick={onClick}
      style={{ backgroundColor: "transparent", border: "none" }}
    >
      <i
        style={{
          width: "32px",
          height: "14px",
          display: "inline-block",
          filter: "brightness(0) invert(1)",
          background:
            " url(https://tandhconsult.com/wp-content/themes/th/img/icons/arrow-right.svg)",
          maskImage:
            "url(https://tandhconsult.com/wp-content/themes/th/img/icons/arrow-right.svg)",
        }}
      ></i>
    </button>
  );
};

const index = () => {
  const { id } = useParams();
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    <>

      {id === "10-indicators-of-a-love-scam-a-comprehensive-checklist" && (
        <>
          <ShadowDOM.div>
            <style>
              {`
                @import url(https://tandhconsult.com/wp-content/themes/th/style.css);
              `}
            </style>
            <section className="card" id="card">
              <div className="container">
                <h1 className="title card__name wow animate__animated animate__fadeInLeft">
                  <span>
                    10 Indicators of a Love Scam: A Comprehensive Checklist
                  </span>
                </h1>
                <div className="card__row">
                  <picture className="card__pic wow animate__animated animate__fadeInUp">
                    <img src={`${import.meta.env.VITE_REDIRECT}/img/indicators.jpg`} alt="indicator" />
                  </picture>
                  <div className="card__right wow animate__animated animate__fadeInRight">
                    <p>
                      This comprehensive checklist is designed to assist
                      individuals in identifying the various signs and
                      indicators commonly associated with romance scams, thereby
                      enhancing their ability to protect themselves from such
                      fraudulent activities.
                    </p>
                    <div className="card__ctrl">
                      {/* <a
                                    aria-describedby="woocommerce_loop_add_to_cart_link_describedby_29424"
                                    data-quantity="1"
                                    className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                                    data-product_id="29424"
                                    data-product_sku=""
                                    aria-label="Add to cart: “10 Signs to Spot a Love Scam Checklist”"
                                    rel="nofollow"
                                    data-success_message="“10 Signs to Spot a Love Scam Checklist” has been added to your cart"
                                >
                                    Add to cart
                                </a>
                                <span id="woocommerce_loop_add_to_cart_link_describedby_29424" className="screen-reader-text"></span>
                                <span className="card__price">
                                    <span className="price">
                                    <del aria-hidden="true">
                                        <span className="woocommerce-Price-amount amount">
                                        <bdi>
                                            <span className="woocommerce-Price-currencySymbol">£</span>9.99
                                        </bdi>
                                        </span>
                                    </del>
                                    <span className="screen-reader-text">Original price was: £9.99.</span>
                                    <ins aria-hidden="true">
                                        <span className="woocommerce-Price-amount amount">
                                        <bdi>
                                            <span className="woocommerce-Price-currencySymbol">£</span>0.99
                                        </bdi>
                                        </span>
                                    </ins>
                                    <span className="screen-reader-text">Current price is: £0.99.</span>
                                    </span>
                                </span> */}
                    </div>
                  </div>
                </div>

                <div className="card__desc wow animate__animated animate__fadeInUp">
                  <p>
                    Stay safe in the digital dating world with our “10 Signs to
                    Spot a Love Scam Checklist.” This comprehensive 5-page guide
                    helps you recognize the warning signs of romance scams,
                    providing practical tips and real-world examples. Whether
                    you’re an online dater, concerned family member, or
                    educator, this checklist equips you with the knowledge to
                    protect yourself and your loved ones from deceitful
                    predators. Learn to identify common scam tactics and take
                    proactive steps to secure your personal information and
                    finances. Download now and ensure your online interactions
                    remain safe and genuine.
                  </p>
                  {/* <figure id="attachment_29426" aria-describedby="caption-attachment-29426" className="wp-caption alignnone">
                            <img
                            decoding="async"
                            className="size-medium wp-image-29426"
                            src="https://tandhconsult.com/wp-content/uploads/2024/06/for-workbooks-300x300.png"
                            alt="10 Signs to Spot a Love Scam Checklist"
                            width="300"
                            height="300"
                            sizes="(max-width: 300px) 100vw, 300px"
                            />
                            <figcaption id="caption-attachment-29426" className="wp-caption-text">
                            10 Signs to Spot a Love Scam Checklist
                            </figcaption>
                        </figure> */}
                </div>
              </div>
            </section>
          </ShadowDOM.div>
        </>
      )}

      {id === "online-fraud-protection-a-practical-guide" && (
        <>
          <ShadowDOM.div>
            <style>
              {`
                  @import url(https://tandhconsult.com/wp-content/themes/th/style.css);
              `}
            </style>
            <section className="card" id="card">
              <div className="container">
                <h1 className="title card__name wow animate__animated animate__fadeInLeft">
                  <span>Online Fraud Protection: A Practical Guide</span>
                </h1>
                <div className="card__row">
                  <picture className="card__pic wow animate__animated animate__fadeInUp">
                    <img src={`${import.meta.env.VITE_REDIRECT}/img/online_fraud.jpg`} alt="online_fraud" />
                  </picture>
                  <div className="card__right wow animate__animated animate__fadeInRight">
                    <p>
                      A comprehensive guide offering practical tips and
                      strategies to protect yourself from online scams. Ideal
                      for enhancing your scam awareness and online security.
                    </p>
                    <div className="card__ctrl">
                      {/* <a
                                        aria-describedby="woocommerce_loop_add_to_cart_link_describedby_29407"
                                        data-quantity="1"
                                        className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                                        data-product_id="29407"
                                        data-product_sku=""
                                        aria-label="Add to cart: “How Not to Get Scammed: A Guide to Protecting Yourself Online”"
                                        rel="nofollow"
                                        data-success_message="“How Not to Get Scammed: A Guide to Protecting Yourself Online” has been added to your cart"
                                    >
                                        Add to cart
                                    </a>
                                    <span
                                        id="woocommerce_loop_add_to_cart_link_describedby_29407"
                                        className="screen-reader-text"
                                    ></span>
                                    <span className="card__price">
                                        <span className="price">
                                        <del aria-hidden="true">
                                            <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                                <span className="woocommerce-Price-currencySymbol">£</span>
                                                19.00
                                            </bdi>
                                            </span>
                                        </del>
                                        <span className="screen-reader-text">Original price was: £19.00.</span>
                                        <ins aria-hidden="true">
                                            <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                                <span className="woocommerce-Price-currencySymbol">£</span>
                                                8.99
                                            </bdi>
                                            </span>
                                        </ins>
                                        <span className="screen-reader-text">Current price is: £8.99.</span>
                                        </span>
                                    </span> */}
                    </div>
                  </div>
                </div>

                <div className="card__desc wow animate__animated animate__fadeInUp">
                  <p>
                    Introducing “How Not to Get Scammed: A Guide to Protecting
                    Yourself Online,” your ultimate resource for fraud
                    prevention. This 25-page guide provides practical tips and
                    strategies to help you recognize and avoid various online
                    scams. With detailed chapters on identifying scams,
                    protecting personal information, and reporting fraudulent
                    activities, this guide equips you with the knowledge to stay
                    safe online. Learn about phishing, tech support scams,
                    investment frauds, and more, while implementing effective
                    security measures to safeguard your digital life.
                  </p>
                  {/* <figure
                                id="attachment_29410"
                                aria-describedby="caption-attachment-29410"
                                style={{ width: "300px" }}
                                className="wp-caption alignnone"
                            >
                                <img
                                className="size-medium wp-image-29410"
                                src="https://tandhconsult.com/wp-content/uploads/2024/05/for-workbooks-300x300.png"
                                alt="How Not to Get Scammed: A Guide to Protecting Yourself Online"
                                width="300"
                                height="300"
                                sizes="(max-width: 300px) 100vw, 300px"
                                />
                                <figcaption id="caption-attachment-29410" className="wp-caption-text">
                                How Not to Get Scammed: A Guide to Protecting Yourself Online
                                </figcaption>
                            </figure> */}
                </div>
              </div>
            </section>
          </ShadowDOM.div>
        </>
      )}

      {id === "printable-fraud-awareness-workbook-with-exercises" && (
        <>
          <ShadowDOM.div>
            <style>
              {`
                            @import url(https://tandhconsult.com/wp-content/themes/th/style.css);
                        `}
            </style>
            <section className="card" id="card">
              <div className="container">
                <h1 className="title card__name wow animate__animated animate__fadeInLeft">
                  <span>Printable Fraud Awareness Workbook with Exercises</span>
                </h1>
                <div className="card__row">
                  <picture className="card__pic wow animate__animated animate__fadeInUp">
                    <img src={`${import.meta.env.VITE_REDIRECT}/img/printable.jpg`} alt="printable" />
                  </picture>
                  <div className="card__right wow animate__animated animate__fadeInRight">
                    <p>
                      Enhance your fraud prevention skills with our Fraud
                      Awareness Workbook. This comprehensive printable guide
                      includes self-assessments, interactive exercises, and
                      essential resources to help you identify and protect
                      against scams. Perfect for boosting your online security
                      and staying vigilant against fraud.
                    </p>
                    <div className="card__ctrl">
                      {/* <a
                                            // 2"
                                            aria-describedby="woocommerce_loop_add_to_cart_link_describedby_29402"
                                            data-quantity="1"
                                            className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                                            data-product_id="29402"
                                            data-product_sku=""
                                            aria-label="Add to cart: “Printable Workbook with Exercises - Fraud Awareness”"
                                            rel="nofollow"
                                            data-success_message="“Printable Workbook with Exercises - Fraud Awareness” has been added to your cart"
                                        >
                                            Add to cart
                                        </a>
                                        <span
                                            id="woocommerce_loop_add_to_cart_link_describedby_29402"
                                            className="screen-reader-text"
                                        ></span>
                                        <span className="card__price">
                                            <span className="price">
                                            <del aria-hidden="true">
                                                <span className="woocommerce-Price-amount amount">
                                                <bdi>
                                                    <span className="woocommerce-Price-currencySymbol">£</span>
                                                    97.00
                                                </bdi>
                                                </span>
                                            </del>
                                            <span className="screen-reader-text">Original price was: £97.00.</span>
                                            <ins aria-hidden="true">
                                                <span className="woocommerce-Price-amount amount">
                                                <bdi>
                                                    <span className="woocommerce-Price-currencySymbol">£</span>
                                                    49.10
                                                </bdi>
                                                </span>
                                            </ins>
                                            <span className="screen-reader-text">Current price is: £49.10.</span>
                                            </span>
                                        </span> */}
                    </div>
                  </div>
                </div>

                <div className="card__desc wow animate__animated animate__fadeInUp">
                  <p>
                    Happy to present you the{" "}
                    <strong>Fraud Awareness Workbook</strong>, your
                    comprehensive guide to mastering fraud prevention and online
                    security. This printable workbook is designed to enhance
                    your scam awareness and equip you with the tools needed to
                    protect yourself from various fraudulent activities. Whether
                    you’re new to fraud prevention or looking to refine your
                    skills, this workbook offers valuable insights and practical
                    exercises to help you stay vigilant.
                  </p>
                  <p>
                    <strong>Features:</strong>
                  </p>
                  <ul>
                    <li>
                      <strong>Self-Assessments</strong>: Start and end your
                      journey with detailed self-assessments to measure your
                      initial understanding and track your progress in fraud
                      awareness. These assessments provide a clear baseline and
                      highlight areas for improvement.
                    </li>
                    <li>
                      <strong>Masterclass &amp; Presentation</strong>: Dive deep
                      into the world of fraud prevention with our expertly
                      crafted masterclass and comprehensive presentation
                      materials. Learn about the latest fraud detection
                      techniques and strategies to stay ahead of scammers.
                    </li>
                    <li>
                      <strong>Interactive Exercises</strong>: Engage in
                      practical exercises designed to enhance your ability to
                      identify and respond to various fraud scenarios, including
                      phishing emails, romance scams, and investment frauds.
                      These activities reinforce your knowledge and boost your
                      confidence in handling real-life situations.
                    </li>
                    <li>
                      <strong>Checklists &amp; Trackers</strong>: Utilize our
                      practical checklists and trackers to maintain and improve
                      your security practices. These tools help you stay
                      organized, monitor your progress, and ensure consistent
                      vigilance against fraud.
                    </li>
                    <li>
                      <strong>Resources &amp; Materials</strong>: Access a
                      curated collection of essential resources and educational
                      materials to support your ongoing learning. Stay informed
                      about the latest fraud prevention tactics and protective
                      measures with our up-to-date resources.
                    </li>
                  </ul>
                  <p>
                    <strong>Key Benefits:</strong>
                  </p>
                  <ul>
                    <li>
                      <strong>Enhanced Fraud Awareness</strong>: Improve your
                      understanding of common fraud tactics and learn how to
                      recognize potential scams.
                    </li>
                    <li>
                      <strong>Effective Security Practices</strong>: Implement
                      advanced security measures for your online accounts and
                      personal information.
                    </li>
                    <li>
                      <strong>Practical Skills</strong>: Gain hands-on
                      experience through interactive exercises that prepare you
                      for real-life fraud scenarios.
                    </li>
                    <li>
                      <strong>Ongoing Support</strong>: Stay informed with
                      access to the latest fraud prevention resources and
                      materials.
                    </li>
                  </ul>
                  <p>
                    By completing the <strong>Fraud Awareness Workbook</strong>,
                    you’ll develop the confidence and skills needed to safeguard
                    yourself and your assets from potential scams. This workbook
                    is perfect for individuals looking to improve their online
                    security and fraud detection capabilities. Print it out,
                    mark your progress, and take proactive steps to protect
                    yourself from fraud with our detailed and practical guide.
                  </p>
                  <p>
                    Boost your fraud prevention capabilities today with the{" "}
                    <strong>Fraud Awareness Workbook</strong>—your ultimate
                    resource for scam prevention and online security.
                  </p>
                  {/* <figure
                                    id="attachment_29404"
                                    aria-describedby="caption-attachment-29404"
                                    style={{ width: "300px" }}
                                    className="wp-caption alignnone"
                                >
                                    <img
                                    className="size-medium wp-image-29404"
                                    src="https://tandhconsult.com/wp-content/uploads/2024/05/fraud-awareness-printable-workbook2-300x300.png"
                                    alt="Fraud Awareness Printable Workbook"
                                    width="300"
                                    height="300"
                                    data-pin-description="Fraud Awareness Printable Workbook"
                                    sizes="(max-width: 300px) 100vw, 300px"
                                    />
                                    <figcaption id="caption-attachment-29404" className="wp-caption-text">
                                    Fraud Awareness Printable Workbook
                                    </figcaption>
                                </figure> */}
                </div>
              </div>
            </section>
          </ShadowDOM.div>
        </>
      )}

      {id === "fraud-awareness-masterclass-with-detailed-presentation" && (
        <>
          <section id="card" className={classNames(styles.card)}>
            <div className={classNames(styles.container)}>
              <h1
                className={classNames(
                  styles.title,
                  styles.card__name,
                  "wow animate__animated",
                  "animate__fadeInLeft"
                )}
              >
                <span>
                  Fraud Awareness Masterclass with Detailed Presentation
                </span>
              </h1>
              <div className={classNames(styles.card__row)}>
                <picture
                  className={classNames(
                    styles.card__pic,
                    "wow animate__animated",
                    "animate__fadeInUp"
                  )}
                >
                  <img src={`${import.meta.env.VITE_REDIRECT}/img/masterclass.jpg`} alt="masterclass" />
                </picture>
                <div
                  className={classNames(
                    styles.card__right,
                    "wow animate__animated",
                    "animate__fadeInRight"
                  )}
                >
                  <p>
                    <strong>
                      Unlock the Secrets to Protecting Your Finances with Our
                      Fraud Awareness Bundle
                    </strong>
                  </p>
                  <p>
                    In an era dominated by digital transactions, safeguarding
                    against financial fraud is crucial. With cybercrime damages
                    projected to cost the global economy $10.5 trillion annually
                    by 2025, understanding fraud prevention is more vital than
                    ever. Our comprehensive Fraud Awareness Bundle equips you
                    with crucial tools and knowledge through a meticulously
                    designed, recorded Masterclass and a comprehensive
                    presentation PDF.
                  </p>
                  <div className={classNames(styles.card__ctrl)}>
                    {/* <a
                      className={classNames(styles.add_to_cart_button)}
                      data-product_id="29378"
                      aria-label="Add to cart: Fraud Awareness Masterclass + Presentation"
                    >
                      Add to cart
                    </a> */}
                    {/* <span className={classNames(styles.card__price)}>
                                    <span className={classNames(styles.price)}>
                                    <del><span ><bdi><span>£</span>59.98</bdi></span></del>
                                    <ins><span ><bdi><span>£</span>29.99</bdi></span></ins>
                                    </span>
                                </span> */}
                  </div>
                </div>
              </div>

              <div
                className={classNames(
                  styles.card__desc,
                  "wow animate__animated",
                  "animate__fadeInUp"
                )}
              >
                <h3>Key Features of Our Fraud Awareness Bundle</h3>
                <p>
                  <strong>Expert-Led Workshop:</strong> Gain exclusive access to
                  a 2-hour recorded workshop led by seasoned industry experts.
                  Delve into essential fraud prevention strategies and learn
                  practical methods to protect yourself and others from scams.
                </p>
                <p>
                  <strong>Detailed Presentation PDF:</strong> Receive a
                  presentation PDF that complements the workshop. This resource
                  is perfect for following along, taking notes, and revisiting
                  important topics at your convenience.
                </p>

                <div className={classNames("wp-video")}>
                  <div
                    id="mep_0"
                    className={classNames("mejs-container", "mejs-video")}
                  >
                    <video
                      className={classNames("wp-video-shortcode")}
                      id="video-29378-1_html5"
                      width="640"
                      height="360"
                      preload="metadata"
                      src="https://tandhconsult.com/wp-content/uploads/2024/05/fraud-awareness-workshop_teaser_1.mp4?_=1"
                    >
                      <source
                        type="video/mp4"
                        src="https://tandhconsult.com/wp-content/uploads/2024/05/fraud-awareness-workshop_teaser_1.mp4?_=1"
                      />
                    </video>
                  </div>
                </div>
                <p>&nbsp;</p>
                <h3>Why Choose Our Fraud Awareness Bundle?</h3>
                <p>
                  <strong>Learn from Experts:</strong> Benefit from the
                  expertise of professionals who bring real-world insights and
                  highlight red flags to detect and prevent fraud.
                </p>
                <p>
                  <strong>Flexible Learning Options:</strong> Study at your own
                  pace with the ability to pause, rewind, and replay the
                  workshop. Our bundle adapts to your schedule.
                </p>
                <p>
                  <strong>Enhance Your Knowledge:</strong> Boost your
                  understanding of various fraud types, their impacts, and
                  effective prevention strategies.
                </p>
                <p>
                  <strong>Global Perspective:</strong> Understand the global
                  landscape of financial fraud with examples from around the
                  world.
                </p>

                <h3>Act Now and Secure Your Financial Future</h3>
                <p>
                  Equip yourself with the tools and knowledge to stay one step
                  ahead of{" "}
                  <a href="/blog/what-to-do-if-you-suspect-fraud/">
                    fraudsters
                  </a>
                  . Purchase the Fraud Awareness Bundle today and start your
                  journey to becoming a fraud prevention champion.
                </p>
              </div>
            </div>
          </section>
        </>
      )}

      {id === "cryptocurrency-transaction-risk-analysis" && (
        <>
          <ShadowDOM.div>
            <style>
              {`
                            @import url(https://tandhconsult.com/wp-content/themes/th/style.css);
                        `}
            </style>
            <section className="card" id="card">
              <div className="container">
                <h1 className="title card__name wow animate__animated animate__fadeInLeft">
                  <span>Cryptocurrency Transaction Risk Analysis</span>
                </h1>
                <div className="card__row">
                  <picture className="card__pic wow animate__animated animate__fadeInUp">
                    <img src={`${import.meta.env.VITE_REDIRECT}/img/Analysis_crypto.jpg`} alt="Analysis_crypto" />
                  </picture>
                  <div className="card__right wow animate__animated animate__fadeInRight">
                    <p>
                      Managing cryptocurrency transactions is complicated,
                      especially when it comes to staying compliant and avoiding
                      illegal activity. That’s where our{" "}
                      <strong>Crypto Transaction Risk Audit</strong> helps. We
                      take a close look at your transaction history, identifying
                      any risky or suspicious activities to give you a clear
                      picture of your exposure. We highlight potential threats
                      and provide you with practical solutions to ensure your
                      crypto dealings are secure, trustworthy, and fully
                      compliant. With our audit, you can navigate the crypto
                      world confidently, knowing that your assets are safe and
                      your transactions are above board.
                    </p>
                    <div className="card__ctrl">
                      <a
                        href="/solutions/cryptocurrency-investigation-compliance/cryptocurrency-transaction-risk-analysis/"
                        aria-describedby="woocommerce_loop_add_to_cart_link_describedby_33046"
                        data-quantity="1"
                        className="button product_type_simple"
                        data-product_id="33046"
                        data-product_sku=""
                        aria-label="Read more about “Crypto Transaction Risk Audit”"
                        rel="nofollow"
                      >
                        Read more
                      </a>
                      <span
                        id="woocommerce_loop_add_to_cart_link_describedby_33046"
                        className="screen-reader-text"
                      ></span>
                      <span className="card__price"></span>
                    </div>
                  </div>
                </div>

                <div className="card__desc wow animate__animated animate__fadeInUp">
                  <p>
                    <strong>How It Works:</strong>
                  </p>
                  <p>
                    In the world of cryptocurrency, ensuring the legitimacy and
                    security of every transaction is crucial, particularly for
                    large institutions like banks or financial firms. Our{" "}
                    <strong>Crypto Transaction Risk Audit</strong> service is
                    designed to provide an in-depth assessment of your
                    cryptocurrency transactions, bringing clarity and safety to
                    an otherwise complex process.
                  </p>
                  <p>
                    We utilize advanced blockchain analysis tools and
                    methodologies to uncover risks, flag suspicious activities,
                    and ensure compliance with industry regulations, providing
                    your organization with actionable intelligence that secures
                    your digital assets and aligns your operations with legal
                    standards.
                  </p>
                  <ul>
                    <li>
                      <strong>Data Acquisition</strong>: We securely gather
                      transaction data from the blockchain through either API
                      integration or client-uploaded files, ensuring a seamless
                      and efficient process tailored to your institution’s
                      specific needs.
                    </li>
                    <li>
                      <strong>Red Flag Identification</strong>: Each transaction
                      is scrutinized using industry-leading analysis tools such
                      as CLU, Big Intelligence Group, and Crystal Intelligence.
                      This approach helps us identify transactions involving
                      wallets flagged for suspicious activity, providing an
                      extensive review comparable to conducting thorough
                      background checks on each party involved.
                    </li>
                    <li>
                      <strong>Pattern Analysis</strong>: Fraudulent and
                      high-risk transactions often follow recognizable patterns,
                      such as rapid wallet movement, unexpected transaction
                      spikes, or activity originating from high-risk
                      jurisdictions. Our system identifies these irregularities
                      and pinpoints transactions that deviate from expected
                      norms, thus highlighting vulnerabilities that could be a
                      potential risk to your institution.
                    </li>
                  </ul>
                  <p>
                    <strong>Risk Scoring and Categorization</strong>:
                  </p>
                  <p>
                    Following the analysis, every transaction is assigned a{" "}
                    <strong>risk score</strong> ranging from low to high,
                    allowing your compliance team to focus on areas that need
                    the most attention. High-risk scores often indicate:
                  </p>
                  <ul>
                    <li>Wallets linked to previous illicit activities.</li>
                    <li>
                      Transactions involving jurisdictions with weak crypto
                      regulations.
                    </li>
                    <li>
                      Unusual transaction volumes or activities that might
                      indicate money laundering attempts.
                    </li>
                  </ul>
                  <p>
                    <strong>Deliverables</strong>:
                  </p>
                  <ul>
                    <li>
                      A <strong>comprehensive audit report</strong> that clearly
                      identifies high-risk transactions, explains why they were
                      flagged, and details their potential impact on your
                      institution’s operations and compliance standing.
                    </li>
                    <li>
                      <strong>Risk mitigation strategies</strong> tailored to
                      your organization’s needs, which might include blocking
                      high-risk wallets, enhancing due diligence procedures, or
                      increasing monitoring frequency for high-risk activities.
                    </li>
                  </ul>
                  <p>
                    <strong>Who Will Benefit From This Service</strong>:
                  </p>
                  <ul>
                    <li>
                      <strong>Banks and Financial Institutions</strong>: Our
                      audit helps financial institutions ensure all
                      cryptocurrency holdings and related transactions are
                      legitimate, allowing them to comply with Anti-Money
                      Laundering (AML) and Know Your Customer (KYC) regulations
                      with confidence.
                    </li>
                    <li>
                      <strong>Cryptocurrency Exchanges</strong>: By auditing the
                      safety and legitimacy of transactions, we help exchanges
                      build trust with their users and meet regulatory
                      standards.
                    </li>
                    <li>
                      <strong>Large Corporations Accepting Crypto</strong>:
                      Companies accepting cryptocurrency payments can better
                      understand the source of funds, ensuring they are not
                      inadvertently involved in illegal activities.
                    </li>
                  </ul>
                  <p>
                    By implementing our{" "}
                    <strong>Crypto Transaction Risk Audit</strong>, your
                    institution adopts a proactive stance against fraud,
                    regulatory risks, and financial crime. We deliver a
                    structured, transparent, and reliable solution that helps
                    protect your assets and reputation, transforming
                    cryptocurrency from a potential risk into a well-managed,
                    compliant financial tool.
                  </p>
                  <p>
                    <strong>Ready to fortify your crypto operations?</strong>{" "}
                    Contact us today to learn more about how our tailored audit
                    can enhance your institution’s security and regulatory
                    standing.
                  </p>
                </div>
              </div>
            </section>
          </ShadowDOM.div>
        </>
      )}

      {id === "asset-location-and-tracing-services" && (
        <>
          <ShadowDOM.div>
            <style>
              {`
                            @import url(https://tandhconsult.com/wp-content/themes/th/style.css);
                        `}
            </style>
            <section className="card" id="card">
              <div className="container">
                <h1 className="title card__name wow animate__animated animate__fadeInLeft">
                  <span>Asset Location and Tracing Services</span>
                </h1>
                <div className="card__row">
                  <picture className="card__pic wow animate__animated animate__fadeInUp">
                    <img src={`${import.meta.env.VITE_REDIRECT}/img/asset_location.jpg`} alt="asset_location" />
                  </picture>
                  <div className="card__right wow animate__animated animate__fadeInRight">
                    <p>
                      At Greyzone Consulting, we specialize in providing
                      comprehensive{" "}
                      <strong>asset search and tracing services</strong>, with a
                      strong focus on{" "}
                      <strong>digital assets and cryptocurrencies</strong>. Our
                      experienced team employs{" "}
                      <a href="https://crystalintelligence.com">
                        cutting-edge technology
                      </a>{" "}
                      and{" "}
                      <a href="/blog/understanding-cryptocurrency-investigations-key-insights/">
                        advanced investigative techniques
                      </a>{" "}
                      to uncover and trace assets, ensuring a seamless and
                      effective process for our clients.
                    </p>
                    <div className="card__ctrl">
                      <a
                        href="/solutions/cryptocurrency-investigation-compliance/asset-location-and-tracing-services/"
                        aria-describedby="woocommerce_loop_add_to_cart_link_describedby_33273"
                        data-quantity="1"
                        className="button product_type_simple"
                        data-product_id="33273"
                        data-product_sku=""
                        aria-label="Read more about “Asset Search and Tracing”"
                        rel="nofollow"
                      >
                        Read more
                      </a>
                      <span
                        id="woocommerce_loop_add_to_cart_link_describedby_33273"
                        className="screen-reader-text"
                      ></span>
                      <span className="card__price"></span>
                    </div>
                  </div>
                </div>

                <div className="card__desc wow animate__animated animate__fadeInUp">
                  <h4>
                    <strong>Our Services Include:</strong>
                  </h4>
                  <ol>
                    <li>
                      <strong>Asset Search and Investigation</strong>
                      <ul>
                        <li>
                          Identifying and locating hidden or undisclosed assets.
                        </li>
                        <li>
                          Leveraging advanced tools and OSINT techniques for
                          comprehensive data collection.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Cryptocurrency Tracing</strong>
                      <ul>
                        <li>
                          Tracking the movement of digital assets across
                          blockchain networks.
                        </li>
                        <li>
                          Identifying ownership patterns and potential
                          obfuscation attempts, such as the use of mixers or
                          tumblers.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Compliance and Reporting</strong>
                      <ul>
                        <li>
                          Providing detailed reports and documentation to
                          support legal cases and compliance requirements.
                        </li>
                        <li>
                          Navigating the complexities of international and local
                          regulations during tracing efforts.
                        </li>
                      </ul>
                    </li>
                  </ol>
                  <h4>
                    <strong>Why Choose Greyzone Consulting?</strong>
                  </h4>
                  <ul>
                    <li>
                      <strong>Expertise in Blockchain Investigations:</strong>{" "}
                      Our team has a proven track record in handling complex
                      asset tracing cases, particularly in cryptocurrency
                      investigations.
                    </li>
                    <li>
                      <strong>Advanced Tools and Techniques:</strong> We utilize
                      state-of-the-art technologies and proprietary methods to
                      deliver precise and efficient results.
                    </li>
                    <li>
                      <strong>Client-Centric Approach:</strong> Each case is
                      handled with utmost confidentiality and tailored solutions
                      to meet individual client needs.
                    </li>
                  </ul>
                  <p>
                    If you’re looking to <strong>trace assets</strong> and
                    navigate the ever-evolving digital landscape, Greyzone
                    Consulting is here to assist you every step of the way.
                    Contact us to learn more about how we can help secure your
                    financial interests.
                  </p>
                </div>
              </div>
            </section>
          </ShadowDOM.div>
        </>
      )}

      {id === "expert-cryptocurrency-witness-services" && (
        <>
          <ShadowDOM.div>
            <style>
              {`
                            @import url(https://tandhconsult.com/wp-content/themes/th/style.css);
                        `}
            </style>
            <section className="card" id="card">
              <div className="container">
                <h1 className="title card__name wow animate__animated animate__fadeInLeft">
                  <span>Expert Cryptocurrency Witness Services</span>
                </h1>
                <div className="card__row">
                  <picture className="card__pic wow animate__animated animate__fadeInUp">
                    <img src={`${import.meta.env.VITE_REDIRECT}/img/expert_crypto.jpg`} alt="expert_crypto" />
                  </picture>
                  <div className="card__right wow animate__animated animate__fadeInRight">
                    <h2>
                      Expert Witness for Cryptocurrency – Bridging the Gap in
                      Legal Proceedings
                    </h2>
                    <p>
                      In cases involving cryptocurrencies that escalate to court
                      proceedings, the expertise of an expert witness becomes
                      crucial. Judges and juries often lack understanding of how
                      these digital currencies function and the relevant
                      regulations. At Greyzone Consulting, our cryptocurrency
                      expert witnesses play a vital role in helping legal
                      professionals and authorities comprehend the intricacies
                      of cryptocurrencies, their functionality as currencies,
                      traceability, and the nuances of their usage.
                    </p>
                    <h3>Unraveling the Complexity with Certified Experts</h3>
                    <p>
                      Greyzone Consulting boasts a team of certified experts in
                      cryptocurrency and blockchain technology. Our expert
                      witnesses provide valuable testimony in cryptocurrency
                      cases revolving around blockchain technology. Moreover,
                      they skillfully employ transition words to enhance the
                      clarity and coherence of their explanations. We understand
                      the importance of clear and concise explanations,
                      especially when dealing with judges and law enforcement
                      officers who may have limited knowledge in this domain.
                      Consequently, our objective is to bridge the gap and
                      facilitate a smooth progression of the case.
                    </p>
                    <h3>
                      Comprehensive Cryptocurrency Analysis and Investigation
                    </h3>
                    <p>
                      Our team at Greyzone Consulting conducts thorough{" "}
                      <a href="/solutions/cryptocurrency-investigation-compliance/cryptocurrency-investigation/">
                        cryptocurrency analysis and investigations
                      </a>{" "}
                      to deliver customized reports and case responses for our
                      clients. We comprehend the complexities and unique aspects
                      of cryptocurrency and blockchain technology. Utilizing our
                      expertise, we provide in-depth explanations that are easy
                      to understand, ensuring that all parties involved in the
                      legal proceedings grasp the underlying concepts.
                    </p>
                    <h3>Extensive International Experience</h3>
                    <p>
                      With a vast experience spanning multiple jurisdictions
                      internationally, including Europe, Australia, the U.K.,
                      the USA, New Zealand, and more, our cybercrime
                      investigators specialized in cryptocurrency have dealt
                      with numerous cryptocurrency-related cases. As a result,
                      they possess a deep understanding of the subject matter.
                      Furthermore, their use of transition words enhances the
                      coherence and flow of their explanations, making it easier
                      for judges, juries, and law enforcement officers to follow
                      along. Our strong network of legal connections enhances
                      our ability to handle complex legal situations
                      effectively. Additionally, we are proud to be Certified,
                      allowing us to leverage advanced tools and methodologies
                      to achieve successful outcomes.
                    </p>
                    <h3>Secure Successful Outcomes with Greyzone Consulting</h3>
                    <p>
                      Trust Greyzone Consulting’s expert witnesses to bridge the
                      knowledge gap in cryptocurrency-related legal proceedings.
                      Our team of certified experts is dedicated to offering
                      comprehensive explanations. Moreover, they skillfully
                      incorporate transition words to guide the readers’
                      understanding and facilitate the flow of information.
                      Consequently, judges, juries, and law enforcement officers
                      gain a clear understanding of the subject matter. Benefit
                      from our extensive international experience and the
                      utilization of advanced tools and methodologies.{" "}
                      <a href="contact-us">Contact Greyzone Consulting</a> today
                      to secure successful outcomes in your
                      cryptocurrency-related legal cases.
                    </p>
                    <div className="card__ctrl">
                      <a
                        href="/solutions/cryptocurrency-investigation-compliance/expert-cryptocurrency-witness-services/"
                        aria-describedby="woocommerce_loop_add_to_cart_link_describedby_605"
                        data-quantity="1"
                        className="button product_type_simple"
                        data-product_id="605"
                        data-product_sku=""
                        aria-label="Read more about “Expert Witness for Cryptocurrency”"
                        rel="nofollow"
                      >
                        Read more
                      </a>
                      <span
                        id="woocommerce_loop_add_to_cart_link_describedby_605"
                        className="screen-reader-text"
                      ></span>
                      <span className="card__price"></span>
                    </div>
                  </div>
                </div>

                <div className="card__desc wow animate__animated animate__fadeInUp">
                  <h3 className="title card__subtit">
                    <span>Description</span>
                  </h3>
                  <p>
                    In cases involving cryptocurrencies where it has been
                    decided to escalate it to the competent authorities and a
                    process with a court is taking place, the assistance of an
                    expert witness may help judges and juries understand how
                    these currencies work and which regulations, if any, apply.
                  </p>
                  <p>
                    Cryptocurrency expert witnesses can help the authorities—who
                    often have little to no knowledge of blockchain
                    technology—to understand the particularities of
                    cryptocurrencies, how they function as currency, how they
                    can be traced, and how the details of their use might be
                    tracked, erased, or altered. Here, an expert may be asked to
                    testify or may support a legal team by helping attorneys and
                    their staff understand how cryptocurrencies work.
                  </p>
                  <p>
                    At Greyzone Consulting, we are a team that counts with
                    certified experts for matters involving cryptocurrency and
                    blockchain technology. We’re available to offer expert
                    witness testimony in cases connected to blockchain
                    technology.
                  </p>
                  <p>
                    Our cybercrime investigators have operated in many
                    jurisdictions internationally, including most of Europe,
                    Australia, the U.K., the USA, New Zealand, and many more. We
                    have dealt with hundreds of cases, have dozens of legal
                    connections, and more importantly, are Chainalysis Reactors
                    Certified (CRC), which we utilize to reach successful
                    outcomes.
                  </p>
                </div>
              </div>
            </section>
          </ShadowDOM.div>
        </>
      )}

      {id === "business-focused-cryptocurrency-intelligence-report" && (
        <>
          <ShadowDOM.div>
            <style>
              {`
                            @import url(https://tandhconsult.com/wp-content/themes/th/style.css);
                        `}
            </style>
            <section className="card" id="card">
              <div className="container">
                <h1 className="title card__name wow animate__animated animate__fadeInLeft">
                  <span>
                    Business-Focused Cryptocurrency Intelligence Report
                  </span>
                </h1>
                <div className="card__row">
                  <picture className="card__pic wow animate__animated animate__fadeInUp">
                    <img
                      src={`${import.meta.env.VITE_REDIRECT}/img/business_focused.jpg`}
                      alt="business_focused"
                    />
                  </picture>
                  <div className="card__right wow animate__animated animate__fadeInRight">
                    <h2>
                      Expert Witness for Cryptocurrency – Bridging the Gap in
                      Legal Proceedings
                    </h2>
                    <p>
                      In cases involving cryptocurrencies that escalate to court
                      proceedings, the expertise of an expert witness becomes
                      crucial. Judges and juries often lack understanding of how
                      these digital currencies function and the relevant
                      regulations. At Greyzone Consulting, our cryptocurrency
                      expert witnesses play a vital role in helping legal
                      professionals and authorities comprehend the intricacies
                      of cryptocurrencies, their functionality as currencies,
                      traceability, and the nuances of their usage.
                    </p>
                    <h3>Unraveling the Complexity with Certified Experts</h3>
                    <p>
                      Greyzone Consulting boasts a team of certified experts in
                      cryptocurrency and blockchain technology. Our expert
                      witnesses provide valuable testimony in cryptocurrency
                      cases revolving around blockchain technology. Moreover,
                      they skillfully employ transition words to enhance the
                      clarity and coherence of their explanations. We understand
                      the importance of clear and concise explanations,
                      especially when dealing with judges and law enforcement
                      officers who may have limited knowledge in this domain.
                      Consequently, our objective is to bridge the gap and
                      facilitate a smooth progression of the case.
                    </p>
                    <h3>
                      Comprehensive Cryptocurrency Analysis and Investigation
                    </h3>
                    <p>
                      Our team at Greyzone Consulting conducts thorough{" "}
                      <a href="/solutions/cryptocurrency-investigation-compliance/cryptocurrency-investigation/">
                        cryptocurrency analysis and investigations
                      </a>{" "}
                      to deliver customized reports and case responses for our
                      clients. We comprehend the complexities and unique aspects
                      of cryptocurrency and blockchain technology. Utilizing our
                      expertise, we provide in-depth explanations that are easy
                      to understand, ensuring that all parties involved in the
                      legal proceedings grasp the underlying concepts.
                    </p>
                    <h3>Extensive International Experience</h3>
                    <p>
                      With a vast experience spanning multiple jurisdictions
                      internationally, including Europe, Australia, the U.K.,
                      the USA, New Zealand, and more, our cybercrime
                      investigators specialized in cryptocurrency have dealt
                      with numerous cryptocurrency-related cases. As a result,
                      they possess a deep understanding of the subject matter.
                      Furthermore, their use of transition words enhances the
                      coherence and flow of their explanations, making it easier
                      for judges, juries, and law enforcement officers to follow
                      along. Our strong network of legal connections enhances
                      our ability to handle complex legal situations
                      effectively. Additionally, we are proud to be Certified,
                      allowing us to leverage advanced tools and methodologies
                      to achieve successful outcomes.
                    </p>
                    <h3>Secure Successful Outcomes with Greyzone Consulting</h3>
                    <p>
                      Trust Greyzone Consulting’s expert witnesses to bridge the
                      knowledge gap in cryptocurrency-related legal proceedings.
                      Our team of certified experts is dedicated to offering
                      comprehensive explanations. Moreover, they skillfully
                      incorporate transition words to guide the readers’
                      understanding and facilitate the flow of information.
                      Consequently, judges, juries, and law enforcement officers
                      gain a clear understanding of the subject matter. Benefit
                      from our extensive international experience and the
                      utilization of advanced tools and methodologies.{" "}
                      <a href="contact-us">Contact Greyzone Consulting</a> today
                      to secure successful outcomes in your
                      cryptocurrency-related legal cases.
                    </p>
                    <div className="card__ctrl">
                      <a
                        href="/solutions/cryptocurrency-investigation-compliance/expert-cryptocurrency-witness-services/"
                        aria-describedby="woocommerce_loop_add_to_cart_link_describedby_605"
                        data-quantity="1"
                        className="button product_type_simple"
                        data-product_id="605"
                        data-product_sku=""
                        aria-label="Read more about “Expert Witness for Cryptocurrency”"
                        rel="nofollow"
                      >
                        Read more
                      </a>
                      <span
                        id="woocommerce_loop_add_to_cart_link_describedby_605"
                        className="screen-reader-text"
                      ></span>
                      <span className="card__price"></span>
                    </div>
                  </div>
                </div>

                <div className="card__desc wow animate__animated animate__fadeInUp">
                  <h3 className="title card__subtit">
                    <span>Description</span>
                  </h3>
                  <p>
                    In cases involving cryptocurrencies where it has been
                    decided to escalate it to the competent authorities and a
                    process with a court is taking place, the assistance of an
                    expert witness may help judges and juries understand how
                    these currencies work and which regulations, if any, apply.
                  </p>
                  <p>
                    Cryptocurrency expert witnesses can help the authorities—who
                    often have little to no knowledge of blockchain
                    technology—to understand the particularities of
                    cryptocurrencies, how they function as currency, how they
                    can be traced, and how the details of their use might be
                    tracked, erased, or altered. Here, an expert may be asked to
                    testify or may support a legal team by helping attorneys and
                    their staff understand how cryptocurrencies work.
                  </p>
                  <p>
                    At Greyzone Consulting, we are a team that counts with
                    certified experts for matters involving cryptocurrency and
                    blockchain technology. We’re available to offer expert
                    witness testimony in cases connected to blockchain
                    technology.
                  </p>
                  <p>
                    Our cybercrime investigators have operated in many
                    jurisdictions internationally, including most of Europe,
                    Australia, the U.K., the USA, New Zealand, and many more. We
                    have dealt with hundreds of cases, have dozens of legal
                    connections, and more importantly, are Chainalysis Reactors
                    Certified (CRC), which we utilize to reach successful
                    outcomes.
                  </p>
                </div>
              </div>
            </section>
          </ShadowDOM.div>
        </>
      )}

      {id === "in-depth-cryptocurrency-investigation-services" && (
        <>
          <ShadowDOM.div>
            <style>
              {`
                            @import url(https://tandhconsult.com/wp-content/themes/th/style.css);
                        `}
            </style>
            <section className="card" id="card">
              <div className="container">
                <h1 className="title card__name wow animate__animated animate__fadeInLeft">
                  <span>In-Depth Cryptocurrency Investigation Services</span>
                </h1>
                <div className="card__row">
                  <picture className="card__pic wow animate__animated animate__fadeInUp">
                    <img src={`${import.meta.env.VITE_REDIRECT}/img/In_depthCrypto.jpg`} alt="In_depthCrypto" />
                  </picture>
                  <div className="card__right wow animate__animated animate__fadeInRight">
                    <h2>
                      Cryptocurrency Fraud Investigation – Safeguard Your
                      Investments with Greyzone Consulting
                    </h2>
                    <p>
                      Are you concerned about the rising risks associated with
                      cryptocurrency speculation? As virtual currency markets
                      gain popularity, instances of investment fraud, theft, and
                      price manipulation are on the rise. At Greyzone
                      Consulting, we specialize in comprehensive fraud and theft
                      cryptocurrency investigations, providing peace of mind for
                      investors, businesses, public agencies, financial
                      advisors, and law firms.
                    </p>
                    <p>
                      Greyzone Consulting specializes in cryptocurrency
                      investigation, offering unparalleled expertise with a
                      proven track record. Trusted by law enforcement and backed
                      by over 1200 successful investigations, we ensure the
                      security and transparency of your crypto ventures.
                    </p>
                    <div className="card__ctrl">
                      <a
                        href="/solutions/cryptocurrency-investigation-compliance/cryptocurrency-investigation/"
                        aria-describedby="woocommerce_loop_add_to_cart_link_describedby_599"
                        data-quantity="1"
                        className="button product_type_simple"
                        data-product_id="599"
                        data-product_sku=""
                        aria-label="Read more about “Cryptocurrency Investigation”"
                        rel="nofollow"
                      >
                        Read more
                      </a>
                      <span
                        id="woocommerce_loop_add_to_cart_link_describedby_599"
                        className="screen-reader-text"
                      ></span>
                      <span className="card__price"></span>
                    </div>
                  </div>
                </div>

                <div className="card__desc wow animate__animated animate__fadeInUp">
                  <p>
                    The dynamic world of cryptocurrency presents both
                    opportunities and challenges. As digital currencies gain
                    traction, they also attract a myriad of sophisticated
                    threats. At Greyzone Consulting, we’ve dedicated ourselves
                    to mastering the art and science of cryptocurrency
                    investigation, standing as pillars of trust and authority in
                    this intricate landscape.
                  </p>
                  <strong>
                    Why Choose Greyzone Consulting for Cryptocurrency
                    Investigation:
                  </strong>
                  <ul>
                    <li>
                      <strong>A Legacy of Excellence:</strong> With more than
                      1200 successful cryptocurrency investigations over four
                      years, our expertise is both vast and deep. Each
                      investigation has refined our approach, making us the
                      go-to experts in the field.
                    </li>
                    <li>
                      <strong>Law Enforcement’s Trusted Partner:</strong> Our
                      commitment to thoroughness and accuracy has garnered
                      respect and collaboration from law enforcement agencies.
                      Their consistent appreciation for our cryptocurrency
                      investigation reports highlights the actionable and
                      pivotal insights we provide, enabling them to advance
                      cases with confidence.
                    </li>
                    <li>
                      <strong>Cutting-Edge Tools & Techniques:</strong> Our
                      team, equipped with certifications and unparalleled
                      experience, leverages leading tools like Crystal
                      Blockchain and BIG (Blockchain Intelligence Group). This
                      arsenal, combined with our proprietary investigative
                      techniques, ensures that our cryptocurrency investigation
                      approach remains second to none.
                    </li>
                  </ul>
                  <strong>
                    Delving Deeper into Our Cryptocurrency Investigation
                    Services:
                  </strong>
                  <ul>
                    <li>
                      <strong>Cryptocurrency Intelligence Report:</strong>{" "}
                      Beyond a mere report, this is a comprehensive analysis of
                      your case. From identifying potential threats to tracing
                      complex transaction paths, our report provides a
                      360-degree view, all delivered within a prompt 20 working
                      days.
                    </li>
                    <li>
                      <strong>Customized Strategy:</strong> Recognizing that no
                      two cases are identical, our specialists engage in
                      in-depth consultations to understand your unique
                      situation. This allows us to tailor our cryptocurrency
                      investigation strategy, ensuring that our recommendations
                      are both relevant and effective.
                    </li>
                  </ul>
                  <p>
                    <img
                      decoding="async"
                      className="aligncenter wp-image-28767 size-large"
                      src="https://tandhconsult.com/wp-content/uploads/2021/07/cryptocurrency_investigation_process_tandhconsult_background_line-1-820x1024.png"
                      alt="cryptocurrency investigation process greyzone"
                      width="640"
                      height="799"
                      data-pin-description="cryptocurrency investigation process greyzone"
                    />
                  </p>
                  <strong>Beyond Cryptocurrency Investigation:</strong>
                  <p>
                    While cryptocurrency investigation is our forte, our
                    expertise doesn’t end there. Greyzone Consulting also
                    extends its services to:
                  </p>
                  <ul>
                    <li>
                      <strong>Fraud Companies Investigation:</strong> Unearthing
                      deceptive entities that might threaten your business or
                      investments.
                    </li>
                    <li>
                      <strong>Expert Witness Services:</strong> Leveraging our
                      expertise to provide authoritative testimonies in legal
                      settings.
                    </li>
                    <li>
                      <strong>
                        Business Due Diligence & Background Checks:
                      </strong>{" "}
                      Offering businesses the insights they need to make
                      informed decisions.
                    </li>
                  </ul>
                  <p>
                    In the perplexing world of cryptocurrency, clarity and
                    security are paramount. Greyzone Consulting is here to be
                    your guiding light. By scheduling a consultation, you’re
                    taking the first step towards safeguarding your interests in
                    the digital currency domain.
                  </p>
                </div>
              </div>
            </section>
          </ShadowDOM.div>
        </>
      )}

      {id === "general-cryptocurrency-intelligence-reports" && (
        <>
          <ShadowDOM.div>
            <style>
              {`
                            @import url(https://tandhconsult.com/wp-content/themes/th/style.css);
                        `}
            </style>
            <section className="card" id="card">
              <div className="container">
                <h1 className="title card__name wow animate__animated animate__fadeInLeft">
                  <span>General Cryptocurrency Intelligence Reports</span>
                </h1>
                <div className="card__row">
                  <picture className="card__pic wow animate__animated animate__fadeInUp">
                    <img
                      src={`${import.meta.env.VITE_REDIRECT}/img/Intelligence_report.jpg`}
                      alt="Intelligence_report"
                    />
                  </picture>
                  <div className="card__right wow animate__animated animate__fadeInRight">
                    <p>
                      Delve deeper into your cryptocurrency transactions with
                      our comprehensive report. Leveraging the cutting-edge
                      tools of Crystal and Blockchain Intelligence Group (BIG),
                      we analyze, trace, and provide actionable insights into
                      your blockchain activities. Secure your assets and
                      reputation with our expert-led investigations, delivered
                      within 20 working days.
                    </p>
                    <div className="card__ctrl">
                      <a
                        href="/solutions/cryptocurrency-investigation-compliance/general-cryptocurrency-intelligence-reports/"
                        aria-describedby="woocommerce_loop_add_to_cart_link_describedby_597"
                        data-quantity="1"
                        className="button product_type_simple"
                        data-product_id="597"
                        data-product_sku=""
                        aria-label="Read more about “Cryptocurrency Intelligence Report”"
                        rel="nofollow"
                      >
                        Read more
                      </a>
                      <span
                        id="woocommerce_loop_add_to_cart_link_describedby_597"
                        className="screen-reader-text"
                      ></span>
                      <span className="card__price"></span>
                    </div>
                  </div>
                </div>

                <div className="card__desc wow animate__animated animate__fadeInUp">
                  <p>
                    <strong>
                      Cryptocurrency Intelligence Report – Your Shield in the
                      Cryptocurrency Realm
                    </strong>
                  </p>
                  <p>
                    In the dynamic landscape of cryptocurrency, the emergence of
                    deceptive activities poses challenges even for the seasoned.
                    While cryptocurrencies like Bitcoin, Ethereum, and USDT
                    operate on the transparent foundation of blockchain,
                    decoding the web of transactions necessitates expertise and
                    advanced tools.
                  </p>
                  <strong>
                    Why Greyzone Consulting’s Cryptocurrency Intelligence Report
                    is Unparalleled:
                  </strong>
                  <ol>
                    <li>
                      <strong>Premium Tools for Precision:</strong> At Greyzone
                      Consulting, our collaboration with industry leaders,
                      Crystal and Blockchain Intelligence Group (BIG), empowers
                      us to traverse the multifaceted maze of cryptocurrency
                      transactions. These platforms are instrumental in
                      unearthing transaction pathways, tackling high-stake
                      cybercrimes, and connecting digital actions to tangible
                      entities.
                    </li>
                    <li>
                      <strong>Recover and Secure Your Assets:</strong> Whether
                      you’ve fallen prey to scams, hacks, or ransomware attacks,
                      our service is tailored to trace and potentially recover
                      lost or stolen cryptocurrencies. Our blockchain forensic
                      specialists decipher intricate transactions, spotlight
                      suspicious addresses, and offer strategic insights,
                      amplifying asset recovery prospects.
                    </li>
                    <li>
                      <strong>Real-world Entity Linkage:</strong> The
                      pseudonymous nature of blockchain can mask real-world
                      identities. Our expertise shines in linking these obscured
                      transactions to tangible organizations or individuals.
                      Comprehensive reports, augmented with lucid visuals,
                      elucidate the transaction flow, offering a panoramic view
                      of associated activities.
                    </li>
                    <li>
                      <strong>Fortify Legal Endeavors:</strong> Our proficiency
                      isn’t confined to investigation. We extend our support in
                      legal spheres, offering expert witness testimony and
                      concrete evidential statements rooted in blockchain
                      analysis. Catering to both criminal and civil legal cases,
                      we mold our services uniquely for each case, with a
                      staunch emphasis on confidentiality and security.
                    </li>
                    <li>
                      <strong>Prompt, Clear, and Actionable Reporting:</strong>{" "}
                      Ensuring timely delivery, our Cryptocurrency Intelligence
                      Report reaches you within 20 working days. Each report is
                      structured to provide clarity, actionable insights, and
                      strategic recommendations.
                    </li>
                    <li>
                      <strong>Client-Centric Approach:</strong> Central to
                      Greyzone Consulting is an unwavering commitment to our
                      clients. From the complimentary initial consultation to
                      in-depth discussions, our team stands ready to address
                      your concerns, offer guidance, and ensure peace of mind.
                    </li>
                  </ol>
                  <p>
                    <strong>
                      Entrust your cryptocurrency concerns with Greyzone
                      Consulting’s Cryptocurrency Intelligence Report — a
                      synthesis of expertise, technology, and dedication.
                    </strong>
                  </p>
                </div>
              </div>
            </section>
          </ShadowDOM.div>
        </>
      )}

      {id === "support-for-cryptocurrency-data-collection" && (
        <>
          <ShadowDOM.div>
            <style>
              {`
                            @import url(https://tandhconsult.com/wp-content/themes/th/style.css);
                        `}
            </style>
            <section className="card" id="card">
              <div className="container">
                <h1 className="title card__name wow animate__animated animate__fadeInLeft">
                  <span>Support for Cryptocurrency Data Collection</span>
                </h1>
                <div className="card__row">
                  <picture className="card__pic wow animate__animated animate__fadeInUp">
                    <img src={`${import.meta.env.VITE_REDIRECT}/img/Data_Collection.jpg`} alt="Data_Collection" />
                  </picture>
                  <div className="card__right wow animate__animated animate__fadeInRight">
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <div className="card__ctrl">
                      <a
                        href="/solutions/cryptocurrency-investigation-compliance/cryptocurrency-information-gathering-support/"
                        aria-describedby="woocommerce_loop_add_to_cart_link_describedby_589"
                        data-quantity="1"
                        className="button product_type_simple"
                        data-product_id="589"
                        data-product_sku=""
                        aria-label="Read more about “Cryptocurrency Information Gathering Support”"
                        rel="nofollow"
                      >
                        Read more
                      </a>
                      <span
                        id="woocommerce_loop_add_to_cart_link_describedby_589"
                        className="screen-reader-text"
                      ></span>
                      <span className="card__price"></span>
                    </div>
                  </div>
                </div>

                <div className="card__desc wow animate__animated animate__fadeInUp">
                  <h3 className="title card__subtit">
                    <span>Description</span>
                  </h3>
                  <p>
                    Many clients who come to us fell victim to cryptocurrency
                    scams without even knowing. As scammers improve upon and
                    diversify their methods, cryptocurrencies become a more
                    integral tool that they use to get away with their actions.
                    In some cases, clients are advised by fraudsters to send
                    money to cryptocurrency exchanges. This leads to many
                    sending the money believing that they are purchasing goods
                    or services, only to then find out that their money was
                    exchanged for non-fiat currency. As such, banks are no
                    longer liable for those payments and do not have chargeback
                    rights over them, as laid out by the major card providers,
                    Visa and Mastercard. In the end, this is a way for the
                    suspects to protect themselves due to the complexity of
                    recovering the converted money.
                  </p>
                  <p>
                    When this happens, the only way to proceed is to contact the
                    beneficiary crypto exchanges in order to request additional
                    information regarding the wallet addresses that the client
                    sent their cryptocurrency to. This process might sound
                    simple on paper, but its execution is another matter
                    entirely. It depends on myriad factors ranging from the
                    country where the cryptocurrency exchange is based, which
                    jurisdictions and laws they follow, and how the exchange
                    platform responds to requests. On some occasions, police
                    intervention and assistance in obtaining the wallet
                    addresses becomes necessary. Fortunately, some
                    cryptocurrency exchanges are willing to cooperate and
                    provide the information requested of them from the get-go.
                  </p>
                  <p>
                    Our team is well versed and experienced in the handling of
                    cases where the clients cannot provide wallet addresses.
                    Until now, we have been very successful in obtaining any
                    missing wallet addresses pertaining to our cases.
                  </p>
                  <p>
                    At Greyzone our fundamental purpose is to provide you with
                    the highest quality attention and services. You can always
                    contact our agents, who will be more than happy to assist
                    you in your needs and reassure you should you have any
                    doubts.
                  </p>
                </div>
              </div>
            </section>
          </ShadowDOM.div>
        </>
      )}

      {id === "comprehensive-due-diligence-solutions" && (
        <>
          <ShadowDOM.div>
            <style>
              {`
                            @import url(https://tandhconsult.com/wp-content/themes/th/style.css);
                        `}
            </style>
            <section className="card" id="card">
              <div className="container">
                <h1 className="title card__name wow animate__animated animate__fadeInLeft">
                  <span>Comprehensive Due Diligence Solutions</span>
                </h1>
                <div className="card__row">
                  <picture className="card__pic wow animate__animated animate__fadeInUp">
                    <img src={`${import.meta.env.VITE_REDIRECT}/img/due_diligence.jpg`} alt="due_diligence" />
                  </picture>
                  <div className="card__right wow animate__animated animate__fadeInRight">
                    <h3>
                      <em>
                        Unlocking Actionable Insights for Informed
                        Decision-Making
                      </em>
                    </h3>
                    <p>
                      At Greyzone Consulting, we offer comprehensive due
                      diligence services that transform high-risk situations
                      into high-growth opportunities. Our unique blend of AI
                      technology, OSINT research, and access to PEP, sanctions
                      and fraud lists, and government company registers allows
                      us to deliver precise and timely results. We leverage the
                      best tools in the industry and tailor our reports to the
                      specific needs of our clients, providing them with the
                      tools they need to make confident decisions.
                    </p>
                    <p>
                      Unlike conventional due diligence service providers, we
                      don’t solely rely on automated data that may fall short of
                      providing valuable insights. While AI technology plays a
                      key role in enhancing our results, we understand the
                      importance of human touch in bridging the information gaps
                      that might be overlooked by automated systems.
                    </p>
                    <div className="card__ctrl">
                      <a
                        href="/solutions/research-and-dispute-resolution/comprehensive-due-diligence-solutions/"
                        aria-describedby="woocommerce_loop_add_to_cart_link_describedby_28523"
                        data-quantity="1"
                        className="button product_type_simple"
                        data-product_id="28523"
                        data-product_sku=""
                        aria-label="Read more about “Due Diligence Services”"
                        rel="nofollow"
                      >
                        Read more
                      </a>
                      <span
                        id="woocommerce_loop_add_to_cart_link_describedby_28523"
                        className="screen-reader-text"
                      ></span>
                      <span className="card__price"></span>
                    </div>
                  </div>
                </div>

                <div className="card__desc wow animate__animated animate__fadeInUp">
                  <p>
                    Our due diligence services provide a holistic view of your
                    target, identifying risks, value creation opportunities, and
                    data-driven decision-making. We excel at connecting
                    different aspects of your business in our tailored reports.
                  </p>
                  <p>
                    As part of our due diligence services, we offer executive
                    vetting, a crucial process in today’s competitive and
                    evolving business landscape. Our team is skilled at
                    identifying misrepresentations that can occur during the
                    hiring process, thereby protecting potential employers and
                    investors.
                  </p>
                  <h3>
                    <strong>
                      Comprehensive Insights with OSINT and Advanced Data
                      Analytics: Uncovering Hidden Gems
                    </strong>
                  </h3>
                  <p>
                    Our expertise in Open Source Intelligence (OSINT) techniques
                    allows us to uncover information hidden deep in the web,
                    including social media. This insight, combined with access
                    to government company registers and other databases, enables
                    us to provide a comprehensive understanding of potential
                    risks and opportunities.
                  </p>
                  <p>
                    Our due diligence services span across various areas
                    including commercial, operational, IT, and ESG. Our team
                    identifies and untangles problems, ensuring post-close
                    execution goes smoothly. We tailor our due diligence
                    services to your unique needs, providing you with a
                    personalized approach that gets to the heart of your
                    business needs.
                  </p>
                  <p>
                    In addition to due diligence, we provide sell-side due
                    diligence, business data analytics, business combination
                    accounting, and valuations. This well-rounded portfolio
                    supports your overall goals.
                  </p>
                  <p>
                    At Greyzone Consulting, we provide more than just data. We
                    offer insights that empower you to navigate your journey
                    with confidence and ease. Our tailored reports and top-tier
                    industry tools ensure that you receive a service that is
                    truly suited to your requirements.{" "}
                    <a href="contact-us">Get in touch with our team</a> of
                    experts today and experience the difference of
                    comprehensive, personalized due diligence services.
                  </p>
                </div>
              </div>
            </section>
          </ShadowDOM.div>
        </>
      )}

      {id === "premium-dispute-settlement-package" && (
        <>
          <ShadowDOM.div>
            <style>
              {`
                            @import url(https://tandhconsult.com/wp-content/themes/th/style.css);
                        `}
            </style>
            <section className="card" id="card">
              <div className="container">
                <h1 className="title card__name wow animate__animated animate__fadeInLeft">
                  <span>Premium Dispute Settlement Package</span>
                </h1>
                <div className="card__row">
                  <picture className="card__pic wow animate__animated animate__fadeInUp">
                    <img src={`${import.meta.env.VITE_REDIRECT}/img/premium_dispute.jpg`} alt="premium_dispute" />
                  </picture>
                  <div className="card__right wow animate__animated animate__fadeInRight">
                    <h2>Salient features</h2>
                    <p>
                      Under the “Premium Package” program, we provide our
                      customers with the following:
                    </p>
                    <ul>
                      <li>
                        Extensive investigation on the primary opposing
                        party/suspect company (Up to two main companies).
                      </li>
                      <li>Assessment of Case’s background.</li>
                      <li>Opposing party/suspect’s websites analysis.</li>
                      <li>
                        <strong>Priority</strong> evidence analysis.
                      </li>
                      <li>
                        Deep main company investigation, investigation on two
                        companies is included.
                      </li>
                      <li>Broad research of third parties involved.</li>
                      <li>
                        225 minutes of specialized phone support and
                        consultation.
                      </li>
                      <li>
                        Processing of the case, drafting of the strategic plan,
                        and sending of the Premium Case report in 4 business
                        days.
                      </li>
                      <li>
                        Dispute settlement letters. Six applications to
                        financial institutions/organizations/governmental
                        institutions are included.
                      </li>
                      <li>
                        <strong>Priority</strong> in making and sending
                        documents.
                      </li>
                    </ul>
                    <div className="card__ctrl">
                      {/* <a
                        aria-describedby="woocommerce_loop_add_to_cart_link_describedby_562"
                        data-quantity="1"
                        className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                        data-product_id="562"
                        data-product_sku=""
                        aria-label='Add to cart: “Dispute Settlement "Premium Package"”'
                        rel="nofollow"
                        data-success_message='“Dispute Settlement "Premium Package"” has been added to your cart'
                      >
                        Add to cart
                      </a>
                      <span
                        id="woocommerce_loop_add_to_cart_link_describedby_562"
                        className="screen-reader-text"
                      ></span>
                      <span className="card__price">
                        <span className="price">
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                £
                              </span>
                              7,999.00
                            </bdi>
                          </span>
                        </span>
                      </span> */}
                    </div>
                  </div>
                </div>

                <div className="card__desc wow animate__animated animate__fadeInUp">
                  <h3 className="title card__subtit">Description</h3>
                  <p>
                    At Greyzone Consulting, we pride ourselves on our proven
                    track record of securing favorable outcomes for our clients
                    over the years. Our seasoned team of professionals handle a
                    wide array of cases, including those involving a single or
                    multiple opposing parties/suspects. Our unwavering
                    commitment to high service quality, coupled with a
                    results-driven approach, assures that our clients receive
                    exceptional service.
                  </p>
                  <p>
                    Our “Premium Package” is tailor-made to provide our clients
                    with the comprehensive attention they require. This
                    all-encompassing package includes thorough investigations of
                    the companies implicated in the case, as well as
                    foundational investigations of any implicated third-party
                    companies, individuals, or organizations. This means we have
                    the capability to conduct highly specialized research to
                    fortify your case.
                  </p>
                  <p>
                    The initial step in processing a priority case involves
                    gathering all necessary evidence pertinent to the case,
                    supplemented by any information the client can provide. This
                    collected evidence forms the cornerstone of our preliminary
                    assessment, which guides us in determining the optimal
                    course of action.
                  </p>
                  <p>
                    Upon signing the agreement, all necessary documentation
                    should be provided within a 30-day timeframe. If our
                    compliance team finds any gaps in the information, they may
                    request further documents or evidence.
                  </p>
                  <p>
                    Subsequently, we delve into the evidence to understand the
                    mechanics of the fraud/misconduct, the modus operandi of the
                    suspects, and gather any other pertinent information. We
                    then conduct a detailed investigation into the companies and
                    individuals implicated, which includes scrutinizing the
                    suspects’ websites, their company information, and
                    identifying any inconsistencies in the provided data. Our
                    investigation extends to potential third parties that could
                    have been involved. The outcomes of our investigation are
                    then relayed to the client. Upon request, we can provide
                    business information or reports, though these are billed
                    separately as they are not included in the package.
                  </p>
                  <p>
                    After completing the evidence analysis, we devise a
                    strategic plan that is included in the “Premium Package”
                    case report. This report is delivered within four business
                    days from the time we have gathered sufficient evidence.
                    Client approval of the plan is required before we can begin
                    drafting the necessary applications and documents for
                    submission to the relevant institutions. The “Premium
                    Package” includes six applications, with a standard
                    turnaround time of up to five days, although this may vary
                    depending on the workload.
                  </p>
                  <h2>Salient features</h2>
                  <p>The “Premium Package” offers clients:</p>
                  <ul>
                    <li>
                      Extensive investigation on the primary opposing
                      party/suspect company (Up to two main companies).
                    </li>
                    <li>An assessment of the Case’s background.</li>
                    <li>Opposing party/suspect’s websites analysis.</li>
                    <li>
                      <strong>Priority</strong> evidence analysis.
                    </li>
                    <li>Detailed investigations of up to two main companies</li>
                    <li>Wide-ranging research into third parties involved</li>
                    <li>
                      225 minutes of specialized phone support and consultation.
                    </li>
                    <li>
                      Case processing, strategic plan drafting, and delivery of
                      the Premium Case report within four business days
                    </li>
                    <li>
                      Dispute resolution letters, with six applications to
                      financial institutions/organizations/governmental
                      institutions included
                    </li>
                    <li>
                      <strong>Priority</strong> given to document creation and
                      delivery.
                    </li>
                  </ul>
                  <p>
                    Our account managers are on hand for scheduled meetings to
                    clarify any queries, handle any urgent matters, provide
                    essential information, and respond to inquiries. While we
                    usually follow the strategic plan, it may be adapted based
                    on the responses of other parties involved in the case. As
                    such, certain steps may be revised or omitted as required.
                  </p>
                  <p>
                    For cases involving damages exceeding £250,000 or those
                    involving more than 20 transactions, please reach out to our
                    team to receive a personalized quote. We’re always available
                    to address any questions or concerns you might have. Don’t
                    hesitate to connect with the account manager assigned to
                    your case. We’re here to assist you.
                  </p>
                </div>
              </div>
            </section>
          </ShadowDOM.div>
        </>
      )}

      {id === "optimal-dispute-settlement-package" && (
        <>
          <ShadowDOM.div>
            <style>
              {`
                        @import url(https://tandhconsult.com/wp-content/themes/th/style.css);
                    `}
            </style>
            <section className="card" id="card">
              <div className="container">
                <h1 className="title card__name wow animate__animated animate__fadeInLeft">
                  <span>Optimal Dispute Settlement Package</span>
                </h1>
                <div className="card__row">
                  <picture className="card__pic wow animate__animated animate__fadeInUp">
                    <img src={`${import.meta.env.VITE_REDIRECT}/img/optimal_dispute.jpg`} alt="optimal_dispute" />
                  </picture>
                  <div className="card__right wow animate__animated animate__fadeInRight">
                    <h2>
                      <span>Salient features</span>
                    </h2>
                    <p>
                      Under the “Optimal” Tariff plan, we provide our customers
                      with:
                    </p>
                    <ul>
                      <li>Assessment of Case’s background.</li>
                      <li>Opposing party/suspect’s website analysis.</li>
                      <li>Evidence analysis.</li>
                      <li>Investigation on two companies.</li>
                      <li>Incongruence investigation.</li>
                      <li>Opposing party/suspect’s background analysis.</li>
                      <li>Broad main company investigation.</li>
                      <li>
                        Personalized attention throughout the whole process with
                        the consultant responsible for your case.
                      </li>
                      <li>
                        90 minutes of specialized phone support and
                        consultation.
                      </li>
                      <li>Case report elaboration.</li>
                      <li>
                        Dispute settlement letters – for three financial
                        institutions/organizations / governmental institutions
                        are included.
                      </li>
                    </ul>
                    <div className="card__ctrl">
                      {/* <a
                        className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                        data-product_id="558"
                        aria-label="Add to cart: “Dispute Settlement 'Optimal Package'”"
                        rel="nofollow"
                      >
                        Add to cart
                      </a>
                      <span className="card__price">
                        <span className="price">
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                £
                              </span>
                              4,199.00
                            </bdi>
                          </span>
                        </span>
                      </span> */}
                    </div>
                  </div>
                </div>

                <div className="card__desc wow animate__animated animate__fadeInUp">
                  <h3 className="title card__subtit">Description</h3>
                  <p>
                    At Greyzone Consulting we take pride in the favourable
                    results we have presented to our clients over the past
                    years. We have an experienced and professional team that has
                    been dealing with various categories of cases that involve
                    single or multiple scams. Due to this, we maintain high
                    standards of service quality and a strong vision on how to
                    best assist our clients.
                  </p>
                  <p>
                    With our “Optimal Package” we provide clients with the
                    attention they deserve. This includes extended consultation
                    time with our agents, a more thorough investigation into the
                    case, and the drafting of more applications and letters.
                    Every case is unique and we tailor our packages in
                    accordance with the needs of our clients.
                  </p>
                  <p>
                    Initially, it is essential to understand all the different
                    aspects of a client’s case, and part of this understanding
                    involves collecting all possible information on the case
                    that the client can provide. Our investigation begins with a
                    preliminary assessment of the case’s background once all the
                    required information is assembled.
                  </p>
                  <p>
                    After processing the payment and signing the agreement, the
                    required documentation from the client needs to be sent in a
                    period no longer than 30 calendar days. It should also be
                    noted that in case the evidence sent by the client proves
                    insufficient pending a review by the compliance team,
                    further evidence may be required.
                  </p>
                  <p>
                    Following the conditions outlined above, we then begin with
                    an extensive investigation into the companies/fraudsters and
                    an analysis of their website. The investigation is included
                    within the package, and we then conduct a basic search of
                    internet archives relating to the case. Finally, we analyze
                    the evidence and outline the incongruences/discrepancies
                    between the information provided to the client of the
                    suspect(s) and determine an outcome of the research.
                  </p>
                  <p>
                    The investigation conducted in this package will be
                    moderate, which means that the resources at our disposal
                    when dealing with the scammers will be limited, and will be
                    significantly dependent on the evidence received from the
                    client. Purchase of business information or reports is not
                    included in this package unless the client requests that we
                    make said purchases, at which point he will be responsible
                    for the extra expenses incurred.
                  </p>
                  <p>
                    Once we have made a comprehensive analysis of the evidence,
                    we proceed with designing the strategic plan that will be
                    implemented and includes a summary of it in the “Optimal
                    Package” case report that is delivered within 10 working
                    days. This timeframe starts after the client has been
                    notified that the evidence is sufficient to proceed, and not
                    before.
                  </p>
                  <p>
                    Following the presentation of the case report, the client
                    has to approve the information and the strategic plan
                    contained within. Once approved, we begin with drafting the
                    agreed upon applications and documents for the
                    organizations, companies, or governmental institutions
                    involved. Three financial institutions/organizations /
                    governmental institutions correspondence is included in this
                    package – upon request, we assist the client in
                    communicating with the suspect(s) or other institutions with
                    the purpose of reaching a settlement. This step is
                    especially important when it comes to regulated brokers and
                    established companies.
                  </p>
                  <p>
                    Following the delivery of the case report, we follow the
                    strategic plan and try to commit to it as much as possible.
                    However, the plan is subject to adaptation or change
                    depending on the circumstances and situations encountered in
                    the course of the case’s resolution. In the end, the steps
                    taken in the resolution of the case will vary depending on
                    the responses received from the parties involved in the
                    scam.
                  </p>
                </div>
              </div>
            </section>
          </ShadowDOM.div>
        </>
      )}

      {id === "special-dispute-settlement-package" && (
        <>
          <ShadowDOM.div>
            <style>
              {`
                            @import url(https://tandhconsult.com/wp-content/themes/th/style.css);
                        `}
            </style>
            <section className="card" id="card">
              <div className="container">
                <h1 className="title card__name wow animate__animated animate__fadeInLeft">
                  <span>Special Dispute Settlement Package</span>
                </h1>
                <div className="card__row">
                  <picture className="card__pic wow animate__animated animate__fadeInUp">
                    <img src={`${import.meta.env.VITE_REDIRECT}/img/special_dispute.jpg`} alt="special_dispute" />
                  </picture>
                  <div className="card__right wow animate__animated animate__fadeInRight">
                    <h2>
                      <span>Salient features</span>
                    </h2>
                    <p>
                      Dispute Settlement “Special Package” is characterized by
                      the following conditions:
                    </p>
                    <ul>
                      <li>
                        First free consultation call with our recovery
                        specialist
                      </li>
                      <li>
                        We will match the client with the consultant who best
                        fits their needs
                      </li>
                      <li>
                        Personalized attention throughout the whole process with
                        the consultant responsible for your case
                      </li>
                      <li>Consultation time is limited by mutual agreement</li>
                      <li>
                        The number of investigations, statements, reports are
                        decided on an individual basis
                      </li>
                      <li>
                        The cost depends on the above factors, as well as on the
                        complexity of the case and is approved bilaterally.
                      </li>
                    </ul>
                    <div className="card__ctrl">
                      <a
                        href="/solutions/research-and-dispute-resolution/special-dispute-settlement-package/"
                        className="button product_type_simple"
                        aria-label="Read more about “Dispute Settlement 'Special Package'”"
                        rel="nofollow"
                      >
                        Read more
                      </a>
                      <span className="card__price"></span>
                    </div>
                  </div>
                </div>
                <div className="card__desc wow animate__animated animate__fadeInUp">
                  <h3 className="title card__subtit">Description</h3>
                  <p>
                    Even though our packages are designed to cover all the
                    bases, it is sometimes necessary to specialize and adjust
                    our cases according to the needs and requirements of our
                    clients. Since every case is unique, not all of our clients
                    need to make use of every facet of Greyzone’s default
                    packages.
                  </p>
                  <p>
                    This might be due to several reasons, such as when clients
                    take the initiative on their own, before deciding to contact
                    us. In such cases, it is unnecessary to create a case report
                    or conduct a full investigation. Instead, reports and
                    letters would suffice to resolve the issues presented by the
                    case. For these reasons, we have created this “Special
                    Package” in which the client, after discussing the
                    circumstances of his/her case, decides on how to best
                    benefit from our assistance.
                  </p>
                  <p>
                    Additionally, many clients turn to us after problems with
                    several unscrupulous organizations that may have some kind
                    of connection with one another. In such cases, it is
                    important to consider and analyze the various aspects of the
                    case before commencing the investigation, so as to not waste
                    precious time. Special cases such as these require an
                    innovative and unique approach, as well as collaboration
                    with the relevant authorities, jurisdictions, and legal
                    organizations. This is best achieved through specialists and
                    experts, such as the ones at our disposal.
                  </p>
                  <p>
                    You can discuss the relevant factors of your case with your
                    assigned account manager so that we can create the package
                    that best suits your needs and that allows us to achieve
                    your goals. Our team will be more than happy to listen to
                    your concerns and clarify any doubts that you may have.
                  </p>
                </div>
              </div>
            </section>
          </ShadowDOM.div>
        </>
      )}

      {id === "basic-dispute-settlement-package" && (
        <>
          <ShadowDOM.div>
            <style>
              {`
                            @import url(https://tandhconsult.com/wp-content/themes/th/style.css);
                        `}
            </style>
            <section className="card" id="card">
              <div className="container">
                <h1 className="title card__name wow animate__animated animate__fadeInLeft">
                  <span>Basic Dispute Settlement Package</span>
                </h1>
                <div className="card__row">
                  <picture className="card__pic wow animate__animated animate__fadeInUp">
                    <img src={`${import.meta.env.VITE_REDIRECT}/img/basic_dispute.jpg`} alt="basic_dispute" />
                  </picture>
                  <div className="card__right wow animate__animated animate__fadeInRight">
                    <h2>Salient features</h2>
                    <p>The Basic Tariff has the following salient features:</p>
                    <ul>
                      <li>Assessment of Case’s background.</li>
                      <li>
                        Opposing party/suspect’s website and background
                        analysis.
                      </li>
                      <li>
                        Evidence analysis. Investigation on the main company.
                      </li>
                      <li>Incongruence investigation.</li>
                      <li>
                        Personalized attention throughout the whole process with
                        the consultant responsible for your case.
                      </li>
                      <li>
                        60 minutes of specialized phone support and
                        consultation.
                      </li>
                      <li>Case report elaboration.</li>
                      <li>
                        Dispute settlement letters – for two financial
                        institutions/ organizations/ governmental institutions
                        are included.
                      </li>
                    </ul>
                    <div className="card__ctrl">
                      {/* <a
                        className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                        aria-label="Add to cart: “Dispute Settlement 'Basic Package'”"
                        rel="nofollow"
                      >
                        Add to cart
                      </a>
                      <span className="card__price">
                        <span className="price">
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                £
                              </span>
                              2,049.00
                            </bdi>
                          </span>
                        </span>
                      </span> */}
                    </div>
                  </div>
                </div>

                <div className="card__desc wow animate__animated animate__fadeInUp">
                  <h3 className="title card__subtit">Description</h3>
                  <p>
                    At Greyzone Consulting we take pride in the favorable
                    results we have presented to our clients over the past
                    years. We have an experienced and professional team that has
                    been dealing with various categories of cases that involve
                    single or multiple scams. Due to this, we maintain high
                    standards of service quality and a strong vision on how to
                    best assist our clients.
                  </p>
                  <p>
                    The initial step in the processing of a priority case is the
                    proper assembly and gathering of all necessary evidence
                    pertaining to the case, in addition to all that the client
                    can provide on his end. Based on the collected evidence, an
                    assessment is made that determines where and how we can make
                    the first move.
                  </p>
                  <p>
                    Once the agreement is signed, the list of the documentation
                    required by the agent must be sent in a period no longer
                    than 30 calendar days. Additionally, should the compliance
                    team find that some aspects of the information provided by
                    the client are insufficient, further documents/evidence may
                    be required.
                  </p>
                  <p>
                    After the information and the strategic plan contained in
                    the “Basic Package” case report is approved by the client,
                    we begin with drafting the agreed-upon applications and
                    documents to be sent to the financial and governmental
                    institutions involved, as well as other organizations. Only
                    two institutions correspondence is included in this package.
                    Upon request, we assist the client in corresponding with the
                    company/organization that defrauded the client, with the aim
                    of reaching a settlement. This step is especially important
                    when it comes to dealing with regulated brokers or
                    established companies. Be aware that with this package, the
                    waiting time to receive documents and letters drafted by our
                    team is the standard timeframe of up to 7 business days.
                    Delays may also occur due to the workload. However, your
                    account manager is always available should you have any
                    inquires or require any clarification.
                  </p>
                  <p>
                    Should you have any further questions or doubts, do not
                    hesitate to contact our agents, we will be happy to help
                    you.
                  </p>
                </div>
              </div>
            </section>
          </ShadowDOM.div>
        </>
      )}

      {id === "chargeback-consultation" && (
        <>
          <ShadowDOM.div>
            <style>
              {`
                            @import url(https://tandhconsult.com/wp-content/themes/th/style.css);
                        `}
            </style>
            <section className="card" id="card">
              <div className="container">
                <h1 className="title card__name wow animate__animated animate__fadeInLeft">
                  <span>Chargeback Consultation</span>
                </h1>
                <div className="card__row">
                  <picture className="card__pic wow animate__animated animate__fadeInUp">
                    <img src={`${import.meta.env.VITE_REDIRECT}/img/chargeback.jpg`} alt="chargeback" />
                  </picture>
                  <div className="card__right wow animate__animated animate__fadeInRight">
                    <p>
                      Disputes can be easily handled with Chargeback
                      Consultation: As a chargeback dispute is an incredibly
                      complex process that involves various parties, you may
                      want to consider hiring a company with experience in this
                      field. Our trained professionals are versed in all aspects
                      of the process and will advise you in the various steps
                      and how to avoid any errors.
                    </p>
                    <h2>
                      Under Chargeback Consultation we provide our customers
                      with:
                    </h2>
                    <ul>
                      <li>
                        Pre-Consultation Assessment – the pre-consultation
                        questionnaire (KYC form) that the client must fill prior
                        to assessment/consultation along with a client’s
                        information form which will be used for consultation.
                      </li>
                      <li>45 minutes of consultation with our specialist.</li>
                    </ul>
                    <div className="card__ctrl">
                      {/* <a className="button product_type_simple add_to_cart_button ajax_add_to_cart">
                        Add to cart
                      </a>
                      <span
                        id="woocommerce_loop_add_to_cart_link_describedby_583"
                        className="screen-reader-text"
                      ></span>
                      <span className="card__price">
                        <span className="price">
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                £
                              </span>
                              189.00
                            </bdi>
                          </span>
                        </span>
                      </span> */}
                    </div>
                  </div>
                </div>

                <div className="card__desc wow animate__animated animate__fadeInUp">
                  <h3 className="title card__subtit">Description</h3>
                  <p>
                    At Greyzone Consulting, we are experts in transactions that
                    involve payments with debit and credit cards. The variety
                    and complexity of the situations in which people lose money
                    due to scams in which card transactions are present are
                    exhaustive. Visa and MasterCard, the major card issuers,
                    have specific rules of operation that financial institutions
                    using their cards must comply with. As a customer, you have
                    established rights that must be respected, but in order for
                    your rights to be respected, you need to properly understand
                    them and how the chargeback process is conducted.
                  </p>
                  <p>
                    When the dispute leads to a positive result, a transfer is
                    made by the issuing bank to the customer, the amount of
                    which will be debited from the involved merchant and
                    returned to the payer. In simple terms, it is the reversal
                    of a credit or debit card payment that comes directly from
                    the bank and operates under the rules of the card issuer, be
                    it VISA or MasterCard.
                  </p>
                  <p>The process is as follows:</p>
                  <ol>
                    <li>
                      The cardholder files a chargeback/A dissatisfied customer
                      contacts the bank/issuer and asks for a refund.
                    </li>
                    <li>
                      The issuer reviews and assigns a code to the case. These
                      codes explain the reasons behind the issuing of a dispute
                      (for example: “goods or services not as described”). Each
                      code also comes with its own set of rules and conditions
                      (filing time limits, necessary documentation, etc…)
                    </li>
                    <li>
                      The issuer investigates and takes action. At this point,
                      the issuer should fully investigate the cardholder’s
                      chargeback claim, and make sure that all the regulations
                      have been adhered to and that the complaint has merit. If
                      the cardholder has a valid claim, the funds will be
                      removed from the merchant’s bank account and credited to
                      the cardholder. Notification of the chargeback will be
                      sent to the merchant’s bank. (If the cardholder does not
                      have a valid claim, the chargeback will simply be null and
                      void.)
                    </li>
                    <li>
                      The acquirer reviews the chargeback and takes action. The
                      credit card networks (Visa, Mastercard) have created
                      various merchant’s rights, including the right to dispute
                      an illegitimate chargeback. If inaccurate claims are made,
                      the merchant can try to regain profits that were
                      fraudulently removed.
                    </li>
                  </ol>
                  <p>
                    Our team is well versed and highly experienced in this
                    process and can assist you with raising a chargeback dispute
                    with the bank in question. Remember, a chargeback is not
                    just a single event, it is a process, and one that can be
                    lengthy and convoluted for all parties involved. For the
                    same reason, it is important to have a clear and proper
                    understanding of how to do it, as a single wrong word could
                    be disruptive to the whole process.
                  </p>
                  <p>
                    At Greyzone our fundamental purpose is to give you the best
                    attention and quality of service. As such, you can always
                    discuss your needs and concerns with our agents, who will be
                    more than happy to listen to and assist you.
                  </p>
                  <h2>Salient features</h2>
                  <p>
                    The Client hereby agrees to engage the Consultant to provide
                    the Client with the following consulting services under the
                    Chargeback Processing Consultation:
                  </p>
                  <ul>
                    <li>
                      Pre-Consultation Assessment – the pre-consultation
                      questionnaire (KYC form) that the client must fill prior
                      to assessment/consultation along with a client’s
                      information form which will be used for consultation.
                    </li>
                    <li>45 minutes of consultation with our specialist.</li>
                  </ul>
                  <p>
                    The Services will also include any other consulting tasks
                    which the Parties may agree on. The Consultant hereby agrees
                    to provide such Services to the Client.
                  </p>
                  <p>One-time payment – 189 GBP.</p>
                </div>
              </div>
            </section>
          </ShadowDOM.div>
        </>
      )}

      {id === "technical-document-translation-non-certified" && (
        <>
          <ShadowDOM.div>
            <style>
              {`
                            @import url(https://tandhconsult.com/wp-content/themes/th/style.css);
                        `}
            </style>
            <section className="card" id="card">
              <div className="container">
                <h1 className="title card__name wow animate__animated animate__fadeInLeft">
                  <span>Technical Document Translation (Non-Certified)</span>
                </h1>
                <div className="card__row">
                  <picture className="card__pic wow animate__animated animate__fadeInUp">
                    <img
                      src={`${import.meta.env.VITE_REDIRECT}/img/technical_document.jpg`}
                      alt="technical_document"
                    />
                  </picture>
                  <div className="card__right wow animate__animated animate__fadeInRight">
                    <h2>Salient features</h2>
                    <p>Supported languages:</p>
                    <ul>
                      <li>Spanish</li>
                      <li>Arabic</li>
                      <li>Russian</li>
                      <li>Urdu</li>
                      <li>Hungarian</li>
                      <li>French</li>
                      <li>German</li>
                    </ul>
                    {/* <div className="card__ctrl">
                      <a
                        className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                        aria-label="Add to cart: “Technical translation (non-certified)”"
                        rel="nofollow"
                      >
                        Add to cart
                      </a>
                      <span className="card__price">
                        <span className="price">
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                £
                              </span>
                              49.00
                            </bdi>
                          </span>
                        </span>
                      </span>
                    </div> */}
                  </div>
                </div>

                <div className="card__desc wow animate__animated animate__fadeInUp">
                  <h3 className="title card__subtit">Description</h3>
                  <h4>
                    Translations that do not require a Court Interpreter’s
                    certification
                  </h4>
                  <p>
                    <strong>Non-certified translations</strong> are{" "}
                    <em>translations</em> that do not bear the Court
                    Interpreter’s certification. Such translations are usually
                    made electronically (Microsoft Word, Microsoft Excel,
                    Microsoft PowerPoint, and, in some cases, in PDF).
                  </p>
                  <p>
                    At Greyzone Consulting, we have a diverse multi-lingual team
                    that comes from a wide variety of backgrounds. Because of
                    this, we are able to offer non-certified technical
                    translations in Spanish, Arabic, Russian, Urdu, Hungarian,
                    French, and German. You can request this service when you
                    need carefully formulated translation of, for example,
                    correspondence, applications, CVs, technical documents, or
                    complex and sophisticated documents requiring specialized
                    knowledge. The technical translation service is available
                    for those who need letters or documentation written in their
                    languages (from the previously mentioned list) to
                    accommodate special requests and exceptional circumstances.
                  </p>
                  <p>
                    <strong>Non-certified translations</strong> can be printed
                    or delivered electronically. If we receive the text
                    electronically, we can overwrite the text. The goal is to
                    follow the original document format as much as possible. In
                    cases where texts contain pictures, schematic
                    representations, graphics, drawings, photographs, the
                    instructions given regarding the text must be followed.
                    Special indications in the text (for example, bold, italic,
                    underline, etc.) can be made in the translated text.
                    Standard formats are font – Arial or Times New Roman 12 pt;
                    spacing 1.5; page numbers – bottom of page, aligned center;
                    margins 2.5 cm. Different formats may be used if required by
                    the original text.
                  </p>
                  <p>
                    We are here to clarify and answer all your inquiries. If you
                    have any doubts regarding this service and what is included,
                    please ask our agents. We will be happy to help you.
                  </p>
                </div>
              </div>
            </section>
          </ShadowDOM.div>
        </>
      )}
      {id === "case-evaluation-and-documentation-services" && (
        <>
          <ShadowDOM.div>
            <style>
              {`
                            @import url(https://tandhconsult.com/wp-content/themes/th/style.css);
                        `}
            </style>
            <section className="card" id="card">
              <div className="container">
                <h1 className="title card__name wow animate__animated animate__fadeInLeft">
                  <span>Case Evaluation and Documentation Services</span>
                </h1>
                <div className="card__row">
                  <picture className="card__pic wow animate__animated animate__fadeInUp">
                    <img src={`${import.meta.env.VITE_REDIRECT}/img/case_evaluation.jpg`} alt="case_evaluation" />
                  </picture>
                  <div className="card__right wow animate__animated animate__fadeInRight">
                    <h2>
                      Wondering how we craft your comprehensive Case Assessment
                      Report?
                    </h2>
                    <p>
                      Success in investigations hinges on a deep understanding
                      of the target company. Our team of experts conducts
                      thorough case assessments. They delve deep into the
                      company’s online presence and public records. The goal? To
                      uncover any hidden inconsistencies. We strive to provide
                      you with a comprehensive case assessment report that
                      brings to light the company’s true nature. This report
                      further affirms the initial clues.
                    </p>
                    <p>
                      Consider the unique features of our Case Assessment and
                      Compilation service:
                    </p>
                    <ol>
                      <li>
                        Tailor-Made Case Assessment: Our specialists hone their
                        approach to align with the specific information in your
                        documents and forms.
                      </li>
                      <li>
                        Detailed Evidence Analysis: We scrutinize a single
                        company in detail, as part of every case report.
                      </li>
                      <li>
                        Customized Document Packages: We meet your specific
                        needs by preparing a personalized document package. This
                        can include:
                        <ul>
                          <li>A detailed case report.</li>
                          <li>
                            Evidence prepared and explained for law enforcement
                            review.
                          </li>
                          <li>
                            A comprehensive document package for state
                            authorities and regulatory bodies.
                          </li>
                        </ul>
                      </li>
                    </ol>
                    <h2>
                      Why should you opt for our Case Assessment & Compilation
                      Services?
                    </h2>
                    <p>
                      We aim to enable informed decisions. Each case is unique.
                      Therefore, we ensure to provide accurate and detailed
                      information.
                    </p>
                    <p>
                      By choosing us, you get a dedicated team of experts. They
                      stay updated with the latest investigative techniques and
                      tools. As a result, our case assessment process is always
                      comprehensive and current.
                    </p>
                    <h3>
                      We do more than just providing a detailed case report.
                    </h3>
                    <p>
                      We also offer consultation services. You can discuss the
                      case with our experts, understand the evidence, and gain
                      insights into our findings.
                    </p>
                    <p>
                      Numerous clients trust our case assessment & compilation
                      services. We attribute this to our commitment to quality,
                      precision, and confidentiality. Whether you need a
                      detailed case report or a document package for law
                      enforcement or state authorities,{" "}
                      <a href="/contact-us">we are here to assist</a>.
                    </p>
                    <p>
                      Experience the difference with our Case Assessment &
                      Compilation services. Make informed decisions,
                      confidently.
                    </p>
                    <div className="card__ctrl">
                      {/* <a
                        className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                        aria-label="Add to cart: “Case Assessment & Compilation Services”"
                        rel="nofollow"
                      >
                        Add to cart
                      </a>
                      <span className="card__price">
                        <span className="price">
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                £
                              </span>
                              499.00
                            </bdi>
                          </span>
                        </span>
                      </span> */}
                    </div>
                  </div>
                </div>

                <div className="card__desc wow animate__animated animate__fadeInUp">
                  <h3 className="title card__subtit">Description</h3>
                  <p>
                    At Greyzone Consulting, we offer a variety of services that
                    our clients can select according to their needs. With our
                    “Compilation & Case Preparation” service, we can prepare{" "}
                    <strong>one type</strong> of the following document packages
                    at the client’s choice:
                  </p>
                  <ul>
                    <li>Preparation of a case report for a client</li>
                    <li>
                      Preparation and explanation of the evidence for law
                      enforcement
                    </li>
                    <li>
                      Preparation of a package of documents for submission to
                      state authorities including regulatory agencies
                    </li>
                  </ul>
                  <p>
                    For the drafting of the Case report, the first step is to
                    understand the case. For this, we request that the client
                    sends us all the relevant documentation and evidence they
                    possess. After we carefully analyze the provided
                    documentation and conclude that it is a strong enough
                    foundation with which we can move forward, we begin the
                    investigation. Only one company is the subject of our
                    investigation with this package. We make a company’s
                    background analysis in which we determine how the scam took
                    place, as well as the modus operandi of the suspect. We then
                    make an evidence analysis where we compare the provided
                    information with our findings and point out any
                    discrepancies.
                  </p>
                  <p>
                    Once the analyses are complete, we proceed with designing a
                    strategic plan to adhere to and compile both sections in a
                    Basic case report that is delivered within 10 working days.
                    This timeframe is initiated once the client has been
                    notified that the evidence provided is sufficient enough to
                    proceed with the report, and not before. The Case report
                    contains all the information necessary for the client to
                    fully comprehend their case. It encompasses a description of
                    the Suspect, their modus operandi, a compilation of the
                    payments and transactions the client has initiated in favor
                    of the suspect, information on the company/suspect, and a
                    tailored strategic plan which entails the steps that may be
                    taken in order to achieve the client’s goals.
                  </p>
                  <p>
                    As for the file for law enforcement, this is a package of
                    documents that the client presents to their local police (or
                    any other department if applied to the situation) in order
                    to report/clarify the incident faced. Depending on the
                    complexity of a case or other personal reasons, victims of
                    scams might get confused in how to assertively describe
                    their predicament to law enforcement. Reporting is also
                    involving plenty of documentation, and that complicates
                    things even further. This is where we come in, with our
                    years of experience dealing with law enforcement and
                    preparing the necessary package of documents for the case
                    consideration. We make certain that the evidence provided to
                    law enforcement by the client will reach them in a clear,
                    descriptive, and proper form. The evidence and relevant
                    facts will be properly organized for the client to present.
                    However, it should be noted that the preparation of the
                    documentation by us does not guarantee the successful
                    acceptance of your case or a positive outcome of the police
                    investigation. Although many officers found the
                    documentation prepared by our specialists valuable and
                    helpful for investigating and progressing the case.
                  </p>
                  <p>
                    At Greyzone, our fundamental purpose is to give you the best
                    attention and quality of service. As such, you can always
                    discuss your needs and concerns with our agents, who will be
                    more than happy to listen to and assist you.
                  </p>
                </div>
              </div>
            </section>
          </ShadowDOM.div>
        </>
      )}

      {id === "application-drafting-and-processing-support" && (
        <>
          <ShadowDOM.div>
            <style>
              {`
                            @import url(https://tandhconsult.com/wp-content/themes/th/style.css);
                        `}
            </style>
            <section className="card" id="card">
              <div className="container">
                <h1 className="title card__name wow animate__animated animate__fadeInLeft">
                  <span>Application Drafting and Processing Support</span>
                </h1>
                <div className="card__row">
                  <picture className="card__pic wow animate__animated animate__fadeInUp">
                    <img
                      src={`${import.meta.env.VITE_REDIRECT}/img/Application_Drafting.jpg`}
                      alt="Application_Drafting"
                    />
                  </picture>
                  <div className="card__right wow animate__animated animate__fadeInRight">
                    <h2>Salient features</h2>
                    <p>
                      Application Processing / Drafting is characterized by the
                      following conditions:
                    </p>
                    <ul>
                      <li>
                        One letter or application tailored to the needs of the
                        client.
                      </li>
                    </ul>
                    <div className="card__ctrl">
                      {/* <a
                        className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                        aria-label="Add to cart: “Application Processing / Drafting”"
                        rel="nofollow"
                      >
                        Add to cart
                      </a>
                      <span className="card__price">
                        <span className="price">
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                £
                              </span>
                              199.00
                            </bdi>
                          </span>
                        </span>
                      </span> */}
                    </div>
                  </div>
                </div>

                <div className="card__desc wow animate__animated animate__fadeInUp">
                  <h3 className="title card__subtit">Description</h3>
                  <p>
                    Due to the complexity and diversity of the cases we have at
                    Greyzone Consulting, on some occasions, it is necessary to
                    design custom-made packages adjusted to the needs and
                    expectations of our clients. This means that it is possible
                    to purchase separate elements of our packages instead of
                    acquiring a full package. This can help when, for example,
                    the client has already taken certain steps for their case,
                    or when due to the nature of the case, the client just needs
                    specific letters or assistance with certain institutions.
                    Also, this service will be useful for you if you know
                    exactly what procedure you need to follow, but you still
                    have difficulty with writing a letter professionally,
                    preparing an application, or filling out forms. Our experts
                    will prepare a complete application that will correctly and
                    fully reflect your situation and increase the chances of
                    acceptance.
                  </p>
                  <p>
                    This option is also available for our current clients who
                    have already exhausted the content of their packages and
                    wish to continue using our services by purchasing extra
                    add-ons.
                  </p>
                  <p>
                    At Greyzone, our fundamental purpose is to give you the best
                    attention and quality of service. As such, you can always
                    discuss your needs and concerns with our agents, who will be
                    more than happy to listen to and assist you.
                  </p>
                </div>
              </div>
            </section>
          </ShadowDOM.div>
        </>
      )}
      {id === "initial-consultation-and-assessment-services" && (
        <>
          <ShadowDOM.div>
            <style>
              {`
                            @import url(https://tandhconsult.com/wp-content/themes/th/style.css);
                        `}
            </style>
            <section className="card" id="card">
              <div className="container">
                <h1 className="title card__name wow animate__animated animate__fadeInLeft">
                  <span>Initial Consultation and Assessment Services</span>
                </h1>
                <div className="card__row">
                  <picture className="card__pic wow animate__animated animate__fadeInUp">
                    <img
                      src={`${import.meta.env.VITE_REDIRECT}/img/initial_consult_assess.jpg`}
                      alt="initial_consult_assess"
                    />
                  </picture>
                  <div className="card__right wow animate__animated animate__fadeInRight">
                    <h2>Evaluate your fraud case</h2>
                    <p>
                      We understand how stressful it can be when you are
                      confronted with a situation where fraud is involved, so
                      here at Greyzone Consulting, we do our utmost to simplify
                      the process. When you come to us, you will understand
                      everything that happens before, during, and after your
                      consultation with us.
                    </p>
                    <h2>
                      Under Evaluation and Initial Consultation we provide our
                      customers with:
                    </h2>
                    <ul>
                      <li>
                        Specially tailored assignment to one of our consultants
                      </li>
                      <li>
                        Case assessment by our specialist based on the submitted
                        documents and completed forms.
                      </li>
                      <li>
                        45 minutes of consultation with the assigned specialist.
                      </li>
                      <li>Assessment of Fraud Case’s Background.</li>
                      <li>
                        Evaluation and Initial Consultation Report within 15
                        working days.
                      </li>
                    </ul>
                    <div className="card__ctrl">
                      {/* <a
                        className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                        aria-label="Add to cart: “Evaluation and Initial Consultation”"
                        rel="nofollow"
                      >
                        Add to cart
                      </a>
                      <span className="card__price">
                        <span className="price">
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                £
                              </span>
                              649.00
                            </bdi>
                          </span>
                        </span>
                      </span> */}
                    </div>
                  </div>
                </div>

                <div className="card__desc wow animate__animated animate__fadeInUp">
                  <h3 className="title card__subtit">Description</h3>
                  <p>
                    We will evaluate your case, gather all the evidence and
                    documents you need, and create a report comprising pertinent
                    information about your case so that you can start the
                    procedure. Since every client is unique and no case is the
                    same, we make sure to customize our reports to fit each
                    client’s needs. When you hire us, you get a consultant who
                    will explain to you the entire process and will actively
                    guide you.
                  </p>
                  <p>
                    The purpose of the evaluation is to determine whether your
                    evidence is sufficient enough to have a chance of winning
                    your case, as well as to assess which level of investigation
                    may be required in order to obtain a complete report. The
                    evaluation includes a company background analysis, an
                    investigation and reports on the company/website of the
                    fraudster (only one company is included in this package),
                    and an evidence analysis where we compare the provided
                    evidence with our findings and point out any discrepancies.
                    Please note that this type of case report can only be
                    drafted after all evidence from the client has been
                    collected. A basic investigation means that most of our
                    research and findings are based on the evidence provided by
                    the client.
                  </p>
                  <p>
                    After all analyses are complete, we will provide a full
                    report within 15 business days. In this time, all the
                    evidence you have provided us will have been professionally
                    evaluated and analyzed. This report will include an
                    explanation of the fraud and the modus operandi of the
                    company involved, a compilation of the payments and
                    transactions you have initiated with them, information on
                    the company/fraudster, and a tailored strategic plan that
                    entails the recommended steps that you must take in order to
                    achieve your goals.
                  </p>
                  <h2>
                    Under Evaluation and Initial Consultation we provide our
                    customers with:
                  </h2>
                  <ul>
                    <li>
                      Specially tailored assignment to one of our consultants
                    </li>
                    <li>
                      Case assessment by our specialist based on the submitted
                      documents and completed forms.
                    </li>
                    <li>
                      45 minutes of consultation with the assigned specialist.
                    </li>
                    <li>Assessment of Case’s Background.</li>
                    <li>
                      Evaluation and Initial Consultation Report within 15
                      working days.
                    </li>
                  </ul>
                  <p>One-time payment – 649 GBP.</p>
                  <p>
                    At Greyzone, our fundamental purpose is to give you the best
                    attention and quality of service. As such, you can always
                    discuss your needs and concerns with our agents, who will be
                    more than happy to listen to and assist you.
                  </p>
                </div>
              </div>
            </section>
          </ShadowDOM.div>
        </>
      )}

      {id === "background-check-services-for-employees" && (
        <>
          <ShadowDOM.div>
            <style>
              {`
                            @import url(https://tandhconsult.com/wp-content/themes/th/style.css);
                        `}
            </style>
            <section className="card" id="card">
              <div className="container">
                <h1 className="title card__name wow animate__animated animate__fadeInLeft">
                  <span>Background Check Services for Employees</span>
                </h1>
                <div className="card__row">
                  <picture className="card__pic wow animate__animated animate__fadeInUp">
                    <img
                      src={`${import.meta.env.VITE_REDIRECT}/img/background_check.jpg`}
                      alt="background_check"
                    />
                  </picture>
                  <div className="card__right wow animate__animated animate__fadeInRight">
                    <p>
                      Discover Greyzone Consulting’s premier Employee Background
                      Check services. Tailored solutions that prioritize trust,
                      accuracy, and compliance in your hiring process.
                    </p>
                    <div className="card__ctrl">
                      <a
                        href="/solutions/corporate-services/background-check-services-for-employees/"
                        className="button product_type_simple"
                        aria-label="Read more about “Employee Background Check Services”"
                        rel="nofollow"
                      >
                        Read more
                      </a>
                      <span className="card__price"></span>
                    </div>
                  </div>
                </div>

                <div className="card__desc wow animate__animated animate__fadeInUp">
                  <p>
                    In an era where information is abundant but authenticity is
                    scarce, implementing a reliable Employee Background Check is
                    pivotal for businesses aiming to secure their most valuable
                    asset: human resources. Greyzone Consulting stands at the
                    forefront of this essential service, offering unparalleled
                    insights into potential hires, ensuring businesses protect
                    their reputation and foster a safe work environment.
                  </p>
                  <h3>
                    <strong>The Essence of Comprehensive Checks</strong>
                  </h3>
                  <p>
                    Mistakes in hiring decisions can ripple through businesses.
                    As a result, they might stain reputations, dent morale, and
                    be financially draining. That’s where our service comes in.
                    Through rigorous checks, we not only bring clarity but also
                    instill confidence and security in your hiring process.
                  </p>
                  <h3>
                    <strong>
                      Global Employee Background Check Services Offered
                    </strong>
                  </h3>
                  <ol>
                    <li>
                      <strong>Academic Verification:</strong> Degrees and
                      diplomas can be deceptive. We dive deep. Authenticating
                      credentials is our forte.
                    </li>
                    <li>
                      <strong>Employment Check:</strong> Past roles can
                      illuminate a candidate’s journey. We delve into their work
                      history. We uncover patterns of excellence or red flags.
                    </li>
                    <li>
                      <strong>Reference Check:</strong> Feedback is gold. We tap
                      into professional and personal networks. The goal? A
                      multi-faceted view of the candidate.
                    </li>
                    <li>
                      <strong>ID Verification:</strong> In a world rife with
                      identity fraud, we are the gatekeepers. Authenticity is
                      ensured. Falsehoods are flagged.
                    </li>
                    <li>
                      <strong>Sanctions Screening:</strong> International
                      databases are our playground. We ensure your potential
                      hire isn’t linked to unsavory entities or activities.
                    </li>
                    <li>
                      <strong>Financial History Check:</strong> A person’s
                      financial past can be telling. We sift through it.
                      Insights into financial responsibility emerge.
                    </li>
                    <li>
                      <strong>Address Verification:</strong> A person’s
                      residence journey offers hints. Stability or constant
                      movement? We piece the puzzle together.
                    </li>
                  </ol>
                  <h3>
                    <strong>Additional Services</strong>
                  </h3>
                  <p>
                    Apart from our core offerings, we provide an array of
                    specialized checks tailored to diverse business needs. These
                    include Financial Regulatory Checks, Social Media Scrutiny,
                    and many more, ensuring a holistic background verification
                    process.
                  </p>
                  <h3>
                    <strong>Tailored Solutions, Global Reach</strong>
                  </h3>
                  <p>
                    Every business is unique, and so are its requirements. We
                    design our bespoke Employee Background Check services with
                    this principle at the forefront. Whether you’re a startup in
                    Silicon Valley or a conglomerate in Dubai, we tailor our
                    services to meet your specific needs, guaranteeing relevance
                    and accuracy.
                  </p>
                  <h3>
                    <strong>Solutions for Every Business Size</strong>
                  </h3>
                  <p>
                    Our flexibility is our strength. Whether you require a
                    single check once a year or need to process thousands every
                    month, our scalable solutions ensure that every check is
                    conducted with the same rigor and attention to detail.
                  </p>
                  <h3>
                    <strong>Why Choose Greyzone Consulting?</strong>
                  </h3>
                  <ul>
                    <li>
                      <strong>Dedicated Managers:</strong> Each client, without
                      exception, is a priority. Therefore, a personal manager
                      ensures every step is seamlessly coordinated.
                    </li>
                    <li>
                      <strong>Regulatory Mastery:</strong> Navigating the
                      complex maze of global laws is our specialty. As a result,
                      compliance isn’t just an aim; it’s our unwavering
                      standard.
                    </li>
                    <li>
                      <strong>Uncompromised Data Protection:</strong> In an era
                      where data breaches are rampant, we emerge as guardians.
                      Guided by GDPR and{" "}
                      <a href="https://www.pdpc.gov.sg/Overview-of-PDPA/The-Legislation/Personal-Data-Protection-Act">
                        PDPA
                      </a>
                      , we protect data zealously.
                    </li>
                    <li>
                      <strong>Swift Yet Meticulous:</strong> While we respect
                      timelines, we don’t compromise on quality. Thus, our
                      results strike a balance between promptness and precision.
                    </li>
                  </ul>
                  <h3>
                    <strong>
                      Beyond Individual Checks – Extending to Companies
                    </strong>
                  </h3>
                  <p>
                    At Greyzone Consulting, we recognize that understanding the
                    landscape of business partnerships is just as critical as
                    individual hiring. For this reason, we extend our expertise
                    to{" "}
                    <a href="/solutions/research-and-dispute-resolution/comprehensive-due-diligence-solutions/">
                      Due Diligence services
                    </a>{" "}
                    and{" "}
                    <a href="/solutions/corporate-services/corporate-background-verification-services/">
                      Company Background checks
                    </a>
                    . Whether you’re entering a new business partnership,
                    considering a merger, or merely seeking insights into a
                    competitor, our meticulous evaluations provide a holistic
                    view. By doing so, we ensure your business decisions are
                    rooted in clarity and foresight.
                  </p>
                </div>
              </div>
            </section>
          </ShadowDOM.div>
        </>
      )}
      {id === "corporate-background-verification-services" && (
        <>
          <ShadowDOM.div>
            <style>
              {`
                            @import url(https://tandhconsult.com/wp-content/themes/th/style.css);
                        `}
            </style>
            <section className="card" id="card">
              <div className="container">
                <h1 className="title card__name wow animate__animated animate__fadeInLeft">
                  <span>Corporate Background Verification Services</span>
                </h1>
                <div className="card__row">
                  <picture className="card__pic wow animate__animated animate__fadeInUp">
                    <img
                      src={`${import.meta.env.VITE_REDIRECT}/img/background_verification.jpg`}
                      alt="background_verification"
                    />
                  </picture>
                  <div className="card__right wow animate__animated animate__fadeInRight">
                    <p>
                      Background Check by Greyzone Consulting is a comprehensive
                      service designed to provide small and medium-sized
                      businesses with detailed insights into a company’s
                      financial health, legal status, and operational
                      transparency. Utilizing advanced AI technology and a
                      wealth of data from our proprietary database, we deliver
                      precise and reliable background checks to empower informed
                      decision-making.
                    </p>
                    <div className="card__ctrl">
                      <a
                        href="/solutions/corporate-services/corporate-background-verification-services/"
                        className="button product_type_simple"
                        aria-label="Read more about “Corporate Background Check”"
                        rel="nofollow"
                      >
                        Read more
                      </a>
                      <span className="card__price"></span>
                    </div>
                  </div>
                </div>

                <div className="card__desc wow animate__animated animate__fadeInUp">
                  <p>
                    Greyzone Consulting presents our global Background Check
                    service—a comprehensive, bespoke solution architected with
                    precision for small and medium-sized enterprises across all
                    sectors. Hailing from Budapest, we offer our expertise
                    worldwide, aiding our clients to discern the intricate
                    complexities of any company’s financial footprint, legal
                    history, and operational authenticity.
                  </p>
                  <p>
                    Our service is a testament to the harmonious blend of
                    sophisticated AI technology and the human touch of our
                    highly skilled researchers and specialists, steeped in
                    finance and legal acumen. Our potent asset is a meticulously
                    curated, proprietary database, enriched by the insights
                    gleaned from exhaustive fraud investigations spanning four
                    years. This treasure trove of data, augmented by our access
                    to a plethora of credible external databases, forms the
                    backbone of our comprehensive, insightful, and precise
                    background checks.
                  </p>
                  <p>
                    Each Background Check report—delivered as a detailed,
                    reader-friendly PDF—is the culmination of our rigorous
                    process. Every client is assigned a dedicated specialist who
                    acts as a compass, navigating them through the process and
                    offering unwavering support. We offer flexible payment
                    structures, from a one-time fee for a single company check
                    to a subscription model for clients needing frequent checks.
                    To ensure the relevance and timeliness of the data, each
                    report comes with a month of post-delivery support. At
                    Greyzone Consulting, we have an unyielding commitment to the
                    security and confidentiality of your data.
                  </p>
                  <p>
                    Engage with Greyzone Consulting’s Background Check service
                    for an unobstructed view into the corporate world. Equipped
                    with our insights, our clients can make informed decisions,
                    mitigate latent risks, and cultivate trust in their business
                    engagements. <a href="contact-us">We are here</a> to empower
                    you to navigate the labyrinth of corporate intricacies with
                    confidence.
                  </p>
                </div>
              </div>
            </section>
          </ShadowDOM.div>
        </>
      )}

      {id === "corporate-fraud-investigation-solutions" && (
        <>
          <ShadowDOM.div>
            <style>
              {`
                            @import url(https://tandhconsult.com/wp-content/themes/th/style.css);
                        `}
            </style>
            <section className="card" id="card">
              <div className="container">
                <h1 className="title card__name wow animate__animated animate__fadeInLeft">
                  <span>Corporate Fraud Investigation Solutions</span>
                </h1>
                <div className="card__row">
                  <picture className="card__pic wow animate__animated animate__fadeInUp">
                    <img
                      src={`${import.meta.env.VITE_REDIRECT}/img/fraud_investigate.jpg`}
                      alt="fraud_investigate"
                    />
                  </picture>
                  <div className="card__right wow animate__animated animate__fadeInRight">
                    <p>
                      Greyzone Consulting takes pride in offering an
                      all-encompassing suite of corporate fraud investigation
                      services. Our mission is to uphold the safety and
                      integrity of all businesses, from emerging startups to
                      established multinational corporations.
                    </p>
                    <p>
                      <strong>
                        The Greyzone Approach: Uncovering the Hidden, Securing
                        the Future
                      </strong>
                    </p>
                    <p>
                      Our approach to fraud management is exhaustive and
                      integrated. We dig deep, unveiling hidden fraudulent
                      activities and delivering actionable insights to secure
                      your business future. Our team consists of seasoned fraud
                      investigators, forensic accountants, data analysts, and
                      legal professionals who work together to provide a
                      comprehensive solution.
                    </p>
                    <div className="card__ctrl">
                      <a
                        href="/solutions/corporate-services/corporate-fraud-investigation-solutions/"
                        className="button product_type_simple"
                        aria-label="Read more about “Corporate Fraud Investigation”"
                        rel="nofollow"
                      >
                        Read more
                      </a>
                      <span className="card__price"></span>
                    </div>
                  </div>
                </div>

                <div className="card__desc wow animate__animated animate__fadeInUp">
                  <h2>
                    <strong>Step 1: Rigorous Fraud Investigation</strong>
                  </h2>
                  <p>
                    The first line of our defense against corporate fraud is our
                    meticulous investigation process. We employ cutting-edge
                    technology and methodologies to probe complex financial
                    activities, ensuring no suspicious activity goes unnoticed.
                  </p>
                  <h2>
                    <strong>Step 2: Detailed Evidence Collection</strong>
                  </h2>
                  <p>
                    Following the investigation, we move to evidence collection.
                    Our team ensures an accurate and comprehensive collection of
                    data linked to suspected fraudulent activities. This
                    rigorous process assures a robust and reliable body of
                    evidence, capable of standing up to scrutiny in legal
                    proceedings or internal disciplinary actions.
                  </p>
                  <h2>
                    <strong>Step 3: Fact Verification and Validation</strong>
                  </h2>
                  <p>
                    We then meticulously verify and validate the collected facts
                    and information. This critical step guarantees the
                    credibility and accuracy of our findings, ensuring that they
                    are irrefutable and poised to withstand legal scrutiny if
                    necessary.
                  </p>
                  <h2>
                    <strong>
                      Step 4: In-Depth Analysis and Tailored Recommendations
                    </strong>
                  </h2>
                  <p>
                    Upon validating the facts, we undertake an in-depth analysis
                    of our findings. We decode patterns, decipher the modus
                    operandi of the fraud, and measure the potential impact on
                    your business. Based on this rigorous analysis, we provide
                    clear, strategic recommendations to rectify the situation
                    and prevent future fraudulent activities.
                  </p>
                  <h2>
                    <strong>
                      Step 5: Proactive Strategy Development for Future
                      Prevention
                    </strong>
                  </h2>
                  <p>
                    We don’t stop at recommendations; we help you strategize for
                    the future. Our team collaborates with you to develop a
                    proactive plan, fortified against potential fraudulent
                    activities. This involves creating robust fraud prevention
                    policies, strengthening internal controls, and providing
                    fraud awareness training.
                  </p>
                  <p>
                    <strong>
                      Greyzone Consulting: Your Trusted Ally in the Fight
                      Against Fraud
                    </strong>
                  </p>
                  <p>
                    When you choose Greyzone Consulting, you’re opting for a
                    future free from the shadow of fraud. Our commitment is to
                    fortify your business, transforming it into a fortress of
                    trust and security where fraudulent activities find no
                    place. Allow us to be your partner in building a secure,
                    fraud-resistant future.
                  </p>
                  <p>
                    <strong>Key Benefits:</strong>
                  </p>
                  <ul>
                    <li>
                      Minimize Financial Loss: By uncovering and addressing
                      fraud promptly, businesses can limit their financial
                      losses and recover misappropriated funds.
                    </li>
                    <li>
                      Enhance Trust: A business known for its integrity and
                      transparency fosters trust among stakeholders, including
                      employees, investors, and customers.
                    </li>
                    <li>
                      Compliance: Our services help businesses stay compliant
                      with regulatory requirements, avoiding potential legal
                      issues and penalties.
                    </li>
                    <li>
                      Proactive Prevention: Our fraud prevention strategies
                      reduce the likelihood of future fraudulent activities,
                      protecting the business in the long run.
                    </li>
                  </ul>
                  <p>
                    <a href="contact-us">
                      Contact our team for more information.
                    </a>
                  </p>
                </div>
              </div>
            </section>
          </ShadowDOM.div>
        </>
      )}
      {id === "business-valuation-and-assessment-services" && (
        <>
          <ShadowDOM.div>
            <style>
              {`
                            @import url(https://tandhconsult.com/wp-content/themes/th/style.css);
                        `}
            </style>
            <section className="card" id="card">
              <div className="container">
                <h1 className="title card__name wow animate__animated animate__fadeInLeft">
                  <span>Business Valuation and Assessment Services</span>
                </h1>
                <div className="card__row">
                  <picture className="card__pic wow animate__animated animate__fadeInUp">
                    <img
                      src={`${import.meta.env.VITE_REDIRECT}/img/business_valuation.jpg`}
                      alt="business_valuation"
                    />
                  </picture>
                  <div className="card__right wow animate__animated animate__fadeInRight">
                    <p>
                      At Greyzone Consulting, we offer comprehensive company
                      valuation services designed to provide accurate,
                      insightful, and objective analyses of your business’s
                      value. Leveraging years of industry experience and
                      utilizing advanced financial methodologies, our team of
                      valuation professionals delivers a robust, detailed
                      evaluation of your enterprise, accounting for all relevant
                      economic factors and industry trends.
                    </p>
                    <div className="card__ctrl">
                      <a
                        href="/solutions/corporate-services/business-valuation-and-assessment-services/"
                        className="button product_type_simple"
                        aria-label="Read more about “Company Valuation”"
                        rel="nofollow"
                      >
                        Read more
                      </a>
                      <span className="card__price"></span>
                    </div>
                  </div>
                </div>

                <div className="card__desc wow animate__animated animate__fadeInUp">
                  <p>
                    Our company valuation services are meticulously tailored to
                    accommodate the unique aspects of your business and
                    industry. We dive deep into the financial and non-financial
                    elements that contribute to your company’s worth, such as
                    financial performance, market position, industry dynamics,
                    intellectual property, and workforce strength. Our goal is
                    to offer a full-spectrum valuation that you can use to make
                    strategic decisions about future investments, acquisitions,
                    sales, and more.
                  </p>
                  <p>Our company valuation services include:</p>
                  <ol>
                    <li>
                      <strong>Business Valuation:</strong> We conduct an
                      in-depth financial analysis of your business, scrutinizing
                      your balance sheet, income statements, and cash flow to
                      assess your company’s current and future worth.
                    </li>
                    <li>
                      <strong>Intangible Asset Valuation:</strong> Recognizing
                      that businesses are more than their tangible assets, we
                      evaluate intangible factors like brand reputation,
                      patents, trademarks, and intellectual property.
                    </li>
                    <li>
                      <strong>Market Valuation:</strong> Our experts take a
                      comprehensive look at your industry landscape,
                      competitors, market share, and growth opportunities to
                      provide a robust understanding of your business’s market
                      value.
                    </li>
                    <li>
                      <strong>Independent Valuation Report:</strong> At the
                      conclusion of our service, you receive a detailed,
                      independent valuation report that provides a clear and
                      precise appraisal of your company’s worth. This report can
                      be used for a variety of purposes, including business
                      transactions, fundraising, internal planning, or legal
                      requirements.
                    </li>
                  </ol>
                  <p>
                    <strong>Service Benefits:</strong>
                  </p>
                  <p>
                    Choosing Greyzone Consulting’s company valuation services
                    offers you:
                  </p>
                  <ul>
                    <li>
                      Expert analysis from experienced valuation professionals
                    </li>
                    <li>
                      A comprehensive and customized approach to valuation
                    </li>
                    <li>
                      Clear, actionable insights to guide strategic decisions
                    </li>
                    <li>Confidential and reliable service</li>
                  </ul>
                  <p>
                    Let Greyzone Consulting illuminate your business’s true
                    value and provide the insights necessary to propel your
                    company towards future success.
                  </p>
                </div>
              </div>
            </section>
          </ShadowDOM.div>
        </>
      )}
      {id === "merchant-chargeback-assistance-process" && (
        <>
          <ShadowDOM.div>
            <style>
              {`
                            @import url(https://tandhconsult.com/wp-content/themes/th/style.css);
                        `}
            </style>
            <section className="card" id="card">
              <div className="container">
                <h1 className="title card__name wow animate__animated animate__fadeInLeft">
                  <span>Merchant Chargeback Assistance Process</span>
                </h1>
                <div className="card__row">
                  <picture className="card__pic wow animate__animated animate__fadeInUp">
                    <img
                      src={`${import.meta.env.VITE_REDIRECT}/img/merchant_chargeback.jpg`}
                      alt="merchant_chargeback"
                    />
                  </picture>
                  <div className="card__right wow animate__animated animate__fadeInRight">
                    <p>
                      We specialize in preventing and winning chargebacks for
                      merchants. We are here to help you to make your payments
                      secure, reduce the chargebacks, and win existing disputes.
                    </p>
                    <p>Our process includes:</p>
                    <ul>
                      <li>
                        Recommendations of chargeback policy to reduce future
                        incidence
                      </li>
                      <li>Technical review of the current platform</li>
                      <li>Chargeback protection program</li>
                      <li>Work with dispute</li>
                    </ul>
                    <div className="card__ctrl">
                      <a
                        href="/solutions/corporate-services/merchant-chargeback-assistance-process/"
                        className="button product_type_simple"
                        aria-label="Read more about “Chargeback Process for Merchants”"
                        rel="nofollow"
                      >
                        Read more
                      </a>
                      <span className="card__price"></span>
                    </div>
                  </div>
                </div>

                <div className="card__desc wow animate__animated animate__fadeInUp">
                  <h3 className="title card__subtit">Description</h3>
                  <p>
                    Greyzone Consulting: Your Ultimate Chargeback Processing
                    Consultant!
                  </p>
                  <p>
                    Chargebacks can be costly, let alone time-consuming, and
                    harder to win. For those still in the dark, a chargeback is
                    essentially the process by which a customer’s card issuer is
                    obliged to return payment on a disputed transaction. The
                    chargeback amount is usually deducted from a merchant
                    account, inclusive of all applicable fees.
                  </p>
                  <p>
                    Chargebacks are some of the biggest risks that merchants
                    have to contend with, as they always cause a win to become a
                    loss in a transaction. While such processes play an
                    essential role in handling inevitable disputes, they are not
                    so popular among merchants.
                  </p>
                  <p>
                    To stand a chance to win a chargeback no matter how
                    difficult or impossible they may seem, then Greyzone
                    Consulting should be your trusted partner. Not all
                    chargebacks are legitimate, which raises the risk of
                    merchants being scammed by unscrupulous clients.
                  </p>
                  <p>
                    While merchants have limited protection when it comes to
                    fighting chargebacks, at Greyzone Consulting, we strive to
                    ensure that our clients end up with the best deal as part of
                    any dispute process. We also ensure that the rights and
                    responsibilities of both merchants and customers are well
                    articulated to ensure fairness to everyone.
                  </p>
                  <p>
                    We will take you through the representment process whereby,
                    as a merchant, you stand a chance to rebut a chargeback sent
                    back to the issuer. As your representative, we will ensure
                    you respond and present evidence in fighting back any
                    illegitimate chargeback.
                  </p>
                  <p>
                    While representing our clients in fighting off chargebacks
                    at Greyzone Consulting, we also advise on the best practices
                    for minimizing chargebacks. Identifying business billing
                    statements as well as making an effort to educate customers
                    about the cancellation and return policies are some of the
                    options that merchants can use to reduce chargeback claims.
                  </p>
                  <p>
                    Merchants are also advised to maintain detailed transaction
                    logs as well as obtain proper authentication such as
                    customer signature and CVV codes. It is also their
                    responsibility to ensure they collect as much information as
                    possible for validating each transaction.
                  </p>
                  <p>
                    If faced with any problem pertaining to fighting off
                    chargebacks or minimizing their occurrence, be sure to
                    contact Greyzone Consulting.
                  </p>
                </div>
              </div>
            </section>
          </ShadowDOM.div>
        </>
      )}

      <ShadowDOM.div>
        <style>
          {`
            @import url(https://tandhconsult.com/wp-content/themes/th/style.css);
            .slick-track{
            gap: 1rem;
            }
          `}
        </style>
        <section className="related" id="related">
          <div className="container">
            <h2 className="title related__title">
              <span>Related products</span>
            </h2>
            <Slider {...settings} className="related__slider">
              <a
                className="dispute__link related__link slick-slide"
                href="/solutions/advisory-and-documentation-assistance/application-drafting-and-processing-support/"
              >
                <picture className="dispute__pic">
                  <img
                    src={`${import.meta.env.VITE_REDIRECT}/img/Application_Drafting.jpg`}
                    alt="Application_Drafting"
                  />
                </picture>
                <span className="dispute__name">
                  Application Processing / Drafting
                </span>
                <span className="dispute__more">
                  See more<i className="i i-arrow-right"></i>
                </span>
              </a>
              <a
                className="dispute__link related__link slick-slide"
                href="/solutions/advisory-and-documentation-assistance/case-evaluation-and-documentation-services/"
              >
                <picture className="dispute__pic">
                  <img src={`${import.meta.env.VITE_REDIRECT}/img/case_evaluation.jpg`} alt="case_evaluation" />
                </picture>
                <span className="dispute__name">
                  Case Evaluation &amp; And Documentation Services
                </span>
                <span className="dispute__more">
                  See more<i className="i i-arrow-right"></i>
                </span>
              </a>
              <a
                className="dispute__link related__link slick-slide"
                href="/solutions/advisory-and-documentation-assistance/technical-document-translation-non-certified/"
              >
                <picture className="dispute__pic">
                  <img
                    src={`${import.meta.env.VITE_REDIRECT}/img/technical_document.jpg`}
                    alt="technical_document"
                  />
                </picture>
                <span className="dispute__name">
                  Technical Document Translation (Non-Certified)
                </span>
                <span className="dispute__more">
                  See more<i className="i i-arrow-right"></i>
                </span>
              </a>
              <a
                className="dispute__link related__link slick-slide"
                href="/solutions/research-and-dispute-resolution/basic-dispute-settlement-package/"
              >
                <picture className="dispute__pic">
                  <img src={`${import.meta.env.VITE_REDIRECT}/img/basic_dispute.jpg`} alt="basic_dispute" />
                </picture>
                <span className="dispute__name">
                  Basic Dispute Settlement Package
                </span>
                <span className="dispute__more">
                  See more<i className="i i-arrow-right"></i>
                </span>
              </a>
              <a
                className="dispute__link related__link slick-slide"
                href="/solutions/research-and-dispute-resolution/special-dispute-settlement-package/"
              >
                <picture className="dispute__pic">
                  <img src={`${import.meta.env.VITE_REDIRECT}/img/special_dispute.jpg`} alt="special_dispute" />
                </picture>
                <span className="dispute__name">
                  Special Dispute Settlement Package
                </span>
                <span className="dispute__more">
                  See more<i className="i i-arrow-right"></i>
                </span>
              </a>
              <a
                className="dispute__link related__link slick-slide"
                href="/solutions/research-and-dispute-resolution/optimal-dispute-settlement-package/"
              >
                <picture className="dispute__pic">
                  <img src={`${import.meta.env.VITE_REDIRECT}/img/optimal_dispute.jpg`} alt="optimal_dispute" />
                </picture>
                <span className="dispute__name">
                  Optimal Dispute Settlement Package
                </span>
                <span className="dispute__more">
                  See more<i className="i i-arrow-right"></i>
                </span>
              </a>
              <a
                className="dispute__link related__link slick-slide "
                href="/solutions/research-and-dispute-resolution/premium-dispute-settlement-package/"
              >
                <picture className="dispute__pic">
                  <img src={`${import.meta.env.VITE_REDIRECT}/img/premium_dispute.jpg`} alt="" />
                </picture>
                <span className="dispute__name">
                  Premium Dispute Settlement Package
                </span>
                <span className="dispute__more">
                  See more<i className="i i-arrow-right"></i>
                </span>
              </a>
            </Slider>
          </div>
        </section>
      </ShadowDOM.div>
    </>
  );
};

export default index;

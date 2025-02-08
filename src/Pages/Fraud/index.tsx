
import styles from './style.module.scss'
import classNames from 'classnames';

const Index = () => {
  return (
    <>
      <section className={styles.privacy} id="privacy">
        <div className={styles.container}>
          <h1 className={classNames(`${styles.title} ${styles.privacy__title} wow animate__animated animate__fadeInLeft`)}>
            <span>Scam Alert – Use of the Greyzone Consulting Brand</span>
          </h1>
          <div className={classNames(`${styles.privacy__block} wow animate__animated animate__fadeInUp`)}>
            <h2 className={styles.wp_block_heading}>The Greyzone Consulting Brand</h2>
            <p>
              Greyzone Consulting has discovered fraudulent activities involving the unauthorized use of our brand and logo by scammers. These individuals or groups create deceptive websites and communications that mimic our official Greyzone Consulting website. Their fraudulent activities include promising high returns for investments, full guaranteed recovery of funds, impersonating our staff to solicit funds or personal information, and conducting unauthorized sales of our services. Firstly, Greyzone Consulting does not request cryptocurrency payments. Secondly, our specialists never request access to bank accounts, cryptocurrency wallets from our clients. We prioritize the security and privacy of our clients’ financial information. Any communication or request asking for such sensitive information is not legitimate and should be treated as suspicious. Thirdly, and&nbsp;most importantly, our representatives will always contact you from an “@greyzone.com” email address.
            </p>

            <h2 className={styles.wp_block_heading}>Websites</h2>
            <p>
              Please be aware that we exclusively conduct official business through our official website,{' '}
              <a href="/">www.greyzone.com</a>. Which provides accurate and up-to-date
              information about Greyzone Consulting, our services, products, and more. If you have any doubts about the
              authenticity of a website using the Greyzone Consulting logo or brand, visit our official website at{' '}
              <a href="/">www.greyzone.com</a>.
            </p>

            <h2 className={styles.wp_block_heading}>Report Fraud</h2>
            <p>
              If you encounter suspected fraudulent sites or offers using the Greyzone Consulting brand, report them
              immediately to us at <a href="mailto:support@greyzone.com">support@greyzone.com</a>. We also
              recommend contacting the relevant law enforcement agencies in your region. While we actively report
              abuses of our brand to law enforcement agencies, please note that Greyzone Consulting does not accept
              responsibility for any costs, charges, or payments made due to fraudulent activity. Exercise caution and
              protect your information. Although we strive to prevent all instances, the nature and volume of
              fraudulent activity make it impossible to eliminate them entirely.
            </p>

            <h2 className={styles.wp_block_heading}>Recognizing a Greyzone Consulting Scam</h2>
            <p>
              Recognizing and staying alert to signs of a Greyzone Consulting scam is essential to safeguarding your
              financial well-being and personal data. Be cautious of unsolicited communications requesting funds,
              offering high returns with minimal risk, or asking for sensitive personal or financial information.
              Remember that Greyzone Consulting never solicits individual funds and only contacts you from an
              “@greyzone.com” email address. If you suspect any fraudulent activity, promptly report it to Greyzone
              Consulting at <a href="mailto:support@greyzone.com">support@greyzone.com</a> or{' '}
              <a href="/contact-us">here</a>. Stay vigilant and well-informed to protect
              yourself from falling victim to a scam.
            </p>

            <p>
              Your security is our utmost priority at Greyzone Consulting, and we appreciate your cooperation in helping
              us combat fraud and protect our valued clients and partners.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;



import styles from './style.module.scss'
import classNames from 'classnames';
const index = () => {
  return (
    <>
      <section className={styles.privacy} id="privacy">
        <div className={styles.container}>
          <h1 className={classNames(`${styles.title} ${styles.privacy__title} wow animate__animated animate__fadeInLeft`)}>
            <span>Privacy Policy</span>
          </h1>
          <div className={classNames(`${styles.privacy__block} wow animate__animated animate__fadeInUp`)}>
            <p>Effective Date: February 03, 2019</p>
            <p>Last Updated: July 7, 2023</p>
            <h3 className={styles.wp_block_heading}>Introduction</h3>
            <p>
              At Greyzone Consulting, we value your privacy and are committed to protecting the confidentiality and privacy of your personal information. This Privacy Policy outlines how we handle and safeguard your personal information in connection with our website and the provision of our services. It applies to personal information collected and/or used by Greyzone Consulting as a data controller under the EU General Data Protection Regulation (GDPR) and similar laws.
            </p>
            <p>
              Please note that if we process your personal information as a data processor on behalf of our clients, their privacy policies and terms will apply. If our use of your personal information is not covered by this policy, please refer to the relevant client (data controller) for further information.
            </p>
            <h3 className={styles.wp_block_heading}>Acceptance of this Policy</h3>
            <p>
              By using our website and services, you signify your understanding of, and agreement to, the practices described in this Privacy Policy. If you do not agree with this policy, please refrain from using our website and services.
            </p>
            <h3 className={styles.wp_block_heading}>Collection of Personal Information</h3>
            <p>We collect personal information in the following situations:</p>
            <ol className={styles.wp_block_list}>
              <li>Website Users:
                <ul className={styles.wp_block_list}>
                  <li>
                    When you use our website, we may collect personal information such as your name, address, email address, telephone number, and any other information you voluntarily provide when submitting an inquiry through our “Contact Us” tool.
                  </li>
                  <li>
                    We may also automatically collect personal information through cookies and similar technologies to ensure the effective operation of the website and to analyze user behavior.
                  </li>
                </ul>
              </li>
              <li>Clients and Prospective Clients:
                <ul className={styles.wp_block_list}>
                  <li>
                    If you inquire about or engage our services, we process information such as your name, job title, and contact details to respond to your inquiry.
                  </li>
                  <li>
                    When you become our client, we may process additional personal information for various purposes related to the provision of our services, such as compliance checks, communication, billing, administration, and handling complaints.
                  </li>
                </ul>
              </li>
            </ol>
            <h3 className={styles.wp_block_heading}>Use of Personal Information</h3>
            <p>We use personal information for the following purposes:</p>
            <ol className={styles.wp_block_list}>
              <li>Providing and maintaining our services</li>
              <li>Notifying you about changes to our services</li>
              <li>Enabling your participation in interactive features of our services</li>
              <li>Providing customer care and support</li>
              <li>Conducting analysis to improve our services</li>
              <li>Complying with legal obligations</li>
            </ol>
            <h3 className={styles.wp_block_heading}>Retention of Personal Information</h3>
            <p>We retain personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.</p>
            <h3 className={styles.wp_block_heading}>Your Rights</h3>
            <p>Under the GDPR and similar laws, you have certain rights regarding your personal information. These rights include:</p>
            <ol className={styles.wp_block_list}>
              <li>Right to access: You have the right to access the personal information we hold about you.</li>
              <li>Right to rectification: You can request the correction of any inaccurate or incomplete personal information.</li>
              <li>Right to erasure: Under certain circumstances, you have the right to request the erasure of your personal information.</li>
              <li>Right to restrict processing: You can request the restriction of processing your personal information under specific conditions.</li>
              <li>Right to data portability: You have the right to receive your personal information in a commonly used, machine-readable format.</li>
              <li>Right to object: You can object to the processing of your personal information based on our legitimate interests.</li>
              <li>Right to lodge a complaint: If you believe we have violated your rights, you have the right to lodge a complaint with a supervisory authority.</li>
            </ol>
            <h3 className={styles.wp_block_heading}>Data Security</h3>
            <p>We implement appropriate technical and organizational measures to ensure the security and confidentiality of your personal information.</p>
            <h3 className={styles.wp_block_heading}>Contact Us</h3>
            <p>
              If you have any questions or concerns regarding this Privacy Policy or the handling of your personal information, please contact us at <a href="mailto:support@greyzoneconsulting.com">support@greyzoneconsulting.com</a>.
            </p>
            <h3 className={styles.wp_block_heading}>Changes to this Policy</h3>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The updated policy will be effective upon posting on our website with the revised “Last Updated” date. We encourage you to review this policy periodically to stay informed about how we protect your privacy.
            </p>
            <p>
              We appreciate your trust in Greyzone Consulting and your understanding of our commitment to safeguarding your personal information. If you have any further questions or need clarification about our Privacy Policy, please do not hesitate to reach out to us.
            </p>
            <h3 className={styles.wp_block_heading}><strong>Changes To This Privacy Policy</strong></h3>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
            <p>
              We will let you know via email and/or a prominent notice on our service, prior to the change becoming effective and update the “effective date” at the top of this Privacy Policy.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
            <hr className={classNames(`${styles.wp_block_separator} ${styles.has_css_opacity}`)} />
          </div>
        </div>
      </section>
    </>
  );
};

export default index;


import styles from './style.module.scss'
import classNames from "classnames";
const certificates = [
  {
    "src": `${import.meta.env.VITE_REDIRECT}/img/certificate/benjamin.jpg`,
    "alt": "benjamin",
    "caption": ""
  },
  {
    "src": `${import.meta.env.VITE_REDIRECT}/img/certificate/benjamin_acad.jpg`,
    "alt": "benjamin_acad",
    "caption": ""
  },
  {
    "src": `${import.meta.env.VITE_REDIRECT}/img/certificate/Amanda_acad.jpg`,
    "alt": "Amanda",
    "caption": ""
  },
  {
    "src": `${import.meta.env.VITE_REDIRECT}/img/certificate/Amanda_inves.jpg`,
    "alt": "Amanda_inves",
    "caption": ""
  },
  {
    "src": `${import.meta.env.VITE_REDIRECT}/img/certificate/Gabriella.jpg`,
    "alt": "Gabriella",
    "caption": ""
  },
  {
    "src": `${import.meta.env.VITE_REDIRECT}/img/certificate/jasmine_valentine.jpg`,
    "alt": "Jasmine",
    "caption": ""
  },
  {
    "src": `${import.meta.env.VITE_REDIRECT}/img/certificate/Jessica.jpg`,
    "alt": "Jessica",
    "caption": ""
  },
  {
    "src": `${import.meta.env.VITE_REDIRECT}/img/certificate/John.jpg`,
    "alt": "John",
    "caption": ""
  },
  {
    "src": `${import.meta.env.VITE_REDIRECT}/img/certificate/Jon.jpg`,
    "alt": "jon",
    "caption": ""
  },	
  {
    "src": `${import.meta.env.VITE_REDIRECT}/img/certificate/Joseph.jpg`,
    "alt": "Joseph",
    "caption": ""
  },
  {
    "src": `${import.meta.env.VITE_REDIRECT}/img/certificate/Phoebe.jpg`,
    "alt": "Phoebe",
    "caption": ""
  },
  {
    "src": `${import.meta.env.VITE_REDIRECT}/img/certificate/Richard.jpg`,
    "alt": "Richard",
    "caption": ""
  }
]


const index = () => {
  return (
    <main>
      <section className={styles.privacy} id="privacy">
        <div className={styles.container}>
          <h1 className={classNames(`${styles.title} ${styles.privacy__title} wow animate__animated animate__fadeInLeft`)}>
            <span>Certificates</span>
          </h1>
          <div className={classNames(`${styles.privacy__block} wow animate__animated animate__fadeInUp`)}>
              <p>
              Our team is composed of some very talented professionals. They are people, who are always prepared for new challenges, capable to provide our customers with the best quality work. Our team is one of the most important assets, which helps us to improve our products on a daily basis.
              </p>
              <div className={classNames(styles.certificate_gallery,` grid gap-8`)} >
                {certificates.map((certificate, index) => (
                    <figure key={index} className="certificate-item">
                    <img
                        src={certificate.src}
                        alt={certificate.alt}
                        loading="lazy"
                        className="certificate-image"
                    />
                    { certificate.caption &&
                      <figcaption className="certificate-caption">
                      {certificate.caption}
                      </figcaption>
                    }
                    </figure>
                ))}
              </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default index;

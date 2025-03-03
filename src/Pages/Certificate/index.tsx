import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import classNames from "classnames";
import HttpService from "../../Components/api/HttpService";
import { Certificates } from "../../Components/Reusable/Addition/Types";
const index = () => {
  const api = HttpService;


  const [certificates, setCertificates] = useState<Certificates[]>([]);

  useEffect(() => {
    api
      .get("certificates")
      .then((data) => {
        if (data && Array.isArray(data)) {
          const formattedData = data.map((certificate: any) => ({
            src: certificate.src,
            alt: certificate.alt,
          }));
          setCertificates(formattedData);
        } else {
          console.log("No certificates found or wrong data format");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <main>
      <section className={styles.privacy} id="privacy">
        <div className={styles.container}>
          <h1
            className={classNames(
              `${styles.title} ${styles.privacy__title} wow animate__animated animate__fadeInLeft`
            )}
          >
            <span>Certificates</span>
          </h1>
          <div
            className={classNames(
              `${styles.privacy__block} wow animate__animated animate__fadeInUp`
            )}
          >
            <p>
              Our team is composed of some very talented professionals. They are
              people, who are always prepared for new challenges, capable to
              provide our customers with the best quality work. Our team is one
              of the most important assets, which helps us to improve our
              products on a daily basis.
            </p>
            <div
              className={classNames(styles.certificate_gallery, ` grid gap-8`)}
            >
              {certificates &&
                certificates?.map((certificate: any, index: number) => (
                  <figure key={index} className="certificate-item">
                    <img
                      src={certificate.src}
                      alt={certificate.alt}
                      loading="lazy"
                      className="certificate-image"
                    />
                    {certificate.caption && (
                      <figcaption className="certificate-caption">
                        {certificate.caption}
                      </figcaption>
                    )}
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

// import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import classNames from "classnames";
// import HttpService from "../../Components/api/HttpService";
// import { Certificates } from "../../Components/Reusable/Addition/Types";
const index = () => {
  
  // const api = HttpService;

  // const [certificates, setCertificates] = useState<Certificates[]>([]);

  // useEffect(() => {
  //   api
  //     .get("certificates")
  //     .then((data) => {
  //       if (data && Array.isArray(data)) {
  //         const formattedData = data.map((certificate: any) => ({
  //           src: certificate.src,
  //           alt: certificate.alt,
  //         }));
  //         setCertificates(formattedData);
  //       } else {
  //         console.log("No certificates found or wrong data format");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);

  const certificates = [
    {
      src: `${import.meta.env.VITE_REDIRECT}/img/certificate/benjamin.jpeg`,
      alt: "benjamin",
      caption: "",
    },
    {
      src: `${import.meta.env.VITE_REDIRECT}/img/certificate/benjamin_acad.jpeg`,
      alt: "benjamin_acad",
      caption: "",
    },
    {
      src: `${import.meta.env.VITE_REDIRECT}/img/certificate/Amanda_acad.jpeg`,
      alt: "Amanda",
      caption: "",
    },
    {
      src: `${import.meta.env.VITE_REDIRECT}/img/certificate/Amanda_inves.jpeg`,
      alt: "Amanda_inves",
      caption: "",
    },
    {
      src: `${import.meta.env.VITE_REDIRECT}/img/certificate/Gabriella.jpeg`,
      alt: "Gabriella",
      caption: "",
    },
    {
      src: `${
        import.meta.env.VITE_REDIRECT
      }/img/certificate/jasmine_valentine.jpeg`,
      alt: "Jasmine",
      caption: "",
    },
    {
      src: `${import.meta.env.VITE_REDIRECT}/img/certificate/Jessica.jpeg`,
      alt: "Jessica",
      caption: "",
    },
    {
      src: `${import.meta.env.VITE_REDIRECT}/img/certificate/John.jpeg`,
      alt: "John",
      caption: "",
    },
    {
      src: `${import.meta.env.VITE_REDIRECT}/img/certificate/Jon.jpeg`,
      alt: "jon",
      caption: "",
    },
    {
      src: `${import.meta.env.VITE_REDIRECT}/img/certificate/Joseph.jpeg`,
      alt: "Joseph",
      caption: "",
    },
    {
      src: `${import.meta.env.VITE_REDIRECT}/img/certificate/Phoebe.jpeg`,
      alt: "Phoebe",
      caption: "",
    },
    {
      src: `${import.meta.env.VITE_REDIRECT}/img/certificate/Richard.jpeg`,
      alt: "Richard",
      caption: "",
    },
  ];

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

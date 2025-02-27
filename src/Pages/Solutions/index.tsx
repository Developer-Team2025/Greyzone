import styles from './style.module.scss'
import ImageBox from '../../Components/Reusable/ImageBox/index'
import classNames from 'classnames'
const index = () => {
  // const pathname = window.location.pathname.replace('/', '')
  return (
    <>
    <section className={styles.banner_solution}>
        <div className={styles.container}>
          <h2 className={classNames(`${styles.title_solution} wow  animate__fadeInLeft animate__animated`)}>
            <span>Solutions</span>            
          </h2>
          <div className={styles.solution_wrapper}>
                <div className={styles.card}>
                  <div className={classNames(styles.design, ' wow  animate__fadeInLeft animate__animated')}/>
                  <ImageBox image={`${import.meta.env.VITE_REDIRECT}/img/Digital_Products.jpeg`} href='/solutions/digital-goods' style={{minHeight: '315px', height: '20rem', borderRadius: '3rem', boxShadow: '6px 8px 10px #888888'}}  name="Digital Goods" size="100%" more={true}/>
                </div>
                <div className={styles.card}>
                  <div className={classNames(styles.design, ' wow  animate__fadeInLeft animate__animated')}/>
                  <ImageBox image={`${import.meta.env.VITE_REDIRECT}/img/Cryptocurrency.jpeg`} href='/solutions/cryptocurrency-investigations-and-regulatory-compliance' style={{minHeight: '315px', height: '20rem', borderRadius: '3rem', boxShadow: '6px 8px 10px #888888'}} name="Cryptocurrency Investigations and Regulatory Compliance" size="100%" more={true}/>
                </div>
                <div className={styles.card}>
                  <div className={classNames(styles.design, ' wow  animate__fadeInLeft animate__animated')}/>
                  <ImageBox image={`${import.meta.env.VITE_REDIRECT}/img/Investigation_dispute.jpeg`} href='/solutions/research-and-dispute-resolution' style={{minHeight: '315px', height: '20rem', borderRadius: '3rem', boxShadow: '6px 8px 10px #888888'}} name="Research and Dispute Resolution" size="100%" more={true}/>
                </div>
                <div className={styles.card}>
                  <div className={classNames(styles.design, ' wow  animate__fadeInLeft animate__animated')}/>
                  <ImageBox image={`${import.meta.env.VITE_REDIRECT}/img/Consulting_Documental.jpeg`} href='/solutions/advisory-and-documentation-assistance' style={{minHeight: '315px', height: '20rem', borderRadius: '3rem', boxShadow: '6px 8px 10px #888888'}} name="Advisory and Documentation Assistance" size="100%" more={true}/>
                </div>
                <div className={styles.card}>
                  <div className={classNames(styles.design, ' wow  animate__fadeInLeft animate__animated')}/>
                  <ImageBox image={`${import.meta.env.VITE_REDIRECT}/img/Business_services.jpeg`} href='/solutions/corporate-services' style={{minHeight: '315px', height: '20rem', borderRadius: '3rem', boxShadow: '6px 8px 10px #888888'}} name="Corporate Services" size="100%" more={true}/>
                </div>
            </div>
        </div>
        {/* {
          pathname !== 'solutions' &&
          <div className={classNames(`${styles.more_details} wow  animate__fadeInUp animate__animated`)}>
          <a href="/solutions" className={styles.moreLink}>
              <span>More details</span>
               <svg width="32" height="14" viewBox="0 0 32 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 7H30M30 7L24.0625 1M30 7L24.0625 13" stroke="url(#paint0_linear)" strokeWidth="2"/>
              <defs>
              <linearGradient id="paint0_linear" x1="-1.18601e-07" y1="7.85714" x2="30" y2="7.85714" gradientUnits="userSpaceOnUse">
              <stop stopColor="#012555"/>
              <stop offset="1" stopColor="#012555"/>
              </linearGradient>
              </defs>
              </svg> 
          </a>
        </div>
        } */}
      </section>
    </>
  )
}

export default index


import styles from './style.module.scss'
import classNames from 'classnames'
interface Props {
  image: string;
  size?: string; // Optional because size might not always be provided
  name: string;
  more?: boolean;
  style?: React.CSSProperties; // Ensure style is correctly typed
  href?: string;
  key?: any
}

const index = ({ image, size, name, more, style = {}, href, key } : Props) => {
  return (
    <a className={classNames(`${styles.picBox} wow  animate__fadeInLeft animate__animated`)} style={{maxWidth: `${size} `, ...style}} href={href} key={key}>
      <picture className={styles.framePic}>
        <img src={image} alt="images" />
      </picture>
      <span className={styles.picName}>{name}</span>
      {
        more &&
      
        <div className={styles.seeMore}>
              {/* <span className={styles.postLink}>See more</span> */}
              {/* <svg width="32" height="14" viewBox="0 0 32 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 7H30M30 7L24.0625 1M30 7L24.0625 13" stroke="url(#paint0_linear)" stroke-width="2"/>
              <defs>
              <linearGradient id="paint0_linear" x1="-1.18601e-07" y1="7.85714" x2="30" y2="7.85714" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fff"/>
              <stop offset="1" stopColor="#fff"/>
              </linearGradient>
              </defs>
              </svg> */}

        </div>
      }
    </a>
  )
}

export default index

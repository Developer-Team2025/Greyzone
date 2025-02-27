import  { useEffect, useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from './style.module.scss';
import classNames from 'classnames';

export default function index() {

  const carouselTrackRef = useRef<HTMLDivElement | null>(null);
  const [detect,setDetect] = useState(0)
  const [screenWidth, setScreenWidth] = useState(0);

  const moveToNextSlide = () => {
    const element = document.querySelector("#slick_list"); // The scrollable element
    const track = document.querySelector("#slick_track"); // The track containing slides
    if (element && track) {
      if (element.scrollWidth > element.clientWidth) {
        const currentSlide = track.children[detect] as HTMLElement;
        if (currentSlide) {
          const slideWidth = currentSlide.offsetWidth;
          const nextScrollLeft = element.scrollLeft + slideWidth;
  
          // Loop back to the start if at the end
          if (nextScrollLeft + element.clientWidth >= element.scrollWidth) {
            element.scrollTo({ left: 0, behavior: "smooth" });
            setDetect(0);
          } else {
            element.scrollTo({ left: nextScrollLeft, behavior: "smooth" });
            setDetect(detect + 1);
          }
        }
      }
    }
  };
  
  const moveToPreviousSlide = () => {
    const element = document.querySelector("#slick_list"); // The scrollable element
    const track = document.querySelector("#slick_track"); // The track containing slides
    
    if (element && track) {
      if (element.scrollWidth > element.clientWidth) {
        const currentSlide = track.children[detect] as HTMLElement;
        if (currentSlide) {
          const slideWidth = currentSlide.offsetWidth;
          const previousScrollLeft = element.scrollLeft - slideWidth;
  
          // Loop back to the end if at the start
          if (previousScrollLeft < 0) {
            const lastSlide = track.children[track.children.length - 1] as HTMLElement;
            const lastScrollLeft = element.scrollWidth - lastSlide.offsetWidth;
            element.scrollTo({ left: lastScrollLeft, behavior: "smooth" });
            setDetect(track.children.length - 1);
          } else {
            element.scrollTo({ left: previousScrollLeft, behavior: "smooth" });
            setDetect(detect - 1);
          }
        }
      }
    }
  };
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    const banner = document.getElementById('banner_partner')
    if(banner){
      setScreenWidth(banner.offsetWidth)
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <section className={classNames(`${styles.banner_partner} wow  animate__fadeIn animate__animated`)} id='banner_partner'>
        <div className={styles.container}>
          <div className={styles.partner_slider}>
            <button onClick={moveToPreviousSlide} className={styles.btn_prev} style={{display: `${screenWidth < 1600 ? 'block' : 'none'}`}}>&#10094;</button>
            <div className={styles.slick_list} id='slick_list' ref={carouselTrackRef}>
              <div className={styles.slick_track} id='slick_track'>
                <picture className={styles.partner_pic} id='1'>
                  <img src="https://tandhconsult.com/wp-content/uploads/2024/04/nordvpn_logo_rgb_primary_blue_black.png" alt="1" />
                </picture>
                <picture className={styles.partner_pic} id='2'>
                  <img src="https://tandhconsult.com/wp-content/uploads/2021/09/bitrank_registersymbol_2019_oneline_329x70.png" alt="2" />
                </picture>
                <picture className={styles.partner_pic} id='3'>
                  <img src="https://tandhconsult.com/wp-content/uploads/2022/12/logo3.webp" alt="3" />
                </picture>
                <picture className={styles.partner_pic} id='4'>
                  <img src="https://tandhconsult.com/wp-content/uploads/2024/04/logotype-color-horizontal.png" alt="4" />
                </picture>
                <picture className={styles.partner_pic} id='5'>
                  <img src="https://tandhconsult.com/wp-content/uploads/2021/09/qlue_tm_2019_193x55.png" alt="5" />
                </picture>
                <picture className={styles.partner_pic} id='6'>
                  <img src="https://tandhconsult.com/wp-content/uploads/2023/08/learnvent_colour.png" alt="6" />
                </picture>
                <picture className={styles.partner_pic} id='7'>
                  <img src="https://tandhconsult.com/wp-content/uploads/2023/08/navy-1.png" alt="7" />
                </picture>
              </div>
            </div>
            <button onClick={moveToNextSlide} className={styles.btn_next} style={{display: `${screenWidth < 1600 ? 'block' : 'none'}`}}>&#10095;</button>
          </div>
        </div>
      </section>
    </>
  );
}

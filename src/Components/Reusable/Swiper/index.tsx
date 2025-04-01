import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./style.module.scss";
import classNames from "classnames";

// Define the structure of an image object
interface ImageItem {
  url: string;
}

export default function Carousel() {
  const initialArray: ImageItem[] = [
    { url: "https://tandhconsult.com/wp-content/uploads/2024/04/nordvpn_logo_rgb_primary_blue_black.png" },
    { url: "https://tandhconsult.com/wp-content/uploads/2021/09/bitrank_registersymbol_2019_oneline_329x70.png" },
    { url: "https://tandhconsult.com/wp-content/uploads/2022/12/logo3.webp" },
    { url: "https://tandhconsult.com/wp-content/uploads/2024/04/logotype-color-horizontal.png" },
    { url: "https://tandhconsult.com/wp-content/uploads/2021/09/qlue_tm_2019_193x55.png" },
    { url: "https://tandhconsult.com/wp-content/uploads/2023/08/learnvent_colour.png" },
    { url: "https://tandhconsult.com/wp-content/uploads/2023/08/navy-1.png" }
  ];

  const carouselTrackRef = useRef<HTMLDivElement | null>(null);
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [arr, setArr] = useState<ImageItem[]>(initialArray);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  // Determine number of visible images dynamically
  const itemsPerView: number = screenWidth < 768 ? 1 : screenWidth < 1200 ? 2 : 3;

  // Adjust number of visible images on screen resize
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Move to Next Slide
  const moveToNextSlide = (): void => {
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + 1;
      if (newIndex >= arr.length - itemsPerView) {
        setArr((prevArr) => [...prevArr, ...initialArray]); // Append more images
      }
      return newIndex;
    });

    scrollToCurrentIndex();
  };

  // Move to Previous Slide
  const moveToPreviousSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    scrollToCurrentIndex();
  };

  // Smooth scroll to currentIndex
  const scrollToCurrentIndex = (): void => {
    const targetElement = document.getElementById(`image-${currentIndex}`);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  };

  // Handle Scroll when user drags the carousel
  useEffect(() => {
    const track = carouselTrackRef.current;
    if (!track) return;

    const handleScroll = () => {
      if (!isDragging) return; // Only trigger if user is dragging

      if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 5) {
        setArr((prevArr) => [...prevArr, ...initialArray]); // Append more images at the end
      }

      if (track.scrollLeft === 0) {
        setArr((prevArr) => [...prevArr, ...initialArray]); // Append more images at the start
      }

      scrollToCurrentIndex();
    };

    track.addEventListener("scroll", handleScroll);
    return () => track.removeEventListener("scroll", handleScroll);
  }, [isDragging]);

  // Detect when user starts dragging
  useEffect(() => {
    const track = carouselTrackRef.current;
    if (!track) return;

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

    track.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      track.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <section className={classNames(`${styles.banner_partner} wow animate__fadeIn animate__animated`)} id="banner_partner">
      <div className={styles.container}>
        <div className={styles.partner_slider}>
          <button
            onClick={moveToPreviousSlide}
            className={styles.btn_prev}
            style={{ display: screenWidth < 1600 ? "block" : "none" }}
          >
            &#10094;
          </button>

          <div
            className={styles.slick_list}
            id="slick_list"
            ref={carouselTrackRef}
            style={{
              overflowX: "auto",
              whiteSpace: "nowrap",
              scrollBehavior: "smooth",
              cursor: isDragging ? "grabbing" : "grab"
            }}
          >
            <div className={styles.slick_track} id="slick_track" style={{ gridTemplateColumns: `repeat(${arr.length}, 1fr)` }}>
              {arr.map((item, index) => (
                <picture
                  className={styles.partner_pic}
                  id={`image-${index}`}
                  key={index}
                  style={{ flex: `0 0 ${100 / itemsPerView}%` }}
                >
                  <img src={item.url} alt={`Image ${index}`} />
                </picture>
              ))}
            </div>
          </div>

          <button
            onClick={moveToNextSlide}
            className={styles.btn_next}
            style={{ display: screenWidth < 1600 ? "block" : "none" }}
          >
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
}

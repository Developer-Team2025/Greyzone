import React, { useContext, useEffect, useState } from "react";
import styles from "./style.module.scss";
import classNames from "classnames";
import { ThemeContext } from "../../App";
interface Modal {
  func?: () => void | undefined;
  func2?: () => void | undefined;
}
const index: React.FC<Modal> = () => {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [animate, setAnimate] = useState(true);
  const handleResize = () => {
    setScreenHeight(window.innerHeight);
  };
  const themeContext = useContext(ThemeContext);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    setTimeout(() => {
      themeContext?.Animate(false);
    }, 2200);
    setTimeout(() => {
      setAnimate(false);
    }, 2000);
  }, []);
  return (
    <>
      <div
        className={classNames(
          styles.modal,
          animate ? styles.openModal : styles.closeModal
        )}
        style={{ height: `${screenHeight + 10}px` }}
      >
        {themeContext?.theme === "Congrats" ? (
          <div className={styles.content}>
            <img src="./img/handshake.gif" alt="handshake" />
            <h2>
              Thank you for your inquiry, our specialist will contact you as
              soon as possible
            </h2>
          </div>
        ) : (
          <div className={styles.modal_wrapper}>
            {}
          </div>
        )}
      </div>
    </>
  );
};

export default index;

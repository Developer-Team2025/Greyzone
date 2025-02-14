import React, { useContext, useEffect, useState } from 'react'
import styles from './style.module.scss'
import classNames from 'classnames';
import { ThemeContext } from '../../App';
interface Modal{
    func?: () => void | undefined,
    func2?: () => void | undefined,

}
const index: React.FC<Modal>= ({func, func2}) => {
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);
    const [animate, setAnimate] = useState(true);
    const handleResize = () => {
        setScreenHeight(window.innerHeight);
    };
    const themeContext = useContext(ThemeContext)
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);
    useEffect(()=>{
      setTimeout(()=>{
        themeContext?.Animate(false)
      },2200)
      setTimeout(()=>{
        setAnimate(false)
      },2000)
    },[])
  return (
    <>
    
    <div className={classNames(styles.modal, animate ? styles.openModal : styles.closeModal)} style={{height: `${screenHeight + 10}px`}}>
      {
        themeContext?.theme === 'Congrats' ?
        <div className={styles.content}>
          <img src="./img/handshake.gif" alt="handshake" />
          <h2>Thank you for your inquiry, our specialist will contact you as soon as possible</h2>
        </div>
        
        :
        <div className={styles.modal_wrapper}>
          <div className={styles.cart_top}>
            <span className={styles.title}>Your Cart</span>
            <span className={styles.exit} onClick={() => {setTimeout(() => {func?.(), func2?.()},500), setAnimate(false) }}>X</span>
          </div>
          <div className={styles.product_content}>
            <span>Your cart is empty.</span>
          </div>
          <div className={styles.footer_cart}>
            <span>Product you may like</span>
            <div className={styles.card}>
              <picture><img src="https://tandhconsult.com/wp-content/uploads/2021/06/canva-boss-dictating-to-assistant-at-office-300x300.jpg" alt="desk"  /></picture>
              <div className={styles.text}>
                <h1 className={styles.title}>
                  Dispute Settlement “Special Package”
                </h1>
                <a href='/solutions/research-and-dispute-resolution'>Read More</a>
              </div>
            </div>
            <a className={styles.btn_shop} onClick={() => {setTimeout(() => {func?.(), func2?.()},500), setAnimate(false) }}>
              CONTINUE SHOPPING
            </a>
          </div>
        </div>
      }
    </div>
    </>
  )
}

export default index

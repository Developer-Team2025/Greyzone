import React, { useEffect, useState } from 'react'
import styles from './style.module.scss'
import Form from '../Reusable/Form/Contact'
import classNames from 'classnames';
import logo from '../../assets/images/logo_v2.jpeg'
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
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);
  return (
    <>
    
    <div className={classNames(styles.modal, animate ? styles.openModal : styles.closeModal) } style={{height: `${screenHeight + 10}px`}}>
      <div className={styles.modal_wrapper}>
        <span className={styles.exit} onClick={() => {setTimeout(() => {func?.(), func2?.()},500), setAnimate(false)}}>X</span>
        <div className={styles.logo}>
            <img src={logo} alt="logo"  />
        </div>
        <div className={styles.form}>
            <Form/>            
        </div>
      </div>
    </div>
    </>
  )
}

export default index

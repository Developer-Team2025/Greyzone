import classNames from 'classnames';
import styles from './style.module.scss';
import { useState } from 'react';

const index = () => {
  const [validator ,setValidator] = useState('')
  const Validator = (e: string) => {
    const value = e;
    const suffix = "@gmail.com";
    if (e === '') {
      setValidator('')
    }else if(!value.endsWith(suffix)){
      setValidator('context')
    }else{
      setValidator('email')
    }
  }

  return (
    <>
      <section className={classNames(styles.privacy)} id="privacy">
        <div className={classNames(styles.container)}>
          <h1 className={classNames(styles.title, styles.privacy__title)}>
            <span>My account</span>
          </h1>
            <div className={classNames(styles.privacy__block)}>
                <div className={styles.login} >
                    <label htmlFor="">
                        Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.
                    </label>
                    <label htmlFor="lost password">
                        Username or email <span className={classNames(styles.required)}>*</span>
                    </label>
                    <input
                    type="text"
                    name="password"
                    id="password"
                    autoComplete="current-password"
                    required
                    className={styles.input}
                    onChange={(e) => {
                      Validator(e.target.value)
                    }}
                    />
                    <div className={styles.remember}>
                        <button  type="submit" className={classNames(styles.button)} onClick={() => { validator === '' ? alert('add email to the context') : validator !== 'email' ? alert('should be exact @gmail.com') : window.location.pathname = '/my-account/lost-password/reset_link_true'}} >
                            RESET PASSWORD
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default index;

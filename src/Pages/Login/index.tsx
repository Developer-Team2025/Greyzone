
import classNames from 'classnames';
import styles from './style.module.scss';

const Index = () => {
  return (
    <>
      <section className={classNames(styles.privacy)} id="privacy">
        <div className={classNames(styles.container)}>
          <h1 className={classNames(styles.title, styles.privacy__title)}>
            <span>My account</span>
          </h1>
          <div className={classNames(styles.privacy__block)}>
            <div className={classNames(styles.woocommerce)}>
              <h2>Login</h2>
              <form
                className={classNames(styles['woocommerce-form'], styles.login)}
                method="post"
              >
                <div className={classNames(styles['form-row'])}>
                  <label htmlFor="username">
                    Username or email address{' '}
                    <span className={classNames(styles.required)}>*</span>
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    required
                    className={styles.input}
                  />
                </div>
                <div className={classNames(styles['form-row'])}>
                  <label htmlFor="password">
                    Password <span className={classNames(styles.required)}>*</span>
                  </label>
                  <div className={classNames(styles['password-input'])}>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      autoComplete="current-password"
                      required
                      className={styles.input}
                    />
                  </div>
                </div>
                <div className={classNames(styles['form-row'], styles.remember)}>
                  <label className={classNames(styles['remember-me'])}>
                    <input
                      type="checkbox"
                      name="rememberme"
                      id="rememberme"
                    />
                    <span className='ml-[.3rem] text-[#000!important] text-[.9rem]'>Remember me</span>
                  </label>
                  <button
                    type="submit"
                    className={classNames(styles.button)}
                    name="login"
                    value="Log in"
                  >
                    Log in
                  </button>
                </div>
                <div className={classNames(styles['lost-password'])}>
                  <a  className={styles.href} onClick={() => {window.location.pathname = '/my-account/lost-password'}}>
                    Lost your password?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;

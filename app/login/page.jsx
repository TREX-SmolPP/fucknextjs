import styles from './login.module.css';

export default function Login() {

    return (
        <div className={styles.page1}>
            <div className={styles.loginpannel}>
                <h1 classname={styles.loginHeading}>Login</h1>
                <input type="text" placeholder="Username" id="user" className={styles.details} />
                <i className="fa-solid fa-user" id={styles.icon1} />
                <input
                    type="password"
                    placeholder="Password"
                    id="key"
                    className={styles.details}
                />
                <i className="fa-solid fa-lock" id={styles.icon2} />
                <div className={styles.part}>
                    <div className={styles.part1}>
                        <input type="checkbox" id={styles.check} />
                        <label htmlFor="check" id={styles.rem}>
                            Remember me
                        </label>
                    </div>
                    <i id={styles.forgot}>Forgot Password?</i>
                </div>
                <button id={styles.log}>Login</button>
                <p>
                    Don't have an account? <i id={styles.reg}>Register</i>
                </p>
            </div>
        </div>);
}
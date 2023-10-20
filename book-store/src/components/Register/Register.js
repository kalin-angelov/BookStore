import styles from "./Register.module.css";

export const Register = () => {
    return(
        <div className={styles.register}>
            <form>
                <label htmlFor="email">Email</label>
                <input 
                    type="text"
                    name="email"
                />
                <label htmlFor="password">Password</label>
                <input 
                    type="text"
                    name="password"
                />
                <label htmlFor="rePassword">Repeat password</label>
                <input 
                    type="text"
                    name="rePassword"
                />
                <button>Send</button>
            </form>
        </div>
    );
}
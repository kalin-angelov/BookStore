import styles from "./Header.module.css";

export const Header = () => {
    return (
        <header>
            <div className={styles.user}>
                <a href="/"><i className="fa-solid fa-right-to-bracket"></i> Login</a>
                <a href="/"><i className="fa-solid fa-file-pen"></i> Register</a>
                <a href="/"><i className="fa-solid fa-heart"></i> Favorite</a>
                <a href="/"><i className="fa-solid fa-right-from-bracket"></i> Logout</a>
            </div>
            <div className={styles.headerElements}>
                <a href="/"><h1>BooK Store</h1></a>
                <form>
                    <input 
                        type="text" 
                        placeholder="Search"
                    />
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
                <p><i className="fa-solid fa-cart-shopping"></i> 0</p>
            </div>
        </header>
    );
}
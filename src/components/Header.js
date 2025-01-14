import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <nav>
                <Link href="/users">Users</Link>
                <Link href="/posts">Posts</Link>
            </nav>
        </header>
    );
};

export default Header;

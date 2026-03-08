import { Outlet, Link } from "react-router-dom"
import styles from "./Layout.module.css"

export function Layout() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link to="/" className={styles.logo}>
            🇸🇰 [SK] practice
          </Link>

          <nav className={styles.nav}>
            <Link to="/" className={styles.navLink}>
              Words
            </Link>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        © {new Date().getFullYear()} [SK] practice
      </footer>
    </div>
  )
}
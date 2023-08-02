import styles from './header.module.scss';

export default function Header() {
  return (
    <section className={styles.header}>
      <div className={styles.headerInner}>
        <h1 className={styles.title}>미인 데이트</h1>
        <div className={styles.buttonContainer}>
          <nav>
            <ul className={styles.buttonList}>
              <li>Home</li>
              <li>Search</li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}

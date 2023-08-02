import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import styles from './main.module.scss';
import Home from '../../assets/home.jpg';

export default function Main() {
  return (
    <>
      <Header />
      <main>
        <section>
          <div className={styles.imgContainer}>
            <img src={Home} className={styles.home} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

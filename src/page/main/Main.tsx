import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import RecommendFood from '../../components/recommend/recommendFood/RecommendFood';
import styles from './main.module.scss';
import TypeIt from 'typeit-react';
// import Home from '../../assets/home.jpg';

export default function Main() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <section>
          <div className={styles.contentContainer}>
            <div className={styles.content}>
              <p>사랑을 먹고사는</p>
              <p>김민혁 천재입니다.</p>
              <TypeIt
                options={{
                  strings: ['This will be typed!'],
                  speed: 50,
                  waitUntilVisible: true,
                  loop: true
                }}
              />
            </div>
          </div>
        </section>
        <RecommendFood />
      </main>
      <Footer />
    </>
  );
}

import styles from './recommendLocation.module.scss';
import HomeImage from '../../../assets/home.jpg';

export default function RecommendLocation() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.mainTitleBox}>
          <h2>광광지 정보</h2>
          <p>오늘의 서울 관광지 추천 픽!</p>
        </div>
        <ul className={styles.itemList}>
          <li>
            <a href="">
              <img src={HomeImage} alt="" />
              <h4>이름이름이름빵집</h4>
            </a>
          </li>
          <li>
            <a href="">
              <img src={HomeImage} alt="" />
              <h4>이름이름이름빵집</h4>
            </a>
          </li>
          <li>
            <a href="">
              <img src={HomeImage} alt="" />
              <h4>이름이름이름빵집</h4>
            </a>
          </li>
          <li>
            <a href="">
              <img src={HomeImage} alt="" />
              <h4>이름이름이름빵집</h4>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

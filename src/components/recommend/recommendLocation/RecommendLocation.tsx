import styles from './recommendLocation.module.scss';
import HomeImage from '../../../assets/home.jpg';

export default function RecommendLocation() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.mainTitleBox}>
          <h2>음식점</h2>
          <p>음식점 좋아요</p>
        </div>
        <ul className={styles.itemList}>
          <li>
            <a href="">
              <div className={styles.imgContainer}>
                <img src={HomeImage} alt="" />
              </div>
              <h4>이름이름이름빵집</h4>
            </a>
          </li>
          <li>
            <a href="">
              <div className={styles.imgContainer}>
                <img src={HomeImage} alt="" />
              </div>
              <h4>이름이름이름빵집</h4>
            </a>
          </li>
          <li>
            <a href="">
              <div className={styles.imgContainer}>
                <img src={HomeImage} alt="" />
              </div>
              <h4>이름이름이름빵집</h4>
            </a>
          </li>
          <li>
            <a href="">
              <div className={styles.imgContainer}>
                <img src={HomeImage} alt="" />
              </div>
              <h4>이름이름이름빵집</h4>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.title}>미인 데이트</div>
        <div className={styles.content}>
          <p>상호명 : 미인데이트 | 대표자명 : 김민혁</p>
          <p>공공 API를 이용한 관광지와 음식점의 정보를 보여주는 프로젝트입니다.</p>
          <p>이메일 : xpeed96@gmail.com | 깃헙링크 : https://github.com/Miintoo</p>
        </div>
      </div>
    </footer>
  );
}

import styles from "../styles/Header.module.css";

function Header() {
    return (
        <div className={styles.headerWrap}>
            <img className={styles.headerImg} src="https://blimp.space/_next/static/media/store-bg.0c66f3cf.jpg" alt="" />
            <div className={styles.headerTextBox}>
                <h4 className={styles.headerTextSubTitle}>Store</h4>
                <div className={styles.headerTextSubCaption}>블림프가 전국을 누비며 찾아낸 <br/> 휴식 공간으로 떠나보세요.</div>
            </div>
        </div>
    );
}

export default Header;
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
import styles from "../styles/Product.module.css";


function Product({id, img, host, title, price}){
    return (
        <div className={styles.productItem}>
            <img className={styles.productImg} src={img} alt=""/>
            <div className={styles.productHost}>{host}</div>
            <h6 className={styles.ProductTitle}>{title}</h6>
            <div>{price}원</div>
        </div>
    )
}

export default Product;
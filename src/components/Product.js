import PropTypes from "prop-types";
import { Link } from "react-router-dom";


function Product({id, img, host, title, price}){
    return (
        <div>
            <img src={img} alt=""/>
            <div>{host}</div>
            <h6>{title}</h6>
            <div>{price}</div>
        </div>
    )
}

export default Product;
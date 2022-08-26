// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";


function Product({id, img, host, title, price}){
    return (
        <div>
            <img src={img} alt=""/>
            <p>{host}</p>
            <h2>{title}</h2>
            <p>{price}</p>
        </div>
    )
}

export default Product;
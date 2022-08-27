import { useEffect, useState } from "react";
import data from "../db/data.json";
import Product from "../components/Product";
import styles from "../styles/Home.module.css";


function Home() {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const getProducts = async () => {
        const json = data;
        setProducts(json.products);
        setLoading(false);
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className={styles.productParent}>
            <div className={styles.productListWrap}>
                <h6 className={styles.productListTitle}>상품 목록</h6>
                {
                    loading ? (<h1>Loading...</h1>) : (<div className={styles.productList}>{products.map((product) => (
                    <Product 
                        key={product.id}
                        id={product.id}
                        img={product.image}
                        host={product.host}
                        title={product.title}
                        price={product.price}
                        />
                    ))}
                </div>)}
            </div>
        </div>
    );
}

export default Home;
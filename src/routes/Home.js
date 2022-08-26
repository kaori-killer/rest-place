import { useEffect, useState } from "react";
import data from "../db/data.json";
import Product from "../components/Product";

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
        <div>
            {
                loading ? (<h1>Loading...</h1>) : (<div>{products.map((product) => (
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
    );
}

export default Home;
import styles from './ProductCard.module.css';
import { useNavigate } from 'react-router-dom';

type ProductCardProps = {
    name: string;
    colors: string[];
    sizes: string[];
    price: number;
    inStock: boolean;
    num: number;
    img: string;
  };

const ProductCard = (props: ProductCardProps) => {
    const navigate = useNavigate();
    const handleViewDetails = () => {
        navigate(`/products/${props.name.toLowerCase().replace(/\s+/g, '-')}`, { state: { ...props } });
    }

    return (
        <div className={styles.cardMainContainer}>
            <img src={props.img} className={styles.prodImg}/>
            <h1 className={styles.prodName}>
                {props.name}
            </h1>
            <div className={styles.colorSpan}>
                {props.colors.map((hex) => (
                    <button style={{ backgroundColor: `${hex}`, borderRadius: '30px', width: '30px', height: '30px', border: hex === '#FFFFFF' ? '1px solid black' : 'none'}} disabled />
                ))}
            </div>
            <p className={styles.price}>${props.price}</p>
            <button onClick={handleViewDetails} className={styles.viewDetailsBtn}>View Details</button>
            {props.inStock && props.num > 0 ? (
                <p className={styles.inStock}>In Stock</p>
            ):(
                <p className={styles.outStock}>Out of Stock</p>
            )}
        </div>
    )
}

export default ProductCard;
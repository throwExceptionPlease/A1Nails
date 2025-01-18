import NavBarLogo from '../../components/NavBarLogo';
import styles from './Products.module.css';
import ProductCard from '../../components/product-card/ProductCard';

type Product = {
  name: string;
  colors: string[];
  sizes: string[];
  price: number;
  inStock: boolean;
  num: number;
  img: string;
};

type ProductsProps = {
  products: Product[];
};

const Products = ({ products }: ProductsProps) => {
  return (
    <div className={styles.productsMainContainer}>
      <NavBarLogo currPage="Products" />
      <div className={styles.productsTop}>
        <h1 className={styles.productsPageHeader}>PRODUCTS</h1>
        <p className={styles.note}>
          All products are available for in-store purchase only.
        </p>
      </div>
      <div className={styles.productsContainer}>
        {products.map((item, index) => (
          <ProductCard
            key={index}
            name={item.name}
            colors={item.colors}
            sizes={item.sizes}
            price={item.price}
            inStock={item.inStock}
            num={item.num}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;

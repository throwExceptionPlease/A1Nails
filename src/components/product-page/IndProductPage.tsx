import { useLocation, useNavigate } from "react-router-dom";
import styles from "./IndProductPage.module.css";
import NavBarLogo from "../NavBarLogo";
import Footer from "../footer/Footer";

const IndProductPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  // Fallback handling if state is undefined
  if (!state) {
    navigate("/products");
    return null;
  }

  const { name, colors, sizes, price, inStock, num, img } = state;

  console.log(sizes);
  return (
    <div className={styles.pageContainer}>
      <NavBarLogo currPage={"Products"} />
      <h1 className={styles.prodName}>{name}</h1>
      <div className={styles.imgContainer}>
        <img src={img} alt={name} />
      </div>
      <div className={styles.colorSpan}>
        <p>Colors:</p>
        {colors.map((hex: string, index: number) => (
          <span
            key={index}
            style={{
              backgroundColor: hex,
              borderRadius: "15px",
              width: "30px",
              height: "30px",
              display: "inline-block",
              marginRight: "10px",
              border: hex === "#FFFFFF" ? "solid black 1px" : "none",
            }}
          />
        ))}
      </div>
      <p className={styles.prodPrice}>${price}</p>
      {sizes && sizes.length > 0 ? (
        <div className={styles.sizeContainer}>
          <h3>Available Sizes:</h3>
          {sizes.map((s: string, index: number) => (
            <p key={index} className={styles.sizeItem}>
              {s}
            </p>
          ))}
        </div>
      ) : (
        <p>No sizes available.</p>
      )}
      <p className={inStock ? styles.inStock : styles.outStock}>
        {inStock ? "In-Stock" : "Out of Stock"}
      </p>
      <p className={styles.numStock}>{num} left</p>
      <p className={styles.prodBottomNote}>
        For purchasing inquiries, please contact the nail salon.
      </p>
      <Footer />
    </div>
  );
};

export default IndProductPage;

import styles from "./NavBar.module.css";
import mainLogo from "../assets/A1NailsLogo.png";

/* Each tab should have at most a label and a link to it */
type Tab = {
  label: string;
  href?: string; // Optional for main dropdowns
  submenu?: Tab[]; // array of subtabs
};

type NavBarProps = {
  currPage: string;
};

const NavBar = (props: NavBarProps) => {
  return (
    <div className={styles.navBar}>
      {/* <img src={mainLogo} className={styles.mainLogo}/> */}
      <div className={styles.mainHeaders}>
        <a
          href="/"
          className={props.currPage === "Home" ? styles.activeHeader : ""}
        >
          HOME
        </a>
        <div className={styles.servicesDrop}>
          <button
            className={props.currPage === "Services" ? styles.activeHeader : ""}
          >
            SERVICES
          </button>
          <div className={styles.servicesItems}>
            <a id={styles.dropItem} href="/services">
              Services
            </a>
            <a id={styles.dropItem} href="/booking">
              Book an Appointment
            </a>
          </div>
        </div>
        <a
          href="/products"
          className={props.currPage === "Products" ? styles.activeHeader : ""}
        >
          PRODUCTS
        </a>
        <div className={styles.aboutDrop}>
          <button
            className={props.currPage === "About Us" ? styles.activeHeader : ""}
          >
            ABOUT US
          </button>
          <div className={styles.aboutItems}>
            <a id={styles.dropItem} href="/team">
              Our Team
            </a>
            <a id={styles.dropItem} href="/directory">
              Directory
            </a>
            <a id={styles.dropItem} href="/directory">
              Gallery
            </a>
            <a id={styles.dropItem} href="/directory">
              FAQs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

import styles from './NavBar.module.css';
import mainLogo from '../assets/A1NailsLogo.png'

/* Each tab should have at most a label and a link to it */
type Tab = {
    label: string;
    href?: string; // Optional for main dropdowns
    submenu?: Tab[]; // array of subtabs
  };

  const NavBar: React.FC = () => {
    return (
        <div className={styles.navBar}>
            {/* <img src={mainLogo} className={styles.mainLogo}/> */}
            <div className={styles.mainHeaders}>
                <a href="/">HOME</a>
                <div className={styles.servicesDrop}>
                    <button>SERVICES</button>
                    <div className={styles.servicesItems}>
                        <a id={styles.dropItem} href="/services">Services</a>
                        <a id={styles.dropItem} href="/booking">Book an Appointment</a>
                    </div>
                </div>
                <a href="/products">PRODUCTS</a>
                <div className={styles.aboutDrop}>
                    <button>ABOUT US</button>
                    <div className={styles.aboutItems}>
                        <a id={styles.dropItem} href="/team">Our Team</a>
                        <a id={styles.dropItem} href="/directory">Directory</a>
                        <a id={styles.dropItem} href="/directory">Gallery</a>
                        <a id={styles.dropItem} href="/directory">FAQs</a>
                    </div>
                </div>
            </div>
      </div>
    );
};
  
  export default NavBar;
  
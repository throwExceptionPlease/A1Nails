import react, { JSX } from 'react';
import styles from './Footer.module.css';

function Footer(): JSX.Element {
    return (
        <div className={styles.footerMainContainer}>
            <div className={styles.contactContainer}>
                <h1 className={styles.footerHeader}>CONTACT</h1>
                <p className={styles.footerDesc}>(410) 719 - 2200</p>
            </div>
            <div className={styles.hoursContainer}>
                <h1 className={styles.footerHeader}>HOURS</h1>
                <p className={styles.footerDesc}>Mon - Sat: 9AM- 7PM</p>
                <p className={styles.footerDesc}>Sun: 12PM - 5PM</p>
            </div>
            <div className={styles.locationsContainer}>
                <h1 className={styles.footerHeader}>LOCATIONS</h1>
                <p className={styles.footerDesc}>
                    5640 Baltimore National Pike, <br />
                    Catonsville, MD 21228
                </p>
            </div>
        </div>
    )
}

export default Footer;
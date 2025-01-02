import react, { JSX } from 'react';
import NavBar from '../../components/NavBar';
import styles from './LandingPage.module.css';
import Footer from '../../components/footer/Footer';
import salonImage from '../../assets/nailsalon.jpg';

function LandingPage(): JSX.Element {
    return (
        <div className={styles.mainDiv}>
            <div className={styles.mainContainer}>
                <div className={styles.leftContainer}>
                    <NavBar/>
                    <h1 className={styles.header}>A-1 NAILS</h1>
                    <button className={styles.btn}>Book an Appointment</button>
                    <button className={styles.btn}>Our Services</button>
                    <p className={styles.help}>Not sure where to start? <a href="/faqs" className={styles.guideLink}>See our guide.</a></p>
                </div>

                <div className={styles.rightContainer}>
                    <img src={salonImage} className={styles.salonImage} />
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default LandingPage;
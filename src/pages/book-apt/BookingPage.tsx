import { JSX } from "react";
import styles from './BookingPage.module.css';
import NavBarLogo from "../../components/NavBarLogo";
import Footer from "../../components/footer/Footer";

function BookingPage(): JSX.Element {
    return (
        <>
            <div className={styles.bookPageContainer}>
                <NavBarLogo currPage={"Services"} />
                <h2 className={styles.bookHeader}>Book an Appointment</h2>
                <form className={styles.formContainer}>
                    <p className={styles.formNotice}>Please note: While we strive to honor your scheduled time, your appointment may be delayed due to walk-ins or delays from previous appointments. Thank you for your understanding.</p>
                    <ol type="1">
                        <li>
                            Please enter your name and contact information. This will allow us to send you an appointment confirmation and assist our technicians in recognizing you when you arrive for your appointment. 
                            <br></br>
                            <div className={styles.personalInfo}>
                                <div className={styles.firstName}>
                                    <label>First Name</label>
                                    <input type="text" required name="firstName" id="firstname"/>
                                </div>
                                <div className={styles.lastName}>
                                    <label>Last Name</label>
                                    <input type="text" required name="lastName" id="lastName"/>
                                </div>
                                <div className={styles.email}>
                                    <label>Email</label>
                                    <input type="email" required name="email" id="email"/>
                                </div>
                                <div className={styles.phoneNumber}>
                                    <label>Phone Number</label>
                                    <input type="text" required name="phoneNumber" id="phoneNumber"/>
                                </div>
                            </div>
                        </li>
                        <li>
                            Please select the type of service(s) you would like to receive.
                        </li>
                    </ol>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default BookingPage;
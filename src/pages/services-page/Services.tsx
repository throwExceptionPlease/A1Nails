import React, { JSX } from 'react';
import NavBarLogo from '../../components/NavBarLogo';
import styles from './Services.module.css';

function Services(): JSX.Element {
    return (
        <div className={styles.servicesMainContainer}>
            <NavBarLogo />
        </div>
    )
}

export default Services;
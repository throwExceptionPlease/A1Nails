import React, { useState } from 'react';
import menu from '../../../assets/menu.json';
import styles from './ServiceDesc.module.css';

type serviceDescProps = {
    currPage: number;
}

const ServiceDesc = (props: serviceDescProps) => {
    const serviceHeaders = ['Manicure', 'Pedicure', 'Eyebrows'];
    const [activeTreatmentIndex, setActiveTreatmentIndex] = useState<number | null>(0);

    const handleTreatmentClick = (index: number) => {
        setActiveTreatmentIndex(index === activeTreatmentIndex ? null : index);
    };

    switch (props.currPage) {
        case 0:
            return (
                <div className={styles.manicureMainContainer}>
                    {menu.Manicure.items.map((item, index) => (
                        <div key={index} className={styles.itemMainContainer}>
                            <div className={styles.itemInfo}>
                                <h2>{item.name}</h2>
                                {item.desc && <p>{item.desc}</p>}
                            </div>
                            <div>
                                <p className={styles.price}>${item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            );
        case 1:
            return (
                <div className={styles.pedicureMainContainer}>
                    {menu.Pedicure.items.map((item, index) => (
                        <div key={index} className={styles.itemMainContainer}>
                            <div className={styles.itemInfo}>
                                <h2>{item.name}</h2>
                                {item.desc && <p>{item.desc}</p>}
                            </div>
                            <div>
                                <p className={styles.price}>${item.price}</p>
                            </div>
                        </div>
                    ))}
                    <h1 className={styles.subHeader}>PEDICURE ADD-ONS</h1>
                    {menu.Pedicure['Add-ons'].items.map((item, index) => (
                        <div key={index} className={styles.itemMainContainer}>
                            <div className={styles.itemInfo}>
                                <h2>{item.name}</h2>
                                {item.desc && <p>{item.desc}</p>}
                            </div>
                            <div>
                                <p className={styles.price}>${item.price}</p>
                            </div>
                        </div>
                    ))}
                    <h1 className={styles.subHeader}>More Information About Treatments</h1>
                    <div className={styles.treatHeaderContainer}>
                        {menu.Pedicure['More Information About Treatments'].treatments.map((item, index) => (
                            <p
                                key={index}
                                className={`${styles.treatmentHeader} ${activeTreatmentIndex === index ? styles.activeTreatmentHeader : styles.inactiveTreatmentHeader}`}
                                onClick={() => handleTreatmentClick(index)}
                            >
                                {item.name}
                            </p>
                        ))}
                    </div>
                    <div className={styles.treatDescContainer}>
                        {menu.Pedicure['More Information About Treatments'].treatments.map((item, index) => (
                            activeTreatmentIndex === index && (
                                <p key={index} className={styles.treatmentDesc}>
                                    {item.desc}
                                </p>
                            )
                        ))}
                    </div>
                </div>
            );
        case 2:
            return (
                <div className={styles.eyebrowsMainContainer}>
                    {menu.Eyebrows.items.map((item, index) => (
                        <div key={index} className={styles.itemMainContainer}>
                            <div className={styles.itemInfo}>
                                <h2>{item.name}</h2>
                                {item.desc && <p>{item.desc}</p>}
                            </div>
                            <div>
                                <p className={styles.price}>${item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            );
        default:
            return (
                <p className={styles.error}>This service is not available at this moment.</p>
            );
    }
}

export default ServiceDesc;

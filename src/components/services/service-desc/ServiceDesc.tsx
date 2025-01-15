import React from 'react';
import menu from '../../../assets/menu.json';
import styles from './ServiceDesc.module.css';

type serviceDescProps = {
    currPage: number;
}

const ServiceDesc = (props: serviceDescProps) => {
    const serviceHeaders = ['Manicure', 'Pedicure', 'Eyebrows'];

    switch (props.currPage) {
        case 0:
            return (
                <div>
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
                <div>
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
                </div>
            );
        case 2:
            return (
                <div>
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
                <p>Contact the department</p>
            );
    }
}

export default ServiceDesc;

import React, { useEffect } from "react";
import manicureImg from '../../../assets/manicureImg.svg';
import styles from "./ServiceHeaders.module.css";
import pedicureImg from '../../../assets/pedicureImg.svg';
import eyebrowImg from '../../../assets/eyebrowImg.svg';

type ServiceHeadersProps = {
    showImage: boolean,
    currPage: number
}

const ServiceHeaders = (props: ServiceHeadersProps) => {
    const serviceHeaders = ['Manicure', 'Pedicure', 'Eyebrows'];
    const serviceDescriptions = [
        'Experience pure luxury with our manicure service. We shape your nails perfectly and offer beautiful finishes to complete the look you want.',
        'Treat yourself to our pedicure service for relaxation. From expert care to soothing massages, you will leave feeling refreshed and rejuvenated.',
        'Enhance your look with our eyebrow service. Our expert technicians shape and define your brows, giving you a stunning and polished look.',
    ];

    const serviceImg = [manicureImg, pedicureImg, eyebrowImg];

    useEffect(() => {
        console.log(props.showImage);
    }, [props.showImage]);

    return (
        <div className={styles.servicesMainContainer}>
            <div className={styles.headerContainer}>
                {serviceHeaders.map((header, index) => {
                    let positionClass = '';
                    
                    if (index === props.currPage) {
                        positionClass = styles.center; // Current page
                    } else if (index < props.currPage) {
                        positionClass = 
                            index === props.currPage - 1 ? styles.left : styles.farLeft; // Left or Far Left
                    } else {
                        positionClass = 
                            index === props.currPage + 1 ? styles.right : styles.farRight; // Right or Far Right
                    }

                    return (
                        <div key={index} className={`${styles.header} ${positionClass}`}>
                            <h1 className={styles.mainHeader}>{header}</h1>
                            <p className={styles.serviceDesc}>{serviceDescriptions[index]}</p>
                            {props.showImage && (positionClass === styles.center) && <img src={serviceImg[index]} className={styles.serviceImage} />}
                        </div>

                    );
                })}
            </div>
        </div>
    );
}


export default ServiceHeaders;
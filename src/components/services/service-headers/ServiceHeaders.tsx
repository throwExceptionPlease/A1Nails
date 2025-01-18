import React, { useEffect } from "react";
import styles from "./ServiceHeaders.module.css";
import menu from '../../../assets/menu.json';

type ServiceHeadersProps = {
  showImage: boolean;
  currPage: number;
};

const ServiceHeaders = (props: ServiceHeadersProps) => {
  const serviceHeaders = Object.keys(menu);
  const serviceDescriptions = serviceHeaders.map((key) => (menu as Record<string, { desc: string }>)[key].desc);
  const serviceImg = serviceHeaders.map((key) => (menu as Record<string, { img: string }>)[key].img);

  useEffect(() => {}, [props.showImage]);

  return (
    <div className={styles.servicesMainContainer}>
      <div className={styles.headerContainer}>
        {serviceHeaders.map((header, index) => {
          let positionClass = "";

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
              {props.showImage && positionClass === styles.center && (
                <img src={serviceImg[index]} className={styles.serviceImage} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceHeaders;

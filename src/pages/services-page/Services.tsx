import React, { JSX, useEffect, useState } from "react";
import NavBarLogo from "../../components/NavBarLogo";
import styles from "./Services.module.css";
import ServiceHeaders from "../../components/services/service-headers/ServiceHeaders";
import ServiceDesc from "../../components/services/service-desc/ServiceDesc";
import Footer from "../../components/footer/Footer";

function Services(): JSX.Element {
  const [currPage, setCurrPage] = useState(0);

  const handleNextService = (btnIndex: number) => {
    setCurrPage(btnIndex);
  };

  return (
    <div className={styles.servicesMainContainer}>
      <NavBarLogo currPage={"Services"} />
      <ServiceHeaders showImage={true} currPage={currPage} />
      <div className={styles.breadcrumbContainer}>
        <button
          className={currPage === 0 ? styles.currBtn : styles.nonCurrBtn}
          onClick={() => handleNextService(0)}
        />
        <button
          className={currPage === 1 ? styles.currBtn : styles.nonCurrBtn}
          onClick={() => handleNextService(1)}
        />
        <button
          className={currPage === 2 ? styles.currBtn : styles.nonCurrBtn}
          onClick={() => handleNextService(2)}
        />
      </div>
      <ServiceDesc currPage={currPage} />
      <Footer />
    </div>
  );
}

export default Services;

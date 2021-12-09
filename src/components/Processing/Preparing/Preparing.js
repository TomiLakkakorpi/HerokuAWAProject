import React from "react";
import Footer from "../../Shared Components/Footer/Footer";
import Header from "../../Shared Components/Header/Header";
import {GiCook} from "react-icons/gi";
import styles from "./Preparing.module.css";

const Preparing = () => {
  setTimeout(function () {
    window.location.href = "/readyForDelivery";
  }, 5000);

  return (
    <section>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h3 className="text-center">Your order is being prepared</h3>
            <div className={styles.icon}> <GiCook size={56}/> </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Preparing;

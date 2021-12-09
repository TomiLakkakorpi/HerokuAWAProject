import React from "react";
import Footer from "../../Shared Components/Footer/Footer";
import Header from "../../Shared Components/Header/Header";
import {GrDeliver} from "react-icons/gr";
import styles from "./Delivering.module.css";

const Delivering = () => {
  setTimeout(function () {
    window.location.href = "/delivered";
  }, 5000);

  return (
    <section>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h3 className="text-center">Your order is being delivered!</h3>
            <div className={styles.icon}> <GrDeliver size={56}/> </div>
            </div>      
          <div className="col-md-2"></div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Delivering;

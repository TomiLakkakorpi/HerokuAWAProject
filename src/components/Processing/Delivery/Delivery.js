import React from "react";
import Footer from "../../Shared Components/Footer/Footer";
import Header from "../../Shared Components/Header/Header";
import { MdFastfood } from "react-icons/md";
import styles from "./Delivery.module.css";

const Delivery = () => {
  setTimeout(function () {
    window.location.href = "/delivering";
  }, 5000);

  return (
    <section>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h3 className="text-center">Your food is ready to be delivered</h3>
            <div className={styles.icon}> <MdFastfood size={56}/> </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Delivery;

import React from "react";
import Footer from "../../Shared Components/Footer/Footer";
import Header from "../../Shared Components/Header/Header";
import {FaHandshake} from "react-icons/fa";
import styles from "./Received.module.css";

const Received = () => {
  setTimeout(function () {
    window.location.href = "/preparing";
  }, 5000);

  return (
    <section>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h3 className="text-center">Your order has been received</h3>
            <div className={styles.icon}> <FaHandshake size={56}/> </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Received;

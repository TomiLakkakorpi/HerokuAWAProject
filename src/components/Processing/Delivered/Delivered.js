import React from "react";
import Footer from "../../Shared Components/Footer/Footer";
import Header from "../../Shared Components/Header/Header";
import styles from "./Delivered.module.css";
import { FaThumbsUp } from "react-icons/fa";

const Delivered = () => {
  return (
    <section>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h3 className="text-center">
              Your food has been succesfully delivered!
            </h3>
            <h4 className="text-center">Thank you for ordering from us!</h4>
            <div className={styles.icon}> <FaThumbsUp size={56}/> </div>
            </div>
          <div className="col-md-2"></div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Delivered;

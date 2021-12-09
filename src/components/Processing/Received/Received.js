import React from "react";
import Footer from "../../Shared Components/Footer/Footer";
import Header from "../../Shared Components/Header/Header";

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
            <h3 className="text-center">We have received your order</h3>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Received;

import React from "react";

const ReviewTable = () => {
  const totalPrice = localStorage.getItem("totalPrice");

  const handlePayment = () => {
    alert("Payment System Have To Implement Here and Then");
    setTimeout(function () {
      window.location.href = "/preparing";
    }, 1000);
  };

  return (
    <section className="card p-4">
      <div className="row border p-2">
        <div className="col-8">Total Price</div>
        <div className="col-4 text-right">${totalPrice}</div>
      </div>
      <div className="row my-3">
        <select class="form-select" aria-label="Default select example">
          <option selected>Deliver To</option>
          <option value="1">Helsinki, Uusimaa</option>
          <option value="2">Espoo, Uusimaa</option>
          <option value="3">Tampere, Pirkanmaa</option>
          <option value="4">Vantaa, Uusimaa </option>
          <option value="5">Turku, Southwest Finland</option>
          <option value="6">Oulu, North Ostrobothnia</option>
        </select>
      </div>
      <div className="row">
        <button
          onClick={handlePayment}
          className="btn btn-outline-dark"
          type="button"
        >
          Pay Now
        </button>
      </div>
    </section>
  );
};

export default ReviewTable;

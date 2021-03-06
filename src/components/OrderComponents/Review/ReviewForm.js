import React from "react";

const ReviewForm = (props) => {
  // console.log(props);
  const { menuName, menuPrice, menuDescription, menuImage } = props.menu;

  return (
    <div className="border p-3 d-flex mb-2 justify-content-between">
      <div className="">
        <h5 className="card-title">{menuName}</h5>
        <p className="card-text">{menuDescription}</p>
        <p className="card-text">{menuPrice}</p>
      </div>
      <img className="img-fluid w-25 h-25" src={menuImage} alt="Card cap" />
    </div>
  );
};

export default ReviewForm;

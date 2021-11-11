import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "./../../Shared Components/Header/Header";

const NewMenu = () => {
  return (
    <>
      <div class="container-fluid">
        <Header />
        <div className="row mt-5">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-6 mx-5">
            <h1 className="text-center mb-5">Add New Restaurant</h1>
            <form
              id="add_new"
              method="post"
              action="/add"
              enctype="multipart/form-data"
            >
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Restaurant Name
                </label>
                <input type="text" name="name" class="form-control" id="" />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Restaurant Address
                </label>
                <input type="text" name="address" class="form-control" id="" />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Operating Hours
                </label>
                <input
                  type="number"
                  name="costPerNight"
                  class="form-control"
                  id=""
                />
              </div>
              <div class="mb-3">
                <label for="formFile" class="form-label">
                  Price Level
                </label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>€ - Cheap</option>
                  <option>€€ - Average</option>
                  <option>€€€ - Expensive</option>
                  <option>€€€€ - Very Expensive</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="formFile" class="form-label">
                  Restaurant Type
                </label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Buffet</option>
                  <option>Pizza</option>
                  <option>Burger</option>
                  <option>Sushi</option>
                  <option>Chinese</option>
                  <option>Japanese</option>
                  <option>Mediterranean</option>
                  <option>Mexican</option>
                  <option>Thai</option>
                  <option>Vegeterian</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="formFile" class="form-label">
                  Restaurant Scenario
                </label>
                <input class="form-control" type="file" name="image" />
              </div>
              <button type="submit" class="btn btn-outline-dark">
                {" "}
                Save And Display
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewMenu;

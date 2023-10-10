import React from "react";
import jsonData from "./json";
import { useCont } from "./Context";

const Products = () => {
  const { handleOpen } = useCont();
  return (
    <div className="services">
      {jsonData.map((service) => {
        return (
          <div className="card p-2">
            <div className="card-img-top w-100 h-50">
              <img
                src={service.image}
                className="w-100 h-100 img-fluid"
                alt={service.title}
              />
            </div>
            <div className="card-body">
              <h3 className="card-title text-primary">{service.title}</h3>
              <div className="d-flex justify-content-between">
                <span className="card-title text-secondary fs-5">
                  ${service.price}
                </span>
                <button className="btn btn-danger" onClick={handleOpen}>
                  Book Now
                </button>
              </div>
              <p className="text-success">{service.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Products;

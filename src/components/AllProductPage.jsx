import React, { useEffect, useContext, useState } from "react";
import {
  getSingleProductCall,
  getAllProductCall,
  postProductAPICall,
  editProductCall,
  deleteProductCall
} from "../apis/AnimeFinder";
import { ProductsContext } from "../context/ProductContext";
import { useHistory, Link, Redirect } from "react-router-dom";
import MyLoader from "./MyLoader";

const AllProductPage = (props) => {
  const { products, setProducts } = useContext(ProductsContext);
  const { state, setState } = useState(false);
  const history = useHistory();
  const REQUEST_STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    FAILURE: "failure",
  };
  const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);

  const fetchData = async () => {
    try {
      const response = await getAllProductCall();
      setRequestStatus(REQUEST_STATUS.SUCCESS);
      setProducts(response.data.data.product);
      setState(response.data.data);
    } catch (err) {
      setRequestStatus(REQUEST_STATUS.FAILURE);
    }
  };
  useEffect(() => {
    fetchData();
  }, [state]);

  const deleteHandler = async (id) => {
    try {
      const response = await deleteProductCall(id);
      fetchData();
    } catch (err) {
      console.log(err);
      <Redirect to="/error" />;
    }
  };

  const editHandler = (id) => {
    history.push(`/product/${id}/update`);
  };

  if (requestStatus === REQUEST_STATUS.LOADING) return <MyLoader></MyLoader>;
  if (requestStatus === REQUEST_STATUS.FAILURE) <Redirect to="/error" />;

  return (
    <div id="margin" >
          <div style={{backgroundColor: "#FFA500"}}>
      <h1 className="font-weight-normal text-light display-1 text-center">Anime Shop</h1>
      {localStorage.getItem("authenticatedUser") != null && (
        <h1 className="font-weight-light text-center">
          Greetings {localStorage.getItem("first_name")}!
        </h1>
      )}
    </div>
    {/* <div className="list-group" id="margin"> */}
    <div className="container">
    <div className="row .mb-5 .pb-5">
          {products &&
            products.map((product) => {
              return (
                <div className="col-md-4" key={product.id}>
                    <Link to={`/product/${product.id}`}>
                      <img
                        src={product.product_image}
                        className="img-fluid rounded p-1 border border-warning bg-warning w-50"
                      ></img>
                    </Link>
                    </div>
              );
            })}
            </div>
      </div>
    </div>
  );
};

export default AllProductPage;
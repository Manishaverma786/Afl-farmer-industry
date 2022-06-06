import React, { useState, useEffect, useMemo } from "react";
import axios from "../api/axios";
import SideBarFarmer from "./SideBarFarmer";
const Request = () => {
  const [request, setRequest] = useState([]);
  const [filter, setFilter] = useState("pending");

  var filterdata = useMemo(() => {
    return request.filter((x) => x.status === filter);
  }, [filter, request]);

  const requests = () => {
    axios.get("residue-orders/").then((response) => {
      const requestList = response.data;
      console.log(requestList);
      setRequest(requestList);
    });
  };
  useEffect(() => {
    requests();
  }, []);

  const acceptOrReject = (id, status) => {
    axios
      .patch(`/residue-orders/${id}`, {
        status,
      })
      .then(() => requests());
  };

  const ShowRequests = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          {/* <button type="button" class="btn btn-outline-dark me-2" onClick={() => setFilter("All")}>All</button> */}
          <button
            type="button"
            class="btn btn-outline-dark me-2"
            onClick={() => setFilter("pending")}
          >
            Pending
          </button>
          <button
            type="button"
            class="btn btn-outline-dark me-2"
            onClick={() => setFilter("accepted")}
          >
            Accepted
          </button>
          <button
            type="button"
            class="btn btn-outline-dark me-2"
            onClick={() => setFilter("rejected")}
          >
            {" "}
            Rejected
          </button>
        </div>
        {filterdata.map((data, i) => (
          <div className="col-md-4 mb-4 mt-3 ">
            <div
              className="card h-40 text-center py-3"
              style={{ width: "18rem" }}
              key={i}
            >
              <div class="card-body">
                <h5 class="card-title mb-0">{data.id}</h5>
                <h5 class="card-title mb-0">{data.residue.type_of_residue}</h5>
                <h6 class="card-title mb-0">
                  {" "}
                  Quantity: {data.residue.quantity}
                </h6>
                <p class="card-text">{data.customer.name}₹ </p>

                <p class="card-text lead fw-bold">{data.residue.price}₹ </p>
                {data.status === "pending" && (
                  <>
                    <div
                      class="btn btn-dark px-3"
                      onClick={() => {
                        acceptOrReject(data.id, "accepted");
                      }}
                    >
                      Accept
                    </div>
                    <div
                      class="btn btn-dark px-3"
                      style={{ marginLeft: 10 }}
                      onClick={() => {
                        acceptOrReject(data.id, "rejected");
                      }}
                    >
                      Reject
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };
  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-4">
            <SideBarFarmer />
          </div>
        </div>
        <div className="row ">
          <div className="col-md-9 mt-2" style={{marginLeft: 300 }}>
            <div className="row justify-content-center">{<ShowRequests />}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Request;

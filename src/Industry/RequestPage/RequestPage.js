import React, { useState, useEffect, useMemo } from 'react'
import './RequestPage.css'
import axios from '../../api/axios'
import SideBar from '../SideBar'

const Request = () => {
  const [request, setRequest] = useState([])
  const [filter, setFilter] = useState("pending")

  var filterdata = useMemo(() => {
    return request.filter((x) => x.status === filter);
  }, [filter, request])

  const requests = () => {
    axios.get("orders")
      .then(response => {
        const orderList = response.data;
        console.log('orderlist', orderList)
        setRequest(orderList)
      }).catch(e => {
        console.log(e);
    });
  }
  useEffect(() => {
    requests();
  }, []);

  const acceptOrReject = (id, status) => {
    axios.patch(`orders/${id}`, {
      status
    }).then(() => requests())

  }


  const ShowOrders = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-1 mt-3 pb-5">
          {/* <button type="button" class="btn btn-outline-dark me-2" onClick={() => setFilter("All")}>All</button> */}
          <button type="button" class="btn btn-outline-dark me-2" onClick={() => setFilter("pending")}>Pending</button>
          <button type="button" class="btn btn-outline-dark me-2" onClick={() => setFilter("accepted")}>Accepted</button>
          <button type="button" class="btn btn-outline-dark me-2" onClick={() => setFilter("rejected")}> Rejected</button>
        </div>
        {
          filterdata.map((data, i) =>
            <div className="col-md-4 mb-4 mt-2 ">
              <div className="card h-40 text-center py-3 px-2" style={{ "width": "18rem" }} key={i}>
                <img src={data.machine.image} className="card-img-top" alt={data.machine.name} height="200px" />
                <div class="card-body">
                {/* <img src={data.machine.image} className="card-img-top" alt={data.machine.name} height="200px" /> */}
                  <h5 class="card-title mb-0">{data.machine.name}</h5>
                  <h5 class="card-title mb-0">Price : {data.machine.sell_price}</h5>
                  {/* <h5 class="card-title mb-0"> {data.machine.rent_price}</h5> */}
                  <p className="card-text mb-0">Customer: {data.customer.username} </p>
                  <h6 class="card-title"> Quantity:{data.quantity}</h6>
                  {data.status === "pending" &&
                    <>
                      <div class="btn btn-dark px-3 mt-1" onClick={() => { acceptOrReject(data.id, "accepted") }}>Accept</div>
                      <div class="btn btn-dark px-3 mt-1" style={{ marginLeft: 10 }} onClick={() => { acceptOrReject(data.id, "rejected") }}>Reject</div>
                    </>
                  }
                </div>
              </div>
            </div>
          )
        }
      </>
    )
  }
  return (
    <>
      <div className="container">
        <div className="row py-4 justify-content-evenly" >
          <div className="col-md-4">
            <SideBar />
          </div>
          <div className="col-md-9 col-sm-6" style={{ marginLeft: 300 }}>
            <h1 className='text-center border border-1 p-4  shadow p-3 mt-3 mb-5 bg-body roundeds' style={{ marginTop: 100, color: "#172578 " }}>Requests</h1>
          </div>
          <div className="row">
            <div className="col-md-9" style={{ marginLeft: 250 }}>
              <div className="row justify-content-center">{<ShowOrders />}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Request;
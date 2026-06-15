import React,{useState,useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Orders = () => {
  const[allOrders,setAllOrders]=useState([]);
  const token = localStorage.getItem("token");
  console.log("Orders Page Token:", token);
  useEffect(()=>{
    const token = localStorage.getItem("token");
    console.log("Orders Token:", token);
    axios.get("http://localhost:3002/allOrders",{
      headers:{
        Authorization:`Bearer ${token}`,
      },
    }).then((res)=>{
      console.log(res.data);
      setAllOrders(res.data);
    })
  },[]);
  return (
    <>
    <h3 className="title">Order History ({allOrders.length})</h3>

    <div className="order-table table-responsive">
      <table>
        <tr>
            <th>Name</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Total</th>
            <th>Mode</th>
          </tr>
          {allOrders.map((stock,index)=>{
            const total=stock.qty*stock.price;
            return(
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{total.toFixed(2)}</td>
                <td>{stock.mode}</td>
              </tr>
            );
          })}
      </table>  
    </div>
    </>
  );
};

export default Orders;
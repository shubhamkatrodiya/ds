import { useEffect, useState } from "react";
import React from "react";

export default function Apidata(props) {
  let [da, letda] = useState(props.data);
  let [da1, letda1] = useState(props.data);
  let [da2, letda2] = useState("");

  return (
    <>
      <input
        type="text"
        value={da2}
        onChange={(e) => {
          letda2(e.target.value);
          console.log(da);
          let d = da.filter((val) => {
            return val.name === e.target.value ? val : false;
          });
          if (d.length > 0) {
            letda1(d);
          } else {
            letda1(da);
        }
        }}
      />
      <div className="api-data">
        {da1.map((item, index) => {
          return (
            <div key={index} className="box">
              <div className="image">
                <img src={item.image} alt={item.name} width={"100%"} />
              </div>
              <div className="detail">
                <div className="line1">
                  <h1>{item.name}</h1>
                  <div className="line">
                    <div
                      className="circal"
                      style={{
                        backgroundColor:
                          item.status === "Alive"
                            ? "green"
                            : item.status === "unknown"
                            ? "rgb(158, 158, 158)"
                            : "red",
                      }}
                    ></div>
                    <span className="status">{item.status}</span>
                    <span className="margin">-</span>
                    <span className="species">{item.species}</span>
                  </div>
                </div>
                <div className="line2">
                  <span className="light">Last known location:</span>
                  <a href="">{item.location.name}</a>
                </div>
                <div className="line3">
                  <span className="light">First seen in:</span>
                  <a href="">{item.type}</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

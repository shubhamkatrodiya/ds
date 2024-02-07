import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Col,Row } from 'react-bootstrap';

const Categories = () => {
  let [data, setdata] = useState([]);
  let [pro, setpro] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories')
      .then(function (response) {
        // console.log(response.data);
        setdata(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(function (response) {
        // console.log(response.data);
        setpro(response.data.products);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])

  return (
    <>
      <Row>
        <Col lg={3}>
          <ul className='cate'>
            {
              data.map((item, index) => {
                return (
                  <div key={index}>
                    <li>{item}</li>
                  </div>
                )
              })
            }
          </ul>
        </Col>

        <Col lg={9}>
            <div className="row pro_box">
              {
                pro.map((item,index) => {
                  return (
                    <div className="col-md-4" key={index}>
                      <div className="card">
                        <img className="card-img-top" src={item.thumbnail} alt="Card image cap" />
                        <div className="card-body">
                          <h5 className="card-title">{item.brand}</h5>
                          <h6 className="card-title">{item.title}</h6>
                          <p className="card-text">{item.description}</p>
                          <p className="card-text"><small className="text-muted" style={{fontSize:'25px'}}>${item.price}</small><h7 className="card-title">{item. discountPercentage}%off</h7></p>
                          <p className="card-text">Rating {item.rating} %</p>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
        </Col>

      </Row>
    </>
  )
}

export default Categories

import React, { Component } from 'react'
import './Product.css'
export default class Product extends Component {
    letProduct(){
        let Products=[
            {
              image:<img src="https://tse3.mm.bing.net/th?id=OIP.Hvhux-s-WWq_fKfPSeRL5AHaJb&pid=Api&P=0&w=300&h=300" className="img-rounded" ></img>,
              brand:"STYLAGE",
              type:"Printed Round",
              rate:"₹444",

            },
            {
              image:<img src="https://tse3.mm.bing.net/th?id=OIP.Hvhux-s-WWq_fKfPSeRL5AHaJb&pid=Api&P=0&w=300&h=300" className="img-rounded" ></img>,
              brand:"STYLAGE",
              type:"Printed Round",
              rate:"₹444",
            },
            {
              image:<img src="https://tse3.mm.bing.net/th?id=OIP.Hvhux-s-WWq_fKfPSeRL5AHaJb&pid=Api&P=0&w=300&h=300" className="img-rounded" ></img>,
              brand:"STYLAGE",
              type:"Printed Round",
              rate:"₹444",
            },
            {
              image:<img src="https://tse3.mm.bing.net/th?id=OIP.Hvhux-s-WWq_fKfPSeRL5AHaJb&pid=Api&P=0&w=300&h=300" className="img-rounded" ></img>,
              brand:"STYLAGE",
              type:"Printed Round",
              rate:"₹444",
            },
            {
              image:<img src="https://tse3.mm.bing.net/th?id=OIP.Hvhux-s-WWq_fKfPSeRL5AHaJb&pid=Api&P=0&w=300&h=300" className="img-rounded" ></img>,
              brand:"STYLAGE",
              type:"Printed Round",
              rate:"₹444",
            },
            {
                image:<img src="https://tse3.mm.bing.net/th?id=OIP.Hvhux-s-WWq_fKfPSeRL5AHaJb&pid=Api&P=0&w=300&h=300" className="img-rounded" ></img>,
                brand:"STYLAGE",
                type:"Printed Round",
                rate:"₹444",
            },
            {
                image:<img src="https://tse3.mm.bing.net/th?id=OIP.Hvhux-s-WWq_fKfPSeRL5AHaJb&pid=Api&P=0&w=300&h=300" className="img-rounded" ></img>,
                brand:"STYLAGE",
                type:"Printed Round",
                rate:"₹444",
            },
            {
                image:<img src="https://tse3.mm.bing.net/th?id=OIP.Hvhux-s-WWq_fKfPSeRL5AHaJb&pid=Api&P=0&w=300&h=300" className="img-rounded" ></img>,
                brand:"STYLAGE",
                type:"Printed Round",
                rate:"₹444",
            },
        ]
            return(
                <div className="row">
                    {
                      Products.map((product,index)=>{
                          return(
                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 p-0">
                                   <div className="col card cardHover shadow-sm border-0 gap lh-sm" key={index}>
                                       <div className="row  p-0 my-2">
                                           {product.image}
                                       </div>
                                       <div className="row  fs-4 fw-bold text-muted text-wrap">
                                           {product.brand}
                                       </div>
                                       <div className="row m-0 p-0 fs-6 text-wrap">
                                           {product.type}
                                       </div>
                                       <div className="row  p-0 text-wrap">
                                           <small className="mt-1  fs-8 fw-bold">{product.rate}</small>
                                       </div>
                                       
                                   </div>
                            </div>
                            
                          )
                      })
                    }
                </div>
            )
    

    }
    render() {
        return (
            <>
                {this.letProduct()}
            </>
        )
    }
}

import React from "react";


const EmpolyerItem  = (props) => {
                console.log("props:" + props)
                return(
                    <div className="card rounded col-md-4 col-sm-6" style={{width: "18rem"}}>
                        <img src={props.img} className="card-img-top" alt={props.alt}/>
                        <div className="card-body">
                            <h5 className="card-title text-center">{props.name + " " + props.nick}</h5>
                            <p className="sub-title-card" style={{fontSize: "12px"}}>{props.role}</p>
                            <ul>
                                <li>{props.Email!=null? "Email: " + props.Email : null }</li>
                                <li>{props.mobile!=null? "Phone: " + props.mobile : null}</li>
                                <li>{props.website!=null? "Website: " + props.website : null}</li>
                            </ul>
                        </div>
                    </div>
                )
 
} 

export default EmpolyerItem
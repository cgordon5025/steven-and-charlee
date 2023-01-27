import React from "react";

const Registry = (props) => {
    return (
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            {props.registries.map((registry) => {
                return (
                    <>
                        <div className="card" style={{ width: "18rem", height: "fit-content" }}>
                            <a href={`${registry.website}`}>
                                <img src={`${registry.imgURL}`} className="card-img-top"></img>
                            </a>
                            <div className="card-body">
                                <p className="text-center">{registry.store}</p>
                            </div>
                        </div>
                    </>
                )
            })}
        </div>
    )
}
// grr no venue for glendalough
export default Registry
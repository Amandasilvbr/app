import React from "react";
import "./style.css";
import DescriptionLink from "../../shared";

const Planet = (props) => {
    return (
        <>
            <h1>{props.planet_name}</h1>
            <img className="gray-img" src={props.img_url} alt="" />
            <DescriptionLink link={props.link} description={props.description}/>
        </>
    );
}

export default Planet;
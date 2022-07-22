import React from "react";
import "./style.css";
import DescriptionLink from "../../shared";

const Planet = (props) => {
    return (
        <div onClick={() => props.clickOnPlanet(props.planet_name)}>
            <h1>{props.planet_name}</h1>
            <img className="gray-img" src={props.img_url} alt="" />
            <DescriptionLink link={props.link} description={props.description} />
            <h4>Satélites</h4>
            <ul>
                {["a","b","c","d","e"].map((satellite) => 
                 <li>Satélite {satellite}</li>
                )}
            </ul>
        </div>
    );
}

export default Planet;
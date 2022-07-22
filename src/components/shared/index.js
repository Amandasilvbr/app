import React from "react";

const DescriptionLink = (props) => {
    if (props.link) {
        return (
            <>
                <p>{props.description}</p>
                <p> <a href={props.link}>{props.link}</a> </p>
            </>
        );
    } else {
        return (
            <>
                <p> <i>{props.description}</i> </p>
            </>
        )
    }
}

export default DescriptionLink;
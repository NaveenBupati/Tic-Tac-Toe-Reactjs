import React from "react";

const Square = (props) => {
    let squareStyle = {
        border: "1px solid",
        height: "130px",
        width: "130px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "4rem", // Adjust font size for X and O
        cursor: "pointer", // Add cursor pointer
        backgroundColor: "#ffffff", // Default background color
        color: props.value === "X" ? "#f44336" : props.value === "O" ? "#2196f3" : "#000000", // Color based on X or O
    };

    return (
        <div onClick={props.onClick} style={squareStyle}>
            <h5>{props.value}</h5>
        </div>
    );
};

export default Square;

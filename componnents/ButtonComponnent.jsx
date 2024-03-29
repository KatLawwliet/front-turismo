import React from "react";

const Button = ({text, clickAction}) => {

    const handleMouseOver = (e) => {
        e.target.style.backgroundColor = '#029033';
    };

    const handleMouseOut = (e) => {
        e.target.style.backgroundColor = '#03A143';
    };

    return (
        <button
            onClick={clickAction}
            style={styles.button}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            {text}
        </button>
    )
}

const styles = {
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: ' center',
        height: 45,
        width: 150,
        backgroundColor: '#03A143',
        borderRadius: 5,
        margin: 20,
        fontSize: 15,
        border: 'none',
        cursor: 'pointer',
        color: 'white', // Color del texto del botón
        transition: 'background-color 0.3s',
    }
}

export default Button
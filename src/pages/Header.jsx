import React from "react";
import "./Header.css";


const Header = () => {
    return (
        <div>
            <div style={{
                    width: "100%",
                    textAlign: "center",
                    lineHeight: "0.1em",
                    margin: "40px 0 20px",
            }}
            >
            </div>
            <nav className="wrapper">

                <div style={{
                    fontWeight: 'bold',
                    fontSize: '24px',
                    textAlign: 'center'
                }} > G.V.C
        </div>
                <div >my page</div>
                <div>my meeting</div>
            </nav>
        </div>

    );
}

export default Header;


import React from 'react';
import  "./loader.css";

export default class LoaderComponent extends React.Component {
    render() {
        return (
    <div className="load-wrapp">
            <div className="loader">
                <div className="spinner">
                    <div className="bubble-1"></div>
                    <div className="bubble-2"></div>
                 </div>
                 <p className="loadingText">Loading...</p>
            </div>
    </div>
        )
    }
}


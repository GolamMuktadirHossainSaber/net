import React from 'react';


const Header = () => {
    return (

        <div className=" p-4 rounded-3 mb-4 " style={{ 'backgroundColor': 'rgb(238,174,202)' }}>
            <div className="thisItem" >
                <h1>National <span className="text-primary">Hockkathon</span> Organization</h1>
                <h5><em>Choose Guest For 'Winter Hackathon 2021'</em></h5>
                <h1>Total Budget: 1000 Million</h1>
            </div>
        </div>

    );
};

export default Header;
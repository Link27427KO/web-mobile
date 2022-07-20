import React from 'react';

import LeftSide from "./LeftSidePortfolio.png"
import RightSide from "./RightSidePortfolio.png"

const Portfolio = () => {
    return (
        <div className="portfolio">
            <div className="portfolio__leftSid">
                <img src={LeftSide} alt="" />
            </div>
            <div className="portfolio__middleSid">
                <h2>Примеры онлайн-магазинов</h2>
                <div className="media__media_pf">
                    <div className="media_pf opt left_pf"></div><div className="media_pf flowers right_pf"></div>
                    <div className="media_pf parikhm left_pf"></div><div className="media_pf visage right_pf"></div>
                    <div className="media_pf cakes left_pf"></div><div className="media_pf arts right_pf"></div>
                </div>
            </div>
            <div className="portfolio__rightSid">
                <img src={RightSide} alt="" />
            </div>
        </div>
    );
};

export default Portfolio;
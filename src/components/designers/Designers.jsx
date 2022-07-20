import React from 'react';
import {Button} from "@mui/material";
import {NavLink} from "react-router-dom";

import LeftSide from "./LeftSideDesigners.png";
import RightSide from "./RightSideDesigners.png";

const Designers = () => {
    return (
        <div className="designers">
            <div className="designers__leftSides">
                <img src={LeftSide} alt="" />
            </div>
            <div className="designers__middleSides">
                <h2>Необходимо больше информации?</h2>
                <p>Если Вы владелец онлайн-магазина или только начинаете свой путь в электронной коммерции и вам нужен уникальный дизайн онлайн магазина для стартапа, обратитесь к нашему веб дизайнеру. За выгодную цену и короткий период времени, он поможет  визуализировать ваш веб проект.</p>
                <NavLink to="/order"><Button variant="contained" href="">Оставить заявку</Button></NavLink>
            </div>
            <div className="designers__rightSides">
                <img src={RightSide} alt="" />
            </div>
        </div>
    );
};

export default Designers;
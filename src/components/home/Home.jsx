import React from 'react';
import {Button} from "@mui/material";
import {NavLink} from "react-router-dom";

import LeftSide from "./LeftSideServ.png"
import RightSide from "./RightSideServ.png"

const Home = () => {
    return (
        <div className="home">
            <div className="home__leftSide">
                <img src={LeftSide} alt="" />
            </div>
            <div className="home__middleSide">
                <h1>
                    Разработка интернет-магазина
                    с нуля за неделю
                </h1>
                <h2>
                    Дизайн интернет магазина, элементов микро UX, корзин, личного кабинета - от фирменного стиля
                    до пользовательского интерфейса в сжатые сроки
                    с командой Virtual Designers
                </h2>
                <NavLink to="/order"><Button variant="contained" href="">Заказать</Button></NavLink>
            </div>
            <div className="home__rightSide">
                <img src={RightSide} alt="" />
            </div>
        </div>
    );
};

export default Home;
import React from 'react';

import LeftSide from "./LeftSideOrder.png";
import {Box, Button, TextField} from "@mui/material";
import RightSide from "./RightSideOrder.png";

const Order = () => {
    return (
        <div className="order">
            <div className="order__leftSs">
                <img src={LeftSide} alt="" />
            </div>
            <div className="order__middleSs">
                <div>
                    <h2>Обсудить проект</h2>
                </div>
                <div>
                    <p>Расскажите о своих бизнес-целях и мы поможем вам в их достижении</p>
                </div>
                <div className="formInputs">
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 2, width: '25ch' },
                        }}
                        Validate
                    >
                        <div>
                            <TextField
                                required
                                className="textF"
                                id="name"
                                label="Имя"
                                type="text"
                            />
                        </div>
                        <div>
                            <TextField
                                required
                                className="textF"
                                id="telegram_viber"
                                label="Telegram/Viber"
                                type="text"
                            />
                        </div>
                        <div>
                            <TextField
                                required
                                className="textF"
                                id="email"
                                label="Email"
                                type="email"
                            />
                        </div>
                        <div className="btn_trans">
                            <Button type="submit" variant="contained" href="">Оставить заявку</Button>
                        </div>
                    </Box>
                </div>
            </div>
            <div className="order__rightSs">
                <img src={RightSide} alt="" />
            </div>
        </div>
    );
};

export default Order;
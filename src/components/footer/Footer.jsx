import React from 'react';

import Devs from "./devs.png"
import Inst from "./Instagram.png"
import Face from "./Facebook.png"
import Tele from "./Telegram.png"
import Vib from "./Viber.png"
import Wapp from "./Whatsapp.png"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__top">
                <div className="left">
                    <div className="devs">
                        <img src={Devs} alt="" />
                    </div>
                    <div className="msgr">
                        <div className="inst">
                            <img src={Inst} alt="" />
                        </div>
                        <div className="face">
                            <img src={Face} alt="" />
                        </div>
                        <div className="tele">
                            <img src={Tele} alt="" />
                        </div>
                        <div className="vib">
                            <img src={Vib} alt="" />
                        </div>
                        <div className="wapp">
                            <img src={Wapp} alt="" />
                        </div>
                    </div>
                </div>
                <div className="middle">
                    <div className="contacts">
                        <a href="tel:+380505859409">
                            <img src={Vib} alt="" />
                            <p>валерия: +380505859409</p>
                        </a>
                    </div>
                    <div className="contacts">
                        <a href="tel:+380505859409">
                            <img src={Vib} alt="" />
                            <p>анна: +380505859409</p>
                        </a>
                    </div>
                    <div className="contacts">
                        <a href="tel:+380505859409">
                            <img src={Vib} alt="" />
                            <p>валерия: +380505859409</p>
                        </a>
                    </div>
                </div>
                <div className="right">
                    <div className="email">
                        <a href="mailto:hr@dv-s.com"><p>hr@dv-s.com</p></a>
                    </div>
                </div>
            </div>
            <div className="footer__bot">
                <div className="foot">
                    <p>Developers 2018-2022 © All rights reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
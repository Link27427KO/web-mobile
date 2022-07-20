import React from 'react';
import {NavLink} from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';

import Logo from "./LogoDev.png"
import ListItem from "./ListItem";

const Navbar = () => {
    const ITEM_HEIGHT = 48;
    const ITEM_WIDTH = 96;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="navbar">
            <div className="container">
                <div className="navbar__devs">
                    <NavLink to="/"><img src={Logo} alt="" /></NavLink>
                </div>
                <div className="navbar__cont">
                    <div className="navbar__services"><NavLink to="/services">Услуги</NavLink></div>
                    <div className="navbar__portfolio"><NavLink to="/portfolio">Портфолио</NavLink></div>
                    <div className="navbar__stages"><NavLink to="/stages">Этапы</NavLink></div>
                    <div className="navbar__designers"><NavLink to="/designers">Дизайнеры</NavLink></div>
                    <div className="navbar__order"><NavLink to="/order"><Button variant="contained" href="">Заказать</Button></NavLink></div>
                </div>
                <div className="burger">
                    <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={open ? 'long-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <MoreHorizIcon />
                    </IconButton>
                    <Menu
                        id="long-menu"
                        MenuListProps={{
                            'aria-labelledby': 'long-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                            style: {
                                background: 'rgba(103, 174, 252, 0.95)',
                                maxHeight: ITEM_HEIGHT * 4.5,
                                maxWidth: ITEM_WIDTH * 4.5,
                                width: '20ch',
                            },
                        }}
                    >
                        <MenuItem component={ListItem} onClick={handleClose} />
                    </Menu>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
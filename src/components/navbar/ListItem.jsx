import React from 'react';
import {NavLink} from "react-router-dom";

const ListItem = () => {
    return (
        <div className="listItem">
            <div className="listItem__services"><NavLink to="/services">Услуги</NavLink></div>
            <div className="listItem__portfolio"><NavLink to="/portfolio">Портфолио</NavLink></div>
            <div className="listItem__stages"><NavLink to="/stages">Этапы</NavLink></div>
            <div className="listItem__designers"><NavLink to="/designers">Дизайнеры</NavLink></div>
        </div>
    );
};

export default ListItem;
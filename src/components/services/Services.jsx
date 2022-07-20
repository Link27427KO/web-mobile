import React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import CircleIcon from '@mui/icons-material/Circle';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import LeftSide from "./LeftSideServices.png"
import RightSide from "./RightSideServices.png"
// import {ListItem} from "@mui/material";

const Services = () => {

    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const handleClick1 = () => {
        setOpen1(!open1);
    };

    const handleClick2 = () => {
        setOpen2(!open2);
    };

    const handleClick3 = () => {
        setOpen3(!open3);
    };

    const handleClick4 = () => {
        setOpen4(!open4);
    };

    // const posts = [
    //     {id: 1, title: "Дизайн портала", content: "Дизайн портала — это оформление контента, совокупность всех графических элементов на веб-странице. Основная задача дизайна — познакомить пользователя со страницей. Продуманный дизайн создает нужное впечатление о компании."},
    //     {id: 2, title: "Дизайн адаптивной мобильной версии", content: "Мобильная версия сайта удобна для пользователя, потому что сильно упрощена по сравнению с обычной версией. Мобильная версия дает наиболее приоритетную информацию, а также позволяет совершать заказ/покупку с минимумом действий. При адаптивной версии вся структура сайта автоматически подстраивается под различную ширину экрана. Для того, чтобы получить рабочий продукт не нужно писать все с нуля — достаточно лишь подправить CSS и HTML. Один URL избавляет нас от ненужных редиректов, и надобности пользователю запоминать адрес мобильной версии."},
    //     {id: 3, title: "Дизайн десктопной версии", content: "Десктопную версию сайта просматривают пользователи со стационарных компьютеров. Основная цель: посерфить, углубиться в детали, получить больше информации, сравнить, выбрать, прицениться."},
    //     {id: 4, title: "Пользовательский интерфейс", content: "Цель дизайна пользовательского интерфейса - сделать взаимодействие максимально простым и эффективным, насколько это возможно, с точки зрения достижения целей пользователя. Хороший дизайн пользовательского интерфейса облегчает выполнение поставленной задачи, не привлекая к себе лишнего внимания."},
    //     {id: 5, title: "Микро UX", content: "Микро-анимация может изменить восприятие продукта, пользовательское поведение и повысить конверсию. Небольшие, преимущественно функциональные анимации поддерживают пользователя: обеспечивают визуальную обратную связь и более понятно отражают происходящие изменения. Микро-анимации способны многое объяснить без слов."}
    // ]

    // const content = posts.map((post) =>
    //     <ListItem key={post.id}>
    //         {
    //             open && <ListItemButton className="btnTodo isOpen" onClick={handleClick}>
    //                 <ListItemIcon>
    //                     <CircleIcon className="circleBlue" />
    //                 </ListItemIcon>
    //                 <ListItemText className="btnText" primary={post.title} />
    //                 {open ? <ExpandLess /> : <ExpandMore />}
    //             </ListItemButton>
    //         }
    //         {
    //             !open && <ListItemButton className="btnTodo isClose" onClick={handleClick}>
    //                 <ListItemIcon>
    //                     <CircleIcon className="circleGreen" />
    //                 </ListItemIcon>
    //                 <ListItemText className="btnText" primary={post.title} />
    //                 {open ? <ExpandLess /> : <ExpandMore />}
    //             </ListItemButton>
    //         }
    //         <Collapse className="contentTodo" in={open} timeout="auto" unmountOnExit>
    //             <List classes="List" sx={{
    //                 marginLeft: "6%",
    //                 borderLeft: "1px solid #000000",
    //                 height : "100%"
    //             }} component="div" disablePadding>
    //                 <ListItemButton>
    //                     <ListItemText id={post.id} className="colText" primary={post.content} />
    //                 </ListItemButton>
    //             </List>
    //         </Collapse>
    //     </ListItem>
    // )

    return (
        <div className="services">
            <div className="services__leftSd">
                <img src={LeftSide} alt="" />
            </div>
            <div className="services__middleSd">
                <List className="List"
                      sx={{ width: '100%', marginTop: "20px" }}
                      component="div"
                      aria-labelledby="nested-list-subheader"
                      subheader={
                          <ListSubheader sx={{ backgroundColor: "rgba(218, 236, 255, 1)", textAlign: "center", height: "105px", fontWeight: 800, fontSize: "32px", lineHeight: "125%", fontFamily: "Montserrat" , color: "rgba(17, 17, 17, 1)" }} component="h2" id="nested-list-subheader">
                              Что входит в услугу по созданию дизайна интернет-магазина?
                          </ListSubheader>
                      }
                >
                    {/*<div>*/}
                    {/*    {content}*/}
                    {/*</div>*/}
                        {
                            open && <ListItemButton className="btnTodo isOpen" onClick={() =>
                            {
                                handleClick()
                            }}>
                                <ListItemIcon>
                                    <CircleIcon className="circleBlue" />
                                </ListItemIcon>
                                <ListItemText className="btnText" primary="Дизайн портала" />
                                {open ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                        }
                        {
                            !open && <ListItemButton className="btnTodo isClose" onClick={() =>
                            {
                                handleClick()
                            }}>
                                <ListItemIcon>
                                    <CircleIcon className="circleGreen" />
                                </ListItemIcon>
                                <ListItemText className="btnText" primary="Дизайн портала" />
                                {open ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                        }
                        {
                            open &&
                            <Collapse className="contentTodo" in={open} timeout="auto" unmountOnExit>
                                <List classes="List" sx={{
                                    marginLeft: "6%",
                                    borderLeft: "1px solid #000000",
                                    height : "100%"
                                }} component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemText className="colText" primary="Дизайн портала — это оформление контента, совокупность всех графических элементов на веб-странице. Основная задача дизайна — познакомить пользователя со страницей. Продуманный дизайн создает нужное впечатление о компании." />
                                    </ListItemButton>
                                </List>
                            </Collapse>
                        }
                    {
                        open1 && <ListItemButton className="btnTodo isOpen" onClick={() =>
                        {
                            handleClick1()
                        }}>
                            <ListItemIcon>
                                <CircleIcon className="circleBlue" />
                            </ListItemIcon>
                            <ListItemText className="btnText" primary="Дизайн адаптивной мобильной версии" />
                            {open1 ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                    }
                    {
                        !open1 && <ListItemButton className="btnTodo isClose" onClick={() =>
                        {
                            handleClick1()
                        }}>
                            <ListItemIcon>
                                <CircleIcon className="circleGreen" />
                            </ListItemIcon>
                            <ListItemText className="btnText" primary="Дизайн адаптивной мобильной версии" />
                            {open1 ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                    }
                    {
                        open1 &&
                        <Collapse className="contentTodo" in={open1} timeout="auto" unmountOnExit>
                            <List classes="List" sx={{
                                marginLeft: "6%",
                                borderLeft: "1px solid #000000",
                                height : "100%"
                            }} component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText className="colText" primary="Мобильная версия сайта удобна для пользователя, потому что сильно упрощена по сравнению с обычной версией. Мобильная версия дает наиболее приоритетную информацию, а также позволяет совершать заказ/покупку с минимумом действий. При адаптивной версии вся структура сайта автоматически подстраивается под различную ширину экрана. Для того, чтобы получить рабочий продукт не нужно писать все с нуля — достаточно лишь подправить CSS и HTML. Один URL избавляет нас от ненужных редиректов, и надобности пользователю запоминать адрес мобильной версии." />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    }
                    {
                        open2 && <ListItemButton className="btnTodo isOpen" onClick={() =>
                        {
                            handleClick2()
                        }}>
                            <ListItemIcon>
                                <CircleIcon className="circleBlue" />
                            </ListItemIcon>
                            <ListItemText className="btnText" primary="Дизайн десктопной версии" />
                            {open2 ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                    }
                    {
                        !open2 && <ListItemButton className="btnTodo isClose" onClick={() =>
                        {
                            handleClick2()
                        }}>
                            <ListItemIcon>
                                <CircleIcon className="circleGreen" />
                            </ListItemIcon>
                            <ListItemText className="btnText" primary="Дизайн десктопной версии" />
                            {open2 ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                    }
                    {
                        open2 &&
                        <Collapse className="contentTodo" in={open2} timeout="auto" unmountOnExit>
                            <List classes="List" sx={{
                                marginLeft: "6%",
                                borderLeft: "1px solid #000000",
                                height : "100%"
                            }} component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText className="colText" primary="Десктопную версию сайта просматривают пользователи со стационарных компьютеров. Основная цель: посерфить, углубиться в детали, получить больше информации, сравнить, выбрать, прицениться." />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    }
                    {
                        open3 && <ListItemButton className="btnTodo isOpen" onClick={() =>
                        {
                            handleClick3()
                        }}>
                            <ListItemIcon>
                                <CircleIcon className="circleBlue" />
                            </ListItemIcon>
                            <ListItemText className="btnText" primary="Пользовательский интерфейс" />
                            {open3 ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                    }
                    {
                        !open3 && <ListItemButton className="btnTodo isClose" onClick={() =>
                        {
                            handleClick3()
                        }}>
                            <ListItemIcon>
                                <CircleIcon className="circleGreen" />
                            </ListItemIcon>
                            <ListItemText className="btnText" primary="Пользовательский интерфейс" />
                            {open3 ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                    }
                    {
                        open3 &&
                        <Collapse className="contentTodo" in={open3} timeout="auto" unmountOnExit>
                            <List classes="List" sx={{
                                marginLeft: "6%",
                                borderLeft: "1px solid #000000",
                                height : "100%"
                            }} component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText className="colText" primary="Цель дизайна пользовательского интерфейса - сделать взаимодействие максимально простым и эффективным, насколько это возможно, с точки зрения достижения целей пользователя. Хороший дизайн пользовательского интерфейса облегчает выполнение поставленной задачи, не привлекая к себе лишнего внимания." />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    }
                    {
                        open4 && <ListItemButton className="btnTodo isOpen" onClick={() =>
                        {
                            handleClick4()
                        }}>
                            <ListItemIcon>
                                <CircleIcon className="circleBlue" />
                            </ListItemIcon>
                            <ListItemText className="btnText" primary="Микро UX" />
                            {open4 ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                    }
                    {
                        !open4 && <ListItemButton className="btnTodo isClose" onClick={() =>
                        {
                            handleClick4()
                        }}>
                            <ListItemIcon>
                                <CircleIcon className="circleGreen" />
                            </ListItemIcon>
                            <ListItemText className="btnText" primary="Микро UX" />
                            {open4 ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                    }
                    {
                        open4 &&
                        <Collapse className="contentTodo" in={open4} timeout="auto" unmountOnExit>
                            <List classes="List" sx={{
                                marginLeft: "6%",
                                borderLeft: "1px solid #000000",
                                height : "100%"
                            }} component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText className="colText" primary="Микро-анимация может изменить восприятие продукта, пользовательское поведение и повысить конверсию. Небольшие, преимущественно функциональные анимации поддерживают пользователя: обеспечивают визуальную обратную связь и более понятно отражают происходящие изменения. Микро-анимации способны многое объяснить без слов." />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    }
                </List>
            </div>
            <div className="services__rightSd">
                <img src={RightSide} alt="" />
            </div>
        </div>
    );
};

export default Services;
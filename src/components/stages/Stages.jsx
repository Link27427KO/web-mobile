import React from 'react';
import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import LeftSide from "./LeftSideStages.png";
import RightSide from "./RightSideStages.png";

const Stages = () => {
    const posts = [
        {id: 1, title: "1. Анализ", content: "Для того, чтобы онлайн-магазин приносил выгоду, перед его запуском необходимо провести анализ других предложений рынка, оценить конкурентов и найти наиболее удобное решение. "},
        {id: 2, title: "2. Визуальное решение", content: "Разработка дизайна ключевых страниц магазина – главная, каталог, информационные разделы, раздел корзины, товаров. Для нас главное – передать настроение бренда, сделать удобный для пользователя сайт. "},
        {id: 3, title: "3. Техническая реализация", content: "После утверждения дизайн-макета наступает следующий этап – верстка. Это трудоемкий процесс: программисты должны все тщательно прописать, чтобы не допустить технических ошибок."},
        {id: 4, title: "4. Наполнение контентом ", content: "Создание и публикация текстов, а также видео материала. Хороший контент и качественные фотографии привлекают больше посетителей и помогают клиенту лучше ознакомиться с ассортиментом. "},
        {id: 5, title: "5. Тестирование", content: "Составление плана тестирования для определения ошибок. Проверка работы сайта и визуального восприятия для улучшения сайта. Также используются чек-листы для четкого определения ошибок и их устранения."}
    ]

    const content = posts.map((post) =>
        <div className="content" key={post.id}>
            <div className="leftContent">
                <div className="titleContent">{post.title}</div>
                <div className="contentContent">{post.content}</div>
            </div>
            <div className="rightContent">
                <div className={`imgContent${post.id}`}></div>
            </div>
        </div>
    )

    const firstContent = content[0]
    const secondContent = content[1]
    const thirdContent = content[2]
    const fourthContent = content[3]
    const fifthContent = content[4]

    const [active, setActive] = React.useState(0);

    const setMoreClick = () => {
        setActive(active + 1);
    };

    const setLessClick = () => {
        if (active === 0) {
            setActive(active + 4)
        }
        else {
            setActive(active - 1);
        }
    };

    return (
        <div className="stages">
            <div className="stages__leftS">
                <img src={LeftSide} alt="" />
            </div>
            <div className="stages__middleS">
                <h2>Этапы разработки интернет-магазина</h2>
                {
                    active%5 === 0 && firstContent
                }
                {
                    active%5 === 1 && secondContent
                }
                {
                    active%5 === 2 && thirdContent
                }
                {
                    active%5 === 3 && fourthContent
                }
                {
                    active%5 === 4 && fifthContent
                }
                <div className="buttons">
                    <Button fontSize="large" variant="outlined" onClick={() => {
                        setLessClick()
                    }}><ChevronLeftIcon/></Button>
                    <Button fontSize="large" variant="outlined" onClick={() => {
                        setMoreClick()
                    }}><ChevronRightIcon/></Button>
                </div>
            </div>
            <div className="stages__rightS">
                <img src={RightSide} alt="" />
            </div>
        </div>
    );
};

export default Stages;
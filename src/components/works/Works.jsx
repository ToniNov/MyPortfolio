import { useState } from "react";
import style from "./works.module.scss";
import arrow from '../../assets/arrow.png';

export const Works =() => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id: "1",
            title: "Todolist",
            desc: "Todo List is a list of things you need to do or want to do." +
                "Traditionally, they are written on a piece of paper and organized in order of priority." +
                "When a task is completed, it is usually crossed off the list.",
            img:
                "https://cdn.tgdd.vn/hoi-dap/1391693/Thumbnail/cach-tao-danh-sach-cong-viec-to-do-list-bang-notion-de-dang-21.jpg",
        },
        {
            id: "2",
            title: "Social Network",
            desc: "A social network is an online platform that is used to communicate, meet," +
                " create social relationships between people who have similar interests or offline connections.",
            img: "https://miro.medium.com/max/1103/0*KIKnUvzdIkp5zcDJ",
        },
    ];

    const handleClick = (way) => {
        way === "left"
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 1)
            : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    };

    return (
        <div className={style.works} id="works">
            <h1 className="h1">My Works</h1>
            <div
                className={style.slider}
                style={{transform: `translateX(-${currentSlide * 100}vw)`}}
            >
                {data.map((d) => (
                    <div className={style.container}>
                        <div className={style.item}>
                            <div className={style.left}>
                                <div className={style.leftContainer}>
                                    <h2>{d.title}</h2>
                                    <p>{d.desc}</p>
                                    <span>Look</span>
                                </div>
                            </div>
                            <div className={style.right}>
                                <img
                                    src={d.img}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <img
                src={arrow}
                className={`${style.arrow} ${style.left}`}
                alt=""
                onClick={() => handleClick("left")}
            />
            <img
                src={arrow}
                className={`${style.arrow} ${style.right}`}
                alt=""
                onClick={() => handleClick()}
            />
        </div>
    );
}

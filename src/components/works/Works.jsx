import { useState } from "react";
import "./works.scss";

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
        <div className="works" id="works">
            <div className="h1">My Works</div>
            <div
                className="slider"
                style={{transform: `translateX(-${currentSlide * 100}vw)`}}
            >
                {data.map((d) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <h2>{d.title}</h2>
                                    <p>{d.desc}</p>
                                    <span>Look</span>
                                </div>
                            </div>
                            <div className="right">
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
                src="assets/arrow.png"
                className="arrow left"
                alt=""
                onClick={() => handleClick("left")}
            />
            <img
                src="assets/arrow.png"
                className="arrow right"
                alt=""
                onClick={() => handleClick()}
            />
        </div>
    );
}

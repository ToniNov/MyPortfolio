import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import {CircularProgressbar,buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import './CircularProgress.scss';


export const CircularProgress =(props)=> {

    const skillList = [
        {id: 1, skill: 'HTML' , knowledge: 92 , numberColor: '#f77c1e', lineColor: '#f77c1e'},
        {id: 2, skill: 'CSS' , knowledge: 90 , numberColor: '#4894ee', lineColor: '#4894ee'},
        {id: 3, skill: 'SCSS' , knowledge: 87 , numberColor: '#bf4080', lineColor: '#bf4080'},
        {id: 4, skill: 'JS' , knowledge: 90 , numberColor: '#f7df1e', lineColor: '#f7df1e'},
        {id: 5, skill: 'TS' , knowledge: 78 , numberColor: '#3178c6', lineColor: '#3178c6'},
    ]

    return (
        <div className= "circularProgress">
            {skillList.map((el) => {
                return (
                    <div className="progress">
                        <VisibilitySensor>
                            {({isVisible}) => {
                                const percentage = isVisible ? el.knowledge : 0;
                                return (
                                    <div className="item" key={el.id}>
                                        <CircularProgressbar
                                            value={percentage}
                                            text={`${percentage}%`}
                                            circleRatio={0.75}
                                            strokeWidth={15}
                                            styles={buildStyles({
                                                rotation: 1 / 2 + 1 / 8,
                                                strokeLinecap: 'round',
                                                pathColor: el.lineColor,
                                                textColor: el.numberColor,
                                                trailColor: "#eee"
                                            })}
                                        />
                                    </div>
                                )
                            }}
                        </VisibilitySensor>
                        <div className="textSkill">
                            {el.skill}
                        </div>
                    </div>)
            })}
        </div>
    );
}



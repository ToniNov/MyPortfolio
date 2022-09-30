import style from './skill.module.scss';
import {Fade} from 'react-awesome-reveal';

export const Skill = ({title, imgUrl}) => (
    <div className={style.skill}>
        <Fade>
            <div className={style.icon}>
                <div className={style.img} style={{backgroundImage: imgUrl}}/>
            </div>
            <h3 className={style.title}>{title}</h3>
        </Fade>
    </div>
)
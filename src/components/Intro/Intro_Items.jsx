import React from 'react';
import s from './Intro_Items.module.scss';



const Item = (props) => {
    return(
        <div className={s.item_wrapper}>
            <img src="" alt="" className={props.image}/>
            <div className={props.title}></div>
            <div className={props.text}></div>
        </div>
    )
}

export default Item;
import React from 'react';
import s from './Intro.module.scss';
import intro from '../../App.json';
import Item from "./Intro_Items";


const Intro = () => {
    return (
        <section className={s.intro}>
            <div className="container">
                <div className={s.header}>
                    <div className={s.top_title}>
                        INTRO
                    </div>
                    <div className={s.title}>
                        WHAT WE DO?
                    </div>
                    <div className={s.subtitle}>
                        Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and
                        the stars had ceased to twinkle.
                    </div>
                </div>
                <div className={s.items_block}>
                    <Item image={intro.block.img} title={intro.block.title} text={intro.block.text}/>
                </div>
            </div>
        </section>
    )
}

export default Intro;
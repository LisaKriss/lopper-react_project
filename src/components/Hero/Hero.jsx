import React from 'react';
import s from './Hero.module.scss';


const Hero = () => {
    return(
        <section className={s.hero}>
            <div className="container">
                <div className={s.header}>
                    <div className={s.subtitle}>
                        WHAT WE DO?
                    </div>
                    <div className={s.title}>
                        We grow <br /><span>great business</span>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero;
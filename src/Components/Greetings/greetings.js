import React from 'react'
import greetingsStyles from './greetings.module.scss'

const Greetings = () => {
    return (
        <section className={greetingsStyles.greetings} id="greetings">

            <div className={greetingsStyles.content}>
                <h3>fresh flowers</h3>
                <span> natural & beautiful flowers </span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae laborum ut minus corrupti dolorum dolore assumenda iste voluptate dolorem pariatur.</p>
                <a href="#213" className={greetingsStyles.btn}>shop now</a>
            </div>

        </section>
    )
}

export default Greetings

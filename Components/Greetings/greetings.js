import React from 'react'
import greetingsStyles from './greetings.module.scss'
import Link from "next/link";

const Greetings = () => {
    return (
        <section className={greetingsStyles.greetings} id="greetings">

            <div className={greetingsStyles.content}>
                <h3>fresh flowers</h3>
                <span> natural & beautiful flowers </span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae laborum ut minus corrupti dolorum dolore assumenda iste voluptate dolorem pariatur.</p>
                <Link href='/all-flowers'><button className={greetingsStyles.btn}>shop now</button></Link>
            </div>

        </section>
    )
}

export default Greetings

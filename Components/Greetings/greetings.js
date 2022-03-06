import React from 'react'
import greetingsStyles from './greetings.module.scss'
import { useRouter } from "next/router";

const Greetings = () => {
    const router = useRouter()
    return (
        <section className={ greetingsStyles.greetings } id="greetings">

            <div className={ greetingsStyles.content }>
                <h3>fresh flowers</h3>
                <span> natural & beautiful flowers </span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae laborum ut minus corrupti dolorum
                    dolore assumenda iste voluptate dolorem pariatur.</p>
                <button onClick={ () => router.push( '/all-flowers' ) } className={ greetingsStyles.btn }>shop now
                </button>
            </div>

        </section>
    )
}

export default Greetings

import React from 'react'
import greetingsStyles from './greetings.module.scss'
import { useRouter } from "next/router";
import {greetings_section} from "../Common/web-site-static-words";

const Greetings = () => {
    const router = useRouter()
    return (
        <section className={ greetingsStyles.greetings } id="greetings">
            <div className={ greetingsStyles.content }>
                <h3>{greetings_section.heading}</h3>
                <span> {greetings_section.title} </span>
                <p>{greetings_section.description}</p>
                <button onClick={ () => router.push( '/all-flowers' ) }
                        className={ greetingsStyles.btn }>{greetings_section.button}
                </button>
            </div>
        </section>
    )
}

export default Greetings

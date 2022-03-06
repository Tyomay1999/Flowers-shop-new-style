import React from 'react'
import video from '../../public/Assets/images/about-vid.mp4'
import aboutUsStyles from './aboutUs.module.scss'

const AboutUs = () => {
    return (
        <section className={ aboutUsStyles.about } id='about'>

            <h1 className={ aboutUsStyles.heading }><span> about </span> us </h1>

            <div className={ aboutUsStyles.row }>

                <div className={ aboutUsStyles[ 'video-container' ] }>
                    <video src={ video } loop={ true } autoPlay muted={ true }/>
                    <h3>best flower sellers</h3>
                </div>

                <div className={ aboutUsStyles.content }>
                    <h3>why choose us?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Rem cumque sit nemo pariatur corporis perspiciatis aspernatur
                        a ullam repudiandae autem asperiores quibusdam omnis commodi
                        alias repellat illum, unde optio temporibus.
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Rem cumque sit nemo pariatur corporis perspiciatis aspernatur
                        a ullam repudiandae autem asperiores quibusdam omnis commodi
                        alias repellat illum, unde optio temporibus.
                    </p>
                    <a href="#sq" className={ aboutUsStyles.btn }>learn more</a>
                </div>

            </div>

        </section>
    )
}

export default AboutUs

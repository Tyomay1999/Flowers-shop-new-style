import React from 'react'
import video from '../../public/Assets/images/about-vid.mp4'
import aboutUsStyles from './aboutUs.module.scss'
import {about_us_section} from "../Common/web-site-static-words";

const AboutUs = () => {
    return (
        <section className={aboutUsStyles.about} id='about'>
            <h1 className={aboutUsStyles.heading}>
                <span> {about_us_section.heading_1} </span>
                {about_us_section.heading_2}
            </h1>
            <div className={aboutUsStyles.row}>
                <div className={aboutUsStyles['video-container']}>
                    <video src={video} loop={true} autoPlay muted={true}/>
                    <h3>{about_us_section.video_title}</h3>
                </div>
                <div className={aboutUsStyles.content}>
                    <h3>{about_us_section.content_title}</h3>
                    <p>{about_us_section.description_part_1}</p>
                    <p>{about_us_section.description_part_2}</p>
                    {/*<a href="#sq" className={aboutUsStyles.btn}>*/}
                    {/*    {about_us_section.button}*/}
                    {/*</a>*/}
                </div>
            </div>
        </section>
    )
}

export default AboutUs

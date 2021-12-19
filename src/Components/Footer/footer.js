import React, { useCallback, useState } from 'react'
import footerStyles from './footer.module.scss'
import { footerLocalImages } from '../../Assets/images/imagesContrller'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Link } from 'react-router-dom';

const containerStyle = {
    width: '280px',
    height: '170px'
};

const center = {
    lat: 40.207211,
    lng: 44.467629
};

const Footer = () => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDWgAXPG_Xg3bzxxmA80PJuQJ7Qn0MN03Q"
    })

    const [, setMap] = useState(null)

    const onLoad = useCallback(map => {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = useCallback(map => {
        setMap(null)
    }, [])

    return (
        <footer className={footerStyles.main}>

            <div className={footerStyles['box-container']}>

                <div className={footerStyles.box}>
                    <h3>quick links</h3>
                    <Link to='/'>home</Link>
                    <Link to='/'>about</Link>
                    <Link to='/'>products</Link>
                    <Link to='/'>review</Link>
                    <Link to='/'>contact</Link>
                </div>

                <div className={footerStyles.box}>
                    <h3>locations</h3>
                    <span>Moscow</span>
                    {
                        isLoaded ? (
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={center}
                                zoom={10}
                                onLoad={onLoad}
                                onUnmount={onUnmount}
                            >
                                { /* Child components, such as markers, info windows, etc. */}
                                <></>
                            </GoogleMap>
                        ) : <></>
                    }
                </div>

                <div className={footerStyles.box}>
                    <h3>contact info</h3>
                    <span>+123-456-7890</span>
                    <span>example@gmail.com</span>
                    <span>mumbai, india - 400104</span>
                    <img src={footerLocalImages.payment} alt="" />
                </div>

            </div>

            {/* <div className={footerStyles.credit}> created by <span> @Tyomay1999 </span> | all rights reserved </div> */}

        </footer>
    )
}

export default Footer

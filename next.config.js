// const nextTranslate = require('next-translate')
const withImages = require('next-images')
const withVideos = require('next-videos')
const withPWA = require('next-pwa')
require('dotenv').config()

const isProd = process.env.NODE_ENV === "production";

// workbox.setConfig({ debug: false });

module.exports =withVideos( withImages(withPWA({
  images: {
    disableStaticImages: true
  },
  pwa: {
    dest: 'public',
    mode: 'production',
    // disable:!isProd
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    FRONT_URL: process.env.FRONT_URL,
    BASE_URL_ENDPOINT: process.env.BASE_URL_ENDPOINT,
  }
  // ...nextTranslate({
  //   i18n: {
  //     localeDetection: false,
  //   }
  // })
})))
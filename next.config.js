// const nextTranslate = require('next-translate')
const withImages = require('next-images')
const withVideos = require('next-videos')
const withPWA = require('next-pwa')
require('dotenv').config()

const isProd = process.env.NODE_ENV === "production";

// workbox.setConfig({ debug: false });
module.exports = withVideos()

module.exports = withImages(withPWA({
  images: {
    disableStaticImages: true
  },
  pwa: {
    dest: 'public',
    mode: 'production',
    // disable:!isProd
  },
  // ...nextTranslate({
  //   i18n: {
  //     localeDetection: false,
  //   }
  // })
}))
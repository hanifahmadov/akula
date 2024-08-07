/* eslint-disable */
let apiUrl

const apiUrls = {
  //: production server url
  production:  process.env.REACT_APP_SERVER_PRODUCTION,

  //: local server 
  development: process.env.REACT_APP_SERVER_DEVELOPENT
}

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl

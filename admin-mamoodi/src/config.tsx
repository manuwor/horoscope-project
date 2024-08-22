const test = {
 api: "https://asia-southeast1-horoscope-project-d3937.cloudfunctions.net/api/"
      //https://github.com/rayriffy/thai-lotto-api

};
const prod = {
   api: "https://asia-southeast1-horoscope-project-d3937.cloudfunctions.net/api/"

};
const config =
    process.env.REACT_APP_ENVIRONMENT === 'production' ? prod
        : test;

export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 10,
    ...config
};
const test = {
    ga_4 : "G-Z2MPLK12Y5",
    
    api_lotto: {
        base_url: "https://lotto.api.rayriffy.com",
        list: "/list",
        detail: "/lotto"
    },
    api:{
        base_url: "https://asia-southeast1-horoscope-project-d3937.cloudfunctions.net/api/",
        result: "results"
    }
      //https://github.com/rayriffy/thai-lotto-api

};
const prod = {
    ga_4 : "G-Z2MPLK12Y5",
  
    api_lotto: {
        base_url: "https://lotto.api.rayriffy.com",
        list: "/list",
        detail: "/lotto"
    },
    api:{
        base_url: "https://asia-southeast1-horoscope-project-d3937.cloudfunctions.net/api/",
        result: "results"
    }


};
const config =
    process.env.REACT_APP_ENVIRONMENT === 'production' ? prod
        : test;

export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 10,
    ...config
};
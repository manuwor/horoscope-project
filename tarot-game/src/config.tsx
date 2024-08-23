const test = {
    ga_4 : "G-Z2MPLK12Y5",
    
    api_lotto: {
        base_url: "https://lotto.api.rayriffy.com",
        list: "/list",
        detail: "/lotto"
    }
      //https://github.com/rayriffy/thai-lotto-api

};
const prod = {
    ga_4 : "G-Z2MPLK12Y5",
  
    api_lotto: {
        base_url: "https://lotto.api.rayriffy.com",
        list: "/list",
        detail: "/lotto"
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
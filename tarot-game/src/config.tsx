const test = {
    ga_4 : "",
    api: {
        "base_url": "https://testlambda.scoutout.net:444",
        "path_api" : "/quality-monitoring",
        "transcript" : "/transcripts",
        "settings" : "/settings"
    },
    api_lotto: {
        base_url: "https://lotto.api.rayriffy.com",
        list: "/list",
        detail: "/lotto"
    },
    firebaseConfig: {
        apiKey: "AIzaSyCznOBLd4ml4q8zyqUzjaEhlOFhmCZaMfc",
        authDomain: "horoscope-project-d3937.firebaseapp.com",
        projectId: "horoscope-project-d3937",
        storageBucket: "horoscope-project-d3937.appspot.com",
        messagingSenderId: "133923026913",
        appId: "1:133923026913:web:783d14e21807b2e1ae04a0",
        measurementId: "G-Z2MPLK12Y5"
      }
      //https://github.com/rayriffy/thai-lotto-api

};
const prod = {
    ga_4 : "",
    api: {
        "base_url": "https://testlambda.scoutout.net:444",
        "path_api" : "/quality-monitoring",
        "transcript" : "/transcripts",
        "settings" : "/settings"
    },
    api_lotto: {
        base_url: "https://lotto.api.rayriffy.com",
        list: "/list",
        detail: "/lotto"
    },
    firebaseConfig: {
        apiKey: "AIzaSyCznOBLd4ml4q8zyqUzjaEhlOFhmCZaMfc",
        authDomain: "horoscope-project-d3937.firebaseapp.com",
        projectId: "horoscope-project-d3937",
        storageBucket: "horoscope-project-d3937.appspot.com",
        messagingSenderId: "133923026913",
        appId: "1:133923026913:web:783d14e21807b2e1ae04a0",
        measurementId: "G-Z2MPLK12Y5"
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
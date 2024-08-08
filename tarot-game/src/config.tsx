const test = {
    ga_4 : "",
    api: {
        "base_url": "https://testlambda.scoutout.net:444",
        "path_api" : "/quality-monitoring",
        "transcript" : "/transcripts",
        "settings" : "/settings"
    },
    firebaseConfig: {
        apiKey: "AIzaSyD3RRCmRt2j6g1_rsgJVBDRvsaeZG-huno",
        authDomain: "scoutout-mang-test-e17bf.firebaseapp.com",
        databaseURL: "https://scoutout-mang-test-e17bf.firebaseio.com",
        projectId: "scoutout-mang-test-e17bf",
        storageBucket: "scoutout-mang-test-e17bf.appspot.com",
        messagingSenderId: "436987830723",
        appId: "1:436987830723:web:0089121ad8f1221adc1d76"
      }


};
const prod = {
    ga_4 : "",
    api: {
        "base_url": "https://testlambda.scoutout.net:444",
        "path_api" : "/quality-monitoring",
        "transcript" : "/transcripts",
        "settings" : "/settings"
    },
    firebaseConfig: {
        apiKey: "AIzaSyD3RRCmRt2j6g1_rsgJVBDRvsaeZG-huno",
        authDomain: "scoutout-mang-test-e17bf.firebaseapp.com",
        databaseURL: "https://scoutout-mang-test-e17bf.firebaseio.com",
        projectId: "scoutout-mang-test-e17bf",
        storageBucket: "scoutout-mang-test-e17bf.appspot.com",
        messagingSenderId: "436987830723",
        appId: "1:436987830723:web:0089121ad8f1221adc1d76"
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
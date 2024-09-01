const test = {
    url: "https://mamoodi.com/",
    ga_4: "G-Z2MPLK12Y5",
    seo: {
        title: "ดูดวงฟรี แม่นยำ พร้อมเคล็ดลับเสริมดวง โดย mamoodi",
        description: "มามูดิ เว็บไซต์ดูดวงฟรีที่แม่นยำที่สุด! ทำนายดวงชะตาของคุณได้อย่างละเอียด พร้อมคำแนะนำดีๆ เพื่อเสริมดวงชะตาให้ดีขึ้นทุกด้าน ไม่ว่าจะเป็นเรื่องความรัก การงาน การเงิน หรือสุขภาพ เรามีหมอดูชื่อดังคอยให้คำปรึกษาตลอด 24 ชั่วโมง ลองดูดวงฟรีวันนี้ แล้วคุณจะทึ่งกับความแม่นยำของเรา!",
        keyword: "ดูดวง, ดูดวงฟรี, ดูดวงรายวัน, ดูดวงแม่นๆ, มามูดิ, ทำนายดวงชะตา, ดวงชะตา, หมอดู, เสริมดวง, โชคลาภ"
    },
    app_url: {
        lotto: "https://app.mamoodi.com/lotto",
        tarot1: "https://app.mamoodi.com/tarot-1",
        car_hora: "https://app.mamoodi.com/car-hora",
        tel_hora: "https://app.mamoodi.com/tel-hora",
        name_hora: "https://app.mamoodi.com/name-hora"
    },
    api:{
        url : "https://asia-southeast1-horoscope-project-d3937.cloudfunctions.net/api/"
    },
    api_lotto: {
        base_url: "https://lotto.api.rayriffy.com",
        list: "/list",
        latest: "/latest",
        detail: "/lotto"
    }
    
};


const prod = {
    url: "https://mamoodi.com/",
    ga_4: "G-Z2MPLK12Y5",
    seo: {
        title: "ดูดวงฟรี แม่นยำ พร้อมเคล็ดลับเสริมดวง โดย mamoodi",
        description: "มามูดิ เว็บไซต์ดูดวงฟรีที่แม่นยำที่สุด! ทำนายดวงชะตาของคุณได้อย่างละเอียด พร้อมคำแนะนำดีๆ เพื่อเสริมดวงชะตาให้ดีขึ้นทุกด้าน ไม่ว่าจะเป็นเรื่องความรัก การงาน การเงิน หรือสุขภาพ เรามีหมอดูชื่อดังคอยให้คำปรึกษาตลอด 24 ชั่วโมง ลองดูดวงฟรีวันนี้ แล้วคุณจะทึ่งกับความแม่นยำของเรา!",
        keyword: "มามูดิ, mamoodi, ดูดวงทะเบียนรถ, ดูดวงเบอร์โทรศัพท์, ดูดวง, ดูดวงฟรี, ดูดวงรายวัน, ดูดวงแม่นๆ, มามูดิ, ทำนายดวงชะตา, ดวงชะตา, หมอดู, เสริมดวง, โชคลาภ"
    },
    app_url: {
        lotto: "https://app.mamoodi.com/lotto",
        tarot1: "https://app.mamoodi.com/tarot-1",
        car_hora: "https://app.mamoodi.com/car-hora",
        tel_hora: "https://app.mamoodi.com/tel-hora",
        name_hora: "https://app.mamoodi.com/name-hora"
    },
    api:{
        url : "https://asia-southeast1-horoscope-project-d3937.cloudfunctions.net/api/"
    },
    api_lotto: {
        base_url: "https://lotto.api.rayriffy.com",
        list: "/list",
        latest: "/latest",
        detail: "/lotto"
    }
};

const config = process.env.NEXT_PUBLIC_APP_ENV === 'production'
    ? prod 
    : test;

export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
};
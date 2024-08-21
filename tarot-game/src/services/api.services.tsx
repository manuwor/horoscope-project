import axios from "axios";
import config from "../config";

export default function APIService() {
    const headerFix = {
        headers: {
            'Content-Type': "application/json"
        }
    };

    return {
        async getLottoPage(page) {
            return axios.get(config.api_lotto.base_url + config.api_lotto.list + "/"+ page, headerFix)
                .then(res => res).catch(err => console.log(err));
        },
        async getLottoCurrent(id) {
            return axios.get(config.api_lotto.base_url + config.api_lotto.detail + "/"+ id, headerFix)
                .then(res => res).catch(err => console.log(err));
        }
    };
}

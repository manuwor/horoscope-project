import axios from "axios";
import config from "../config";

export default function APIService() {
    const headerFix = {
        headers: {
            'Content-Type': "application/json"
        }
    };

    return {
        async getLottoPage() {
            return axios.get(config.api_lotto.base_url + config.api_lotto.list + "/1", headerFix)
                .then(res => res).catch(err => console.log(err));
        },
        async getLottoCurrent(id) {
            return axios.get(config.api_lotto.base_url + config.api_lotto.detail + "/"+ id, headerFix)
                .then(res => res).catch(err => console.log(err));
        }
    };
}

import axios from "axios";
import config from "../config";
import { auth } from "../utility/firebase-config";

export default function APIService() {
  
    return {
        async postArticle(body, idToken) {
            return axios.post(config.api +"/create-article" , body,  {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${idToken}`,
                }
            })
                .then(res => res).catch(err => console.log(err));
        }
    };
}

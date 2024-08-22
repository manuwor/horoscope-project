

import GAModel from "@/model/ga.model";
import * as gtag from "./gtag";
export default function UtilityService() {

    return {
        clickSendEvent(eventName: string, param_action: string,  param_looking_for_jobs?: boolean, param_value?:string) {

            let paramObject: GAModel  = {
                param_action_on : param_action
            }
         
            if(param_looking_for_jobs){
                paramObject.param_looking_for_jobs = param_looking_for_jobs;
               
            }

            if(param_value){
                paramObject.param_value = param_value;
            }
            
            gtag.event(eventName,paramObject)

        }
        , setPageTitle(title: string) {
            gtag.pageview(title);
        }
    }
}


import * as gtag from "./gtag";
export  const GAServices = () => {
    return {
        clickSendEvent(event_name: string, event_params_object: Object, version) {
            event_params_object["version"] = version
            gtag.event(event_name,event_params_object)
        }
        , setPageTitle(title: string) {
            gtag.pageview(title);
        }
    }
}

export default GAServices;
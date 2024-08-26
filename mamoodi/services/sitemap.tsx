import config from "@/config";

export default function SiteMapServices() {

    return {
        async fetchBlogPosts() {

            return fetch(config.api.url+"articles", { method: 'GET' }).then(res => res.json()).catch(err => console.log(err))

        },
        async fetchResults() {

            return fetch(config.api.url+"results", { method: 'GET' }).then(res => res.json()).catch(err => console.log(err))

        },
    }

}



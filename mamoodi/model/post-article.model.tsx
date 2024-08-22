
export interface PostArticleModel {
    title: string
    raw_description: string
    description: string
    created_date: string
    status: string
    slug: string
    channel: string
    view: number
    seo: SEOModel
    uuid: string
}

export interface SEOModel {
    title: string
    description: string
    keyword: string
    keywords: string
    cover_img?: string
}


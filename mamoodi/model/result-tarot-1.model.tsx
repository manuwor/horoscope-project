export interface ResultTarot1Model {
    id: string
    result: Result
    imageUrl: string
    menu_id: string
    
    createdAt: CreatedAt
}

interface Result {
    love: string
    number: string
    overall: string
    card_url: string
    card_name: string
    card_description: string
    job: string
    health: string
    title: string
    life: string
}

interface CreatedAt {
    _seconds: number
    _nanoseconds: number
}

export interface ResultsModel {
    id: string
    imageUrl: string
    menu_id: string
    createdAt: CreatedAt
    view?: number
  }

interface CreatedAt {
    _seconds: number
    _nanoseconds: number
  }
  
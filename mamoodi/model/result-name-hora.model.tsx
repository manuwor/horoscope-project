
  
  export interface NameHoraResultModel {
    id: string
    result: Result
    imageUrl: string
    menu_id: string
    createdAt: CreatedAt
  }
  
interface Result {
    explanation: string
    title: string
    name_id: string
  }
  
interface CreatedAt {
    _seconds: number
    _nanoseconds: number
  }
  
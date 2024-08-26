
  
  export interface TelHoraResultModel {
    id: string
    result: Result
    imageUrl: string
    menu_id: string
    createdAt: CreatedAt
  }
  
interface Result {
    sum_tel_id: string
    explanation: string
    title: string
    tel_id: string
  }
  
interface CreatedAt {
    _seconds: number
    _nanoseconds: number
  }
  
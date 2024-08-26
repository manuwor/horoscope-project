
  
  export interface CarHoraResultModel {
    id: string
    result: Result
    imageUrl: string
    menu_id: string
    createdAt: CreatedAt
  }
  
interface Result {
    sum_car_id: string
    explanation: string
    title: string
    car_id: string
  }
  
interface CreatedAt {
    _seconds: number
    _nanoseconds: number
  }
  
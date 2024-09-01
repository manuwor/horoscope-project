export interface LottoDetailModel {
    status: string
    response: Response
  }
  
  export interface Response {
    date: string
    endpoint: string
    prizes: Prize[]
    runningNumbers: RunningNumber[]
  }
  
  export interface Prize {
    id: string
    name: string
    reward: string
    amount: number
    number: string[]
  }
  
  export interface RunningNumber {
    id: string
    name: string
    reward: string
    amount: number
    number: string[]
  }
  
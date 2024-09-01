export interface LottoListPastModel {
    status: string
    response: Response[]
  }
  
  export interface Response {
    id: string
    url: string
    date: string
  }
  
export interface IErrorsList {
  not_found_id: string;
}

export interface IErorr {
  status: number;
  message: string;
  code: keyof IErrorsList;
}

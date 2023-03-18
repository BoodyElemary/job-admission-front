export interface IjobQuestions {
  id :number;
  job_id:number;
  question:string;
  option1:string;
  option2:string;
  option3:string;
  option4:string;
  right_option:string;
  created_at:string;
  updated_at:string;
  job:{
    id:number;
    title:string;
    details:string;
    state:string;
    open_date:string;
    close_date:string;
    admin_id:number;
    created_at:string;
    updated_at:string;



  }
}

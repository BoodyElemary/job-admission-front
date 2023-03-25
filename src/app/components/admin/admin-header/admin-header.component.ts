import { Component, Input, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iheader } from 'src/app/models/Iheader';


@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent {
  activated:boolean=false;
  btnText:string="";
  btnRoute:string="";
  header:Iheader={name:"",icon:""};
  @Input() jobName='';
  constructor(private route:ActivatedRoute){}



  ngOnInit(): void {

     let currentRoute = this.route.component?.name;
    console.log(currentRoute);
     switch (currentRoute) {
      case "AllQuestionsComponent":
        this.header.name= "AllQuestions";
        this.header.icon="file_copy";
        this.activated=true;
        this.btnText="Add Question";
        this.btnRoute="allQuestions/addQuestion";

        break;
      case "AdminHomeComponent":
      this.header.name= "Dashboard";
      this.header.icon="person";
      break;
      case "JobQuestionsComponent":
        this.header.name= `${this.jobName}'s Questions`;
        this.header.icon="file_copy";
        this.activated=true;
        this.btnText="Add Question";
        this.btnRoute="allQuestions/addQuestion";
        console.log(this.jobName);
        break;
        case "AddQuestionsComponent":
          this.header.name= "Add Questions";
          this.header.icon="note_add";


          break;
      default:
        this.header.name= "AllQuestions";
        this.header.icon="person";
        break;
     }

  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    // this.jobName=changes['jobName']['currentValue'];
    this.header.name= `${this.jobName}'s Questions`;


  }


}

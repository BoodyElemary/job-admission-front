import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iheader } from 'src/app/models/Iheader';


@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent {

    header:Iheader={name:"",icon:""};
  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {

     let currentRoute = this.route.component?.name;
    console.log(currentRoute);
     switch (currentRoute) {
      case "AllQuestionsComponent":
        this.header.name= "AllQuestions";
        this.header.icon="file_copy";
        break;
      case "AdminHomeComponent":
      this.header.name= "Dashboard";
      this.header.icon="person";
      break;
      default:
        this.header.name= "AllQuestions";
        this.header.icon="person";
        break;
     }

  }

}

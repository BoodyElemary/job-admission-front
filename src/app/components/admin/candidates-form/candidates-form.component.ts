import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { CandidatesService } from 'src/app/services/candidates.service';


@Component({
  selector: 'app-candidates-form',
  templateUrl: './candidates-form.component.html',
  styleUrls: ['./candidates-form.component.css']
})
export class CandidatesFormComponent implements OnInit {
// 'id', 'name', 'email', 'userName', 'phone', 'address', 'city', 'state'
  candidates:any;

  name:string="";
  email:string="";
  userName: string = "";
  password:string="";
  phone: string = "";
  address: string = "";
  city: string = "";
  state:string="";
  CandidateForm: FormGroup = new FormGroup({});

  constructor( private candidatesService:CandidatesService,private fb:FormBuilder,private router:Router){

  }
  ngOnInit(): void {
    this.CandidateForm =this.fb.group(
      {
        // 'id', 'name', 'email', 'userName', 'phone', 'address', 'city', 'state'

      // formCandidate:new FormControl('',Validators.required),
      name: new FormControl ('',[Validators.required]),
      email: new FormControl ('',[Validators.required]),
        userName: new FormControl('', [Validators.required]),
      password:new FormControl('',Validators.required),
        address: new FormControl('', [Validators.required]),
      phone: new FormControl ('',[Validators.required]),
      city: new FormControl ('',[Validators.required]),
      state:new FormControl('',Validators.required),


      }
    )

     this.candidatesService.getCandidates().subscribe({
      next:(response)=>{
        this.candidates=response;

      }
    });
  }
  onSubmit(){
    if(this.CandidateForm.valid){
      // console.log(this.CandidateForm.value);
      this.candidatesService.addCandidate(this.CandidateForm.value).subscribe({
        next:(response)=>{
          this.router.navigate(['/allCandidates']);
        }
      })
    }
  }

}

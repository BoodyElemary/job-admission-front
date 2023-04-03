import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { CandidatesService } from 'src/app/services/candidates.service';


@Component({
  selector: 'app-edit-candidates-form',
  templateUrl: './edit-candidates-form.component.html',
  styleUrls: ['./edit-candidates-form.component.css']
})
export class EditCandidatesFormComponent implements OnInit {
// 'id', 'name', 'email', 'userName', 'phone', 'address', 'city', 'state'
  candidates:any;
  id: number = 0;
  name:string="";
  email:string="";
  userName: string = "";
  password:string="";
  phone: string = "";
  address: string = "";
  city: string = "";
  state:string="";
  CandidateForm: FormGroup = new FormGroup({});

  constructor( private candidatesService:CandidatesService,private fb:FormBuilder,private currentRoute:ActivatedRoute,private router:Router){


    this.id = Number(this.currentRoute.snapshot.paramMap.get('id'));
  }
  ngOnInit(): void {
    this.CandidateForm =this.fb.group(
      {
        // 'id', 'name', 'email', 'userName', 'phone', 'address', 'city', 'state'

      // formCandidate:new FormControl('',Validators.required),
      name: new FormControl ('',[Validators.required]),
      email: new FormControl ('',[Validators.required]),
        userName: new FormControl('', [Validators.required]),
      // password:new FormControl('',Validators.required),
        address: new FormControl('', [Validators.required]),
      phone: new FormControl ('',[Validators.required]),
      city: new FormControl ('',[Validators.required]),
      state:new FormControl('',Validators.required),


      }
    )

     this.candidatesService.findCandidate(this.id).subscribe({
      next:(response)=>{
         this.candidates = response;
         this.candidates = this.candidates.data;
         this.CandidateForm.setValue({
           name: this.candidates.name,
           email:this.candidates.email,
           userName: this.candidates.userName,
            // password:this.candidates.password,
           phone:this.candidates.phone,
           address:this.candidates.address,
           city:this.candidates.city,
           state:this.candidates.state
         })

      }
    });
  }
  onSubmit(){
    if(this.CandidateForm.valid){
      // console.log(this.CandidateForm.value);
      this.candidatesService.editCandidate(this.id,this.CandidateForm.value).subscribe({
        next:(response)=>{
          this.router.navigate(['/allCandidates']);
        }
      })
    }
  }

}

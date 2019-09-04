import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl ,FormBuilder , Validators } from '@angular/forms';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import {Myemp} from '../myemp';
import {Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  signup:any;

url:string = "http://localhost:3000/api/add";
mydata:Myemp[];

submitted = false;

  constructor(private http:HttpClient , private formbuilder:FormBuilder , private router:Router) {

  }

  ngOnInit() {

 this.signup = this.formbuilder.group(
    {
      //id:['' ,Validators.required],
      title:['' ,Validators.required],
      description:['' ,Validators.required],
      time:['' , [Validators.required , Validators.minLength(10)]],
    });
  }  
 get f()
 {
return this.signup.controls;
 }
SaveData()
{

this.submitted = true;
if(this.signup.invalid)
{
  return;
}

const httpOptions = {headers:new HttpHeaders({'Content-Type':'application/json'})
};


console.log(this.signup.value)


this.http.post<Myemp>(this.url,this.signup.value,httpOptions).subscribe(res=>{
  var data = res

console.log(data);

});

this.router.navigate(['/showitem']);
}
}

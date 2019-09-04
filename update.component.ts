import { Component, OnInit } from '@angular/core';
import { ShowitemComponent } from '../showitem/showitem.component';
import {Myemp} from '../myemp';
import { ActivatedRoute, Router } from '@angular/router';
import { AdunitService } from './../adunit.service';
import {FormBuilder , FormControl} from '@angular/forms';
import {HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  providers: [ShowitemComponent]
})
export class UpdateComponent implements OnInit {
mydata=[];
updateForm:any;
 //id:Myemp[];
//url:string = "http://localhost:3000/api/updates";
item:any;

constructor( private adunitservice:AdunitService ,
   private router :Router , 
    private route:ActivatedRoute ,private fb:FormBuilder) {

// this.share = data.mydata;

   }

UpdateData(id)
{
  this.item = this.updateForm.value;
console.log(this.item);
    this.route.params.subscribe(params => {
    this.adunitservice.updatCoin(this.updateForm.value,params['id']);
    this.router.navigate(['/showdata']);
  });
       //this.router.navigateByUrl['/show-data'];

}

  ngOnInit() {

            this.updateForm = this.fb.group({
              id:[''],
              title:[''],
              description:[''],
              time:[''],
          });

this.route.params.subscribe(params => {
       this.adunitservice.editAdUnit(params['id']).subscribe(res => {
        this.mydata[0]  = res[0];

        this.updateForm.setValue({
          id:this.mydata[0].id ,
          title:this.mydata[0].title,
          description:this.mydata[0].description,
          time:this.mydata[0].time,
        })

      });
        //console.log(this.mydata);

    });
//console.log(this.mydata);
}
}
 
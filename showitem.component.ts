import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpParams,HttpHeaders} from '@angular/common/http'
import {Myemp} from '../myemp';
import {AdunitService} from '../adunit.service'
import {Observable} from 'rxjs';//npm i rxjs-compat
import {Router} from '@angular/router'
@Component({
  selector: 'app-showitem',
  templateUrl: './showitem.component.html',
  styleUrls: ['./showitem.component.css']
})
export class ShowitemComponent implements OnInit {
url:string="http://localhost:3000/api/getList"
mydata:Myemp[];
update1:any;
mydata1:Myemp[];
 constructor(private http:HttpClient) {
    this.http.get<Myemp[]>(this.url).subscribe(res=>this.mydata=res)    
   }
removeUser(id){
  let URL:string="http://localhost:3000/api/deleteUser"
  this.http.get(URL+"/"+id).subscribe((res)=>{
    this.mydata.map((x,i)=>{
      if(x.id==id) {
      this.mydata.splice(i,1);
    }  
    })
  
  });
  
}
update(id){
  let URL:string="http://localhost:3000/api/updateUser"
 const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})  };
       this.mydata1=(this.update1.value)
          this.http.post<Myemp>(URL+"/"+id,this.mydata1,httpOptions).subscribe(
            res=>{
              var data=(res);
              console.log(data);
             this.mydata.map((x,i)=>{
      if(x.id==id) {
      this.mydata.splice(i,1,this.update1.value);
    }  
    })
            })
   
  
}
 
  ngOnInit() {}

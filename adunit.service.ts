import { Injectable } from '@angular/core';
import {HttpClient ,HttpHeaders} from '@angular/common/http';
import {Myemp} from './myemp';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
const httpOptions = {
  headers: new HttpHeaders({    
    'Content-Type': 'application/json'
  })
};

export class AdunitService   {
constructor(private http:HttpClient,) { }
  getData(){
    return this.http.get("https://facebook.github.io/react-native/movies.json");    
  }
  getEntry():Observable<any>{
    return this.http.get("http://janbigul.com/api/showEntry.php");    
  }
  setEntry(data:any):Observable<any>{
    console.log(JSON.stringify(data))
    return this.http.post("http://janbigul.com/api/userEntry.php",data,httpOptions);    
  }
  removeEntry(index):Observable<any>{
    return this.http.get("http://janbigul.com/api/removeEntry.php?id=1");    
  }
}
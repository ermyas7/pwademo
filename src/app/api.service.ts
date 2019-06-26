import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Item{
  name: string;
  description: string;
  markdown: string;
  html: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private  dataURL:  string  =  "https://www.techiediaries.com/api/data.json";
  constructor(private http: HttpClient) { }

  fetch():Observable<Item[]>{
    
    return <Observable<Item[]>>this.http.get(this.dataURL);
  }

  get(url:string, param?:any):Observable<any>{
    if(param === undefined){
      return <Observable<any>>this.http.get(url);
    }
    const  params = new  HttpParams({fromString:  param});
    console.log(param)
    return <Observable<any>>this.http.request('get', url,  {responseType: "json",params});
  }


  post(url: string, data: object | object[]){
    return <Observable<any>>this.http.post(url, data);
  }

  put(url: string, data: object){
    return <Observable<any>>this.http.put(url, data);
  }

  patch(url: string, data: object){
    return <Observable<any>>this.http.patch(url, data);
  }

  delete(url: string){
    return <Observable<any>>this.http.delete(url);
  }

}

import { Injectable } from '@angular/core';
import { City } from '../models/city';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../models/photo';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CityService {

constructor(private httpClient:HttpClient,private router:Router) { }
path:string="https://localhost:44327/api/";

getCities():Observable<City[]>{
  return this.httpClient.get<City[]>(this.path+"cities");
}

getCityById(cityId):Observable<City>{

  return this.httpClient.get<City>(this.path+"cities/detail?id="+cityId)

}

getPhotosByCityId(cityId):Observable<Photo[]>{

  return this.httpClient.get<Photo[]>(this.path+"cities/photos/?cityId="+cityId)
}
add(city:City){
this.httpClient.post(this.path +'cities/add',city).subscribe(data=>{
  this.router.navigateByUrl("/cityDetail"+data["id"])

});
}

}

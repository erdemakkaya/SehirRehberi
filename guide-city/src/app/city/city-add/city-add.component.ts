import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/services/city.service';
import { FormGroup,FormControl,FormBuilder, Validators } from '@angular/forms';
import { City } from 'src/app/models/city';
import { AlertifyService } from 'src/app/services/alertify.service';


@Component({
  selector: 'app-city-add',
  templateUrl: './city-add.component.html',
  styleUrls: ['./city-add.component.css'],
  providers:[CityService,AlertifyService]
})
export class CityAddComponent implements OnInit {

  constructor(private cityService:CityService,private formBuilder:FormBuilder, 
     private alertifyService:AlertifyService) { }
city:City
cityAddForm:FormGroup

createCityForm() {
  this.cityAddForm = this.formBuilder.group({
    name: ["", Validators.required],
    description: ["", Validators.required]
  });
}



  ngOnInit() {
    this.createCityForm();
  }

  add(){
    if(this.cityAddForm.valid){
      this.city=Object.assign({},this.cityAddForm.value)
      this.city.userId=1;
      this.cityService.add(this.city);
      this.alertifyService.success(this.city.name+" ilimiz başarı ile eklendi");
     
    }else{
      this.alertifyService.error("form bilgilerini kontrol ediniz");
    }
  }

}

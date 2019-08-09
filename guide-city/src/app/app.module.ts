import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { NgxGalleryModule } from 'ngx-gallery';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {NgxEditorModule} from 'ngx-editor';
import {AlertifyService} from 'src/app/services/alertify.service'
import {FileUploadModule} from 'ng2-file-upload'





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CityComponent } from './city/city.component';
import { CityDetailComponent } from './city/city-detail/city-detail.component';
import { CityAddComponent } from './city/city-add/city-add.component';
import { fromEventPattern } from 'rxjs';
import { RegisterComponent } from './register/register.component';
import { PhotoComponent } from './photo/photo.component';


@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      CityComponent,
      CityDetailComponent,
      CityAddComponent,
      RegisterComponent,
      PhotoComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes),
      NgxGalleryModule,
      ReactiveFormsModule,
      FormsModule,
      NgxEditorModule,
      FileUploadModule
   ],
   providers: [
      AlertifyService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ViewformdataComponent } from './viewformdata/viewformdata.component';
import { EditformdataComponent } from './editformdata/editformdata.component';
import { FormserviceService } from './formservice.service';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  {
    path: 'viewdata',
    component: ViewformdataComponent
  },
  {
    path: 'editdata',
    component: EditformdataComponent
  },
  {
    path: '',
    component: EditformdataComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ViewformdataComponent,
    EditformdataComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [FormserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

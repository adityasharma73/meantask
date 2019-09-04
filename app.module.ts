import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ShowitemComponent } from './showitem/showitem.component';
import { HttpModule} from '@angular/http';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { UpdateComponent } from './update/update.component';

const routes:Routes=[
  {path:'add',component:AddComponent},
  {path:'showitem',component:ShowitemComponent},
  ]

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ShowitemComponent,
    UpdateComponent
  ],
  imports: [
   AppRoutingModule,BrowserModule,FormsModule,ReactiveFormsModule,HttpModule,HttpClientModule,
     RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

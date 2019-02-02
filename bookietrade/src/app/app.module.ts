import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { AddbookComponent } from './addbook/addbook.component';


export const routs=[
  {path:'signup',
component:SignupComponent},
{path:'login',
component:SigninComponent},
{path:'home',
component:HomeComponent},
{path:'detail',
component:DetailsComponent},
{path:'addbook',
component:AddbookComponent}]
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    DetailsComponent,
    AddbookComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routs),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

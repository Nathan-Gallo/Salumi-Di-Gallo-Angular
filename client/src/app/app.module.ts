import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ModalComponent } from './modal/modal.component';

import { RegisterService } from './providers/register.service';
import { LoginService } from './providers/login.service'
import { ModalService } from './providers/modal.service';
import { RecipesComponent } from './recipes/recipes.component';
import { LoggedInGuard } from './logged-in.guard';
import { RecipeContentComponent } from './recipes/recipe-content/recipe-content.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'recipes', component: RecipesComponent, canActivate: [LoggedInGuard] },
  { path: '', redirectTo:'/home', pathMatch: 'full' }
];

// @NgModule is a TypeDecerator telling Angular that this Class should be an Angular Module
// https://angular.io/api/core/TypeDecorator
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    ModalComponent,
    FooterComponent,
    RecipesComponent,
    RecipeContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    RegisterService,
    LoginService,
    ModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

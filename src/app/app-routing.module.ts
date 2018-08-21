import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './guards/auth/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { QuestionsCreateComponent } from './components/questions-create/questions-create.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PasswordForgotComponent } from './components/password-forgot/password-forgot.component';

const routes: Routes = [
    {path: '',                  component: LoginComponent,            pathMatch: 'full'},
    {path: 'login',             component: LoginComponent,             },
    {path: 'password-forgot',   component: PasswordForgotComponent,    },
    {path: 'register',          component: RegisterComponent,          },
    {path: 'home',              component: HomeComponent,              canActivate: [AuthGuard]},
    {path: 'listquestions',     component: QuestionsComponent,         canActivate: [AuthGuard]},
    {path: 'createquestions',   component: QuestionsCreateComponent,   canActivate: [AuthGuard]},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

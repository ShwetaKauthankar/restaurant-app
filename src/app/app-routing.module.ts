import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/components/login/login.component';
import { RegisterComponent } from '../app/components/register/register.component';
import { RestaurantComponent } from '../app/components/restaurant/restaurant.component';
import { UsersComponent } from '../app/components/users/users.component';
import { HomeComponent } from '../app/components/home/home.component';

const routes: Routes = [{path: '', component: HomeComponent},
{path: 'login', component: LoginComponent},
{path: 'register', component: RegisterComponent},
{path: 'restaurants', component: RestaurantComponent},
{path: 'users', component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

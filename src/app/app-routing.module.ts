import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './auth/auth.component';
import {MainComponent} from './main/main.component';
import {OptionsComponent} from './options/options.component';
import {AuthService} from './auth/auth.service';

const routes: Routes = [
  {path: '', component: AuthComponent},
  {path: 'main', component: MainComponent, canActivate: [AuthService]},
  {path: 'options', component: OptionsComponent, canActivate: [AuthService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

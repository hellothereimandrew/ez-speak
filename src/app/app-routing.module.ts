import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { MainComponent } from './main/main.component';
import { OptionsComponent } from './options/options.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'main', component: MainComponent },
  { path: 'options', component: OptionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

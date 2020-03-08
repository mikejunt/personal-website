import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProjectOverviewComponent } from './projects/project-overview/project-overview.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'projects', component: ProjectOverviewComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '', redirectTo: 'welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

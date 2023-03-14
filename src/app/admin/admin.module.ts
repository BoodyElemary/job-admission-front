import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from '../components/admin/admin-home/admin-home.component';
import { NotFoundComponent } from '../components/shared/not-found/not-found.component';
import { AllCandidatesComponent } from '../components/admin/all-candidates/all-candidates.component';

const routes: Routes = [
  { path: 'dashboard', component: AdminHomeComponent, title: 'dashboard' },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path:'allCandidates',component:AllCandidatesComponent},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminModule {}

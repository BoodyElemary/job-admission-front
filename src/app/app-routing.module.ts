import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { AdminModule } from './admin/admin.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),AdminModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

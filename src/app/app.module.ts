import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//custom modules imports
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';

//angular material modules
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { StatCardComponent } from './components/admin/stat-card/stat-card.component';
import {MatCardModule} from '@angular/material/card';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { AllCandidatesComponent } from './components/admin/all-candidates/all-candidates.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import { AdminHeaderComponent } from './components/admin/admin-header/admin-header.component';





@NgModule({
  declarations: [
    AppComponent,
    StatCardComponent,
    AdminHomeComponent,
    NotFoundComponent,
    AllCandidatesComponent,
    AdminHeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    LayoutModule,
    MatCardModule,
    AdminModule,
    UserModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button/';
import { MatMenuModule } from '@angular/material/menu/';
import { MatToolbarModule } from '@angular/material/toolbar/';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectOverviewComponent } from './projects/project-overview/project-overview.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { ProjectHighlightComponent } from './projects/project-highlight/project-highlight.component';
import { MenuToolbarComponent } from './shared/components/menu-toolbar/menu-toolbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ProjectMenuComponent } from './projects/project-menu/project-menu.component';
import { LoginComponent } from './admin/login/login.component';
import { AdminpanelComponent } from './admin/adminpanel/adminpanel.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProfileComponent,
    ProjectOverviewComponent,
    ProjectDetailComponent,
    ProjectHighlightComponent,
    MenuToolbarComponent,
    FooterComponent,
    ProjectMenuComponent,
    LoginComponent,
    AdminpanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

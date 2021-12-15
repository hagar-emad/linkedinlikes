import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JopsComponent } from './MainPageJpos/jops/jops.component';
import { RegisterComponent } from './auth/register/register.component';
import { FormsModule } from '@angular/forms';
import { RegisterNameComponent } from './auth/register-name/register-name.component';
import { RegisterCityComponent } from './auth/register-city/register-city.component';
import { RegisterEmployeeComponent } from './auth/register-employee/register-employee.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './core/home/home.component';
import { GroupsComponent } from './core/groups/groups.component';
import { EventsComponent } from './core/events/events.component';
import { ProfileComponent } from './core/profile/profile.component';
import { NotificationComponent } from './core/notification/notification.component';
import { HeaderComponent } from './layout/header/header.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { NetworkComponent } from './network/network.component';
import { ConnectCardComponent } from './connect-card/connect-card.component';
import { ConnectionComponent } from './connection/connection.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    JopsComponent,
    RegisterComponent,
    RegisterNameComponent,
    RegisterCityComponent,
    RegisterEmployeeComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    GroupsComponent,
    EventsComponent,
    ProfileComponent,
    NotificationComponent,
    HeaderComponent,
     NetworkComponent, ConnectCardComponent, ConnectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    NgbModule,
    ReactiveFormsModule
  ],


  // declarations: [AppComponent, JopsComponent, RegisterComponent, RegisterNameComponent, RegisterCityComponent, RegisterEmployeeComponent, FooterComponent, LoginComponent],
  // imports: [BrowserModule, FormsModule,AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

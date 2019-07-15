import { ContactsService } from './../services/contacts.service';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { NewContactComponent } from './new-contact/new-contact.component';

const appRoutes: Routes=[
  {path:'about', component: AboutComponent},
  {path: 'new-contact', component: NewContactComponent},
  {path:'contacts', component: ContactsComponent},
  {path:'', redirectTo:'/about', pathMatch: 'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AboutComponent,
    NewContactComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), HttpClientModule, FormsModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

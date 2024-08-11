import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { InputComponent } from './components/input/input.component';
import { ContactPreviewComponent } from './components/contact-preview/contact-preview.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContacFilterComponent } from './components/contac-filter/contac-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactPageComponent,
    ContactDetailsPageComponent,
    ContactEditPageComponent,
    InputComponent,
    ContactPreviewComponent,
    ContactListComponent,
    ContacFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

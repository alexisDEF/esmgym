import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { HistoryComponent } from './history/history.component';
import { EventsComponent } from './events/events.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },            // Page d'accueil par défaut
  { path: 'news', component: NewsComponent },        // Actualités
  { path: 'history', component: HistoryComponent },  // Histoire
  { path: 'events', component: EventsComponent },    // Événements
  { path: 'register', component: RegisterComponent },// Formulaire d'inscription
  { path: 'contact', component: ContactComponent }   // Contacts
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

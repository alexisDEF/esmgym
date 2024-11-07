import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],  // Importe CommonModule ici
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // Contenu de la classe comme défini précédemment
  newsList = [
    { title: 'Compétition Régionale', excerpt: 'Découvrez les résultats de notre dernière compétition régionale !' },
    { title: 'Stage de Gymnastique', excerpt: 'Inscrivez-vous à notre stage de perfectionnement cet été.' }
  ];

  eventsList = [
    { name: 'Gala de Gymnastique', date: new Date(2024, 5, 12) },
    { name: 'Compétition Nationale', date: new Date(2024, 6, 25) }
  ];
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ArticleComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  articles = [
    { 
      title: 'Choisir Carapuce', 
      author: 'Alice', 
      content: 'Ce Pokémon crache une écume redoutable. Après sa naissance, son dos gonfle et durcit pour former une carapace.', 
      image: 'assets/images/carapuce.png',
      isPublished: true, 
      comment: '', 
      likes: 120 
    },
    { 
      title: 'Choisir Bulbizarre', 
      author: 'Bob', 
      content: 'Au début de sa vie, il se nourrit des nutriments accumulés dans la graine sur son dos. Cela lui permet de grandir.', 
      image: 'assets/images/Bulbizarre.png',
      isPublished: false, 
      comment: '', 
      likes: 75 
    },
    { 
      title: 'Choisir Salamèche', 
      author: 'Charlie', 
      content: 'La flamme au bout de sa queue représente sa vitalité. Quand Salamèche n’est pas au meilleur de sa forme, elle faiblit.', 
      image: 'assets/images/salamèche.png',
      isPublished: true, 
      comment: '', 
      likes: 200 
    }
  ];
}

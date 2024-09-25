import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {
  Titre:string="3 types d’articles de blog : pour ne plus jamais être à court d’idées !"
  sousTitre1:string="1. Article de blog comparatif"
  sousTitre2:string="2. Article test ou retour d’expérience"
  sousTitre3:string="3. Article de blog tutoriel"
}

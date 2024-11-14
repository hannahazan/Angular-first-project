import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ArticleListComponent } from '../../component/article-list/article-list.component';

interface ArticleList{
  Id:number;
  Title:string,
}

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule,ArticleListComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  articleArray:ArticleList[]=[
    {
      Id:1,
      Title:"1. Article de blog comparatif"  
    },
    {
      Id:2,
      Title:"2. Article test ou retour d’expérience"
    },
    {
      Id:3,
      Title:"3. Article de blog tutoriel"
    }
  ]
}

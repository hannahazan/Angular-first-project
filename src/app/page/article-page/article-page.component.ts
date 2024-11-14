import { Component } from '@angular/core';
import { ArticleComponent } from '../../component/article/article.component';



@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [ArticleComponent],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.css'
})
export class ArticlePageComponent {
 
}

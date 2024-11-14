import { Component } from '@angular/core';
import { ArticleComponent } from '../../component/article/article.component';
import { ArticleThumbnailComponent } from '../../component/article-thumbnail/article-thumbnail.component';
import { Input } from '@angular/core';



@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [ArticleComponent],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.css'
})
export class ArticlePageComponent {
}

import { Component } from '@angular/core';
import { ArticleThumbnailComponent } from '../article-thumbnail/article-thumbnail.component';
import { CommonModule } from '@angular/common';
import { Article } from '../../models/article';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [CommonModule, ArticleThumbnailComponent],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})

export class ArticleListComponent {
  http = inject(HttpClient)
  articles:Article[]=[]
  ngOnInit() {
    this.http.get<Article[]>('http://localhost:3000/articles').subscribe(response => {
      this.articles = response;
      console.log(this.articles,"hello")
    });
  }
  
  handleLike(article: Article) {
    if(article.isLiked){
      article.likeCount -= 1
    }
    else{
      article.likeCount += 1
    }
    article.isLiked = !article.isLiked;
    
  }
}

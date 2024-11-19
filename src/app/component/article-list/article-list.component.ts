import { Component } from '@angular/core';
import { ArticleThumbnailComponent } from '../article-thumbnail/article-thumbnail.component';
import { CommonModule } from '@angular/common';
import { Article } from '../../models/article';
import { inject } from '@angular/core';
import { ApiService } from '../../services/api.service';



@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [CommonModule, ArticleThumbnailComponent],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})

export class ArticleListComponent {
 articleService= inject(ApiService)
  articles:Article[]=[]
  ngOnInit() {
    this.articleService.getArticle().subscribe((response)=>this.articles=response)
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

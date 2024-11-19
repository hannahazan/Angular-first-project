import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParamMap } from '@angular/router';
import { CommonModule } from '@angular/common';
import { inject } from '@angular/core';
import { Article } from '../../models/article';
import { ApiService } from '../../services/api.service';




@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {

  articleService = inject(ApiService)
  route: ActivatedRoute = inject(ActivatedRoute);
  articleId!: number;
  articles!:Article
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
    this.articleId = Number(params.get('id'));
    this.articleService.getArticleById(Number(params.get('id'))).subscribe((response)=>this.articles=response)
    });

  }
  
}

import { Component } from '@angular/core';
import { Input,Output,EventEmitter } from '@angular/core';
import { Article } from '../../models/article';
import { RouterLink } from '@angular/router';
 
@Component({
  selector: 'app-article-thumbnail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './article-thumbnail.component.html',
  styleUrl: './article-thumbnail.component.scss'
})
export class ArticleThumbnailComponent {
 @Input() article: Article = new Input();
 @Output() notifyLike:EventEmitter<Article> = new EventEmitter();

 sendNotification() {
   this.notifyLike.emit(this.article);
 }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {
  Titre:string="3 types d’articles de blog : pour ne plus jamais être à court d’idées !"
  
  

  article={
    id:1,
    title:"1. Article de blog comparatif",
    author:"Karen karen",
    content:"Il s’agit ici de comparer (au minimum) deux éléments : des produits, des services, des méthodes, etc. Choisissez plusieurs critères de comparaison et évaluez avec objectivité chaque élément au travers d’une grille d’analyse.Vous pouvez utiliser un tel article peut comparer deux produits concurrents, en fonction du prix, des fonctionnalités ou options, du niveau de qualité, de la facilité d’utilisation… La comparaison aide le lecteur à faire un choix entre plusieurs solutions possibles, selon ce qui a le plus d’importance à ses yeux.Exemple d’article de blog : « Quel CMS choisir pour son e-commerce ? Notre comparatif Shopify vs Woocommerce ».Deux structures sont possibles. Soit on évalue l’élément 1 dans une première partie, puis le second dans une seconde partie. À l’intérieur de chaque partie, on rédige autant de sous-parties que de critères d’évaluation.Soit l’inverse : on crée une partie par critère, sous laquelle on compare l’élément 1 versus l’élément 2. Cette structure est plus lisible lorsqu’il y a beaucoup de critères à comparer.Enfin, ajoutez une illustration de type tableau comparatif à votre article, ou même une infographie téléchargeable, en guise de synthèse.",
    image:"assets/images/blog.jpg",
    isPublished:true,
    comment:""
  }
  article2={
    id:2,
    title:"2. Article test ou retour d’expérience",
    author:"Karen claudine",
    content:"L’article test est une façon de présenter une solution à la façon : « J’ai testé pour vous… et voilà ce que j’ai observé / voilà ce que j’en pense ». Vous partagez votre expérience et rendez compte des résultats que vous avez obtenus en situation réelle. Est-ce un succès ? Un échec ? Le lecteur a envie de le savoir… !L’objectif peut être de susciter les échanges en invitant le lecteur à déposer un commentaire à la suite de l’article : « Et vous, avez-vous essayé cette solution (ou une autre) ? Quelle est votre opinion ? ».Ce genre d’article est bien apprécié, car il est très orienté « pratique », sans être dénué d’un angle personnel apporté par le rédacteur-testeur. L’impact est encore plus grand si l’auteur de l’article dispose d’une grande influence sur sa communauté.Le texte peut être présenté de manière très synthétique, sur le modèle de l’article comparatif. Ou bien, comme un récit chronologique, en utilisant la technique du storytelling (plus divertissant pour le lecteur).",
    image:"assets/images/blog2.jpg",
    isPublished:true,
    comment:""
  }
  article3={
    id:3,
    title:"3. Article de blog tutoriel",
    author:"Karen catherine",
    content:" Le tutoriel, appelé aussi « tuto » pour les habitués, est aussi un article axé sur la pratique. Choisissez un sujet un peu technique et expliquez « comment faire pour… ». Ce format d’article est particulièrement pertinent pour des produits SaaS, par exemple : « Comment paramétrer la fonctionnalité x de l’application y ».On retrouve généralement les articles tutoriels dans les centres d’aide en ligne. Ils sont illustrés de copies d’écrans, de maquettes, de photos et/ou de vidéos pour aider à la compréhension.La structure de l’article tuto est découpée étape par étape, permettant ainsi de dérouler le mode opératoire jusqu’au bout.Le tutoriel est l’article à choisir si vous souhaitez transmettre une compétence au lecteur. Vous veillerez à mettre le contenu à la portée de tous, y compris les débutants. Le jargon est donc à éviter autant que possible et toute nouvelle notion est à définir (pourquoi pas dans un glossaire).",
    image:"assets/images/blog3.jpg",
    isPublished:true,
    comment:""
  }

  togglePublication(articleNum:number): void {
    console.log(this.article.isPublished)
    if(articleNum===2){
      console.log(articleNum)
      if(this.article2.isPublished==true){ 
        this.article2.isPublished = false;
        console.log(this.article2.isPublished + "dans le if 2")
      }
      else{
        this.article2.isPublished = true;
      }
      
    }
    else if(articleNum===3){
      if(this.article3.isPublished==true){
        this.article3.isPublished = false;
      }
      else{
        this.article3.isPublished = true;
      }
      
    }
    else{
      if(this.article.isPublished==true){
        this.article.isPublished = false;
      }
      else 
      {this.article.isPublished = true;
      }
    }
      
  }
  
}

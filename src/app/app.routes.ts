import { Routes } from '@angular/router';
import { HomePageComponent } from './component/home-page/home-page.component';
import { ArticlePageComponent } from './page/article-page/article-page.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { ContactFormComponent } from './component/contact-form/contact-form.component';
import { SignupPageComponent } from './page/signup-page/signup-page.component';

export const routes: Routes = [
    {path: '', component: HomePageComponent },
    {path:'signup', component:SignupPageComponent },
    {path:'article/:id',component: ArticlePageComponent},
    {path:'contact',component:ContactFormComponent},
    {path: '**', component: NotFoundComponent },
    
];

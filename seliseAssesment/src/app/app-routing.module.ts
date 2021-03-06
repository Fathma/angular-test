import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorComponent } from './components/author/author.component';


const routes: Routes = [
  { path: '', children:[
    {path: 'author', component: AuthorComponent},
    {path: 'fav-author', component: AuthorComponent}
  ],
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

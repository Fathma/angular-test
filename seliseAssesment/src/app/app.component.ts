import { Component, ViewChild} from '@angular/core';
import { AuthorComponent } from './components/author/author.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(AuthorComponent) authorComponent:AuthorComponent;
  title = 'seliseAssesment';
  content:string = 'author'
  ngOnInit() {
    this.content = 'author'
  }

  setAuthor(){
    this.content= 'author'
    console.log(this.content)
    this.authorComponent.onChnageContent('author');

  }

  setFav(){
    this.content= 'fav'
    console.log(this.content)
    this.authorComponent.onChnageContent('fav');
  }
}

import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { Author } from 'src/app/models/Author';
import { Authors } from 'src/app/models/Authors';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  @Input() content: string;
  
  authors:Authors;
  pageNumber:number = 1;
  totalPage:number = 0;
  
  constructor(private authorService:AuthorService) { }

  ngOnInit(): void {
    this.authorService.getAuthors(this.pageNumber).subscribe(authors => {
          this.authors =  authors
          if(this.authors.totalCount%authors.count == 0){
            this.totalPage = this.authors.totalCount/authors.count
          }else{
           this.totalPage = (this.authors.totalCount/authors.count) + 1
          }

          this.authors.results.map(author_=>{
              author_.is_fav = false
          })
        });
    }

    onChnageContent(type: string){
      if(type == "author"){
        this.authorService.getAuthors(this.pageNumber).subscribe(authors => {
          this.authors =  authors
        })
      }else{
        if(localStorage.fav == "undefined" || localStorage.fav == null){
          this.authors = {
            count: 0,
            totalCount:0,
            lastItemIndex:0,
            results:[]
          }
        }else{
          this.authors = {
            count: JSON.parse(localStorage.getItem('fav')).length,
            totalCount:JSON.parse(localStorage.getItem('fav')).length,
            lastItemIndex:JSON.parse(localStorage.getItem('fav')).length,
            results:JSON.parse(localStorage.getItem('fav'))
        }
        }
       
      this.authors.results.map(author_=>{
        author_.is_fav = true
      })
     
    }
  }

  onPageChangeNext(){
    if(this.pageNumber  < this.totalPage ){
      this.authorService.getAuthors(this.pageNumber).subscribe(authors => {
        this.authors =  authors
        this.pageNumber = this.pageNumber+1
      })
    }
    
  }

  onPageChangePrev(){
    if(this.pageNumber > 1){
    this.authorService.getAuthors(this.pageNumber-1).subscribe(authors => {
      this.authors =  authors
      this.pageNumber = this.pageNumber-1
    })
  }
  }

  removeFavt(author:Author){
      let items =JSON.parse(localStorage.getItem('fav'));
      for( var i = 0; i < items.length; i++){ 
        if ( items[i]._id === author._id) { 
          items.splice(i, 1); 
        }
      }

      localStorage.setItem('fav', JSON.stringify(items));
      this.authors.results.map(author_=>{
        if(author_._id == author._id){
          author.is_fav = false
        }
      })
    
  }

  addFavt(author:Author){
    if(localStorage.fav == "undefined" || localStorage.fav == null){
      localStorage.setItem('fav', JSON.stringify([author]));
    }else{
      let item =JSON.parse(localStorage.getItem('fav'));
      item.push(author)
      localStorage.setItem('fav', JSON.stringify(item));
    }

    this.authors.results.map(author_=>{
      if(author_._id == author._id){
       
        author.is_fav = true
      }
    })
  }
}

import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Author } from 'src/app/models/Author';

@Component({
  selector: 'app-author-each',
  templateUrl: './author-each.component.html',
  styleUrls: ['./author-each.component.css']
})
export class AuthorEachComponent implements OnInit {
  @Input() author: Author;
  @Input() i: number;

  @Output() addFavt: EventEmitter<Author> = new EventEmitter(); 
  @Output() removeFavt: EventEmitter<Author> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onAddFavt(author: Author){
    this.addFavt.emit(author);
  }

  onRemoveFavt(author: Author){
    this.removeFavt.emit(author);
  }


}

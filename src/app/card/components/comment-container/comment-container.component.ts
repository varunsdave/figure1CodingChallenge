import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment-container',
  templateUrl: './comment-container.component.html',
  styleUrls: ['./comment-container.component.scss']
})
export class CommentContainerComponent implements OnInit {

  @Input()
  comment;
  constructor() { }

  ngOnInit() {
  }

}

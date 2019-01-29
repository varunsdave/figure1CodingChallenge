import { Component, OnInit, Input } from '@angular/core';
import { RestClientService } from 'src/app/core/services/rest-client.service';

@Component({
  selector: 'app-post-image-container',
  templateUrl: './post-image-container.component.html',
  styleUrls: ['./post-image-container.component.scss']
})
export class PostImageContainerComponent implements OnInit {

  @Input()
  postImageUrl: string;

  constructor() { }

  ngOnInit() {
  }

}

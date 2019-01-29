import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-image-container',
  templateUrl: './profile-image-container.component.html',
  styleUrls: ['./profile-image-container.component.scss']
})
export class ProfileImageContainerComponent implements OnInit {

  @Input() 
  profileImageUrl;

  @Input()
  profileName;

  constructor() { }

  ngOnInit() {
  }

}

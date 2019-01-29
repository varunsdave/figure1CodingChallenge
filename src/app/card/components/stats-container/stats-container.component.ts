import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stats-container',
  templateUrl: './stats-container.component.html',
  styleUrls: ['./stats-container.component.scss']
})
export class StatsContainerComponent implements OnInit {

  @Input()
  stats;

  constructor() { }

  ngOnInit() {
  }

}

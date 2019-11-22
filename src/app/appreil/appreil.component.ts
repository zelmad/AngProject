import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-appreil',
  templateUrl: './appreil.component.html',
  styleUrls: ['./appreil.component.css']
})
export class AppreilComponent implements OnInit {

  @Input() appareilName;
  @Input() appareilSatus;

  constructor() { }

  ngOnInit() {
  }
  getStatus() {
    return this.appareilSatus;
  }
  getColor() {
    if (this.appareilSatus === 'allumé') {
      return '#5375d2';
    } else if (this.appareilSatus === 'éteint') {
      return  '#8ad292';
    } else {
      return '#ba58d2';
    }
  }
}

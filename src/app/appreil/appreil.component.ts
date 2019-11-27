import {Component, Input, OnInit} from '@angular/core';
import {AppareilService} from '../../services/appareil.service';

@Component({
  selector: 'app-appreil',
  templateUrl: './appreil.component.html',
  styleUrls: ['./appreil.component.css']
})
export class AppreilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilSatus: string;
  @Input() index: number;
  @Input() id: number;

  constructor(private appareilService: AppareilService) { }
  ngOnInit() {
  }
  onSwitch() {
    if (this.appareilSatus === 'allumé') {
      this.appareilService.switchOffOne(this.index);
    } else if (this.appareilSatus === 'éteint') {
      this.appareilService.switchOnOne(this.index);
    }
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

import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {
n
  appareils: any[];
  lastUpdate = new Date();
  isAuth = true;
  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
         this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }
  onAlumer() {
    console.log('on alume tous !');
    this.appareilService.switchOnAll(1);
  }
  onEteindre() {
    if (confirm('Etez-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appareilService.switchOffAll(2);
      return null;
    } else {
      return null;
    }
  }
}

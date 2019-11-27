import { Component, OnInit, OnDestroy } from '@angular/core';
import {AppareilService} from '../../services/appareil.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit, OnDestroy {

  appareils: any[];
  appareilSubscription: Subscription;
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
    this.appareilSubscription = this.appareilService.appareilsSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppareilSubject();
  }
  onAlumer() {
    this.appareilService.switchOnAll();
  }
  onEteindre() {
    if (confirm('Etez-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appareilService.switchOffAll();
      return null;
    } else {
      return null;
    }
  }

  ngOnDestroy(): void {
    this.appareilSubscription.unsubscribe();
  }
}

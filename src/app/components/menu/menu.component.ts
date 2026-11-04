import { Component, OnInit } from '@angular/core';
import { IonAvatar, IonContent, IonHeader, IonLabel, IonList,
  IonListHeader, IonMenu, IonMenuToggle, IonText, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  imports: [
    IonMenu,
    IonMenuToggle,
    IonAvatar,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonLabel,
    IonContent,
    IonList,
    IonListHeader,
    IonText,
  ],
})
export class MenuComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

import { Component, OnInit } from '@angular/core';
import { IonAvatar, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList,
  IonListHeader, IonMenu, IonMenuToggle, IonText, IonTitle, IonToolbar } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { cog, settings } from 'ionicons/icons';

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
    IonItem,
    IonIcon,
  ],
})
export class MenuComponent implements OnInit {
  constructor() {
    addIcons({cog,settings})
  }

  ngOnInit() {}
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonAvatar, IonButton, IonButtons, IonContent, IonHeader, IonMenuToggle, IonTitle, IonToggle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.page.html',
  styleUrls: ['./materials.page.scss'],
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonAvatar,
    IonToggle,
    IonMenuToggle,
    IonButton,
    IonButtons,
  ],
})
export class MaterialsPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}

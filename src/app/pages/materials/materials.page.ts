import { CommonModule } from '@angular/common';
import { computed, inject, OnInit, signal, ViewChild, viewChild } from '@angular/core';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonAvatar, IonButton, IonButtons, IonContent, IonHeader,
  IonIcon, IonItem, IonLabel, IonList, IonMenuToggle, IonModal, IonRouterLink, IonText, IonTitle, IonToggle, IonToolbar } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { power, warning } from 'ionicons/icons';
import { toSignal } from '@angular/core/rxjs-interop';
import { ZeldaMaterial } from '../../services/zelda-material';
import { RouterLink } from '@angular/router';


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
    IonMenuToggle,
    IonButton,
    IonButtons,
    IonIcon,
    IonList,
    IonItem,
    IonLabel,
    IonText,
    IonModal,
    IonRouterLink,
    RouterLink,
  ],
})
export class MaterialsPage implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;
  private readonly zeldaMaterialService: ZeldaMaterial = inject(ZeldaMaterial);

  materials = toSignal(this.zeldaMaterialService.getZeldaMAterials(), {
    initialValue: undefined,
  });

  numAle:number | null =null



  constructor() {
    addIcons({ power });
  }

  ngOnInit() {
    console.log('hola');
  }

  generateNumRandom(): void {
    const materiales = this.materials()?.data;

    if (!materiales || materiales.length === 0) {
      return;
    }

    const numAleatorio: number = Math.floor(Math.random() * materiales.length)-1;
    console.log(materiales[numAleatorio].name);
    this.numAle= numAleatorio;

    // Obtener el material seleccionado
  }

  aceptar(): void {


if (this.numAle === null) {

  this.zeldaMaterialService.mostrarToast('Debes darle al boton random antes de aceptar',2000,'top','warning');
  return;
}
    const material = this.materials()?.data[this.numAle];
    this.modal.dismiss(null, 'Aceptar');
    if (!material) {
      return;
    }

    this.zeldaMaterialService.mostrarToast(material?.name, 1500, 'middle', 'success');
  }

  cancelar(): void {
    this.modal.dismiss(null, 'close');
    this.zeldaMaterialService.mostrarToast('Cerrar', 1500, 'middle', 'danger');
  }
}

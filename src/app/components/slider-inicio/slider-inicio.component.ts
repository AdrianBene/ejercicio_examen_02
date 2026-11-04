import { Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { IonButton, IonContent, IonLabel } from '@ionic/angular';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-slider-inicio',
  templateUrl: './slider-inicio.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrls: ['./slider-inicio.component.scss'],
  imports: [IonContent, IonLabel, IonButton, RouterLink],
})
export class SliderInicioComponent {
  constructor() {}
}

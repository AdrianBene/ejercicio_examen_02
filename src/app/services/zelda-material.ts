import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { ToastController } from '@ionic/angular';
import type { Observable} from 'rxjs';
import { catchError, of } from 'rxjs';

import { environment } from '../../environments/environment';
import type { ZeldaResponse } from '../common/zelda-materials';



@Service()
export class ZeldaMaterial {
  private readonly toastController: ToastController = inject(ToastController);
  private readonly http: HttpClient = inject(HttpClient);

  getZeldaMAterials(): Observable<ZeldaResponse | undefined> {
    return this.http.get<ZeldaResponse>(environment.apiUrl).pipe(
      catchError((err) => {
        console.error(err);
        return of(undefined);
      }),
    );
  }
   async mostrarToast(message: string, duration: number, position: 'top'|'middle'|'bottom', color: string): Promise<void> {

     const toast = await this.toastController.create({
       message,
       duration: 1500,
       position: position,
       color: color,
     });
     await toast.present();
   }
}

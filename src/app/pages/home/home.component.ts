import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  mostrarMensaje = true;
  mostrarCard = false;
  checkText:string = "Activar aquí";
  check!:string;
  angularImg = 'https://cdn.freebiesupply.com/logos/large/2x/angular-icon-1-logo-png-transparent.png'

  cambioCheck() {
    if (this.check){
      this.mostrarCard = true;
      this.mostrarMensaje = false;
      this.checkText = "Desactivar aquí"
    }else {
      this.mostrarMensaje = true;
      this.mostrarCard = false;
      this.checkText = "Activar aquí"
    }
  }
}

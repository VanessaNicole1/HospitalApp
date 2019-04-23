import { Component, OnInit, Inject } from '@angular/core';
import { SettingsService } from '../../services/settings/settings.service';

@Component({
  selector: 'app-accout-settings',
  templateUrl: './accout-settings.component.html',
  styles: []
})
export class AccoutSettingsComponent implements OnInit {

  
  constructor( 
  public _ajustes: SettingsService ) { }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor(tema: string, link: any){
    //console.log(tema);
    //console.log(link);
    this.aplicarCheck(link);
    this._ajustes.aplicarTema(tema);
    
    
  }


  aplicarCheck(link : any){
    // Este document es del javascript y hace referencia index.html
    let selectores: any = document.getElementsByClassName('selector');
    //console.log(selectores);

    for(let ref of selectores){
        ref.classList.remove('working');
    }

    link.classList.add('working');
  }

  colocarCheck(){
    /**
     * Con el metodo .getElementsByClassName obtengo un arreglo de todos los selectores o
     * elementos de mi html que tienen la clase selector.
     * El metodo getAttribute sirve para revisar atributos que Angular desconoce.
     * Pero Javascript los maneja perfectamente.
     */
    let selectores: any = document.getElementsByClassName('selector');
    let temaVerificar = this._ajustes.ajustes.tema;

    for(let ref of selectores){
      if(ref.getAttribute('data-theme') === temaVerificar){
          ref.classList.add('working');
          break;
      }
      
      
  }
  }

}

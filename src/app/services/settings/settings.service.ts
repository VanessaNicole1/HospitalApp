import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

 ajustes : Ajustes = {
   temaUrl: 'assets/css/colors/default-dark.css',
   tema: 'default'
 }

 /**
   * 
   * @param _document 
   * @Inject(DOCUMENT) private _document 
   *  Obtiene el DOM principal para hacer referencia al index.html
   */
  constructor(@Inject(DOCUMENT) private _document) {
    this.cargarAjustes();
   }

  /**
   * el localStorage recibe strings, el primer parametro es la llave que tiene
   * ese localStorage.
   */
  guardarAjustes(){
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
    //console.log('Guardado en el localStorage');
  }

  cargarAjustes(){
    if(localStorage.getItem('ajustes')){
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      //console.log('Cargando del localStorage');
      this.aplicarTema(this.ajustes.tema);
    }else{
      //console.log('Usando valores por defecto');
      this.aplicarTema(this.ajustes.tema);
    }
  }

  aplicarTema(tema: string){

    let url = `assets/css/colors/${tema}.css`
    this._document.getElementById('theme').setAttribute('href', url);
    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;
    this.guardarAjustes();
  }
}

interface  Ajustes {

  temaUrl: string;
  tema: string;
}

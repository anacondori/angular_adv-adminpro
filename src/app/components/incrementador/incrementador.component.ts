import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: ``
})
export class IncrementadorComponent implements OnInit{
  ngOnInit(): void {
    this.btnClass = `btn ${ this.btnClass }`;
  }

  @Input('valor') //renombrar el argumento que se envia en el padre
  progreso:number = 50;

  @Output('valor')//funcion q el componente Padre va a ejecutar. Son del tipo EVENT EMITTER
  valorSalida: EventEmitter<number> = new EventEmitter(); //hay q especificar su valor number, string entre los signos <>, sino por defecto es la T de generico


//color a los botones de forma condicional
  @Input() btnClass: string = 'btn-primary';



  // get getPorcentaje (){
  //   return `${this.progreso}%`;
  // }

  cambiarValor( valor: number ){
    if (this.progreso <= 0 && valor <= 0) {
      this.valorSalida.emit(0);
      return this.progreso = 0;
    }
    if (this.progreso >= 100 && valor >= 0) {
      this.valorSalida.emit(100);
      return this.progreso = 100;
    }
    this.progreso = this.progreso + valor;
    this.valorSalida.emit(this.progreso);
    return this.progreso;
  }

  onChange( valor: number ){
    // console.log(valor);
    if (valor >= 100 ) valor = 100;
    if (valor <= 0 ) valor = 0;
    this.valorSalida.emit(valor);
  }

}

import { Component, OnInit } from '@angular/core';
import { CalculoService } from './multiplicar.service';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-multiplicar',
  templateUrl: './multiplicar.component.html',
  styleUrls: ['./multiplicar.component.css']
})
export class MultiplicarComponent implements OnInit {
  form: FormGroup;
  mensaje: string = '';
  resultado: string = '';
  historial: any;
  estado:string = '';
  constructor(private calc: CalculoService) { 
  	this.form = new FormGroup({
      multiplicando: new FormControl('', [Validators.required]),
      multiplicador: new FormControl('', [Validators.required]),
      resultado: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.calc.historial().subscribe(h => {
            this.historial = h.historial;
          });
  }
  
  enviar(event: Event) {
  	event.preventDefault();
    if(this.form.value.multiplicando == '' || this.form.value.multiplicador == ''){
      this.mensaje = 'Debe escribir el multiplicando y el multiplicador';
      this.estado = 'estado-error';
    }else{
      this.calc.multiplicar(this.form.value).subscribe(producto =>{
          this.resultado = producto.producto;
          this.calc.historial().subscribe(h => {
            this.historial = h.historial;
          });
      });
    }
  }
  borrarTodo() { 
    this.calc.eliminar({"id": "all"}).subscribe(result =>{
      this.historial = [];
    });
  }

  resetCalc(){
    this.form.reset();
    this.resultado = '';
  }

}

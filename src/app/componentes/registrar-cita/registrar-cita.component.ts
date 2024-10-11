import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrar-cita',
  templateUrl: './registrar-cita.component.html',
  styleUrls: ['./registrar-cita.component.css']
})
export class RegistrarCitaComponent {
  citaForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.citaForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
      motivo: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.citaForm.valid) {
      const citaData = this.citaForm.value;
      console.log('Cita registrada:', citaData);
      // Aquí puedes agregar la lógica para enviar los datos al backend
    } else {
      console.log('Formulario inválido');
    }
  }
}

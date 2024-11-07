import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-registrar-cita',
  templateUrl: './registrar-cita.component.html',
  styleUrls: ['./registrar-cita.component.css']
})
export class RegistrarCitaComponent {
  citaForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,  // Asegúrate de que FormBuilder esté correctamente inyectado
    // @Inject(MAT_DIALOG_DATA) private data: any  // Inyectar los datos del diálogo si es necesario
  ) {
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
    } else {
      console.log('Formulario inválido');
    }
  }
}

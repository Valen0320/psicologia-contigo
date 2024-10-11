import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent {
  registroForm: FormGroup;
  identityChoice: string = 'real';
  selectedAvatar: string = '';

  constructor(private formBuilder: FormBuilder) {
    this.registroForm = this.formBuilder.group({
      identityChoice: ['real', Validators.required],
      nombre: [''],
      documento: [''],
      email: [''],
      telefono: [''],
      fechaNacimiento: [''],
      contrasena: ['', Validators.required]
    });
  }

  onIdentityChange() {
    this.identityChoice = this.registroForm.get('identityChoice')?.value;
  }

  onAvatarSelect(avatar: string) {
    this.selectedAvatar = avatar;
  }

  onSubmit() {
    if (this.registroForm.valid) {
      const userData = {
        ...this.registroForm.value,
        selectedAvatar: this.selectedAvatar
      };
      console.log('Datos de registro:', userData);
      // Lógica para enviar los datos al backend
    }
  }
}

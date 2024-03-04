import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {

  usuarioNome: FormControl = new FormControl ('',
  [Validators.required]);

  password: FormControl = new FormControl ('',
  [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/)]);


  constructor() {}

  ngOnInit(): void {}

  salvar(): void {
    console.log("Cadastrando usuario e senha!!");

    if(this.usuarioNome.invalid){
      console.log("Usuario invalido");
      return;
    }
    if(this.password.invalid){
      console.log("Password invalido");
      return;
    }
    console.log("Nome: " + this.usuarioNome.value);
    console.log("Senha: " + this.password.value);
  }
}

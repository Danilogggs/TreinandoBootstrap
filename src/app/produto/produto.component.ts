import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {

  nome: FormControl = new FormControl ('',
  [Validators.required]);

  preco: FormControl = new FormControl ('',
  [Validators.required]);

  constructor() {}

  ngOnInit(): void {}

  salvar(): void {
    console.log("Salvando produto!!");

    if(this.nome.invalid){
      console.log("nome invalido");
      return;
    }
    if(this.preco.invalid){
      console.log("preco invalido");
      return;
    }
    console.log("Nome: " + this.nome.value);
    console.log("Preço: " + this.preco.value);
  }

}


import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../shared/usuario.service';
import { Usuario } from '../shared/usuario.model';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuariosComponent implements OnInit {

  usuarios: Usuario[];

  constructor( private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarios = this.listarTodos();
  }

  listarTodos(): Usuario[]{
    return this.usuarioService.listarTodos();
  }

  remover($event: any, usuario: Usuario): void{
    $event.preventDefault();
    if(confirm('Deseja remover a usuario "' + usuario.nome + '"?')){
      this.usuarioService.remover(usuario.id);
      this.usuarios = this.listarTodos();
    }
  }

  // alterarStatus(usuario: Usuario): void {
  //   if(confirm('Deseja alterar o status da usuario"' + usuario.nome +'"?')){
  //     this.usuarioService.alterarStatus(usuario.id);
  //     this.usuarios = this.listarTodos();
  //   }
  // }

}

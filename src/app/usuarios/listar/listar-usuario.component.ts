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
  
  constructor( private usuarioService: UsuarioService) {
    
   }

  ngOnInit(): void {
     this.listarTodos()
  }

   listarTodos(): void{
    this.usuarioService.listarTodos().subscribe(usuarios=>{
      this.usuarios = usuarios['users']
    });
    
  }

  remover($event: any, usuario: Usuario): void{
    $event.preventDefault();
    if(confirm('Deseja remover a usuario "' + usuario.nome + '"?')){
      this.usuarioService.remover(usuario.id).subscribe(r=>{
        console.log(r)
      })
      this.listarTodos();
    }
  }


}

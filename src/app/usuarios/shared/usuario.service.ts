import { Injectable } from '@angular/core';
import { Usuario } from './usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  listarTodos(): Usuario[]{ //retorna todos os dados detalhados
    const usuarios = localStorage['usuarios'];
    return usuarios ? JSON.parse(usuarios) : [];
  }

  cadastrar(novoUsuario: Usuario) : void{
    const usuarios = this.listarTodos();
    novoUsuario.id = new Date().getTime();
    usuarios.push(novoUsuario);
    localStorage['usuarios'] = JSON.stringify(usuarios);
  }

  buscarPorId(id: number): Usuario {
    const usuarios: Usuario[] = this.listarTodos();
    return usuarios.find(usuario => usuario.id === id);
  }

  atualizar( usuario: Usuario): void{
    const usuarios: Usuario[] = this.listarTodos();
    usuarios.forEach((obj, index, objs) =>{
      if (usuario.id === obj.id){
        objs[index] = usuario;
      }
    });
    localStorage['usuarios'] = JSON.stringify(usuarios);
  }

  remover(id: number): void {
    let usuarios: Usuario[] = this.listarTodos();
    usuarios = usuarios.filter( usuario => usuario.id !== id);
    localStorage['usuarios'] = JSON.stringify(usuarios);
  }

  // alterarStatus(id: number): void{
  //   const usuarios: Usuario[] = this.listarTodos();
  //   usuarios.forEach((obj, index, objs) => {
  //     if(id === obj.id){
  //       objs[index].concluida = !obj.concluida;
  //     }
  //   });
  //   localStorage['usuarios'] = JSON.stringify(usuarios);
  // }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Usuario } from '../shared/usuario.model';
import { UsuarioService } from '../shared/usuario.service';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {

  @ViewChild('formUsuario', { static: true }) formUsuario: NgForm;
  usuario: Usuario;

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.usuario = new Usuario();
  }

  cadastrar(): void{
    if (this.formUsuario.form.valid){
      this.usuarioService.cadastrar(this.usuario);
      this.usuarioService.listarTodos().subscribe(r=>{
        this.router.navigate(["/usuarios"]);
      });
      
    }
  }

}

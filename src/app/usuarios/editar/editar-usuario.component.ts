import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Usuario } from '../shared/usuario.model';
import { UsuarioService } from '../shared/usuario.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  @ViewChild('formUsuario', { static: true }) formUsuario: NgForm;
  usuario: Usuario

  constructor(
    private usuarioService: UsuarioService, 
    private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    this.usuario = this.usuarioService.buscarPorId(id);
    var a = this.usuarioService.listarTodos();
    console.log(this.usuario);
    console.log(a);
    console.log(id);
  }

  atualizar(): void{
    if(this.formUsuario.form.valid) {
      this.usuarioService.atualizar(this.usuario);
      this.router.navigate(['/usuarios']);
    }
  }

}

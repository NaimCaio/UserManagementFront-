import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { UsuarioService } from './shared/usuario.service';
import { ListarUsuariosComponent } from './listar/listar-usuario.component';
import { CadastrarUsuarioComponent } from './cadastrar/cadastrar-usuario.component'
import { EditarUsuarioComponent } from './editar/editar-usuario.component';



@NgModule({
  declarations: [
    ListarUsuariosComponent,
    CadastrarUsuarioComponent,
    EditarUsuarioComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    UsuarioService
  ]
})
export class UsuariosModule { }

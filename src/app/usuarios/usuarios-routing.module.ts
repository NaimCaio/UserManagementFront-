import { Routes } from "@angular/router";

import { ListarUsuariosComponent } from "./listar/listar-usuario.component";
import { CadastrarUsuarioComponent } from "./cadastrar/cadastrar-usuario.component";
import { EditarUsuarioComponent } from "./editar/editar-usuario.component";

export const UsuarioRoutes: Routes = [
    {
        path: 'usuarios',
        redirectTo: 'usuarios/listar'
    },
    {
        path: 'usuarios/listar',
        component: ListarUsuariosComponent
    },
    {
        path: 'usuarios/cadastrar',
        component: CadastrarUsuarioComponent
    },
    {
        path: 'usuarios/editar/:id',
        component: EditarUsuarioComponent
    }
];
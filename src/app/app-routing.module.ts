import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioRoutes } from './usuarios/usuarios-routing.module';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/usuarios/listar',
        pathMatch: 'full'
    },

    ...UsuarioRoutes
    
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
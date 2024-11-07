import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TableroComponent } from "./componentes/tablero/tablero.component";
import { LoginComponent } from "./componentes/login/login.component";
import { RegistrarUsuarioComponent } from "./componentes/registrar-usuario/registrar-usuario.component";
import { ConfiguracionComponent } from "./componentes/configuracion/configuracion.component";
import { EditarClienteComponent } from "./componentes/editar-cliente/editar-cliente.component";
import { NoEncontradoComponent } from "./componentes/no-encontrado/no-encontrado.component";
import { RegistrarCitaComponent } from "./componentes/registrar-cita/registrar-cita.component";
import { PanelLateralComponent } from "./componentes/panel-lateral/panel-lateral.component";

const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'home', component: PanelLateralComponent},
    // {path: 'login', component: LoginComponent},
    {path: 'registrarse', component: RegistrarUsuarioComponent},
    {path: 'registrarCita', component: RegistrarCitaComponent},
    {path: 'configuracion', component: ConfiguracionComponent},
    {path: 'cliente/editar/id', component: EditarClienteComponent},
    {path: '**', component: NoEncontradoComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
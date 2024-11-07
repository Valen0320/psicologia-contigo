import { Component } from '@angular/core';
import { RegistrarCitaComponent } from '../registrar-cita/registrar-cita.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-panel-lateral',
  templateUrl: './panel-lateral.component.html',
  styleUrls: ['./panel-lateral.component.css']
})
export class PanelLateralComponent {
  isCollapsed = false;
  citasMenuOpen = false;
  usuariosMenuOpen = false;
  reportesMenuOpen = false;
  pruebasMenuOpen = false;

  constructor(public dialog: MatDialog){}

  abrirAsignarCita() {
    this.dialog.open(RegistrarCitaComponent, {
      width: '400px',
      height: 'auto',
      panelClass: 'custom-dialog', // Clase CSS personalizada para el diálogo
      backdropClass: 'custom-backdrop', // Clase CSS para el fondo oscuro
      disableClose: true
    });
  }
  

  togglePanel() {
    this.isCollapsed = !this.isCollapsed;
  }
  toggleCitasMenu() {
    this.citasMenuOpen = !this.citasMenuOpen;
  }
  toggleUsuariosMenu() {
    this.usuariosMenuOpen = !this.usuariosMenuOpen;
  }
  toggleReportesMenu() {
    this.reportesMenuOpen = !this.reportesMenuOpen;
  }
  togglePruebasMenu() {
    this.pruebasMenuOpen = !this.pruebasMenuOpen;
  }
}

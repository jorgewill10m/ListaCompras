import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common'; // Importando do Angular common
import { FormsModule } from '@angular/forms'; // Importando o FormsModule
import { MatCheckboxModule } from '@angular/material/checkbox'; // Importando o MatCheckbox

@Component({
  selector: 'app-lista-compras',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    FormsModule, // Certificando-se de que FormsModule está importado
    MatCheckboxModule, // Certificando-se de que MatCheckboxModule está importado
  ],
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.css'],
})
export class ListaComprasComponent {
  // Sua lógica aqui
}

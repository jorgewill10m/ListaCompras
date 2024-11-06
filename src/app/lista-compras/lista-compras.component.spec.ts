import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';  // Importando o serviço

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.css']
})
export class ListaComprasComponent implements OnInit {

  shoppingList: any[] = [];  // Lista de compras
  users: any[] = [];  // Lista de usuários
  selectedUserId: number | null = null;  // Para filtrar a lista de compras por usuário

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.loadUsers();
    this.loadShoppingList();
  }

  // Carrega os usuários
  loadUsers(): void {
    this.itemService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  // Carrega a lista de compras
  loadShoppingList(): void {
    this.itemService.getShoppingList().subscribe(items => {
      this.shoppingList = items.filter(item => {
        // Filtra os itens pela ID do usuário se houver um usuário selecionado
        if (this.selectedUserId !== null) {
          return item.userId === this.selectedUserId;
        }
        return true;  // Retorna todos os itens se nenhum usuário for selecionado
      });
    });
  }

  // Adiciona um novo item na lista de compras
  addItem(title: string): void {
    const newItem = {
      title,
      userId: this.selectedUserId,
      included: false
    };

    this.itemService.addItemToShoppingList(newItem).subscribe(() => {
      this.loadShoppingList();  // Recarrega a lista de compras após adicionar
    });
  }

  // Atualiza o status de 'included' de um item
  toggleItemIncluded(item: any): void {
    item.included = !item.included;
    this.itemService.updateItemInShoppingList(item).subscribe(() => {
      this.loadShoppingList();  // Recarrega a lista após a atualização
    });
  }

  // Deleta um item da lista de compras
  deleteItem(id: number): void {
    this.itemService.deleteItemFromShoppingList(id).subscribe(() => {
      this.loadShoppingList();  // Recarrega a lista após a exclusão
    });
  }
}

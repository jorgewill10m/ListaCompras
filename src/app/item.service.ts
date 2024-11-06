import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrlShoppingList = 'http://localhost:3000/shopping-list';  // URL do json-server para shopping-list
  private apiUrlUsers = 'http://localhost:3000/users';  // URL do json-server para users

  constructor(private http: HttpClient) {}

  // Método GET: Obtém todos os itens da lista de compras
  getShoppingList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlShoppingList);
  }

  // Método GET: Obtém todos os usuários
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlUsers);
  }

  // Método POST: Adiciona um novo item à lista de compras
  addItemToShoppingList(item: any): Observable<any> {
    return this.http.post<any>(this.apiUrlShoppingList, item);
  }

  // Método PUT: Atualiza o item da lista de compras
  updateItemInShoppingList(item: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrlShoppingList}/${item.id}`, item);
  }

  // Método DELETE: Remove um item da lista de compras
  deleteItemFromShoppingList(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrlShoppingList}/${id}`);
  }
}

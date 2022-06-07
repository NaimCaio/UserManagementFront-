import { Injectable } from '@angular/core';
import { Usuario } from './usuario.model';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarios: Usuario[] = []
  deleteResponse:object
  readonly apiURL: string;
  private corsHeaders: HttpHeaders;
  constructor(private http: HttpClient) {
    this.apiURL == 'https://localhost:44311/User/list';
    this.corsHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    });
  }

  listarTodos(): Observable<Usuario[]> { 
    return this.http.get<Usuario[]>(`https://localhost:44311/User/list`, {
      headers: this.corsHeaders
    })
  }

  cadastrar(novoUsuario: Usuario): void {
    
    let update =  this.http.post<Object>(`https://localhost:44311/User/add`,JSON.stringify(novoUsuario), {
      headers: this.corsHeaders
    }).subscribe((r)=>{
      console.log(r)
    });
  }

  

  atualizar(usuario: Usuario): Observable<object> {
    let update =  this.http.post<Object>(`https://localhost:44311/User/edit`,JSON.stringify(usuario), {
      headers: this.corsHeaders
    });
    return update;
  }

  remover(id: number): Observable<object> {
    var options = {
      "userId":id
    }
    let deletar =  this.http.post<object>(`https://localhost:44311/User/delete`,JSON.stringify(options), {
      headers: this.corsHeaders
    });
    return deletar;
  }

  
}

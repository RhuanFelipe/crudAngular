import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concat, Observable } from 'rxjs';
import { AlunoModel } from './aluno.model';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {
  url : any = '';

  constructor(private http : HttpClient) { }

  listarAlunos() : Observable<any>{
    return this.http.get(environment.apiUrl)
  }
  cadastrarAluno(aluno : AlunoModel) : Observable<any> {
    return this.http.post(environment.apiUrl, aluno);
  }

  atualizarAluno(id : any, aluno : AlunoModel) : Observable<any> {
    this.url = `http://localhost:3000/alunos/${id}`;
    
    return this.http.put<AlunoModel>(this.url, aluno);
  }
  removerAluno(id : any) : Observable<any> {
    this.url = `http://localhost:3000/alunos/${id}`;

    return this.http.delete(this.url,id);
  }
}

import { AlunoModel } from './aluno.model';
import { AlunosService } from './alunos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  aluno : AlunoModel = new AlunoModel();
  alunos : Array<any> = [];

  constructor(private alunosService: AlunosService) { }

  ngOnInit(): void {
    this.listarAlunos();
  }
  atualizar(id : any){
    this.alunosService.atualizarAluno(id , this.aluno).subscribe(aluno => {
      this.aluno = new AlunoModel();
      this.listarAlunos();
    }, err =>{
      console.log('erro ao listar alunos', err);
    })
  }
  remover(id : any){
    this.alunosService.removerAluno(id).subscribe(aluno => {
      this.aluno = new AlunoModel();
      this.listarAlunos();
    }, err =>{
      console.log('erro ao listar alunos', err);
    })
  }

  listarAlunos(){
    this.alunosService.listarAlunos().subscribe(alunos => {
      this.alunos = alunos
    }, err =>{
      console.log('erro ao listar alunos', err);
    })
  }

  cadastrar(){
    this.alunosService.cadastrarAluno(this.aluno).subscribe(aluno =>{
      this.aluno = new AlunoModel();
      this.listarAlunos();
    }, err =>{
      console.log('Erro ao cadastrar o aluno', err);
    })
  }
}

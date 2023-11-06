import { Component, OnInit } from '@angular/core';
import { EditorModule } from 'primeng/editor';
@Component({
  selector: 'app-atividades-professor',
  templateUrl: './atividades-professor.component.html',
  styleUrls: ['./atividades-professor.component.css'],
})
export class AtividadesProfessorComponent implements OnInit {
  constructor() {}
  text: string | undefined;
  activityTitle: string = '';
  selectedFile: File | null = null;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }
  criarAtividade() {
    console.log('Atividade criada:', this.activityTitle);
    console.log('Arquivo selecionado:', this.selectedFile);
  }
  ngOnInit(): void {}
}

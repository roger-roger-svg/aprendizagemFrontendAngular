import { Component, OnInit } from '@angular/core';
import { EditorModule } from 'primeng/editor';
import { UsuarioProximasAtividadesComponent } from '../../Dashboard/usuario-dashboard/usuario-proximas-atividades/usuario-proximas-atividades.component';
@Component({
  selector: 'app-atividades-professor',
  templateUrl: './atividades-professor.component.html',
  styleUrls: ['./atividades-professor.component.css'],
})
export class AtividadesProfessorComponent implements OnInit {
  menuItems = [
    { label: 'Histórico de Atividades', icon: 'pi pi-list' },
    { label: 'Editar Atividades', icon: 'pi pi-pencil' },
    { label: 'Agendar Atividades', icon: 'pi pi-calendar' },
    { label: 'Conceitos', icon: 'pi pi-book' },
    { label: 'Configurações', icon: 'pi pi-cog' },
    { label: 'Arquivos Privados', icon: 'pi pi-lock' },
    { label: 'Avaliações', icon: 'pi pi-star' },
    { label: 'Calendário', icon: 'pi pi-calendar-plus' },
  ];
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

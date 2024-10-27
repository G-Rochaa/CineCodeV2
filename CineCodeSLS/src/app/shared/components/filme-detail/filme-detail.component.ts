import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Filme } from 'src/app/shared/models/filme';
import { FilmeService } from '../../services/filme.service';

@Component({
  selector: 'app-filme-detail',
  templateUrl: './filme-detail.component.html',
  styleUrls: ['./filme-detail.component.css']
})
export class FilmeDetailComponent implements OnInit {
  filme?: Filme;
  dias: string[] = [];
  dataSelecionada: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private filmeService: FilmeService
  ) {}

  ngOnInit(): void {
    this.obterFilmePorId();
    this.gerarDatas();
  }

  private obterFilmePorId(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.filmeService.getFilmesById(id).subscribe({
      next: (filme) => this.filme = filme, 
      error: () => console.error('Filme não encontrado') 
    });
  }

  gerarDatas() {
    const hoje = new Date();
    this.dias.push(this.formatarData(hoje));

    for (let i = 1; i <= 6; i++) { 
      const dataFutura = new Date(hoje);
      dataFutura.setDate(hoje.getDate() + i);
      this.dias.push(this.formatarData(dataFutura));
    }
  }

  formatarData(data: Date): string {
    const opcoes: Intl.DateTimeFormatOptions = { weekday: 'short', day: '2-digit', month: 'short' };
    return data.toLocaleDateString('pt-BR', opcoes);
  }

  selecionarData(dia: string) {
    this.dataSelecionada = dia; 
  }
}

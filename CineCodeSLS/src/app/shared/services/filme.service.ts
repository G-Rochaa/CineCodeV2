import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Filme } from '../models/filme';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  private apiUrl = 'https://localhost:7264/api/filmes'; 
  constructor(private http: HttpClient) { }

  getFilmes(): Observable<Filme[]> {
    return this.http.get<Filme[]>(this.apiUrl);
  }

  getFilmesById(id: number): Observable<Filme> {
    const filme = this.filmesMock.find(f => f.id === id);
    if (filme) {
      return of(filme); 
    } else {
      throw new Error('Filme não encontrado');
    }
  }
  
  getFilmesMock(): Observable<Filme[]> {
    return of(this.filmesMock);
  }

  private filmesMock: Filme[] = [
    {
      id: 1,
      titulo: 'Venom: A Última Rodada',
      anoLancamento: new Date(2024, 9, 24),
      diretor: 'Kelly Marcel',
      duracao: { hours: 1, minutes: 52 },
      statusFilme: 1,
      sinopse: 'Eddie Brock e o simbionte Venom enfrentam novos inimigos enquanto são perseguidos por cientistas e uma força-tarefa.',
      classificacao: 16,
      imagem: 'https://www.cinemark.com.br/_next/image?url=https%3A%2F%2Fcdnim.prd.cineticket.com.br%2Fasset%2Fmovie%2F8313%2Fvenom-3-a-ultima-rodada-poster-desktop-5965c.png&w=1920&q=75'
    },
    {
      id: 2,
      titulo: 'Megalópolis',
      anoLancamento: new Date(2024, 9, 31),
      diretor: 'Francis Ford Coppola',
      duracao: { hours: 2, minutes: 30 },
      statusFilme: 1,
      sinopse: 'Após um desastre devastador, um arquiteto visionário tenta reconstruir uma metrópole, enfrentando oposição política.',
      classificacao: 14,
      imagem: 'https://www.cinemark.com.br/_next/image?url=https%3A%2F%2Fcdnim.prd.cineticket.com.br%2Fimages%2Fcms%2FmoviePoster%2FMoviePoster-2b042075-1a6a-478c-9f3e-5a33fd6b9465.png&w=1920&q=75'
    },
    {
      id: 3,
      titulo: 'Terrifier 3',
      anoLancamento: new Date(2024, 9, 31),
      diretor: 'Damien Leone',
      duracao: { hours: 1, minutes: 48 },
      statusFilme: 1,
      sinopse: 'O palhaço assassino Art retorna para espalhar terror durante o Natal, enfrentando uma antiga rival.',
      classificacao: 18,
      imagem: 'https://www.cinemark.com.br/_next/image?url=https%3A%2F%2Fcdnim.prd.cineticket.com.br%2Fimages%2Fcms%2FmoviePoster%2FMoviePoster-9b241635-ae87-498a-8679-7caa17959bc6.png&w=1920&q=75'
    },
    {
      id: 4,
      titulo: 'Som da Esperança',
      anoLancamento: new Date(2024, 9, 20),
      diretor: 'Maria Oliveira',
      duracao: { hours: 1, minutes: 40 },
      statusFilme: 1,
      sinopse: 'Uma história emocionante de superação e música, onde uma jovem talentosa encontra na música uma forma de enfrentar os desafios da vida.',
      classificacao: 10,
      imagem: 'https://www.cinemark.com.br/_next/image?url=https%3A%2F%2Fcdnim.prd.cineticket.com.br%2Fimages%2Fcms%2FmoviePoster%2FMoviePoster-f985e2bf-f22c-4684-a4d9-eea6aaf6497f.png&w=1920&q=75'
    }
  ];
}

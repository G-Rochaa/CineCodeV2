import { Component, OnInit } from '@angular/core';
import { Filme } from 'src/app/shared/models/filme';
import { FilmeService } from '../../services/filme.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  filmes: Filme[] = [];

  constructor(private filmeService: FilmeService) { }

  ngOnInit() {
    this.filmeService.getFilmesMock().subscribe((data: Filme[]) => {
      this.filmes = data;
    });

  }

}

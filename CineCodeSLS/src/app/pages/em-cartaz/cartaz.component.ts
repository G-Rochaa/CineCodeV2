import { Component, OnInit } from '@angular/core';
import { Filme } from 'src/app/shared/models/filme';
import { FilmeService } from 'src/app/shared/services/filme.service';

@Component({
  selector: 'app-cartaz',
  templateUrl: './cartaz.component.html',
  styleUrls: ['./cartaz.component.css']
})
export class CartazComponent implements OnInit {

  filmes: Filme[] = []; 

  constructor(private filmeService: FilmeService) { }

  ngOnInit() {
    this.filmeService.getFilmesMock().subscribe((data: Filme[]) => {
      this.filmes = data;
    });

  }
}

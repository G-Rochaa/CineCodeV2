import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter' 
})
export class FilterPipe implements PipeTransform {
  transform(filmes: any[], searchTerm: string): any[] {
    if (!filmes || !searchTerm) {
      return filmes; 
    }

    const lowerCaseSearchTerm = searchTerm.toLowerCase(); 

    return filmes.filter(filme =>
      filme.titulo.toLowerCase().includes(lowerCaseSearchTerm) || 
      filme.sinopse.toLowerCase().includes(lowerCaseSearchTerm) 
    );
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();
    return items
      .map((item) => item)
      .filter((it: { text: string }) => {
        return it.text.toLocaleLowerCase().includes(searchText);
      });
  }
}

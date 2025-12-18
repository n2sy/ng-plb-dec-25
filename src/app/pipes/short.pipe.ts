import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'short',
  standalone: true,
})
export class ShortPipe implements PipeTransform {
  transform(value: string): string {
    return null;
  }
}

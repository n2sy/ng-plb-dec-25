import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noAvatar',
  standalone: true,
})
export class NoAvatarPipe implements PipeTransform {
  transform(value: string): string {
    if (value) return value;
    return 'avatar.jpg';
  }
}

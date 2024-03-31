import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const[rate]=args
    return value * rate;
  }

}

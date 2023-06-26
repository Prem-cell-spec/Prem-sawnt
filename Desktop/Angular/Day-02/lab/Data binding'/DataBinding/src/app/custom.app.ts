import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'customPipe'
  })
  export class CustomPipe implements PipeTransform {
    transform(arg1: any, arg2: any): any {
      let transformedValue = arg1 + arg2; // Adding a prefix to the input value
  
      return transformedValue;
    }
  }

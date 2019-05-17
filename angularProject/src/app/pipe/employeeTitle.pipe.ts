import { Pipe, PipeTransform } from '@angular/core';

@Pipe( {
    name: "employeeTitle"
})

export class EmployeeTitlePipe implements PipeTransform {
    
    transform(value: any, gender: any) {
        if(gender == 'M') {
            return "Mr. " + value; 
        }
        else {
            return "Ms. " + value;
        }
    }
}
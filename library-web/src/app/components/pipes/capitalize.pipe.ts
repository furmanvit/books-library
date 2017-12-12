import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'capitalize' })
export class CapitalizePipe implements PipeTransform {
    transform(str: string): string {
        if (!str) { 
            return str;
        } else {
            let transformed = this.getCapitalizedLetters(str);
            transformed = this.deleteSpecialCharacters(transformed);
            return transformed;
        }
    }

    getCapitalizedLetters(str): string {
        return str.replace(/\b\w/g, txt => {
            return txt.toUpperCase();
        });
    }

    deleteSpecialCharacters(value) {
        return value.replace(/[^\w\s]/gi, '');
    }
}

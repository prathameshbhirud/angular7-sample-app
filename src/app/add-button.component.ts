import { Component } from '@angular/core';

@Component({
    selector: 'app-btn',
    template: `
        <button class="add-btn" (click)="add()">
            <ng-content></ng-content>
        </button>
    `
})
export class AddButtonComponent{
    add(){
        console.log('Add button clicked....')
    }
}
import {Component,Input} from '@angular/core'

@Component({
    selector: 'resuilt',
    templateUrl: 'app/resuilt.component.html'
})
export class ResuiltComponent{
    @Input() kq:string;
}
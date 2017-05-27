import { Component, Input } from '@angular/core'
import { SelectGroupService } from './services/select-group.service'
@Component({
    selector: 'resuilt',
    templateUrl: 'app/resuilt.component.html'
})
export class ResuiltComponent {
    public diem: number;
    public tong:number;
    constructor(public selectGroupService: SelectGroupService
    ) {
        this.diem = selectGroupService.s;
        this.tong=selectGroupService.tongsocau;
    }
}
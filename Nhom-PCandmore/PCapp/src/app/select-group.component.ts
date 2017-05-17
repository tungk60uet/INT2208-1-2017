import { Component, OnInit } from '@angular/core'
import { SelectGroupService } from './services/select-group.service'
@Component({
    selector: 'select-group',
    templateUrl: 'app/select-group.component.html',
    providers: [SelectGroupService]
})
export class SelectGroupComponent implements OnInit {


    constructor(private selectGroupService: SelectGroupService) {

    }
    public chudes: any[];
    ngOnInit(): void {
       this.selectGroupService.GetList().subscribe((response:any)=>{
           this.chudes=response;
       });
    }
    OnClick(value:any):void {
        console.log(value);
    }
}
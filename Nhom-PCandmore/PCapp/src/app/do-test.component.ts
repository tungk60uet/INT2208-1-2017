import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { SelectGroupService } from './services/select-group.service'
import { Subscription } from 'rxjs'

//import { SelectGroupService } from './services/select-group.service'
@Component({
    selector: 'do-test',
    templateUrl: 'app/do-test.component.html'
    // providers: [SelectGroupService]
})
export class TestComponent implements OnInit, OnDestroy {
    public str: string;
    public chudeId: number;
    public trueAudio = new Audio("https://www.soundjay.com/mechanical/camera-shutter-click-01.mp3");
    public falseAudio = new Audio("https://www.soundjay.com/misc/fail-trumpet-01.mp3");
    public tile = "0%";
    public currentQuestion: any = 0;
    public idQuestion: number = 1;
    public Chude: string;
    public worddsrList: any;
    public sub: any;
    public socau: number = 0;
    public showCheck: boolean = false;
public checkDapan:boolean=false;
    constructor(private router: Router, private activatedRoute: ActivatedRoute, public selectGroupService: SelectGroupService
    ) {
selectGroupService.s=0;
    }

    ngOnInit(): void {
        this.sub = this.activatedRoute.params.subscribe(params => {
            this.chudeId = params['Id'];
        });
        this.selectGroupService.GetSingle(this.chudeId).subscribe(p => {
            this.Chude = p.Name;
            
        })
        this.selectGroupService.SEARCHLIST(this.chudeId).subscribe((response: any) => {
            this.worddsrList = response;
            this.socau = this.worddsrList.length;
            this.selectGroupService.tongsocau=this.socau;
            this.currentQuestion = this.worddsrList[0];
        });
    }
    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
    cancelClick() {
          this.showCheck=!this.showCheck;
        if (this.idQuestion <= this.worddsrList.length) {
            this.falseAudio.play();
             this.checkDapan=false;
        }

    }
    checkClick() {
       this.showCheck=!this.showCheck;
        if (this.idQuestion <= this.worddsrList.length) {
            if (this.str.toLowerCase().trim() == this.currentQuestion.vi.toLowerCase() && this.str != '') {
                this.trueAudio.play();
                this.checkDapan=true;
                this.selectGroupService.s++;
                console.log(this.selectGroupService.s);
                
            } else {
                this.falseAudio.play();
                this.checkDapan=false;
            }
        }
    }
    nextClick() {
        this.showCheck=!this.showCheck;
        this.next();
    }
    next() {
        this.str = "";
        this.tile = (this.idQuestion * 100 / this.worddsrList.length).toString() + "%";
        if (this.idQuestion < this.worddsrList.length) {
            this.idQuestion++;
            this.currentQuestion = this.worddsrList[this.idQuestion - 1]
        } else {
            this.router.navigate(["ketqua"]);
        }

    }

}
import {Injectable} from '@angular/core';
import {Http, Response} from'@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class SelectGroupService {
    private apiUrl="http://58ec21b97c2be2120024f154.mockapi.io/api/chudes/"
    constructor(private _http:Http){
        
    }
    GetList(): Observable<any[]>{
        return this._http.get(this.apiUrl).map((r:Response)=>r.json());
    }
    GetSingle(Id:number): Observable<any>{
        return this._http.get(this.apiUrl+Id).map((r:Response)=>r.json());
    } 
    SEARCHLIST(idParent:number): Observable<any[]>{
        return this._http.get(this.apiUrl+idParent+"/worddsr").map((r:Response)=>r.json());
    } 
}
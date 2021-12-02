import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Ui2Service {
  private showAddTask:boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddTask():void{
    this.showAddTask= !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  onToggle():Observable<any>{
    return this.subject.asObservable();
  }

}

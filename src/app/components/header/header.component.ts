import { Component, OnInit } from '@angular/core';
import { Ui2Service } from 'src/app/service/ui2.service';
import { Subscription } from 'rxjs';
import {Router} from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  title:string = 'Task List';
  showAddTask:boolean = false;
  subscription?: Subscription;
  
  constructor(
    private ui2Service:Ui2Service,
    private router:Router
  ) {
    this.subscription = this.ui2Service.onToggle().subscribe(value => this.showAddTask = value);
   }

  ngOnInit(): void {
  }

  toggleAddTask(){
    this.ui2Service.toggleAddTask();
  }

  hasRoute(route:string){
    return this.router.url === route
  }

}

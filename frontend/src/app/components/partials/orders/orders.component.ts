import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  constructor( private userService:UserService,
     private activatedRoute:ActivatedRoute, private router:Router){}


}

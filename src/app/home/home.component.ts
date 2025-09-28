import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AppModuleModule } from '../../app-module.module';
import { homeService } from './homeService';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AppModuleModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  currentUser: any;
  foodList:any;
  selFood:any;
  isDetailedView:any=false;
  constructor(private router: Router, private _homeService:homeService) {
  
  }

  ngOnInit() {
    // Get user info from localStorage
    const userStr = localStorage.getItem('currentUser');
    if (userStr) {
      this.currentUser = JSON.parse(userStr);
    }
    this.getFoodList();
    this.isDetailedView=false;
  }
  cellClicked(item:any){console.log(item,'item');
    this.isDetailedView=true;
    this.selFood=item;
  }

  refreshUserInfo() {
    // Refresh user info from localStorage
    const userStr = localStorage.getItem('currentUser');
    if (userStr) {
      this.currentUser = JSON.parse(userStr);
    }
  }
  getFoodList(){
    this._homeService.getFoodList().subscribe(resp=>{
      console.log(resp);
      this.foodList=resp;
    });
  }
  logout() {
    // Clear user data from localStorage
    localStorage.removeItem('currentUser');
    
    // Navigate back to login
    this.router.navigate(['/login']);
  }
}

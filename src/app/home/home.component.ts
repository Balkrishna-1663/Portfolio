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
  constructor(private router: Router, private _homeService:homeService) {
  
  }

  ngOnInit() {
  }
}

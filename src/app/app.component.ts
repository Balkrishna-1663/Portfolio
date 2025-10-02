import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { AppModuleModule } from "../app-module.module";
import { MatIcon } from '@angular/material/icon';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule, AppModuleModule,MatIcon],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  currentRoute: string = '';
  showWelcome: boolean = true;
  isMVerton:any=true;
  openedNav:boolean=false;
  constructor(private router: Router, private titleservice:Title) { this.titleservice.setTitle("Balkrishna") }

  ngOnInit() {
    this.isMVerton=true;
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.currentRoute = event.url;
      this.showWelcome = event.url === '/';
    });
  }

  isActiveRoute(route: string): boolean {
    return this.currentRoute === route;
  }
  scrollToSection(sectionId:any): void {

  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
changeMVerton():void{
  if(this.isMVerton==true){
    this.isMVerton=false;
    this.openDrawer();
  }else{
    this.isMVerton=true;
    this.openDrawer();
  }  
}

openDrawer(){
  this.openedNav=!this.openedNav;
}

}

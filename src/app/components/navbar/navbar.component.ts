import { Component, OnInit } from '@angular/core';
import { MenuController,IonicModule} from '@ionic/angular';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  constructor(public menuCtrl: MenuController,
    private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {}
  toggleMenu() {
    this.menuCtrl.toggle(); //Add this method to your button click function
  }
  logout(){
    localStorage.clear;
    this.router.navigateByUrl('')
  }
}

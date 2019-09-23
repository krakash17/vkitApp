import { Component, OnInit, } from '@angular/core';
import { MenuController,IonicModule} from '@ionic/angular';
import { MatTabsModule } from '@angular/material';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  
  constructor(public menu: MenuController,
    private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {}

  slideOpts = {
    
    speed: 400,
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true
  };
  goToCourses(){
    this.router.navigateByUrl('/courses')
  }
  
  

 
}

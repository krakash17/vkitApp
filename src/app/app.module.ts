import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule,MenuController, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Tab1Component } from '../app/components/tabs/tab1.component';
import { CoursesComponent} from './pages/courses/courses.component';
import { MatTabsModule,MatExpansionModule,MatIconModule } from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';

import {AboutComponent} from '../app/pages/about/about.component'


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginPageModule } from './pages/login/login.module';
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
{path:'about',component:AboutComponent},
 
  

]

@NgModule({
  declarations: [AppComponent,HomeComponent,CoursesComponent,AboutComponent,Tab1Component],
  entryComponents: [],
  imports: [BrowserModule,MatGridListModule,MatExpansionModule, MatIconModule,IonicModule.forRoot(),MatTabsModule, 
    BrowserAnimationsModule,IonicModule,AppRoutingModule,LoginPageModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    )
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

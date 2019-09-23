import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPage} from './pages/login/login.component';
import { CoursesComponent} from './pages/courses/courses.component';
import { MatTabsModule,MatExpansionModule,MatIconModule } from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';

import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },

  { path: 'login', component: LoginPage },
  { path: '', component: LoginPage },

]

@NgModule({
  declarations: [AppComponent,HomeComponent,LoginPage,CoursesComponent],
  entryComponents: [],
  imports: [BrowserModule,MatGridListModule,MatExpansionModule, MatIconModule,IonicModule.forRoot(),MatTabsModule, 
    BrowserAnimationsModule, AppRoutingModule,
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

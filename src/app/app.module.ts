import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth'
import { environment } from 'src/environments/environment';
import { FilmService } from './services/film.service';
import { AngularFirestore } from 'angularfire2/firestore';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';
import { HttpModule } from '@angular/http';
import {YoutubePlayerModule} from 'ng2-youtube-player';
import { youTubeSearchInjectables } from './youtube-search/youtube-search-injectables';
import { YouTubeSearchBoxComponent } from './youtube-search/youtube-search-box.component';
import { YouTubeSearchResultComponent } from './youtube-search/youtube-search-result.component';
import { YouTubeSearchComponent } from './youtube-search/youtube-search.component';




@NgModule({
  declarations: [AppComponent,
                 YouTubeSearchBoxComponent,
                 YouTubeSearchResultComponent,
                 YouTubeSearchComponent  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    YoutubePlayerModule,
    HttpModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FilmService,AngularFirestore,
    youTubeSearchInjectables,
    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Flashlight } from '@ionic-native/flashlight';
import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private flashlight : Flashlight) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.swithOn();
    });
  }
  
  
  
  swithOn(){
      try{
        let self  = this;
        this.flashlight.available().then(function (isAvailable) {
            if (isAvailable) {
                // switch on
                self.flashlight.switchOn();

                // switch off after 3 seconds
//                setTimeout(function () {
//                   self.flashlight.switchOff(); // success/error callbacks may be passed
//                }, 3000);

            } else {
                console.log("Flashlight not available on this device");
            }
        });
      }catch(e){
          
      }
}
}


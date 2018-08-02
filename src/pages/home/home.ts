import {Component} from '@angular/core';
import {Platform, NavController} from 'ionic-angular';
import {Flashlight} from '@ionic-native/flashlight';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    private isSwitchedOn: boolean;

    constructor(public navCtrl: NavController, private Flashlight: Flashlight, private platform: Platform) {
        
//        this.switchOn();
        
        this.setStatus();
    }

    switchOn() {
        console.log("switchOn ::")
        this.Flashlight.switchOn();
        this.setStatus();
    }

    swithOffTapped() {
        console.log("swithOffTapped ::")
        this.Flashlight.switchOff();
        this.setStatus();
    }

    toggle() {
        console.log("toggle ::")
        this.Flashlight.toggle();
        this.setStatus();
    }

    setStatus() {
        this.isSwitchedOn = this.Flashlight.isSwitchedOn()
    }

    offClose() {
        this.swithOffTapped()
        this.platform.exitApp();
    }
}

import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController
            ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Mensagem',
      subTitle: 'Voce Logou !',
      buttons: ['OK']
    });
    alert.present();
  }

}

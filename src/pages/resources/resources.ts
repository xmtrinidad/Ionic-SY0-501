import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Resource } from '../../models/resource';
import { DomainService } from '../../services/domain.service';

@Component({
  selector: 'page-resources',
  templateUrl: 'resources.html',
})
export class ResourcesPage {

  resources: Resource[] = [];
  domainTitle: string;
  constructor(
    public domainService: DomainService,
    private viewCtrl: ViewController,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.resources = this.navParams.get('resources');
  }

  onModalClose() {
    this.viewCtrl.dismiss()
  }
}

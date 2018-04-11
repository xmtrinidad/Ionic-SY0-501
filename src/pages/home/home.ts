import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { SortPopoverPage } from '../sort-popover/sort-popover';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public popoverCtrl: PopoverController,
    public navCtrl: NavController) {

  }

  presentSortPopover(myEvent) {
    let popover = this.popoverCtrl.create(SortPopoverPage, {option: 'acronyms'});
    popover.present({
      ev: myEvent,
    });
    // popover.onDidDismiss();
  }

}

import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { AcronymsPage } from '../acronyms/acronyms';


@Component({
  selector: 'page-sort-popover',
  template: `
    <ion-list *ngIf="navParams.data.option === 'sort'; else acronyms">
      <ion-list-header>Sort Acronyms</ion-list-header>
      <button 
        *ngFor="let sortOption of sortOptions" 
        ion-item 
        (click)="onSortClick(sortOption)">{{ sortOption }}</button>
    </ion-list>
    <ng-template #acronyms>
      <ion-list>
        <ion-list-header>More</ion-list-header>
        <button
          ion-item
          (click)="viewCtrl.dismiss()"
          [navPush]="acronymsPage">Acronyms List</button>
      </ion-list>
    </ng-template>
  `
})
export class SortPopoverPage {
  sortOptions = [ 'Ascending', 'Descending' ];
  acronymsPage = AcronymsPage;

  constructor(
    public navParams: NavParams,
    public viewCtrl: ViewController) {
  }


  onSortClick(sortType: string) {
    this.viewCtrl.dismiss(sortType);
  }

}

import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Domain } from '../../models/domain';
import { Section } from '../../models/section';
import { Objective } from '../../models/objective';
import { DomainService } from '../../services/domain.service';
import { ObjectiveDetailPage } from '../objective-detail/objective-detail';
@Component({
  selector: 'page-domain',
  templateUrl: 'domain.html',
})
export class DomainPage implements OnInit{
  domain: Domain;
  section: Section;
  objectiveDetailPage = ObjectiveDetailPage;

  constructor(
    public domainService: DomainService,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ngOnInit() {
    this.domain = this.navParams.data;
    this.domainService.setDomainColor(this.domain);
    this.section = this.domainService.getSection(this.domain);
  }

  objectiveSelected(objective: Objective) {
    this.navCtrl.push(ObjectiveDetailPage, {objective: objective});
  }
}

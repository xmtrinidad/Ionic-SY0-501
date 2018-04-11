import { Injectable } from '@angular/core';
import { Domain } from '../models/domain';

import { DOMAINS } from '../data/domains';
import { SECTIONS } from '../data/sections';
import { BULLETS } from '../data/bullets';


@Injectable()
export class DomainService {
  private domainSelected: Domain;
  private domainColor: string;

  getDomains() {
    return DOMAINS;
  }

  getSection(domain: Domain) {
    return SECTIONS.find(section => section.domainId === domain.id);
  }

  getBullets(objectiveNumber: number) {
    return BULLETS.find(el => el.objectiveNumber === objectiveNumber);
  }

  getDomainColor() {
    return this.domainColor;
  }

  getDomainTitle() {
    return this.domainSelected.title.substring(this.domainSelected.title.indexOf(" "));
  }

  getDomain() {
    return this.domainSelected;
  }

  setDomain(domain: Domain) {
    this.domainSelected = domain;
  }

  setDomainColor(domain: Domain) {
    switch (domain.id) {
      case 0:
        this.domainColor = 'threats';
        break;
      case 1:
        this.domainColor = 'tech';
        break;
      case 2:
        this.domainColor = 'arch';
        break;
      case 3:
        this.domainColor = 'access';
        break;
      case 4:
        this.domainColor ='risk';
        break;
      case 5:
        this.domainColor = 'crypt';
        break;
    }
  }



}

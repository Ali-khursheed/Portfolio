import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  inject,
} from '@angular/core';

import profileData from '@data/profile.data';
import { ExpertiseArea } from '@pages/home/components/expertise-area/expertise-area';
import { Intro } from '@pages/home/components/intro/intro';

import { Loader } from '@shared/components/loader/loader';
@Component({
  selector: 'home-page',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ExpertiseArea, Intro,  Loader],
  template: `
    @defer(on immediate){
    <intro />
    <expertise-area />
    <!-- <language-tools/> -->
    
    }@placeholder {
    <loader />
    }
  `,
})
export class HomePage {

  constructor() {
   
  }
}

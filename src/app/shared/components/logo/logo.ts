import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'logo',
  imports: [RouterLink],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  template: `
  <a routerLink="/" aria-label="Brand">
<img 
  src="assets/icons/favicon-light.png" 
  alt="arrow icon" 
  class="w-[45px] h-[35px] object-contain cursor-pointer transition-colors duration-300  "
/>

  </a>
`
})
export class Logo {}

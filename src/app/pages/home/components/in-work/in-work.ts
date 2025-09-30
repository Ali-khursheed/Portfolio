import { Component, computed, inject } from '@angular/core';
import { Devicon } from '@shared/components/devicon/devicon';
// import { LanguageToolService } from '@pages/home/components/language-tools/language-tool.service';
import inWorkData from '@data/in-work.data';
@Component({
  selector: 'in-work',
  standalone: true,
  imports: [Devicon],
  template: `
    <section class="mt-10">
      <!-- <h1 class="text-2xl dark:text-white">In my work</h1> -->
    </section>
  `,
})
export class InWork {
  //   languageToolService = inject(LanguageToolService);
  //   workTools = computed(() =>
  //     this.languageToolService
  //       .languageTools()
  //       .filter((lt) => inWorkData.includes(lt.name))
  //   );
}

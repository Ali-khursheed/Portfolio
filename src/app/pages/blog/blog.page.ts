import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  inject,
} from '@angular/core';
// import { BlogService } from '@pages/blog/blog.service';
import { RouterLink } from '@angular/router';

import profileData from '@data/profile.data';
import { ImageSkeletonDirective } from '@core/directives/image-skeleton.directive';
import { Loader } from '@shared/components/loader/loader';
@Component({
  selector: 'blog-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [RouterLink, ImageSkeletonDirective, Loader],
  template: `
    <div class="container px-8 mx-auto xl:px-5">
      <div class="mx-auto max-w-screen-md">
        <section class=" py-16 px-4">
          <div
            class="bg-gray-400 rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center md:items-start gap-8 transition-all duration-300 hover:shadow-purple-800/40"
          >
            <!-- Logo -->
            <div class="flex justify-center md:justify-start md:w-1/3">
              <img
                src="assets/icons/uet.png"
                alt="UET Logo"
                class="w-40 h-40 object-contain"
              />
            </div>

            <!-- Education Details -->
            <div class="text-left md:w-2/3">
              <h3 class="text-2xl font-semibold text-white mb-2">
                University of Engineering and Technology (UET), Lahore
              </h3>
              <p
                style="font-weight: 600;"
                class="text-blue-00 font-medium mb-4 "
              >
                B.Sc. in Computer Science (2021 - 2025)
              </p>
              <p class="black leading-relaxed">
                I have completed my Bachelor's degree in Computer Science at UET
                Lahore where I have gained a strong foundation in data
                structures algorithms and software engineering principles. I am
                actively involved in various projects focusing on full-stack
                development. UET has provided me with a stimulating environment
                to learn and grow as a future full-stack developer.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
    @defer(on immediate) {
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-screen-lg mx-auto my-10 text-left "
    >
      <!-- @for (post of blogService.blogs(); track post.id) {
      <a
        class="max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-lg"
        [routerLink]="['/blog/' + post.slug + '']"
      >
        <img
          skeleton
          class="rounded-lg object-cover hover:scale-105 transition-all w-full h-52"
          [src]="post.smallImage"
          [alt]="post.title"
        />
        <div class="pt-3">
          <h5
            class="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white"
          >
            {{ post.title }}
          </h5>
          <p class="mb-2 text-sm text-gray-900 dark:text-gray-200">
            {{ post.summary }}
          </p>
        </div>
      </a>
      } -->
    </div>
    }@placeholder {
    <loader />
    }
  `,
})
export class BlogPage {
  //   blogService = inject(BlogService);
  //   metaService = inject(MetaService);
  constructor() {
    // this.metaService.setMetaTags(
    //   `Blogs - ${profileData.name}`,
    //   `Blog posts by ${profileData.name}. I share some guide, tutorials and information about software development`,
    //   'tech,software,development,thoughts,blog,content,news,tutorials,guide,post'
    // );
  }
}

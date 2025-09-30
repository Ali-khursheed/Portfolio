import { NgFor } from '@angular/common';
import { Component, ViewEncapsulation, effect, inject } from '@angular/core';

import profileData from '@data/profile.data';

@Component({
  selector: 'about',
  template: `
    <section
      class="flex flex-col max-w-screen-lg justify-between mx-auto gap-16 dark:text-gray-200 overflow-y-hidden"
    >
      <div class="flex flex-col gap-5">
        <h1 class="text-2xl font-semibold dark:text-white">About Me</h1>
        <p class="justify-start">
          I'm Ali Khursheed, a passionate software developer currently doing my
          internship at Apply Dream. During my journey I’ve gained hands-on
          experience in both frontend and backend development and I’m
          continuously improving my skills to build real-world applications. I
          enjoy learning new technologies and turning ideas into functional
          solutions while growing toward becoming a full-stack developer. 🚀
        </p>

        <p *ngFor="let a of aboutDetails">
          <b class="dark:text-white text-black">{{ a.title }}</b
          ><br />{{ a.desc }}
        </p>
      </div>
      <!-- <div class="flex flex-col gap-5">
        <h1 class="text-2xl font-semibold dark:text-white">Activity:</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <music />
          <watch />
        </div>
      </div> -->

      <div class="flex flex-col gap-5">
        <h1 class="text-2xl font-semibold dark:text-white">
          Contact Information:
        </h1>
        @for(c of contactInfo; track $index){
        <p>
          <b class="dark:text-white text-black ">{{ c.title }}:</b><br />
          <a [href]="c.link" class="hover:underline" target="_blank">{{
            c.desc
          }}</a>
        </p>
        }
      </div>
    </section>
  `,
  encapsulation: ViewEncapsulation.None,
  imports: [NgFor],
  standalone: true,
})
export class AboutPage {
  //   metaService = inject(MetaService);
  
  constructor() {
    // this.metaService.setMetaTags(
    //   `About - ${profileData.name}`,
    //   'Dive into a curated space to learn more about the person behind the name',
    //   ['bio', 'biography', 'information', 'about', 'contact', 'detail']
    // );
  }
  public aboutDetails = [
    {
      title: 'What I Do',
      desc: `I'm a passionate software developer currently doing my internship at Apply Dream where I work on both frontend and backend projects. I focus on building responsive websites, writing clean and efficient code, and following good design practices. I enjoy transforming ideas into real working projects and improving the overall quality of what I build.`,
    },
    {
      title: 'Always Learning',
      desc: `I'm always exploring new technologies and improving my skills. From understanding backend logic to mastering frontend frameworks, I love learning and applying new techniques that help me grow as a developer and stay updated with the latest trends.`,
    },
    {
      title: 'Off-Duty Fun',
      desc: `When I'm not coding, I like exploring new aspects of programming and reading about technology to stay current. I also enjoy playing mobile games, watching videos, listening to music, going for walks, and spending time with my family and friends.`,
    },
    {
      title: 'Why I Code',
      desc: `I code because I love creating things from scratch and turning ideas into real solutions. Coding challenges me to think deeply and solve problems in creative ways. It’s more than just writing code for me — it’s a way to grow, innovate, and make a difference through technology.`,
    },
  ];
  public contactInfo = [
    {
      title: 'Address',
      desc: `Pakistan,Lahore`,
      //   link: 'https://maps.app.goo.gl/dT2aE2RxeQTEA7ne7',
    },
    {
      title: 'Mobile Number',
      desc: '03091191432',
      link: 'tel:+3091191432',
    },
    {
      title: 'Email',
      desc: 'alikhursheed911@gmail.com',
      link: 'https://mail.google.com/mail/?view=cm&fs=1&to=alikhursheed911@gmail.com&su=Hi%20Ali',
    },
  ];
}

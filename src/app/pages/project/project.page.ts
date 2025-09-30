import { Component, ViewEncapsulation, inject } from '@angular/core';
import { ProjectService } from '@pages/project/project.service';
import { MetaService } from '@core/services/meta.service';
import profileData from '@data/profile.data';
import { PlatformTag } from '@shared/components/platform-tag/platform-tag';
import { Devicon } from '@shared/components/devicon/devicon';
import { ProjectLink } from '@pages/project/components/project-link';
import { FeatureProject } from '@pages/project/components/feature-project';
import { OtherProject } from '@pages/project/components/other-project';
@Component({
  selector: 'project-page',
  imports: [PlatformTag, Devicon, ProjectLink, FeatureProject, OtherProject],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  template: `
    <section class="w-full py-20 px-6">
      <div class="max-w-7xl mx-auto space-y-14">
        <!-- Personal Portfolio -->
        <div
          class="w-full bg-gray-400  rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-10 hover:shadow-purple-800/40 transition-all duration-300"
        >
          <div class="w-full md:w-1/2">
            <img
              src="assets/icons/Portfolio.png"
              alt="Personal Portfolio"
              class="w-[90%] max-w-[450px] h-auto rounded-xl object-cover shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div class="w-full md:w-1/2">
            <h3 class="text-3xl font-semibold text-white mb-4">
              Personal Portfolio
            </h3>
            <p class="black mb-5 leading-relaxed">
              A personal portfolio website showcasing my projects, skills, and
              experience. It highlights my journey as a developer and includes
              sections for contact, resume, and work samples with a clean and
              modern design.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="px-4 py-1 bg-[#FFFFFF] rounded-full text-sm"
                >HTML</span
              >
              <span class="px-4 py-1 bg-[#FFFFFF] rounded-full text-sm"
                >CSS</span
              >
              <span class="px-4 py-1 bg-[#FFFFFF] rounded-full text-sm"
                >Tailwind</span
              >
              <span class="px-4 py-1 bg-[#FFFFFF] rounded-full text-sm"
                >Angular</span
              >
            </div>
          </div>
        </div>

        <!-- E-commerce Website -->
        <div
          class="w-full bg-gray-400  rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-10 hover:shadow-purple-800/40 transition-all duration-300"
        >
          <div class="w-full md:w-1/2">
            <img
              src="/assets/icons/Ecommerce.jfif"
              alt="E-commerce Website"
              class="w-[90%] max-w-[450px] h-auto rounded-xl object-cover shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div class="w-full md:w-1/2">
            <h3 class="text-3xl font-semibold text-white mb-4">
              E-commerce Website
            </h3>
            <p class="light-black mb-5 leading-relaxed">
              A fully functional e-commerce platform with product listings,
              shopping cart, secure payment gateway, and user authentication. It
              is designed to deliver a seamless shopping experience and ensure
              smooth transactions.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="px-4 py-1 bg-[#FFFFFF] rounded-full text-sm"
                >HTML</span
              >
              <span class="px-4 py-1 bg-[#FFFFFF] rounded-full text-sm"
                >CSS</span
              >
              <span class="px-4 py-1 bg-[#FFFFFF] rounded-full text-sm"
                >Angular</span
              >
              <span class="px-4 py-1 bg-[#FFFFFF] rounded-full text-sm"
                >ASP.NET</span
              >
              <span class="px-4 py-1 bg-[#FFFFFF] rounded-full text-sm"
                >MySQL</span
              >
            </div>
          </div>
        </div>

        <!-- Smart Quest -->
        <div
          class="w-full bg-gray-400  rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-10 hover:shadow-purple-800/40 transition-all duration-300"
        >
          <div class="w-full md:w-1/2">
            <img
              src="/assets/icons/Smart.png"
              alt="Smart Quest"
              class="w-[90%] max-w-[450px] h-auto rounded-xl object-cover shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div class="w-full md:w-1/2">
            <h3 class="text-3xl font-semibold text-white mb-4">Smart Quest</h3>
            <p class="light-black-300 mb-5 leading-relaxed">
              Smart Quest is a request and complaint handling system designed to
              automate internal processes. It ensures that tasks and requests
              are handled efficiently with proper tracking, accountability, and
              escalation management.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="px-4 py-1 bg-[#FFFFFF] rounded-full text-sm"
                >HTML</span
              >
              <span class="px-4 py-1 bg-[#FFFFFF] rounded-full text-sm"
                >CSS</span
              >
              <span class="px-4 py-1 bg-[#FFFFFF] rounded-full text-sm"
                >Angular</span
              >
              <span class="px-4 py-1 bg-[#FFFFFF] rounded-full text-sm"
                >Tailwind</span
              >
              <span class="px-4 py-1 bg-[#FFFFFF] rounded-full text-sm"
                >ASP.NET</span
              >
              <span class="px-4 py-1 bg-[#FFFFFF] rounded-full text-sm"
                >MySQL</span
              >
            </div>
          </div>
        </div>

        <!-- Marketing Billing System -->
        <div
          class="w-full bg-gray-400  rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-10 hover:shadow-purple-800/40 transition-all duration-300"
        >
          <div class="w-full md:w-1/2">
            <img
              src="assets/icons/Marketing.jfif"
              alt="Marketing Billing System"
              class="w-[90%] max-w-[450px] h-auto rounded-xl object-cover shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div class="w-full md:w-1/2">
            <h3 class="text-3xl font-semibold text-white mb-4">
              Marketing Billing System
            </h3>
            <p class="black mb-5 leading-relaxed">
              A marketing billing system built using object-oriented programming
              principles. It simplifies the management of clients, invoices, and
              payment records while maintaining a structured and modular backend
              design. This project strengthened my backend development skills
              and understanding of OOP concepts.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="px-4 py-1 bg-[#FFFFFF] rounded-full text-sm"
                >C#</span
              >
              <span class="px-4 py-1 bg-[#FFFFFF] rounded-full text-sm"
                >OOP</span
              >
              <span class="px-4 py-1 bg-[#FFFFFF] rounded-full text-sm"
                >ASP.NET</span
              >
              <span class="px-4 py-1 bg-[#FFFFFF] rounded-full text-sm"
                >SQL Server</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <feature-project />
    <h1
      class="text-brand-primary text-center text-3xl font-semibold tracking-tight lg:text-2xl lg:leading-snug dark:text-white"
    ></h1>
    <other-project />
  `,
})
export class ProjectPage {
  projectService = inject(ProjectService);
  metaService = inject(MetaService);
  constructor() {
    this.metaService.setMetaTags(
      `Projects - ${profileData.name}`,
      `Projects made by ${profileData.name}. Get to know all the sources.`,
      [
        'tech',
        'software',
        'development',
        'project',
        'portfolio',
        'app',
        'programming',
        'open-source',
        'web',
        'android',
        'ios',
      ]
    );
  }
}

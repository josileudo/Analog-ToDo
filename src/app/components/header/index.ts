import { Component } from "@angular/core";

@Component({
  selector: 'app-header',
  standalone: true,
  template:`
      <div class="pt-16 pb-20 bg-zinc-900 flex justify-center content-start">
        <img class="h-4" src="Logo.svg" class="logo">
      </div>
  `,
  styles: [`
  `]
})

export default class HeaderComponent {
}

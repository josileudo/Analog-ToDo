import { Component } from '@angular/core';
import HeaderComponent from '../components/header/index';
import TaskComponent from '../components/task';

@Component({
  selector: 'app-main',
  imports: [HeaderComponent, TaskComponent],
  standalone: true,
  template: `
    <main class="flex flex-col items-center w-full">
      <div class="w-320">
        <app-header class="w-full"/>
        <app-task class="w-full"/>
      </div>
    </main>
     `,
  styles: [``],
})
export default class MainComponent {

}

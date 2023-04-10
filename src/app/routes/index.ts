import { Component } from '@angular/core';
import HeaderComponent from '../components/header';
import MainComponent from "../pages/index.page";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainComponent],
  template: `<app-main></app-main>`,
  styles: [``],
})
export default class HomeComponent {

}

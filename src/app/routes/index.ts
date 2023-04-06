import { Component } from '@angular/core';
import Header from '../components/header';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Header],
  template: `<app-header />`,
  styles: [``],
})
export default class HomeComponent {

}

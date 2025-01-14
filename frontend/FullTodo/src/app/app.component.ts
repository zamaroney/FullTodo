import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent} from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import {ErrorComponent} from './error/error.component';

@Component({
  selector: 'app-root',
  standalone: true, // newly added
  imports: [
    RouterOutlet, FooterComponent, MenuComponent, ErrorComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FullTodo';
  message = 'This is pretty sick!'
}

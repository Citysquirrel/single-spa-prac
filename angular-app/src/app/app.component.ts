// src/app/app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Shopping App';

  navigateToReactApp(subRoute?: string) {
    window.history.pushState(null, '', `/react${subRoute || ''}`);
    window.dispatchEvent(new Event('popstate'));
  }
}

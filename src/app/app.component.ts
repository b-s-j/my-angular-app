import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <main>
      <header class="brand-name">
        <img src="src/app/logo.jpg" alt="Company Logo" aria-hidden="true">
      </header>
    </main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hello Bern';
}

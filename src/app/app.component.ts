import { JsonPipe } from '@angular/common';
import { Component, resource } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'bible-reader';

  todosResource = resource({
    loader: () => {
      return fetch(
        `https://bible.helloao.org/api/available_translations.json`
      ).then((res) => res.json() as Promise<any[]>);
    },
  });
}

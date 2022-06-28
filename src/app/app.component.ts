import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
      // Question 2

      searchText = "";
      items = [];

      ngOnInit() {
        const url = 'https://api.publicapis.org/categories';
        // obtengo datos utilizando fetch
        fetch(url).then(response => response.json()).then(data => {
          this.items = data.categories; // <-- asigno los valores a la propiedad del componente
        });
      }
}

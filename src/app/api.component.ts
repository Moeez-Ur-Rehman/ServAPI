// src/app/api.component.ts
import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <button (click)="fetchData()">Fetch Data</button>
      <pre>{{ data | json }}</pre>
    </div>
  `,
})
export class ApiComponent {
  data: any;

  constructor(private apiService: ApiService) {}

  fetchData() {
    this.apiService.getData()  // Calling the service to fetch data
      .subscribe(response => {
        this.data = response;
      });
  }
}

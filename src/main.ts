import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ApiComponent } from './app/api.component'; 
import { provideHttpClient } from '@angular/common/http'; // Provide HttpClient directly

bootstrapApplication(ApiComponent, {
  providers: [provideHttpClient()] // No need for HttpClientModule, use provideHttpClient
})
.catch(err => console.error(err));

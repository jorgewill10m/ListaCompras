import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; // Certifique-se de importar corretamente o AppComponent

bootstrapApplication(AppComponent, {
  providers: [provideAnimationsAsync()]
}).catch(err => console.error(err));

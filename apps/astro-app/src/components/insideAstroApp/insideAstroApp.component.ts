import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-inside-astro-app',
  standalone: true,
  imports: [CommonModule],
  template: `<p>insideAstroApp Component works!</p>`,
  styleUrl: './insideAstroApp.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InsideAstroAppComponent {}

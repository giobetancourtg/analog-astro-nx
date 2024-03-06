import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FeatureInsideLibComponent } from '../../../../../libs/feature-inside-lib/src/lib/feature-inside-lib.component';

@Component({
  selector: 'app-inside-astro-app',
  standalone: true,
  // imports: [CommonModule],
  imports: [CommonModule],
  template: `
    <p>insideAstroApp Component works!</p>
    <!-- <org-feature-inside-lib /> -->
  `,
  styleUrl: './insideAstroApp.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InsideAstroAppComponent {}

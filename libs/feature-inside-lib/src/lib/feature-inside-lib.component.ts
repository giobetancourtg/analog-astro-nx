import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'org-feature-inside-lib',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-inside-lib.component.html',
  styleUrl: './feature-inside-lib.component.scss',
})
export class FeatureInsideLibComponent {}

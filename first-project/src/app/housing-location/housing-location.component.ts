import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>housing-location works!</p> `,
  styleUrls: ['./housing-location.component.css'],
})
export class HousingLocationComponent {
  // !を付ける必要があるのは、入力に値が渡される事を期待している為。
  // この場合、デフォルト値はなし
  @Input() housingLocation!: Housinglocation;
}

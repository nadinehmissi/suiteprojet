import { Component } from '@angular/core';

@Component({
  selector: 'app-descriptionprdt',
  standalone: true,
  imports: [],
  templateUrl: './descriptionprdt.component.html',
  styleUrl: './descriptionprdt.component.css'
})
export class DescriptionprdtComponent {
count: any;
incrementValue() {
this.count++;
}
decrementValue() {
  this.count--;
}
addtocart() {
 alert('produit ajouter');
}
}
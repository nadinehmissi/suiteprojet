import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DescriptionprdtComponent } from '../descriptionprdt/descriptionprdt.component';
import{UpheaderComponent} from '../app/upheader/upheader.component';
import{HeaderComponent} from '../app/header/header.component';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, DescriptionprdtComponent, HeaderComponent, UpheaderComponent]
})
export class AppComponent {
  title = 'project';
}

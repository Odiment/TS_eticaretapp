import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  imports: [RouterModule, NgxSpinnerModule],
  template: `<router-outlet></router-outlet>
    <ngx-spinner
      bdColor="rgba(0, 0, 0, 0.8)"
      size="medium"
      color="#fff"
      type="ball-spin-fade"
      [fullScreen]="true"
      ><p style="color: white">Loading... Yükleniyor...</p></ngx-spinner
    > `,
  standalone: true,
})
export class AppComponent {}

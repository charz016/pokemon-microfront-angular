import { Component, OnInit } from '@angular/core';
import { CommonsLibService } from '@commons-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'mf-shell';

  constructor(public commonsLibService: CommonsLibService) {}
  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';
import { filter } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  isDashboard = true;

  constructor(
    private _router: Router,
    private _dialog: MatDialog
    ) {
  }

  ngOnInit(): void {
    this._router.events.pipe(
      filter((event: Event) => event instanceof NavigationEnd),
      untilDestroyed(this)
    ).subscribe(() => this.isDashboard = this._router.url === '/dashboard')
  }

  addNewEntry() {
  }

  goTo(link: string) {
    window.open(link, '_blank')
  }


}

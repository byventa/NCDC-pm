import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { HistoryService } from 'src/app/core/services/history/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  historyUrls: string[] = [];
  constructor(private router: Router, private historyService: HistoryService) {}

  ngOnInit(): void {
    this.historyService.currentUrsl$.subscribe(
      (data) => (this.historyUrls = data)
    );
    this.manipulateUrl(this.router.url);
  }

  manipulateUrl(url: string) {
    let manipulatedUrl: string;
    switch (url) {
      case '/form':
        manipulatedUrl = 'Create';
        break;
      case '/home':
        manipulatedUrl = 'Home page';
        break;
      default:
        manipulatedUrl = url;
    }
    this.historyService.pushUrl(manipulatedUrl);
  }
}

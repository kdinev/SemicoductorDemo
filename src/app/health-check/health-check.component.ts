import { Component, OnDestroy, OnInit } from '@angular/core';
import { IgxCategoryChartModule } from 'igniteui-angular-charts';
import { Subject, takeUntil } from 'rxjs';
import { TestAggragate } from '../models/live-apisemiconductor/test-aggragate';
import { LiveAPISemiconductorService } from '../services/live-apisemiconductor.service';

@Component({
  selector: 'app-health-check',
  imports: [IgxCategoryChartModule],
  templateUrl: './health-check.component.html',
  styleUrls: ['./health-check.component.scss']
})
export class HealthCheckComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public liveAPISemiconductorTestAggragate: TestAggragate[] = [];

  constructor(
    private liveAPISemiconductorService: LiveAPISemiconductorService,
  ) {}


  ngOnInit() {
    this.liveAPISemiconductorService.getTestAggragateList().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.liveAPISemiconductorTestAggragate = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

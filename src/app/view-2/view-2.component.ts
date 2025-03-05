import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IGX_CARD_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxButtonDirective, IgxDialogComponent, IgxIconButtonDirective, IgxIconComponent, IgxRippleDirective } from '@infragistics/igniteui-angular';
import { Subject, take, takeUntil } from 'rxjs';
import { Semiconductor } from '../models/live-apisemiconductor/semiconductor';
import { Process } from '../models/live-apisemiconductor/process';
import { Test } from '../models/live-apisemiconductor/test';
import { Outcome } from '../models/live-apisemiconductor/outcome';
import { LiveAPISemiconductorService } from '../services/live-apisemiconductor.service';

@Component({
  selector: 'app-view-2',
  imports: [IGX_DIALOG_DIRECTIVES, IGX_LIST_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxIconButtonDirective, IgxIconComponent, IgxButtonDirective, IgxRippleDirective],
  templateUrl: './view-2.component.html',
  styleUrls: ['./view-2.component.scss']
})
export class View2Component implements OnInit, OnDestroy {
  @ViewChild('dialog', { static: true, read: IgxDialogComponent})
  private dialog?: IgxDialogComponent;

  private destroy$: Subject<void> = new Subject<void>();

  private _semiconductor?: Semiconductor;
  public get semiconductor(): Semiconductor | undefined {
    return this._semiconductor;
  }
  public set semiconductor(value: Semiconductor | undefined) {
    this._semiconductor = value;
    this.liveAPISemiconductorProcess$.next();
    this.liveAPISemiconductorTest$.next();
  }

  private _selectedTest?: Test;
  public get selectedTest(): Test | undefined {
    return this._selectedTest;
  }
  public set selectedTest(value: Test | undefined) {
    this._selectedTest = value;
    this.liveAPISemiconductorOutcome$.next();
  }
  public liveAPISemiconductorSemiconductor: Semiconductor[] = [];
  public liveAPISemiconductorProcess: Process[] = [];
  public liveAPISemiconductorProcess$: Subject<void> = new Subject<void>();

  public liveAPISemiconductorTest: Test[] = [];
  public liveAPISemiconductorTest$: Subject<void> = new Subject<void>();

  public liveAPISemiconductorOutcome: Outcome[] = [];
  public liveAPISemiconductorOutcome$: Subject<void> = new Subject<void>();

  constructor(
    private liveAPISemiconductorService: LiveAPISemiconductorService,
  ) {}


  ngOnInit() {
    this.liveAPISemiconductorService.getSemiconductorList().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.liveAPISemiconductorSemiconductor = data
    );
    this.liveAPISemiconductorService.getProcessList(this.semiconductor?.id as any).pipe(takeUntil(this.destroy$)).subscribe(
      data => this.liveAPISemiconductorProcess = data
    );
    this.liveAPISemiconductorProcess$.pipe(takeUntil(this.destroy$)).subscribe(
      () => { this.liveAPISemiconductorService.getProcessList(this.semiconductor?.id as any).pipe(take(1)).subscribe(
        data => this.liveAPISemiconductorProcess = data
    )});
    this.liveAPISemiconductorService.getTestList(this.semiconductor?.id as any).pipe(takeUntil(this.destroy$)).subscribe(
      data => this.liveAPISemiconductorTest = data
    );
    this.liveAPISemiconductorTest$.pipe(takeUntil(this.destroy$)).subscribe(
      () => { this.liveAPISemiconductorService.getTestList(this.semiconductor?.id as any).pipe(take(1)).subscribe(
        data => this.liveAPISemiconductorTest = data
    )});
    this.liveAPISemiconductorService.getOutcomeList(this.selectedTest?.id as any).pipe(takeUntil(this.destroy$)).subscribe(
      data => this.liveAPISemiconductorOutcome = data
    );
    this.liveAPISemiconductorOutcome$.pipe(takeUntil(this.destroy$)).subscribe(
      () => { this.liveAPISemiconductorService.getOutcomeList(this.selectedTest?.id as any).pipe(take(1)).subscribe(
        data => this.liveAPISemiconductorOutcome = data
    )});
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.liveAPISemiconductorProcess$.complete();
    this.liveAPISemiconductorTest$.complete();
    this.liveAPISemiconductorOutcome$.complete();
  }

  public rowSelectionChangingGrid($event: any): void {
    this.selectedTest = $event.newSelection;
    this.dialog?.toggle();
  }
}

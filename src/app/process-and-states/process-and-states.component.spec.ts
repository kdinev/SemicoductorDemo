import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IGX_LIST_DIRECTIVES, IgxIconComponent, IGX_GRID_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxIconButtonDirective } from '@infragistics/igniteui-angular';
import { ProcessAndStatesComponent } from './process-and-states.component';

describe('ProcessAndStatesComponent', () => {
  let component: ProcessAndStatesComponent;
  let fixture: ComponentFixture<ProcessAndStatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcessAndStatesComponent, NoopAnimationsModule, FormsModule, HttpClientTestingModule, IGX_LIST_DIRECTIVES, IgxIconComponent, IGX_GRID_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxIconButtonDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessAndStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

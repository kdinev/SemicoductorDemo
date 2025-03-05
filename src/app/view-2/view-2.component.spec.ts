import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IGX_LIST_DIRECTIVES, IgxIconComponent, IGX_GRID_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxIconButtonDirective } from '@infragistics/igniteui-angular';
import { View2Component } from './view-2.component';

describe('View2Component', () => {
  let component: View2Component;
  let fixture: ComponentFixture<View2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [View2Component, NoopAnimationsModule, FormsModule, HttpClientTestingModule, IGX_LIST_DIRECTIVES, IgxIconComponent, IGX_GRID_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxIconButtonDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(View2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

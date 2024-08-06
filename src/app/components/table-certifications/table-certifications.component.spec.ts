import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCertificationsComponent } from './table-certifications.component';

describe('TableCertificationsComponent', () => {
  let component: TableCertificationsComponent;
  let fixture: ComponentFixture<TableCertificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableCertificationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableCertificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

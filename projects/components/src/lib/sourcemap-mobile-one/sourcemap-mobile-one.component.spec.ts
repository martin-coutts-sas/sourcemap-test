import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SourcemapMobileOneComponent } from "./sourcemap-mobile-one.component";

describe("SourcemapMobileOneComponent", () => {
  let component: SourcemapMobileOneComponent;
  let fixture: ComponentFixture<SourcemapMobileOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SourcemapMobileOneComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcemapMobileOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

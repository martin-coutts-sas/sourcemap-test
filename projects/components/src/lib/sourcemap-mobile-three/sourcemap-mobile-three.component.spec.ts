import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SourcemapMobileThreeComponent } from "./sourcemap-mobile-three.component";

describe("SourcemapMobileThreeComponent", () => {
  let component: SourcemapMobileThreeComponent;
  let fixture: ComponentFixture<SourcemapMobileThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SourcemapMobileThreeComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcemapMobileThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

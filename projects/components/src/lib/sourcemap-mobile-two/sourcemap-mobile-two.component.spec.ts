import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SourcemapMobileTwoComponent } from "./sourcemap-mobile-two.component";

describe("SourcemapMobileTwoComponent", () => {
  let component: SourcemapMobileTwoComponent;
  let fixture: ComponentFixture<SourcemapMobileTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SourcemapMobileTwoComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcemapMobileTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

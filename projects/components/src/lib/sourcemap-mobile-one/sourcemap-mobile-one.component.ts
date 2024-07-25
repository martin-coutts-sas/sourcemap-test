import { Component, OnInit, Input } from "@angular/core";
import { SmiControlApi } from '@sassoftware/mobile-investigator';
import { ControlMemberApi as DesktopApi } from '@sassoftware/vi-api/control/control-api';
import { TypeAttributes } from '@sassoftware/vi-api/control';

@Component({
  selector: 'mobile-sol-sourcemap-mobile-one',
  standalone: true,
  templateUrl: './sourcemap-mobile-one.component.html'
})
export class SourcemapMobileOneComponent implements OnInit {
  @Input() controlApi!: SmiControlApi<TypeAttributes, "HOMEPAGE"> | DesktopApi<TypeAttributes, never>;

  constructor() {
  }

  ngOnInit(): void {
  }
}

import { Component, OnInit, Input } from "@angular/core";
import { SmiControlApi } from '@sassoftware/mobile-investigator';
import { ControlMemberApi as DesktopApi } from '@sassoftware/vi-api/control/control-api';
import { TypeAttributes } from '@sassoftware/vi-api/control';

@Component({
  selector: 'mobile-sol-sourcemap-mobile-three',
  standalone: true,
  templateUrl: './sourcemap-mobile-three.component.html'
})
export class SourcemapMobileThreeComponent implements OnInit {
  @Input() controlApi!: SmiControlApi<TypeAttributes, "BOOLEAN"> | DesktopApi<TypeAttributes, never>;

  constructor() {
  }

  ngOnInit(): void {
  }
}

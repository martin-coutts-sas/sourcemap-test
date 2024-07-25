import { Component, OnInit, Input } from "@angular/core";
import { SmiControlApi } from '@sassoftware/mobile-investigator';
import { ControlMemberApi as DesktopApi } from '@sassoftware/vi-api/control/control-api';
import { TypeAttributes } from '@sassoftware/vi-api/control';

@Component({
  selector: 'mobile-sol-sourcemap-mobile-two',
  standalone: true,
  templateUrl: './sourcemap-mobile-two.component.html'
})
export class SourcemapMobileTwoComponent implements OnInit {
  @Input() controlApi!: SmiControlApi<TypeAttributes, "STRING"> | DesktopApi<TypeAttributes, never>;

  constructor() {
  }

  ngOnInit(): void {
  }
}

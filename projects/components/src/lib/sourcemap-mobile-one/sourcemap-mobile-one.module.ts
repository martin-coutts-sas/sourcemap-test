import { APP_INITIALIZER, Injector, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SourcemapMobileOneComponent } from "./sourcemap-mobile-one.component";
import { createCustomElement } from "@angular/elements";
import { control } from './sourcemap-mobile-one.control';
import { SmiWindow, isSasMobileWindowApi, } from '@sassoftware/mobile-investigator';

@NgModule({
  imports: [CommonModule, FormsModule, SourcemapMobileOneComponent],
  exports: [SourcemapMobileOneComponent],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: (injector: Injector) => {
        return () => {
          customElements.define(
            control.directiveName,
            createCustomElement(SourcemapMobileOneComponent, { injector: injector })
          );
          
          const smiWindow = window as SmiWindow;
          if (isSasMobileWindowApi(smiWindow.sas)) {
            smiWindow.sas.smi.config.registerSolutionExtension(control);
          } else {
            smiWindow.sas.vi.config.registerSolutionExtension(control);
          }
        };
      },
      deps: [Injector],
    },
  ],
})
export class SourcemapMobileOneModule {}

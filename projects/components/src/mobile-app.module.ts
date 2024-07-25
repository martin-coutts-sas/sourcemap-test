import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { SourcemapMobileOneModule } from './lib/sourcemap-mobile-one/sourcemap-mobile-one.module';
import { SourcemapMobileTwoModule } from './lib/sourcemap-mobile-two/sourcemap-mobile-two.module';
import { SourcemapMobileThreeModule } from './lib/sourcemap-mobile-three/sourcemap-mobile-three.module';

@NgModule({
    imports: [
    SourcemapMobileOneModule,
    SourcemapMobileTwoModule,
    SourcemapMobileThreeModule
  ],
    providers: []
})
export class MobileComponentsAppModule {}

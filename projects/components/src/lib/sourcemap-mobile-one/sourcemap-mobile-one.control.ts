import { ControlType } from "@sassoftware/vi-api/config";

export const control = {
  category: "MobileHomepageControls",
  controlDescription: {
    defaultText: "sourcemapMobileOne"
  },
  directiveName: "mobile-sol-sourcemap-mobile-one",
  displayName: {
    defaultText: "sourcemapMobileOne"
  },
  name: "sourcemapMobileOne",
  controlAttributes: {
    attributes: {},
    metadata: {
      renderAs: ControlType.WebComponent,
      states: {
        readOnly: true,
        required: true
      }
    }
  }
};

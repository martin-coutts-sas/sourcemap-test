import { ControlType } from "@sassoftware/vi-api/config";

export const control = {
  category: "MobileObjectControls",
  controlDescription: {
    defaultText: "sourcemapMobileTwo"
  },
  directiveName: "mobile-sol-sourcemap-mobile-two",
  displayName: {
    defaultText: "sourcemapMobileTwo"
  },
  name: "sourcemapMobileTwo",
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

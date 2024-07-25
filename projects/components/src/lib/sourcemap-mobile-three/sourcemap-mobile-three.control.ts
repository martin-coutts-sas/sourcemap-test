import { ControlType } from "@sassoftware/vi-api/config";

export const control = {
  category: "MobileObjectControls",
  controlDescription: {
    defaultText: "sourcemapMobileThree"
  },
  directiveName: "mobile-sol-sourcemap-mobile-three",
  displayName: {
    defaultText: "sourcemapMobileThree"
  },
  name: "sourcemapMobileThree",
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

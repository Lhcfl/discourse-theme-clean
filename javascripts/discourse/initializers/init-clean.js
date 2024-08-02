import { withPluginApi } from "discourse/lib/plugin-api";
import CleanUserInfo from "../components/clean-user-info";

export default {
  name: "discourse-theme-clean",

  initialize() {
    withPluginApi("1.6.0", (api) => {
      api.renderInOutlet("user-profile-above-collapsed-info", CleanUserInfo);
    });
  },
};

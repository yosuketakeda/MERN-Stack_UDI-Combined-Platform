import { init } from "@rematch/core";
import createLoadingPlugin from "@rematch/loading";
import { user } from "./models/_user";

import { table } from "./models/_table";

const loading = createLoadingPlugin();

const store = init({
  models: {
    user,
    table,
  },
  plugins: [loading],
});

export default store;

// rematch/core
// https://rematch.github.io/rematch/#/README

// rematch/loading
// https://rematch.github.io/rematch/#/plugins/loading

// rematch/plugins
// https://rematch.github.io/rematch/#/plugins

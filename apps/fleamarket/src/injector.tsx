import { injectFactory } from "@mf-toy/shell-router";
import { routes } from "./routes";

const inject = injectFactory({
  routes,
});

export default inject;

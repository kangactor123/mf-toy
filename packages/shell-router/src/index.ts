import { injectFactory } from "./injector";

import useAppEvent from "./hooks/use-app-event";
import useShellEvent from "./hooks/use-shell-event";
import useShellNavigate from "./hooks/use-shell-navigate";
import useShellNavigateListener from "./hooks/use-shell-navigator-listener";

import AppRoutingManager from "./components/app-routing-manager";

// hooks export
export {
  useAppEvent,
  useShellEvent,
  useShellNavigate,
  useShellNavigateListener,
};

// components export
export { AppRoutingManager };

// factory function export
export { injectFactory };

export type * from "./types";

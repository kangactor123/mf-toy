import { InjectFuncType, useShellEvent } from "@mf-toy/shell-router";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { appFleaMarketBasename } from "../constants/prefix";
import { importRemote } from "@module-federation/utilities";
import React from "react";

const AppFleaMarket = () => {
  const location = useLocation();

  const wrapperRef = useRef<HTMLDivElement>(null);
  const isFirstRunRef = useRef(true);
  const unmountRef = useRef(() => {});

  useShellEvent("app-fleamarket", appFleaMarketBasename);

  useEffect(() => {
    if (!isFirstRunRef.current) return;

    isFirstRunRef.current = false;

    importRemote<{ default: InjectFuncType }>({
      url: "http://localhost:3001",
      scope: "fleamarket",
      module: "injector",
      remoteEntryFileName: "remoteEntry.js",
    })
      .then(({ default: inject }) => {
        unmountRef.current = inject({
          routerType: "memory",
          rootElement: wrapperRef.current!,
          basePath: location.pathname.replace(appFleaMarketBasename, ""),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });

  useEffect(() => unmountRef.current, []);

  return <div ref={wrapperRef} id="app-fleamarket" />;
};

export default AppFleaMarket;

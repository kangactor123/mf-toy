import { InjectFuncType, useShellEvent } from "@mf-toy/shell-router";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { appNearbyStoresBasename } from "../constants/prefix";
import { importRemote } from "@module-federation/utilities";
import React from "react";

const AppNearbyStores = () => {
  const location = useLocation();

  const wrapperRef = useRef<HTMLDivElement>(null);
  const isFirstRunRef = useRef(true);
  const unmountRef = useRef(() => {});

  useShellEvent("app-nearby-stores", appNearbyStoresBasename);

  useEffect(() => {
    if (!isFirstRunRef.current) return;

    isFirstRunRef.current = false;

    importRemote<{ default: InjectFuncType }>({
      url: "http://localhost:3002",
      scope: "nearby-stores",
      module: "injector",
      remoteEntryFileName: "remoteEntry.js",
    })
      .then(({ default: inject }) => {
        unmountRef.current = inject({
          routerType: "memory",
          rootElement: wrapperRef.current!,
          basePath: location.pathname.replace(appNearbyStoresBasename, ""),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });

  useEffect(() => unmountRef.current, []);

  return <div ref={wrapperRef} id="app-nearby-stores" />;
};

export default AppNearbyStores;

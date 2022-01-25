#!/usr/bin/env node

import esbuildServe from "esbuild-serve";

esbuildServe(
  {
    logLevel: "info",
    //entryPoints: ["src/app.tsx"],
    bundle: true,
    outfile: "public/bundle.js",
    sourcemap: true,
  },
  { 
    root: "public",
    port: 7000,
  }
);
import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";
import { SvgDefinitions } from "./components/Svg";

// TODO: preload svg icons
// import iconHref from "~/icon.svg"
// export const links: LinksFunction = () => {
//   return [
//     // Preload svg sprite as a resource to avoid render blocking
//     {
//       rel: "preload",
//       href: iconHref,
//       as: "image",
//       type: "image/svg+xml",
//     },
//   ]
// }

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        <SvgDefinitions />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});

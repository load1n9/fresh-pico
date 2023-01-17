import { PicoPluginOptions } from "./mod.ts";

export function injectScript(source: string, async = false, defer = false) {
  const script = document.createElement("script");
  script.src = source;
  script.async = async;
  script.defer = defer;
  document.head.appendChild(script);
}

export function injectStylesheet(source: string) {
  const stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";
  stylesheet.href = source;
  document.head.appendChild(stylesheet);
}

export default function main(_state: PicoPluginOptions) {
  injectStylesheet("https://unpkg.com/@picocss/pico@latest/css/pico.min.css");
}

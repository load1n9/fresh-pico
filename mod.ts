import { Plugin } from "$fresh/server.ts";
import { PluginRenderContext } from "$fresh/src/server/types.ts";

// deno-lint-ignore no-empty-interface
export interface PicoPluginOptions {
}

export function PicoPlugin(_options: PicoPluginOptions = {}): Plugin {
  return {
    name: "pico",
    entrypoints: {
      "main":
        `data:application/javascript, export default function() { const stylesheet = document.createElement("link"); stylesheet.rel = "stylesheet"; stylesheet.href = "https://unpkg.com/@picocss/pico@latest/css/pico.min.css"; document.head.appendChild(stylesheet); }`,
    },
    render(ctx: PluginRenderContext) {
      ctx.render();
      return {
        scripts: [
          {
            entrypoint: "main",
            state: undefined,
          },
        ],
      };
    },
  };
}

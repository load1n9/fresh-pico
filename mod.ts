import { Plugin } from "$fresh/server.ts";
import { PluginRenderContext } from "$fresh/src/server/types.ts";

// deno-lint-ignore no-empty-interface
export interface PicoPluginOptions {
}

export function PicoPlugin(options: PicoPluginOptions = {}): Plugin {
  return {
    name: "pico",
    entrypoints: { "main": import.meta.resolve("./plugin.ts") },
    render(ctx: PluginRenderContext) {
      ctx.render();
      return {
        scripts: [
          {
            entrypoint: "main",
            state: options,
          },
        ],
      };
    },
  };
}

# Fresh Pico

## Pico Plugin for Fresh

### Setup

Add the Pico plugin to your `import_map.json` file.

```json
{
  "imports": {
    "pico/": "https://raw.githubusercontent.com/load1n9/fresh-pico/main/"
  }
}
```

Use the plugin in your project's `main.ts` file

```ts
import { PicoPlugin } from "pico/mod.ts";

await start(manifest, {
  plugins: [
    // ...
    PicoPlugin()
  ],
});
```

### Usage

```ts
// routes/index.tsx

export default function Home() {
  return (
    <main class="container">
      <h1>Hello, world!</h1>
    </main>
  );
}
```

### Maintainers

- Loading ([@load1n9](https://github.com/load1n9))

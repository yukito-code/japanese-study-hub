// @ts-check
import { defineConfig } from "astro/config";

/** GitHub Project Pages のサブパス（リポジトリ名と一致させる） */
const SITE_BASE = "/jlpt-study-hub";

/**
 * 開発時、ブラウザがルートの /favicon.ico を取りに行き base と不一致でエラーになるのを避ける。
 */
function faviconDevRedirect(basePath) {
  const prefix = basePath.endsWith("/") ? basePath.slice(0, -1) : basePath;
  return {
    name: "favicon-dev-redirect",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === "/favicon.ico") {
          res.writeHead(302, { Location: `${prefix}/favicon.svg` });
          res.end();
          return;
        }
        next();
      });
    },
  };
}

// GitHub Project Pages: `base` を変更したら `SITE_BASE` も同じ値にしてください。
// ユーザーサイト (username.github.io) のルートなら base: '/' とし、SITE_BASE を '/' にします。
export default defineConfig({
  site: "https://yukito-code.github.io",
  base: SITE_BASE,
  trailingSlash: "always",
  vite: {
    plugins: [faviconDevRedirect(SITE_BASE)],
  },
});

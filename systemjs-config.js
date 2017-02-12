System.config({
  defaultJSExtensions: true,
  paths: {
    "*": "node_modules/*",
    "app/*": "app/*",
    "external-libs/*": "external-libs/*"
  },
  packageConfigPaths: ["node_modules/*/package.json"]
});

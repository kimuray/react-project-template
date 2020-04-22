module.exports = (api) => {
  const isDevelopment = api.env("development")

  const presets = [
    [
      "@babel/env",
      {
        modules: false,
        useBuiltIns: "entry",
        corejs: 3
      },
    ],
    [
      "@babel/react",
      {
        development: isDevelopment,
        useBuiltIns: true
      }
    ],
    "@babel/preset-typescript"
  ]

  const plugins = [
    "@babel/plugin-proposal-object-rest-spread"
  ]

  return {
    presets,
    plugins
  }
}

const path = require("path");

module.exports = {
  webpackFinal: async (config) => {
    (config.module.rules = [
      ...config.module.rules,
      {
        test: /\.(ts|tsx)$/,
        include: [path.resolve(__dirname, "..")],
        use: [
          {
            loader: require.resolve("babel-loader"),
            options: {
              presets: [require.resolve("babel-preset-react-app")],
            },
          },
          require.resolve("react-docgen-typescript-loader"),
        ],
      },
    ]),
      config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
};

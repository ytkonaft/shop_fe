const path = require("path");

module.exports = {
  distDir: "./dist",
  webpack: (config, { dev }) => {
    config.resolve = {
      alias: {
        ...config.resolve.alias,
        components: path.resolve(__dirname, "src/components/"),
        layouts: path.resolve(__dirname, "src/layouts/"),
        styles: path.resolve(__dirname, "src/styles/"),
        hooks: path.resolve(__dirname, "src/hooks/"),
        seo: path.resolve(__dirname, "seo/")
      },
      extensions: [".js", ".jsx", ".css", ".png", ".jpg", ".gif", ".jpeg"]
    };

    config.module.rules.push({
      test: /\.(js | jsx)?$/,
      loader: "stylelint-custom-processor-loader",
      exclude: /node_modules/,
      options: {
        emitWarning: true
      }
    });

    return config;
  }
};

const path = require("path");
const withSourceMaps = require("@zeit/next-source-maps");

const NextConfig = {
  distDir: "./dist",
  webpack: (config, { dev }) => {
    config.resolve = {
      alias: {
        ...config.resolve.alias,
        src: path.resolve(__dirname, "src/"),
        components: path.resolve(__dirname, "src/components/"),
        containers: path.resolve(__dirname, "src/containers/"),
        layouts: path.resolve(__dirname, "src/layouts/"),
        styles: path.resolve(__dirname, "src/styles/"),
        hooks: path.resolve(__dirname, "src/hooks/"),
        seo: path.resolve(__dirname, "src/seo/")
      },
      extensions: [".js", ".jsx", ".mjs", ".css", ".graphql"]
    };

    config.module.rules = [
      ...config.module.rules,
      {
        enforce: "pre",
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'stylelint-custom-processor-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto"
      }
    ]; 

    return config; 
  }
};

module.exports = withSourceMaps(NextConfig);

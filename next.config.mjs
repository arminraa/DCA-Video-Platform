// import MiniCssExtractPlugin from "mini-css-extract-plugin";
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "/category/:path*",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vidbeen.ir",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "upload.vidbeen.ir",
        pathname: "**",
      },
    ],
  },
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.plugins.push(
  //       new MiniCssExtractPlugin({
  //         filename: "static/css/[name].css",
  //         chunkFilename: "static/css/[name].chunk.css",
  //       })
  //     );

  //     config.module.rules.push({
  //       test: /\.css$/,
  //       use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
  //     });

  //     config.module.rules.push({
  //       test: /\.jsx?$/,
  //       exclude: /node_modules/,
  //       use: {
  //         loader: "babel-loader",
  //         options: {
  //           presets: ["@babel/preset-react"],
  //           plugins: [
  //             ["@babel/plugin-transform-runtime"],
  //             ["babel-plugin-styled-components"],
  //           ],
  //         },
  //       },
  //     });
  //   }

  //   return config;
  // },
};

export default nextConfig;

module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  webpack: {
    configure: (webpackConfig) => {
      // Garante que o Webpack resolva arquivos TS/TSX antes dos JS
      webpackConfig.resolve.extensions = ['.tsx', '.ts', '.js', '.jsx', ...webpackConfig.resolve.extensions];
      return webpackConfig;
    },
  },
};
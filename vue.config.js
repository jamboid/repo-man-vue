module.exports = {
  publicPath: "./",
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/scss/base/_all.scss";`
      }
    }
  }
};

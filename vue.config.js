module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/scss/_base.scss";
        `
      }
    }
  },
  devServer: {
    clientLogLevel: "info"
  }
};

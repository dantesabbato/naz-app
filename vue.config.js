module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "~@/assets/styles/classes.sass"
          @import "~@/assets/styles/fonts.sass"
          @import "~@/assets/styles/display.sass"
          @import "~@/assets/styles/colours.sass"
        `
      }
    }
  }
};

// module.exports = {
//   css: {
//     loaderOptions: {
//       sass: {
//         data: `@import "~style";`
//       }
//     }
//   }
// }
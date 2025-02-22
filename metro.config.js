/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
 const { getDefaultConfig } = require("metro-config");

 module.exports = (async () => {
   const {
     resolver: { sourceExts }
   } = await getDefaultConfig();
   return {
     transformer: {
        getTransformOptions: async () => ({
          transform: {
            experimentalImportSupport: false,
            inlineRequires: true,
          },
        }),
        babelTransformerPath: require.resolve("react-native-sass-transformer")
     },
     resolver: {
       sourceExts: [...sourceExts, "scss", "sass"]
     }
   };
 })();

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};

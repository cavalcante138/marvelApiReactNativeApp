module.exports = function(api) {
  api.cache(false);
  return {
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
    plugins: [
      [
        'react-native-reanimated/plugin', {
            relativeSourceLocation: true,
        },
      ],
      ['module:react-native-dotenv', {
        moduleName: '@env',
        path: '.env',
      }],
    ],
  };
};

module.exports = {
  presets: [
    '@babel/preset-flow',
    [
      '@babel/preset-env',
      {
        targets: {
          node: 8
        }
      }
    ]
  ],
  plugins: ['@babel/plugin-proposal-class-properties']
};
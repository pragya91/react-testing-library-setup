module.exports = {
    presets: [
      [
        '@babel/preset-env', // enables es6+ things
        {
          targets: {
            node: 'current',
          },
        },
      ],
      '@babel/preset-react' // jest cannot understand jsx syntax without this
    ],
  };
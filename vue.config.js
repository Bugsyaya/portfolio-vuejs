module.exports = {
    devServer: {
      proxy: {
        '^/graph': {
            target: 'https://spotify-api-graphql-console.herokuapp.com'
        },
      }
    }
  }
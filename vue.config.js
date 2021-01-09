module.exports = {
  pages: {
    'index': {
      entry: './src/pages/main.js',
      template: 'public/index.html',
      title: 'Home',
      chunks: [ 'chunk-vendors', 'chunk-common', 'index' ]
    },
    'sign-in': {
      entry: './src/pages/Sign-In/main.js',
      template: 'public/index.html',
      title: 'Sign-In',
      chunks: [ 'chunk-vendors', 'chunk-common', 'sign-in' ]
    },
    'create-account': {
      entry: './src/pages/Create-Account/main.js',
      template: 'public/index.html',
      title: 'Create-Account',
      chunks: [ 'chunk-vendors', 'chunk-common', 'create-account' ]
    },
    // 'profile': {
    //   entry: './src/pages/Profile/profile.js',
    //   template: 'public/index.html',
    //   title: 'Profile',
    //   chunks: [ 'chunk-vendors', 'chunk-common', 'profile' ]
    // },
    'prod_search': {
      entry: './src/pages/prod_search/main.js',
      template: 'public/index.html',
      title: 'Prod_Search',
      chunks: [ 'chunk-vendors', 'chunk-common', 'prod_search' ]
    },
    'prod_details': {
      entry: './src/pages/prod_details.js',
      template: 'public/index.html',
      title: 'Prod_Details',
      chunks: [ 'chunk-vendors', 'chunk-common', 'prod_details' ]
    }
  },
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:3080',
        changeOrigin: true
      }
    }
  }
}

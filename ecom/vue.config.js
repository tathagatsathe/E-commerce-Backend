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
    'profile': {
      entry: './src/pages/Profile/main.js',
      template: 'public/index.html',
      title: 'Profile',
      chunks: [ 'chunk-vendors', 'chunk-common', 'profile' ]
    }
  }
}

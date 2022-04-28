module.exports = {
  apps : [{
    name   : "server",
    script : "./src/app.js"
  }],
  deploy: {
    production: {
	user: 'ubuntu',
	host: 'ec2-3-234-225-87.compute-1.amazonaws.com',
	key:  '~/.ssh/ecom.pem',
	ref:  'origin/master',
	repo: 'git@github.com:tathagatsathe/server.git',
	path: '/home/ubuntu/server',
	'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}

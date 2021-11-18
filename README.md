# Documentation

`GUI Deploy:` [gui_deploy-env](http://guideploy-env.eba-xmekprmn.us-west-2.elasticbeanstalk.com/)

`CLI Deploy:` [cli_deploy-env](http://cli-node-express.eba-txi3feah.us-west-2.elasticbeanstalk.com/)

## Document your processes

1. create express app

## Using AWS Console (GUI)

  1. Go to Elastic Beanstalk
  1. click on 'create a new environment'
  1. select web server environment
  1. type application name
    1. type environment name
    1. use default domain  
  1. select Node.js platform
    1. keep default/rocommendations
  1. select upload your code
    1. choose a project that is zipped/compressed
  1. select create environment  

## Using aws & eb (CLI)

using aws cli:

`aws configuration`
    "provide access key"
    "provide secret key"

using eb cli:
`eb init` - 'initialize an app only on the CLI'
`eb create` - 'provision an environment on aws ec2'
`eb deploy` - 'run sofware on provisioned environment'

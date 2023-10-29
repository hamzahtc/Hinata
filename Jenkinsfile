pipeline {
  agent any
  
  tools {
    nodejs 'NodeJS18'
  }
  environment {
    HINATA_UI_PATH = 'hinata-ui'
    DOCKERHUB_CREDENTIALS = credentials('dockerhub')
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        sh "cd ${HINATA_UI_PATH} && npm install"
      }
    }

    stage('Build hinata-ui') {
      steps {
        sh "cd ${HINATA_UI_PATH} && npm run build"
      }
    }
    stage('Build hinata-ui docker image') {
      steps {
        sh 'cd ${HINATA_UI_PATH} && docker build -t hinata-ui:latest .'
      }
    }
    stage('Login to docker registry') {
      steps {
        sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
      }
    }
  }
}
pipeline {
  agent any

  environment {
    HINATA_UI_PATH = 'hinata-ui'
  }

  tools {nodejs "NodeJS18"}

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
    
  }
}
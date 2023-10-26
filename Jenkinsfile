pipeline {
<<<<<<< Updated upstream
  agent any
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        sh "nvm install ${NODEJS_VERSION}"
        sh "nvm use ${NODEJS_VERSION}"
        sh "npm config set registry ${NPM_REGISTRY}"
        sh "cd ${PROJECT_DIRECTORY} && npm install"
      }
=======
    agent any

    environment {
        // Define environment variables if needed
        HINATA_UI_PATH = 'hinata-ui'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh "cd ${PROJECT_DIRECTORY} && npm install"
            }
        }

        stage('Build hinata-ui') {
            steps {
                sh "cd ${PROJECT_DIRECTORY} && npm run build"
            }
        }

>>>>>>> Stashed changes
    }

    stage('Build hinata-ui') {
      steps {
        sh "cd ${PROJECT_DIRECTORY} && npm run build"
      }
    }

  }
  environment {
    NODEJS_VERSION = '18'
    NPM_REGISTRY = 'https://registry.npmjs.org'
    HINATA_UI_PATH = 'hinata-ui'
  }
  post {
    success {
      echo 'Build and deployment were successful!'
    }

  }
}
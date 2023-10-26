pipeline {
    agent any

    environment {
        // Define environment variables if needed
        NODEJS_VERSION = '18'
        NPM_REGISTRY = 'https://registry.npmjs.org'
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
                sh "nvm install ${NODEJS_VERSION}"
                sh "nvm use ${NODEJS_VERSION}"
                sh "npm config set registry ${NPM_REGISTRY}"
                sh "cd ${PROJECT_DIRECTORY} && npm install"
            }
        }

        stage('Build hinata-ui') {
            steps {
                sh "cd ${PROJECT_DIRECTORY} && npm run build"
            }
        }

    }

    post {
        success {
            echo "Build and deployment were successful!"
        }
    }
}

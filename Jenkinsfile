pipeline {
    agent any

    environment {
        // Define environment variables if needed
        NODEJS_VERSION = '18'
        NPM_REGISTRY = 'https://registry.npmjs.org'
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
                sh "npm install"
            }
        }

        stage('Build') {
            steps {
                sh "npm run build"
            }
        }

    }

    post {
        success {
            echo "Build and deployment were successful!"
        }
    }
}

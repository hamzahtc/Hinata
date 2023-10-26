pipeline {
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
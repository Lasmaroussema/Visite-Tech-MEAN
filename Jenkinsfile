pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                sh 'docker --version'
                
            }
        }
        
        stage('build') {
            steps {
                sh 'docker build -t visitetech .'
                sh 'docker run -d --name visitetechcont -p 4200:4200  visitetech'
            
            }
        }
        
    }
    post {
        always {
            // Actions to run after every build
            echo 'Cleaning up...'
            // Add cleanup steps here
        }

        success {
            // Actions to run if the build was successful
            echo 'Build was successful!'
        }

        failure {
            // Actions to run if the build failed
            echo 'Build failed!'
        }
    }
}

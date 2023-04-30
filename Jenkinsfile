pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                echo 'Building Application'
            }
        }
        
         stage('Test  & Analysis') {
            steps {
                echo 'Testing Application'
                withSonarQubeEnv('sonarqube') {
                    sh "mvn sonar:sonar"
                
                }
            }
        }
        
         stage('Deploy Application') {
            steps {
                echo 'Hello World'
            }
        }
    }
}

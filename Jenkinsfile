pipeline {
    agent any
    environment {
        PATH = "$PATH: C:\Users\91831\Apache Maven\apache-maven-3.9.1/bin"
    
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building Application'
                sh 'mvn clean package'
            }
        }
        
         stage('Test  & Analysis') {
            steps {
                echo 'Testing Application'
                with SonarQubeEnv('sonarqube') {
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

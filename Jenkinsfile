pipeline {
    agent any
    tools {
        maven 'Maven3'
        jdk 'jdk'
    
    }
    stages {
        
        stage('Build') {
            steps {
                echo 'Building Application'
                sh 'mvn clean install -f html.html'
                
            }
        }
        
         stage('Test  & Analysis') {
            steps {
                echo 'Testing Application'
                withSonarQubeEnv('sonarqube') {
                    sh "mvn sonar:sonar -f html.html"
                
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


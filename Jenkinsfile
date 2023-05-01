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
                sh '''
                    echo "PATH = ${PATH}"
                    echo "M2_HOME = ${M2_HOME}"
                '''
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

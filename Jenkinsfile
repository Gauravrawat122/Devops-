pipeline {
    agent any
    tools {
        maven 'Maven3'
        jdk 'jdk'
    
    }
    
    stage ('Initialize') {
            steps {
                sh '''
                    echo "PATH = ${PATH}"
                    echo "M2_HOME = ${M2_HOME}"
                '''
            }
        }
        stage('Build') {
            steps {
                echo 'Building Application'
                sh 'mvn -Dmaven.test.failure.ignore=true install'
                post {
                    success{
                        junit 'target/surefire-reports/**/*.xml' 
                    
                    }
                
                }
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

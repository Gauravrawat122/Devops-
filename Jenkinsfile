pipeline {
   agent any
   tools {
         maven "Maven3"
         //maven
   }
   
   stages {
      stage( 'Build Artifact') {
         steps {
          sh "mvn clean package -DskipTests=true" 
           archive 'target/*.jar'
          }
      }
      stage('Test Maven JUnit') {
         steps {
           sh "mvn test"
         }
         post{
           always{
              junit (
                    allowEmptyResults:true,
                    testResults:'*test-reports/.xml'
                    )
            }
         }
      }
     stage('Sonarqube Analysis - SAST') {
         steps {
               withSonarQubeEnv('SonarQube') {
          sh "mvn clean verify sonar:sonar \
                   -Dsonar.projectKey=New_devops_project \
                        -Dsonar.projectName='New_devops_project' \
                            -Dsonar.host.url=http://localhost:9000"
               }
           }
        }
       stage('Deploy') {
            steps {
                // Start the Docker Compose stack
                withCredentials([[$class: 'AmazonWebServicesCredentialsBinding',credentialsId: 'pankaj']])
                    sh "docker-compose build"
                    sh "docker-compose up -d"
                }
            }
        }
     }     

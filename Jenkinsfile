pipeline {
   agent any
   tools {
         maven "Maven3"
         //maven
   }
   
   stages {
      stage( 'Building Application') {
         steps {
          sh "mvn clean package -DskipTests=true" 
           archive 'target/*.jar'
          }
      }
      stage('Testing Maven JUnit') {
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
     stage('Sonarqube Analysis and Testing') {
         steps {
               withSonarQubeEnv('SonarQube') {
          sh "mvn clean verify sonar:sonar \
                      -Dsonar.projectKey=yash \
                        -Dsonar.projectName='yash' \
                         -Dsonar.host.url=http://3.108.238.17:9000"
               }
           }
        }
       stage('Deploy') {
            steps {
                
                echo "Deploying application"
                }
            }
        }
     }     

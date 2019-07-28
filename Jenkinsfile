pipeline {
    agent none

    stages {
        stage('Install') {
            agent {
                label 'master'
            }
            steps {
                sh '''
                    cnpm install
                '''
            }
        }
        stage('Build') {
            agent {
                label 'master'
            }
            steps {
                sh '''
                    cnpm run build
                '''
            }
        }
        stage('Deploy Dev') {
            agent {
                label 'master'
            }
            steps {
                sh '''
                    export BUILD_ID=dontKillMe
cp -rf /var/lib/jenkins/workspace/parking-tag-frontend-admin/dist /var/prod/parking-tag-frontend-admin
                '''
            }
        }
        stage('Approve of Deploy Prod') {
          steps {
            input message: 'deploy to Prod?'
          }
        }

        stage('Deploy Prod') {
            agent {
                label 'master'
            }
            steps {
                sh '''
                    echo deploy prod
                '''
            }
        }
    }
}
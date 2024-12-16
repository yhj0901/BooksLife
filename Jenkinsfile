pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', 
                    url: 'https://github.com/yhj0901/BooksLife.git',
                    credentialsId: 'github-token'
            }
        }
         stage('Install Dependencies') {
            steps {
                script {
                    // 특정 디렉토리로 이동하여 yarn 설치
                    dir('bookslife-app') {
                        sh '''
                        echo "Installing dependencies..."
                        yarn install
                        '''
                    }
                }
            }
        }

        stage('Build Application') {
            steps {
                script {
                    // 특정 디렉토리로 이동하여 빌드 실행
                    dir('bookslife-app') {
                        sh '''
                        echo "Building the application..."
                        yarn build
                        '''
                    }
                }
            }
        }
        stage('Test') {
            steps {
                echo "Running tests..."
            }
        }
        stage('Deploy') {
            steps {
                echo "Deploying the application..."
            }
        }
    }
}
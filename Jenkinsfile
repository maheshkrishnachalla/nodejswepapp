node {
    
	stage('Clone repository'){
        /* Let us make sure repositroy cloned from github to workspace*/
        git credentialsId: 'github', url: 'https://github.com/maheshkrishnachalla/nodejswepapp.git'

    }
	def customImage
	 stage('Build Docker Image '){
    
  	withCredentials([string(credentialsId: 'dockerpass', variable: 'dockerpass')]) {
	sh "docker login -u mycodedocker -p ${dockerpass}"
	}
        
        sh "docker build -t mycodedocker/nodejswebapp:${env.BUILD_NUMBER} ."
        }
    
         stage('Docker Image push it docker-hub'){
	withCredentials([string(credentialsId: 'dockerpass', variable: 'dockerpass')]) {
	sh "docker login -u mycodedocker -p ${dockerpass}"
	}

	sh "docker push mycodedocker/nodejswebapp:${env.BUILD_NUMBER}" 
    
         }
	
	stage('Run Container on server'){
	sh 'docker stop mynodeapp'
	sh 'docker rm mynodeapp'
	sh "docker run -p 8082:8080 -d --name mynodeapp mycodedocker/nodejswebapp:${env.BUILD_NUMBER}"
	}
}


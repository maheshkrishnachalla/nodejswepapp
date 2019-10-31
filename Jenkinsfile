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
        
        sh 'docker build -t mycodedocker/nodejswebapp:2.0 .'
        }
    
         stage('Docker Image push it docker-hub'){
	withCredentials([string(credentialsId: 'dockerpass', variable: 'dockerpass')]) {
	sh "docker login -u mycodedocker -p ${dockerpass}"
	}

	sh 'docker push mycodedocker/nodejswebapp:2.0' 
    
         }
}


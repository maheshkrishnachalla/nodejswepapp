node {
    
    stage('Clone repository'){
        /* Let us make sure repositroy cloned from github to workspace*/
        git credentialsId: 'github', url: 'https://github.com/maheshkrishnachalla/nodejswepapp.git'

    //checkout scm
    }
        def customImage

        stage('Build Docker Image '){
    
    docker.withRegistry('https://registry.hub.docker.com', 'dock-hub') {

         customImage= docker.build("mycodedocker/nodejswebapp:${env.BUILD_NUMBER}")

        
    }
        }
    
         stage('Docker Image push it docker-hub'){
    
    docker.withRegistry('https://cloud.docker.com', 'dock-hub') {
        /* Push the container to the custom Registry */
        customImage.push()
    }
         }
}


node {

    checkout scm

    docker.withRegistry('https://registry.hub.docker.com', 'dock-hub') {

        def customImage = docker.build("mycodedocker/nodejswebapp:${env.BUILD_NUMBER}")

        /* Push the container to the custom Registry */
        customImage.push()
    }
}

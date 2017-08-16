
== Running in nginx server mode ==

```bash
$ sudo apt-get update
$ sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
$ sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
$ sudo apt-get update
$ sudo apt-get install docker-ce git make
$ sudo usermod -aG docker $USER
$ exit # You have to log out and back in to apply the group change in the previous step
$ git clone https://git.rwth-aachen.de/PowerSystemSimulation/Pintura
$ cd Pintura/
$ make
$ docker run --rm -p 443:443 pintura
```


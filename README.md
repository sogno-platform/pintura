# Pintura

## Running in nginx server mode

### Install Docker

```bash
$ sudo apt-get update
$ sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
$ sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
$ sudo apt-get update
$ sudo apt-get install -y docker-ce
$ sudo usermod -aG docker $USER
$ exit # You have to log out and back in to apply the group change in the previous step
```

### Build Docker image

```bash
$ make
```

### Start it up

```bash
$ make start
```

## Developer notes

### Cimmenu

#### Cimgen


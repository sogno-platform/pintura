
## Embedding SVG display ##

### Here is a list of files that you will need to include ###

#### Some will only be available after executing `make local` ####

| File                  | Note                               |
| -------------         | -------------                      |
| small.html            | html example                       |
| src/cimxml.js         | Code to read XML                   |
| src/cimsvg.js         | Code to create SVG                 |
| src/cimjson.js        | Code to create our JSON object     |
| src/cimview.js        | Code to create our grid & viewport |
| templates/template.js | Templates for data conversion      |
| handlebars.runtime.js | Library for executing templates    |
| images                | SVG icons, need entire directory   |
| css/svg.css           | CSS for modifying SVG elements     |

## Running in nginx server mode ##

### Install docker ###
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

### Install other deps ###
```bash
$ sudo apt-get install -y git make
$ git clone https://git.rwth-aachen.de/PowerSystemSimulation/Pintura
$ cd Pintura/
$ make
```

### Start it up ###
```bash
$ docker run --rm -p 443:443 pintura
```

### Update it ###
```bash
$ git pull
$ make
```

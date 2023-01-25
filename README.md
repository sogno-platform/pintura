# Pintura

## What does it do?
 
Pintura can make a graphical representation of CIM-formatted power grid models.
Creation, editing and exporting of the CIM files is possible.
Part of Pintura (libcimsvg) can be used as a standalone library to generate an SVG
representation of a CIM power network.

## Will my data get uploaded somewhere?

No. Pintura code only runs locally in the browser and data is all handled locally. You can save to an external
link, but then you will have to arrange access to a server to upload it to and actively cause it to happen.

## How can I use Pintura myself?

There is an online demo available here: https://sogno.energy/pintura

## How can I run it on my own computer?

#### This is easy if you have docker and make installed on your computer

```bash
$ make && make start
```

After the scripts have finished running, they will tell you the url from which you can access Pintura.

## How do I do anything with it?

The user manual is [here.](docs/Manual.md)

## How can I add support for a new component?

This process is fairly simple and is documented [here.](docs/AddingComponent.md)

## I just want to show the picture. How do I use libcimsvg without all the menus and stuff?

This is described in more detail [here.](docs/UsingLibcimsvg.md)

## How does it work?

There is information for developers [here.](docs/Development.md)

## Known problems

* Refreshing the browser loses your work
* There is no undo button
* If you change the unique identifier for a component, it will lose track of it
* It should be possible to specify a subclass as the value for an attribute. It would be possible
to select it, but there is no way to add the component.
* If you haven't added a diagram, you can't start adding components
* There's no way to remove a diagram once it has been added

## Publications

If you are using Pintura for your research, please cite the following paper in your publications:

Dinkelbach, J., Razik, L., Mirz, M., Benigni, A., Monti, A.: Template-based generation of programming language specific code for smart grid modelling compliant with CIM and CGMES.
J. Eng. 2023, 1–13 (2022). [https://doi.org/10.1049/tje2.12208](https://doi.org/10.1049/tje2.12208)




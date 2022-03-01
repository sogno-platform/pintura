## Makefile for URL server stub
#
# @author Richard Marston <rmarston@eonerc.rwth-aachen.de>
# @author Steffen Vogel <stvogel@eonerc.rwth-aachen.de>
# @copyright 2017, Institute for Automation of Complex Power Systems, EONERC
#
# URL Server
#
# SPDX-License-Identifier: MPL-2.0
#
###################################################################################

all: files/file1.xml files/file2.zip
	docker build -t urlserver .

files/file1.xml:
	cp ../../test/grid-data/Components/EnergyConsumer/entsoe.xml files/file1.xml

files/file2.zip:
	zip files/file2.zip ../../test/grid-data/CIM/WSCC-09_Neplan/*.xml

start:
	docker run --rm --name urlserver -p 4040:4040 urlserver

stop:
	docker stop urlserver

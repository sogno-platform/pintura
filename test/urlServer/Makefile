## Makefile for URL server stub
#
# @author Richard Marston <rmarston@eonerc.rwth-aachen.de>
# @author Steffen Vogel <stvogel@eonerc.rwth-aachen.de>
# @copyright 2017, Institute for Automation of Complex Power Systems, EONERC
# @license GNU General Public License (version 3)
#
# URL Server
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program.  If not, see <http://www.gnu.org/licenses/>.
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

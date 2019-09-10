
all:
	docker build -t urlserver .

start:
	docker run --rm --name urlserver -p 4040:4040 urlserver

stop:
	docker stop urlserver

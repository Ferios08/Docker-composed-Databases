# docker-composed Databases
Launch dev databases in instances using docker compose.
For now, I've added: 
* MySQL
* MongoDB
* PostgreSQL

You can change the creds of each database from its associated env file.
you will need docker-compose to run this example, if you have not installed it yet, you can check the official [docs](https://docs.docker.com/compose/install).

## To launch a database:
Simply navigate to the database's directory and run:
```bash
$ docker compose up -d
```

To stop the database, simply run: 
```bash
$ docker compose down
```
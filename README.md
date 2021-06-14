# features

- dockerization
- db is a mongoo
- login system
- todo list


# functions

- GET::/ -> prints welcome thingy

- POST::/login(SOME PARAMS) -> get a token for that
- POST::/add(SOME PARAMS) -> add todo and return id
- PUT ::/update(SOME PARAMS) -> upadate todos and return bool successful or not

# about the docker environment

- to build & run this:
  ```bash
  docker compose up -d # this will automatically run a container called 'todo_nestjs'
  ```

  this als runs ***npm run start:dev*** on backgroud exposed at localhost:3000/

- to stop the container
    ```bash
  docker compose down
  ```

- run command via:
    ```bash
  docker compose exec todo_nestjs nest new service hoge
  ```
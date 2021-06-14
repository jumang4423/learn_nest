# うんこfeatures

- todo list
- dockerization
- mongoo the datebase
- login system


# functions

- ✅GET::/ -> prints welcome thingy
- ✅GET::/all -> get lists of todo
- ✅GET::/:id -> get one document
- POST::/login(SOME PARAMS) -> get a token for that
- ✅POST::/add(SOME PARAMS) -> add todo and return id
- PUT ::/update(SOME PARAMS) -> upadate todos and return bool successful or not
- DELETE ::/delete(SOME PARAMS) -> delete todos by id

# about the docker environment

- to build & run this:
  ```bash
  docker compose up # this will automatically build & run a container called 'todo_nestjs'
  ```

  this als runs ***npm run start:dev*** exposed at localhost:3000/

- to stop the container
    ```bash
  docker compose down
  ```

- run command via:
    ```bash
  docker compose exec todo_nestjs nest new service <some fucking commands right here>
  ```
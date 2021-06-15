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
- ✅PATCH ::/:id(SOME PARAMS) -> upadate todos and return bool successful or not
- ✅DELETE ::/:id -> delete todos by id

# about the docker environment

- to run server:
  ```bash
  docker compose up # this will automatically build & run a container called 'todo_nestjs'
  ```
  this also runs ***yarn run start:dev*** exposed at localhost:3000/

- run command via:
    ```bash
    docker compose up -d
    docker compose exec todo_nestjs bash
    ...(then enter some fucking bashy commands right here)
    ```

- to stop the container
    ```bash
  docker compose down
  ```
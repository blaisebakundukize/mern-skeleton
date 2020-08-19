# MERN Skeleton

MERM Skeleton app is a simple app for demonstrating how to configure MERN stack(Mongodb, Express, React, Node) using webpack. The application allow a user to create a profile, edit, delete, and update it.

## Technologies

`Mongodb, Express, React, Node`

## Process to run this app

> To get started running the app:

1. Clone the repository `https://github.com/blaisebakundukize/mern-skeleton.git`
2. Get terminal to the cloned repo
3. Run this command to install dependencies -> `yarn install` or `npm install`
4. Install [MongoDB](https://www.mongodb.com/)
5. Connect the app with MongoDB or leave it as `localhost:27017`
6. Run `yarn dev` to start the app
7. Open Browser to `localhost:5000` for the client side

## Endpoints:

### Sign up:

- `POST /api/users/`

```
{
    "name": "<Your Name>",
    "email": "<Your Email>",
    "password": "<Password>"
}
```

### Sign in:

- `POST /api/auth/signin`

```
{
    "email": "<Your Email>",
    "password": "<Password>"
}
```

### Get all users:

- `GET /api/users/`

### Get a user:

- `GET /api/users/{id}`

### Update a user:

- `PUT /api/users/{id}`

```
{
    "name": "<Your Name>",
    "email": "<Your Email>",
    "password": "<Password>"
}
```

```
{
    "name": "<Your Name>",
    "email": "<Your Email>"
}
```

```
{
    "name": "<Your Name>"
}
etc...
```

### Delete a user:

- `DEL /api/users/{id}`

## Authors

- [Blaise Bakundukize](https://github.com/blaisebakundukize) - Initial work

## License

This project is licensed under the MIT License

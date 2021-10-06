# **SongsAPI**

&nbsp;

# **General Description**&nbsp;

### This Practice Project is an API providing access to data of songs and singers after you are logged into it with a personal user you have been registered with.

&nbsp;

# **Project Stack**&nbsp;

- ### Express.js
- ### Typescript
- ### JWT
  &nbsp;

# **Data Modules**&nbsp;

- ## **Songs**
  - **id:** string
  - **name:** string
  - **length:** number (seconds)
  - **genre:** string
  - **singerId:** string

&nbsp;

- ## **Singers**
  - **id:** string
  - **name:** string
  - **birthday:** string
  - **country:** string
  - **pictureUrl:** string

&nbsp;

- ## **User**
  - **id:** string
  - **name:** string
  - **email:** string
  - **password:** string

&nbsp;

# **API Options**

## **Singers**

- ### Get All Singers Data

```javascript
GET / singers;
```

- ### Get Specific Singer Data by Id

```javascript
GET  /singers/:id
```

&nbsp;

## **Songs**

- ### Get All Songs Data

```javascript
GET / songs;
```

- ### Get Specific Song Data by Id

```javascript
GET  /songs/:id
```

&nbsp;

## **Users**

- ### Get Specific User Data by Id

```javascript
GET  /users/:id
```

&nbsp;

- ### Register a new user

```javascript
POST / users / register;
```

Request Body Example:

```json
{
  "username": "John",
  "email": "john@example.com",
  "password": "P@33W0R4"
}
```

&nbsp;

- ### Login into a user

```javascript
POST / users / login;
```

Request Body Example:

```json
{
  "email": "john@example.com",
  "password": "P@33W0R4"
}
```

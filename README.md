# EmailSender

## Introduction

This is a simple NodeJs API server application, for sending emails to
yourself, or to other clients. It has been integrated with SendGrid
(https://node-js-auth-api.herokuapp.com), and requires a basic sender email authentication setup, and API
key creation. The server will send emails from the set up sender email
from SendGrid. The server itself is protected with an API key of its
own, and all the creditentials and configuration infomration need to
be filled out inside the `.env` file. The applications API
key needs to be provided inside the headers via basic Api-Key

## Endpotins

### `/contactMe`

This POST endpoint, sends an email to a privately set up email
address. It's function and body is ment to contact a single person,
being from a website, blog, comment section etc. The default receiver,
once set up, needs to be changed inside the configuratinos and
`.env` file, for any kind of receiver manipulation. Since
the endpoints context is to contact someone via an integrated message,
additional fields like an email address and phone number are provided,
and formatted inside the server call. This way the specified contacted
person has a way to cantact any client back.

#### request

```json
{
  "subject": "string",
  "text": "string",
  "email": "string",
  "phone": "string"
}
```

#### response

```json
{
  "response": "string",
  "errors": array[]
}
```

### `/sendEmailTo`

This is a more flexible POST endpoint, that can send emails to a
specific receiver provided inside the endpoints body. The routes "to"
attribute accepts either a single email address, or an array of
emails, for multiple sending actions. Since the endpoint context is
general email sending to receivers, the main message attribute is
merged to the "text" field.

#### request

```json
{
  "subject": "string",
  "text": "string",
  "to": "string" || ["string"]
}
```

#### response

```json
{
  "response": "string",
  "errors": array[]
}
```

## Heroku hosting

One of the options for deploying and hosting a NodeJs API server is Heroku (https://www.heroku.com). Prerequisites are having the heroku cli installed on your machine by running the command `npm install -g heroku`.

To host the server, go to Heroku, create an account and login. Create a new app, and either create a repository directly on Heroku, and push your code there, or to make use of "private" CI/CD: first publish the code on GitHhub, and then connect that GitHub repository to the Heroku app (or other Git services like GitLab or Gitbucket). By choosing the `master` branch, every commit or pull request to master, will automtically update your server. From there a SSL and domain name setup are further down the settings.

Lastly, to run the server on Heroku, a special file must be added to the root directory, with the execution command when hosted. For Heroku the file name should be `Procfile`, and if the server is build on Express the execution command should be `web: npm start`. Use `web: node app.js` or `web: node index.js` if using other or custom methods or scripts to run the server. This command can be viewed and changed from inside Heroku.

An instance of this app, for private purposes, has been hosted on: https://octoemailsender.herokuapp.com/.

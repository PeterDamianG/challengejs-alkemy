For easy development, we use REST Client. An extension for Visual Studio Code.
Go to extension find REST Client and install.

---

In the proyect, on folder src/restclient . You have all request for test the API.

---

First be sure, you run APP in developmet/production mode and go to files. Example go to "login_user.rest":

```
POST http://localhost:3001/api/login
Content-type: application/json

{
    "email": "emailtest15@gmail.com",
    "password": "emailtest155"
}
```

Is a request type POST. To url /api/login
With body, an object JSON.

Press "Send Request", is a text above the word "POST" in file.

A second later, you have a Response.

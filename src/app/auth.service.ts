export class AuthService {

 signUp(name: string, email: string, password: string) {

    console.log("data")
      const post = {
        "name": name,
        "email": email,
        "password": password
      }
      const settings = {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(post)
      }

       fetch('http://localhost:4000/signup', settings).then((data) => {
        console.log(data)
      })
    }
  }

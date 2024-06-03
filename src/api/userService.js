const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjNlZmE0ZGRkZDQ4YWRlMjMxYWMyNjkiLCJ0eXBlIjoiYWNjZXNzIiwiaWF0IjoxNzE3MTM4NjM4LCJleHAiOjE3MTcxOTg2Mzh9.0HYztAD8JPqbokMSqbvIkraGoPE9udl8OfYFBYRRUBg";
export class UserAPI {
  static getUserList() {
    const url = `http://127.0.0.1:3000/api/v1/users`;
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    };
    return fetch(url, options);
  }
}

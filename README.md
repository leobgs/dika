# Guide to clone and use from GitHub

## 1. Clone Repository

Clone this repository to your local computer:

### Using https

```sh
git clone https://github.com/leobgs/dika.git
```

### Using ssh

```sh
git clone git@github.com:leobgs/dika.git
```

## 2. Navigate to the Project Directory

Change to the project directory:

```sh
cd <your-project-directory
```

## 3. Running the Application

### ✅ Running the Backend

Navigate to the backend folder:

```sh
cd back-end
```

Initialize the project & install dependencies:

```sh
npm init -y
npm install express cors
```

Run the backend server:

```sh
node server.js
```

🔹 Server is running at [http://localhost:3000](http://localhost:3000)

### ✅ Running the Frontend

Navigate to the frontend folder:

```sh
cd front-end
```

Run the local server (choose one):

- Open file login.html"
  ```/front-end/login.html

  ```
- Or with Node.js (http-server):
  ```sh
  npx http-server -p 8000
  ```

Open in the browser:

```sh
http://localhost:8000/login.html
```

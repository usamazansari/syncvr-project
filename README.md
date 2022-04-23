# SyncvrProject

![Angular](https://img.shields.io/badge/angular-13.3.0-%23B52E31) ![NestJS](https://img.shields.io/badge/nestjs-8.0.0-%23E0224E) ![Nx](https://img.shields.io/badge/nx-13.10.1-%23002F56) ![PostGRES](https://img.shields.io/badge/postgres-latest-%23326092) ![Prettier](https://img.shields.io/badge/prettier-2.5.1-black) ![Cypress](https://img.shields.io/badge/cypress-9.1.0-%23373737)

This project is created using Nx Monorepo and deployed on [Heroku](https://syncvr-project.herokuapp.com/)

---

## Developers

You need to have the below installed

1. [NodeJS](https://nodejs.org/en/)
2. [Docker Desktop](https://www.docker.com/products/docker-desktop/)

- Install dependencies

```bash
$ npm install
```

- Start a `PostGRES` container

```bash
$ docker run -e POSTGRES_PASSWORD=postgres -e POSTGRES_USER=postgres -e POSTGRES_DB=postgres -d -p 5432:5432 postgres
```

- Open VS Code
  - Go to the Run/Debug View `Ctrl + Shift + D`
  - Start the configuration `Debug API`
  - Start the configuration `Debug Web Frontend`
    - An instance of Microsoft Edge will open up with the application URL

Play Around!

---

## Frontend

![Angular](https://img.shields.io/badge/angular-13.3.0-%23B52E31) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-3.0.2-%2305B7D1) ![PurgeCSS](https://img.shields.io/badge/purgecss-4.1.3-%23272525)

> Web Frontend for Fibonacci Series Generator

| View    | Description                                                                           |
| ------- | ------------------------------------------------------------------------------------- |
| Input   | Enter Input for generation of Fibonacci numbers up to the input specified             |
| Results | Either generated from the Input or fetched from the History                           |
| History | Each input is stored in a time-series which can be used to fetch an individual result |

---

## REST API

![NestJS](https://img.shields.io/badge/nestjs-8.0.0-%23E0224E) ![TypeORM](https://img.shields.io/badge/typeorm-0.2.45-%23EE7831) ![@nestjs/serve-static](https://img.shields.io/badge/%40nestjs%2Fserve--static-2.2.2-%23E0224E)

> REST API Endpoints as per the requirement

```
GET   history/entries   - Get all the entries from the History table
POST  history/create    - Create a new entry in History table
GET   result/entry/:id  - Get result at path variable {id} from Result table
POST  result/create     - Create a new entry in Result Table
```

These endpoints are accessible at [https://syncvr-project.herokuapp.com/api](https://syncvr-project.herokuapp.com/api)

> The NestJS application uses `@nestjs/serve-static` to statically host the Angular SPA on the deployed URL

---

## Database

![PostGRES](https://img.shields.io/badge/postgres-latest-%23326092)

> Added as a Heroku add-on

Tables in the Database

1. History Table
```
  Column   |            Type             | Collation | Nullable |      Default       
-----------+-----------------------------+-----------+----------+--------------------
 id        | uuid                        |           | not null | uuid_generate_v4() 
 timestamp | timestamp without time zone |           | not null |
 payload   | integer                     |           | not null |
 resultId  | character varying           |           |          |
Indexes:
    "PK_9384942edf4804b38ca0ee51416" PRIMARY KEY, btree (id)
Foreign-key constraints:
    "FK_172146a2d572b22b21f32ecef77" FOREIGN KEY ("resultId") REFERENCES result(id)
```

2. Result Table
```
 Column |       Type        | Collation | Nullable | Default
--------+-------------------+-----------+----------+---------
 id     | character varying |           | not null |
 series | character varying |           | not null |
 last   | double precision  |           |          |
Indexes:
    "PK_c93b145f3c2e95f6d9e21d188e2" PRIMARY KEY, btree (id)
Referenced by:
    TABLE "history" CONSTRAINT "FK_172146a2d572b22b21f32ecef77" FOREIGN KEY ("resultId") REFERENCES result(id)
```

---

## E2E Testing
![Cypress](https://img.shields.io/badge/cypress-9.1.0-%23373737)

Run the below command in the terminal to start an end-to-end testing of the application using Cypress

```bash
$ nx run web-frontend-e2e:e2e --browser=edge --no-exit --headed
```

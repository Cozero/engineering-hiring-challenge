<p align="left">
  <a href="https://cozero.io/" target="blank"><img src="./COZERO_LOGO.svg" width="340" alt="Nest Logo" /></a>
</p>
<br />

# Cozero Senior Software Engineer Technical Challenge

Hey hey!
If you are seeing this is because you just got further in our recruitment process. 💪
We hope you enjoy this little exercise!

## Challenge Definition

The technical challenge is composed of two tasks:
1. Implement the *Dashboard for Metrics Data* issue (see *Issues* tab)
2. Review the *Emissions Table* PR (see *Pull requests* tab)

Good luck! 🍀

When you're done, please drop us an email at jan.kratochvil@cozero.io.


### Timing

Schedule the time to complete the project on your terms.
Before you start, please drop us a quick email at jan.kratochvil@cozero.io telling us when you expect to complete the project.
This information helps us schedule time for a timely review and follow-up.

Please don't spend more than **eight hours** on the project.

**Things to keep in mind:**

- Feel free to add dependencies that you find necessary.
- We are looking for someone who pays attention to scalability and quality.
- Take your time to think; don't rush it.
- Add any additional improvements to the codebase you'd like. Remember to explain them in PRs.

## Codebase Information

### Getting Started

1. Ensure you have Docker installed and run the following command in the root directory to start the database.

```bash
docker-compose up -d
```

After this, you will get a Postgres instance running in your machine with a `metrics` table containing several rows. _Metrics_ is the main table relevant to the exercise.

2. Next, install dependencies and build the libs you need to run the solution.

```bash
yarn bootstrap
```

3. Lastly, run the backend and frontend using the following commands in two separate terminals.

```bash
cd packages/server; yarn run start:dev
cd packages/client; yarn run start:dev
```

### Architecture

The solution consists of three libraries:
- `@cozero/lib` - A shared library used both by the client and server libraries.
- `@cozero/server` - The API that connects to the Postgres database via [Prisma](prisma.io/).
- `@cozero/client` - The frontend React application that talks to the API.


<p align="left">
  <a href="https://nestjs.com/" target="blank"><img src="./COZERO_LOGO.svg" width="340" alt="Nest Logo" /></a>
</p>

# Challenge

Hey hey! If you are seeing this is because you just got further in our recruitment process!
We hope you enjoy this little exercise!

**Mindset:**

- We are open to any suggestions that you might have for this code (don't forget to explain them in your PRs)
- Feel free to install new dependencies that you find necessary
- We are looking for someone who pays special attention to performance and detail
- This is supposed to be fun and not a major blocker to anyone!
- Take your time to think don't rush it
- If you need more time let us know

## How to get started

1. You will need to start up the database.
To do please run the following command in the root directory:
```bash
  docker-compose up
```
After this, you will get a Postgres instance running in your machine with a `metrics` table with several rows (this will be the exercise main table)

2. To install the dependencies and build libs you need to run the following code (root directory):

```bash
yarn bootstrap
```

3. Run API

```bash
  cd packages/server; yarn run start:dev
```

4. Run frontend app

```bash
  cd packages/client; yarn run start:dev
```

## Exercise
Checkout to a feature branch from the PR branch
1. **Step**
- Take a look at the code (keep in mind that we might not be following standard code patterns) and check if you have any suggestion
- Check the opened PR and comment on the code as you would do in a normal situation

2. **Step**
We are looking to develop a dashboard containing reports about our emissions data (`metrics` table) and using a global filter.

      **Tasks**:
      - Create a global filter (fields: companyName and reportedAt)
      - Make the changes that you find needed to the existing table to be part of the dashboard
      - Create the following reports with blazing-fast results:
        - Emissions the month grouped by company name (suggestion: group bar or stacked bar chart)
        - Emissions the year grouped by company name (suggestion: group bar or stacked bar chart)
        - Pie chart with the relative emissions of which company to the platform total emissions (example: Company1-60% Company2-20% Company3-20%)

**Nice to have**
- Error handling strategy
- Frontend enhancement
- Frontend state management
- Improvement suggestions
- Unit and integration tests
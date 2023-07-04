<p align="left">
  <a href="https://cozero.io/" target="blank"><img src="./COZERO_LOGO.svg" width="340" alt="Nest Logo" /></a>
</p>
<br />

# Cozero Senior Software Engineer Technical Challenge

Hey hey!
If you are seeing this is because you just got further in our recruitment process. 💪
We hope you enjoy this little exercise!

## Timing

Schedule the time to complete the project on your terms.
Before you start, please drop us a quick email at jan.kratochvil@cozero.io telling us when you expect to complete the project.
This information helps us schedule time for a timely review and follow-up.

Please don't spend more than **eight hours** on the project.

**Things to keep in mind:**

- Feel free to add dependencies that you find necessary.
- We are looking for someone who pays attention to scalability and quality.
- Take your time to think; don't rush it.
- Add any additional improvements to the codebase you'd like. Remember to explain them in PRs.

## Getting Started

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

## Exercise

Checkout to a feature branch from the PR branch

1. **Step**

- Take a look at the code (keep in mind that we might not be following standard code patterns) and check if you have any suggestion
- Check the opened PR and comment on the code as you would do in a normal situation

2.  **Step**
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

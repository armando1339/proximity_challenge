# Proximity Lerning Challenge

Implementation of login single page application using Turbo and Stimulus.

## Software Specifications

- Ruby 3.1.0
- Rails 7.0.2
- SQLite

## Run the project

Clone the repository and rvm set the correct Ruby and RoR versions. Then execute:

```bash
$ bundle install
```

Ones dependencies installed, migrate the database:

```bash
$ rails db:create && rails db:migrate && rails db:seed
```

Then:

```bash
$ rails s
```

The command `rails db:seed` created a user to test the application:

```
email: user@example.com
password: password
```

## Enjoy!
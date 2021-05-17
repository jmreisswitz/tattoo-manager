CREATE TABLE finance_release(
    id serial primary key,
    release_date date,
    value float,
    type text,
    "group" text
);
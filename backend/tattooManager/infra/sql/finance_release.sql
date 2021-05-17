CREATE TABLE finance_release(
    id serial primary key,
    user_id integer,
    release_date date,
    value float,
    type text,
    description text,
    release_group text
);
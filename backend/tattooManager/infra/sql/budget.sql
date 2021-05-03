
CREATE TABLE budget(
    id serial primary key,
    user_id integer,
    client_name text,
    age integer,
    description text,
    body_part text,
    size_in_cm float,
    phone text,
    user_alias text,
    is_new boolean,
    creation_date timestamp
)

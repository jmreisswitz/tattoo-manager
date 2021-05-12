
CREATE TABLE contact_information(
    id serial primary key,
    complete_name text,
    cpf text,
    rg text,
    birth_date text,
    cep text,
    phone text,
    user_alias text,
    email text
);

CREATE TABLE clinical_information(
    id serial primary key,
    cardiac_problem bool,    -- Problema cardíaco ou epilepsia
    easy_blooding bool,      -- Hemofilia, hemorragia, ou sangra facilmente
    immunologic_system bool, -- Alteração do sistema imunológico
    diabetes bool,           -- Diabetes
    dst bool,                -- Hepatite ou DST
    pregnant bool,           -- Grávida ou amamentando
    high_pressure bool,      -- Pressão alta
    faint_frequently bool,   -- Desmaios e quedas de pressão frequentes
    allergy bool             -- Alergia a algum material?
);

CREATE TABLE anamnese(
    id serial primary key,
    user_id integer,
    creation_date text,
    contact_information_id integer references contact_information(id),
    clinical_information_id integer references clinical_information(id)
)
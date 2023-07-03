CREATE TABLE IF NOT EXISTS metrics AS
SELECT
  reported_at,
  (array ['Company1', 'Company2', 'Company3'])[floor(random() * 3 + 1)] AS organization_name,
  random() * 0.0001 as emissions
FROM
  generate_series(
    '2000-01-01 00:00:00',
    '2023-01-01 11:00:00',
    INTERVAL '1 minute'
  ) as reported_at;

ALTER TABLE metrics ADD COLUMN IF NOT EXISTS id SERIAL PRIMARY KEY;


-- Table: public._prisma_migrations

-- DROP TABLE IF EXISTS public._prisma_migrations;

CREATE TABLE IF NOT EXISTS public._prisma_migrations
(
    id character varying(36) COLLATE pg_catalog."default" NOT NULL,
    checksum character varying(64) COLLATE pg_catalog."default" NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    logs text COLLATE pg_catalog."default",
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone NOT NULL DEFAULT now(),
    applied_steps_count integer NOT NULL DEFAULT 0,
    CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public._prisma_migrations
    OWNER to postgres;

INSERT INTO "public"."_prisma_migrations" ("id", "checksum", "finished_at", "migration_name", "logs", "rolled_back_at", "started_at", "applied_steps_count") VALUES
('097a8406-163e-451a-b034-313e150ed4b8', '16c629c0be944f95f6cc20b469991be198ea22e902b373767c545da86f220393', '2023-07-03 12:38:59.927505+00', '0_init', '', NULL, '2023-07-03 12:38:59.927505+00', 0) ON CONFLICT DO NOTHING;
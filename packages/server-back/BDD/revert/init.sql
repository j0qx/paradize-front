-- Revert oparadise:init from pg

BEGIN;


DROP TABLE IF EXISTS user,offer,coordinate,search,setting,favorite;
COMMIT;

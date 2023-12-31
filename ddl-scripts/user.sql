DO $$ BEGIN

CREATE TABLE IF NOT EXISTS public."user" (
	id TEXT DEFAULT uuid_generate_v1()
);

EXECUTE public.checkPrimaryKey('user', 'user_pk');
EXECUTE ensureTextFieldinTable('user', 'firstName');
EXECUTE ensureTextFieldinTable('user', 'lastName');
EXECUTE ensureTextFieldinTable('user', 'email');

CREATE UNIQUE INDEX IF NOT EXISTS user_lower_case_email_idx ON public."user" (lower(email));

EXECUTE ensureTextFieldinTable('user', 'password');
EXECUTE ensureTextFieldinTable('user', 'phone');
EXECUTE ensureTextFieldinTable('user', 'gender');
EXECUTE ensureBooleanFieldinTable('user', 'isAdmin');

END $$

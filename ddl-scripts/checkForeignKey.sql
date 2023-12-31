CREATE OR REPLACE FUNCTION checkForeignKey(
    tableName text,
    constraintName text,
    columnName text,
    refTableName text,
    refColumnName text
)
RETURNS VOID AS $$
DECLARE
    var INTEGER;
BEGIN
    -- Check if the foreign key exists
    SELECT COUNT(conname) INTO var
    FROM pg_constraint
    WHERE conrelid = (SELECT oid FROM pg_class WHERE relname = tableName)
    AND conname = constraintName;

    -- If the foreign key does not exist, create it
    IF var = 0 THEN
        EXECUTE format('ALTER TABLE public."%s" ADD CONSTRAINT "%s" FOREIGN KEY ("%s") REFERENCES public."%s"("%s") ON DELETE CASCADE ON UPDATE CASCADE;', 
            tableName, constraintName, columnName, refTableName, refColumnName);
    END IF;
END $$ LANGUAGE plpgsql;
CREATE OR REPLACE FUNCTION ensureNumericFieldinTable(tableName TEXT, fieldName TEXT) RETURNS void AS $$
	BEGIN
		EXECUTE 'ALTER TABLE public."' || tableName || '" ADD COLUMN IF NOT EXISTS "' || fieldName || '" NUMERIC(24,10)';
		IF NOT EXISTS (
			SELECT data_type
			FROM information_schema.columns
			WHERE table_name = tableName
			AND column_name = fieldName AND data_type = 'numeric(24,10)'
		) THEN
			EXECUTE 'ALTER TABLE public."' || tableName || '" ALTER COLUMN "' || fieldName || '" TYPE NUMERIC(24,10) USING "' || fieldName || '"::NUMERIC(24,10);';
		END IF;
	END;
$$ LANGUAGE plpgsql;

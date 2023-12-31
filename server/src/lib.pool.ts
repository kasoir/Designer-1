import { Pool } from 'pg';
import { settings } from '../../settings/settings';

export const db = new Pool( {
	...settings.postgres,
	application_name: 'Designer',
} );

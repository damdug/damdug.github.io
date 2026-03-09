import { d as defineMiddleware, s as sequence } from './chunks/index_BMBZwZG1.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_C_Ez8g0J.mjs';
import 'piccolore';
import './chunks/astro/server_D2NiA7f1.mjs';
import 'clsx';

const onRequest$1 = defineMiddleware(async (_context, next) => {
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };

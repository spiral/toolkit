import * as handlebars from 'handlebars';

export const RUNTIME_VAR = 'SFTemplates';
export const RUNTIME_TEMPLATE_PREFIX = '#';
export const RUNTIME_TEMPLATE_PREFIX_ESCAPED = `\\${RUNTIME_TEMPLATE_PREFIX}`;

const fallback = () => '';

export const templates: {[id: string]: (item: any)=>string} = ((window as any)[RUNTIME_VAR]) || {};
/**
 * Returns either handlebars template or reference of runtime-specified function
 * @param templateStr string to complite to template
 * @param noFail if true, errouneous template will just produce empty string
 */
export const compile = (templateStr: string, noFail: boolean = true) => {
  if (typeof templateStr !== 'string') {
    return templateStr;
  }
  let str = templateStr;
  let useHandlebars = false;
  if (templateStr.startsWith(RUNTIME_TEMPLATE_PREFIX_ESCAPED)) {
    str = str.substring(1);
    useHandlebars = true;
  } else if (templateStr.startsWith(RUNTIME_TEMPLATE_PREFIX)) {
    str = str.substring(1);
    useHandlebars = false;
  } else {
    useHandlebars = true;
  }
  if (useHandlebars) {
    try {
      const compiled = handlebars.compile(str);
      return (item: any) => {
        try {
          return compiled(item);
        } catch (e) {
          if (noFail) {
            console.warn('Handlebars template error', templateStr, e);
            return fallback();
          }
          throw e;
        }
      };
    } catch (e) {
      if (noFail) {
        console.warn('Handlebars template compilation error', templateStr, e);
        return fallback;
      }
      throw e;
    }
  } else {
    return (item: any) => {
      if (templates[str] || noFail) {
        const fn = templates[str] || fallback;
        if (!templates[str]) {
          console.warn(`Template function [${item}] is not registered, returning empty string`);
        }
        try {
          return fn(item);
        } catch (e) {
          if (noFail) {
            console.warn(`Template function [${item}] produced error`, e);
            return fallback();
          }
          throw e;
        }
      } else {
        throw new Error(`Template function [${item}] is not registered`);
      }
    };
  }
};

export const register = (name: string, fn: (item: any) => string) => {
  if (templates[name]) {
    throw new Error(`Template function [${name}] is already registered, use unique/generated names`);
  }
  templates[name] = fn;
};

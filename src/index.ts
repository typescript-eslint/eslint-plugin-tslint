import configRule from './rules/config';

// note - cannot migrate this to an import statement because it will make TSC copy the package.json to the dist folder
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { name, version } = require('../package.json') as {
  name: string;
  version: string;
};

export const meta = {
  name,
  version,
};

/**
 * Expose a single rule called "config", which will be accessed in the user's eslint config files
 * via "tslint/config"
 */
export const rules = {
  config: configRule,
};

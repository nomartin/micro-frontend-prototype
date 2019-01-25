const validateOptions = require('schema-utils');
const loaderUtils = require('loader-utils');

module.exports = function(content) {
  const options = loaderUtils.getOptions(this) || {};
  const schema = {
    //'$schema': 'http://json-schema.org/draft-04/schema#',
    'type': 'object',
    'properties': {
      'names': {
        'type': 'object',
        'properties': {
          'component': {
            'type': 'string'
          },
          'root': {
            'type': 'string'
          }
        },
        'required': [
          'component',
          'root'
        ]
      }
    },
    'required': [
      'names'
    ]
  };

  validateOptions(schema, options, 'HOC Expose Loader');

  console.log(`[${options.names.component}] HCO exposed as [${options.names.root}]`);

  const exposeCode = `window.${options.names.root} = ${options.names.component};`;
  return content + exposeCode; 
}

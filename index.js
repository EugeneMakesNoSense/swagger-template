import SwaggerUI from 'swagger-ui'
import 'swagger-ui/dist/swagger-ui.css';

const spec = require('./openApi/v1/spec.yaml');

const ui = SwaggerUI({
  spec,
  dom_id: '#swagger',
});
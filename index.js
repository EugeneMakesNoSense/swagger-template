import SwaggerUI from 'swagger-ui'
import 'swagger-ui/dist/swagger-ui.css';

const spec = require('./openApi/spec-v1.yaml');

const ui = SwaggerUI({
  spec,
  dom_id: '#swagger',
});
import { Form } from './Form';

Form.registerInSf();

// Includes version and time in bundle
export const version = `Version ${process.env.VERSION}, built at ${process.env.BUILD_TIME}`

export default Form;

import { DatePicker } from './DatePicker';

DatePicker.registerInSf();

export default {
  DatePicker,
};

// Includes version and time in bundle
export const version = `Version ${process.env.VERSION}, built at ${process.env.BUILD_TIME}`

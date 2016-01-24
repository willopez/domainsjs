import { jsdom } from 'jsdom';

// This setup is necessary due to the fact that without it, calling
// setState will cause an error.
global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = global.window.navigator;

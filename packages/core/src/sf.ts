import * as luxon from 'luxon';
import * as queryString from 'query-string';
import * as axios from 'axios';
import * as assert from 'assert';
import * as handlebars from 'handlebars';

import DOMEvents from './helpers/DOMEvents';

import domTools from './helpers/domTools';

import Ajax from './core/Ajax';

import BaseDOMConstructor from './core/BaseDOMConstructor';

import DomMutations from './core/DomMutations';

import { Events } from './core/Events';

import InstancesController from './core/InstancesController';

import {
  extractOptions, isNodeInsideCustomSFInput, makeUrl, resolveKeyPath,
} from './helpers/tools';
import type { ISFCore, ISFHelpers, ISFTools } from './types';

export const core: ISFCore = {
  Ajax,
  BaseDOMConstructor,
  DomMutations,
  Events,
  InstancesController,
};

export const helpers: ISFHelpers = {
  DOMEvents,
  domTools,
  luxon,
  assert,
  handlebars,
  queryString,
  axios,
};

export const tools: ISFTools = {
  resolveKeyPath, isNodeInsideCustomSFInput, extractOptions, makeUrl,
};

export const registerTool = (toolName: string, object: any) => {
  if (tools[`_${toolName}`]) {
    throw new Error(`Private tool named ${toolName} already registered`);
  }
  tools[`_${toolName}`] = object;
};

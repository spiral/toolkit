import * as luxon from 'luxon';

import DOMEvents from './helpers/DOMEvents';

import domTools from './helpers/domTools';

import Ajax from './core/Ajax';

import BaseDOMConstructor from './core/BaseDOMConstructor';

import DomMutations from './core/DomMutations';

import { Events } from './core/Events';

import InstancesController from './core/InstancesController';

import { extractOptions, isNodeInsideCustomSFInput, resolveKeyPath } from './helpers/tools';
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
};

export const tools: ISFTools = { resolveKeyPath, isNodeInsideCustomSFInput, extractOptions };

export const registerTool = (toolName: string, object: any) => {
  if (tools[`_${toolName}`]) {
    throw new Error(`Private tool named ${toolName} already registered`);
  }
  tools[`_${toolName}`] = object;
};

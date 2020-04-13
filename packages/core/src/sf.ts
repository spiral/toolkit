import DOMEvents from './helpers/DOMEvents';

import domTools from './helpers/domTools';

import Ajax from './core/Ajax';

import BaseDOMConstructor from './core/BaseDOMConstructor';

import DomMutations from './core/DomMutations';

import { Events } from './core/Events';

import InstancesController from './core/InstancesController';

import { resolveKeyPath } from './helpers/tools';
import type { ISFCore, ISFHelpers } from './types';

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
};

export const tools = { resolveKeyPath };

'use strict';

import {
  INIT_BAR_VALS_OPTIONS as INIT_BAR_VALS_OPTIONS,
  context as ctx
} from "./globals.js";
import {exposeObject as expose} from "./core.js"

/*
 * Bars.js
 * Controls the main color display on the base site, and provides an interface
 * to interact with them.
 *
 * ctx contains the base values:
 * x: (str) -> The hexadecimal color base.
 * p: (int) -> The integer pivot indicating red, green or blue. [0|1|2]
 * s: (float) -> The floating point 'strength' with which to generate colors.
 * c: (0 < int < 10) -> The integer indicating how many bars to display.
 *
 * bars object exposes the following:
 * set(str, val) -> sets base, pivot, strength or count. Reloads bars.
 * get(str) -> Displays all inner vars, or just the specified one.
 * reload() -> Reloads bars.
 * pprint() -> Pretty prints bars.
 * help() -> Displays help.
 */

const HELP_OPTIONS = [
    {
      'Command': 'help()',
      'Description': 'Displays this message.',
      'Args': 'None.'
    }
]

function help() { console.table(HELP_OPTIONS); }

let EXPOSE = {
  id: 'bars',
  vals: {
    help: help
  }
}

function _init() { expose(EXPOSE); }

export { _init }

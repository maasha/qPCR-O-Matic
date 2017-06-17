/* eslint-disable no-unused-vars */

'use strict';

import { mocha } from 'mocha';
// import { expect, should } from 'chai';
import { sinon } from 'sinon';

global.chai = require('chai');
global.sinonChai = require('sinon-chai');
// import { sinonChar } from 'sinon-chai';

global.chai.use(global.sinonChai);

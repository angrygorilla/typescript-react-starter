#!/usr/bin/env node

/*****************************************************************
 * Create new typescript-react-starter project.
 * created by Lim Kyungmin, 02/02/2020
 *****************************************************************/

const path = require('path');
const starter = require('../lib/starter');
const destination = getDest(process.argv[2]);

function getDest(destFolder) {
  destFolder = destFolder || 'typescript-react-starter';
  return path.join(process.cwd(), destFolder);
};

starter(destination);

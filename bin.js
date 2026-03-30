#!/usr/bin/env bun

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import put from './cmd/put.js';

yargs(hideBin(process.argv))
    .command('put <filepath>', 'Upload File', (yargs) => {
        return yargs.positional('filepath', {
            describe: 'Path of the file to put',
            type: 'string'
        });
    }, async (argv) => {
        await put(argv.filepath);
    })
    .version()
    .alias('v', 'version')
    .help()
    .alias('h', 'help')
    .demandCommand(1, '')
    .parse();

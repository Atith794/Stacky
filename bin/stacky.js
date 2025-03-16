#!/usr/bin/env node
const { program } = require('commander');
const { initProject } = require('./commands/init');
const { createFrontend } = require('./commands/frontend');
const { createBackend } = require('./commands/backend');
const { createFullStack } = require('./commands/fullstack');
const { listTemplates } = require('./commands/templates');

program.version('1.0.0');

// Main command: Interactive Setup
program
  .command('init')
  .description('Initialize a new Stacky project')
  .action(initProject);

// Create Frontend App
program
  .command('frontend')
  .option('--vite', 'Use Vite for the React setup')
  .option('--redux', 'Include Redux for state management')
  .description('Create a React frontend application')
  .action(createFrontend);

// Create Backend App
program
  .command('backend')
  .description('Create an Express backend application')
  .action(createBackend);

// Create Fullstack MERN App
program
  .command('fullstack')
  .option('--install', 'Auto install dependencies')
  .description('Create a full MERN stack application')
  .action(createFullStack);

// List available templates (Premium feature)
program
  .command('templates')
  .option('--premium', 'Access premium templates')
  .description('List available project templates')
  .action(listTemplates);

program.parse(process.argv);
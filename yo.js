#!/usr/local/bin/node
var path = require('path')

var yeoman = require('yeoman-environment');
var env = yeoman.createEnv();

env.register(path.join(__dirname, '../react-framework-yeoman/generators/app'), 'framework');

env.run('framework', function () { console.log(arguments) });
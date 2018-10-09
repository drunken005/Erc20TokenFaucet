'use strict';

// had enabled by egg
// exports.static = true;

exports.nunjucks = {
    enable: true,
    package: 'egg-view-nunjucks',
};
exports.validate = {
    enable: true,
    package: 'egg-validate',
};

exports.security = {
    enable: false,
};

exports.cors = {
    enable: true,
    package: 'egg-cors',
    allowMethods: 'GET,POST,PUT,DELETE'
};
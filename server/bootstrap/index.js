'use strict';

const permissions = require('../../permissions');

const assertUserPermissionsAvailability = ({ strapi }) => {
  if (!strapi.plugin("users-permissions")) {
    throw new Error(
      "In order to make the menus plugin work the users-permissions plugin is required"
    );
  }
};

const setupPermissions = async ({ strapi }) => {
  // Add permissions
  const actions = [
    {
      section: "plugins",
      displayName: "Read & Update",
      uid: permissions.menus.read,
      pluginName: "menus",
    },
  ];
  await strapi.admin.services.permission.actionProvider.registerMany(actions);
};

module.exports = async ({ strapi }) => {
  assertUserPermissionsAvailability({ strapi });

  await setupPermissions({ strapi });
};

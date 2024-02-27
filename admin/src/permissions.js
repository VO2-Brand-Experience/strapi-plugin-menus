import permissions from '../../permissions';

const pluginPermissions = {
  access: [{ action: permissions.render(permissions.menus.read), subject: null }],
};

export default pluginPermissions;

module.exports = {
  render: function (uid) {
    return `plugin::menus.${uid}`;
  },
  menus: {
    read: 'read',
  },
};

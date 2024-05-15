module.exports = {
  packagerConfig: {
    icon: "src/favicon.ico",
    asar: true,
    ignore: [
      "^/[.].+",
      "^/electron/tsconfig.json",
      "^/electron/src",
      "^/out",
      "^/src",
      "^/angular.json",
      "^/package-lock.json",
      "^/tsconfig.app.json",
      "^/tsconfig.json",
      "^/tsconfig.spec.json",
      "^/README.md",
    ],
  },
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        authors: 'Uladzislau',
        name: "mailing-client",
        title: "Mailing",
        setupIcon: "src/favicon.ico",
      },
    },
    {
      name: '@electron-forge/maker-dmg',
      config: {
        format: 'ULFO'
      }
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin', 'win32'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {
        bin: 'build-name',
        maintainer: 'Uladzislau',
      },
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  plugins: [
    {
      name: "@electron-forge/plugin-auto-unpack-natives",
      config: {},
    },
  ],
};

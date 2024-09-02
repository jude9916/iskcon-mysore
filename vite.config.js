const path = require('path');
const { defineConfig } = require('vite');

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        about: path.resolve(__dirname, 'about.html'),
        services: path.resolve(__dirname, 'services.html'),
        temple: path.resolve(__dirname, 'temple.html'),
        contact: path.resolve(__dirname, 'contact.html'),
        donation: path.resolve(__dirname, 'donation.html'),
        who_started_iskcon: path.resolve(__dirname, 'who-started-iskcon.html'),
      },
    },
  },
});

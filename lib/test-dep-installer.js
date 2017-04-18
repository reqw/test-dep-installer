'use babel';

import TestDepInstallerView from './test-dep-installer-view';
import { CompositeDisposable } from 'atom';

export default {
  activate(state) {
    require('atom-package-deps').install('test-dep-installer');
  },

  deactivate() {
  }
  
};

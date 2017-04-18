'use babel';

import TestDepInstallerView from './test-dep-installer-view';
import { CompositeDisposable } from 'atom';

export default {

  testDepInstallerView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.testDepInstallerView = new TestDepInstallerView(state.testDepInstallerViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.testDepInstallerView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'test-dep-installer:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.testDepInstallerView.destroy();
  },

  serialize() {
    return {
      testDepInstallerViewState: this.testDepInstallerView.serialize()
    };
  },

  toggle() {
    console.log('TestDepInstaller was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};

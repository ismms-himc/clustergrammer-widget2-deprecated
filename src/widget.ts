// Copyright (c) Nicolas Fernandez.
// Distributed under the terms of the Modified BSD License.

import {
  DOMWidgetModel, DOMWidgetView, ISerializers
} from '@jupyter-widgets/base';

import {
  EXTENSION_SPEC_VERSION
} from './version';

import cgm from 'clustergrammer-gl';


console.log('working on passing data to value')
console.log(cgm);

export
class ExampleModel extends DOMWidgetModel {
  defaults() {
    return {...super.defaults(),
      _model_name: ExampleModel.model_name,
      _model_module: ExampleModel.model_module,
      _model_module_version: ExampleModel.model_module_version,
      _view_name: ExampleModel.view_name,
      _view_module: ExampleModel.view_module,
      _view_module_version: ExampleModel.view_module_version,
      value : 'default-string',
      network: ''
    };
  }

  static serializers: ISerializers = {
      ...DOMWidgetModel.serializers,
      // Add any extra serializers here
    }

  static model_name = 'ExampleModel';
  static model_module = 'clustergrammer_widget2';
  static model_module_version = EXTENSION_SPEC_VERSION;
  static view_name = 'ExampleView';  // Set to null if no view
  static view_module = 'clustergrammer_widget2';   // Set to null if no view
  static view_module_version = EXTENSION_SPEC_VERSION;
}


export
class ExampleView extends DOMWidgetView {
  render() {
    this.value_changed();
    this.model.on('change:value', this.value_changed, this);
    console.log('something', this.model.get('value'));
  }

  value_changed() {
    this.el.textContent = this.model.get('value')  + 'Something!!';
  }
}

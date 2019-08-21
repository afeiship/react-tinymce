import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import tinymce from 'tinymce/tinymce';
import 'tinymce/plugins/link';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/anchor';
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/textcolor';
import 'tinymce/plugins/charmap';
import 'tinymce/plugins/contextmenu';

// theme && lang:
import 'tinymce/themes/silver/theme';
import 'tinymce-i18n/languages/zh_CN';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
  };

  static defaultProps = {
    onChange: noop
  };
  /*===properties end===*/

  componentDidMount() {
    const { value } = this.props;
    tinymce
      .init({
        selector: '.react-tinymce',
        language: 'zh_CN',
        skin: false,
        menubar: false,
        plugins: ['advlist lists link charmap anchor'],
        toolbar: 'bold italic forecolor backcolor link',
        setup: this._onSetup
      })
      .then(() => {
        this.editor = tinymce.activeEditor;
        tinymce.activeEditor.setContent(value);
      });
  }

  componentWillReceiveProps(inNextProps) {
    const { value } = inNextProps;
    if (value != null && value !== this.props.value) {
      tinymce.activeEditor.setContent(value);
    }
  }

  componentWillUnmount() {
    if (this.editor) {
      tinymce.get(this.editor.id).remove();
    }
  }

  _onSetup = (inInst) => {
    const { onChange } = this.props;
    inInst.on('change', function(e) {
      const value = tinymce.activeEditor.getContent();
      onChange({ target: { value } });
    });
  };

  render() {
    const { className, id, ...props } = this.props;
    return (
      <textarea className={classNames('react-tinymce', className)} {...props} />
    );
  }
}

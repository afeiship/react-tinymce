import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import tinymce from 'tinymce/tinymce';
import 'tinymce/themes/silver/theme';
import 'tinymce/plugins/colorpicker';
import 'tinymce/plugins/link';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/anchor';
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/table';
import 'tinymce/plugins/textcolor';
import 'tinymce/plugins/paste';
import 'tinymce/plugins/help';
import 'tinymce/plugins/charmap';
import 'tinymce/plugins/contextmenu';
import objectAssign from 'object-assign';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
  };

  static defaultProps = {
    value: '',
    onChange: noop
  };
  /*===properties end===*/

  constructor(inProps) {
    super(inProps);
    this.state = {};
  }
  componentDidMount() {
    tinymce.init({
      selector: 'textarea',
      skin: false,
      menubar: false,
      plugins: [
        'advlist lists link charmap anchor textcolor',
        'table contextmenu paste help'
      ],
      toolbar: 'bold italic forecolor backcolor link'
    });
  }

  render() {
    const { className, ...props } = this.props;
    return (
      <textarea className={classNames('react-tinymce', className)} {...props} />
    );
  }
}

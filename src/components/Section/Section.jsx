import React, { Component } from 'react';
import SectionCss from '../Section/SectionCss.module.css'
class Section extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <div className="section">
        <h2 className={SectionCss.title}>{title}</h2>
        {children}
      </div>
    );
  }
}

export default Section;


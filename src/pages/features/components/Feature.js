/*
 * Unigram Website
 * Copyright © 2016-2017 Unigram <team@unigram.me>
 * Licensed under MIT 
 * (https://github.com/UnigramDev/unigram.me/blob/master/LICENSE)
 */

import React, { Component } from 'react'
import './Feature.css'

class Feature extends Component {
  constructor(props){
    super(props)
    this.textHoriz = 'feature-text-horiz col-sm-12 col-md-6 col-lg-5 offset-lg-1';
    this.textVerti = 'feature-text-verti col-sm-12 col-md-12 col-lg-10 offset-lg-1';
    this.devHoriz = 'feature-device-horiz col-sm-12 col-md-6 col-lg-5';
    this.devVerti = 'feature-device-verti col-sm-12 col-md-12 col-lg-10 offset-lg-1';
  }

  render() {
    return (
      <div className="feature-root">
        <div className="container">
          <div className="row">
          <div className={ this.props.horizontal ? this.textHoriz : this.textVerti }>
            <h2>{this.props.title}</h2>
            <div className="sh2">{this.props.descr}</div>
          </div>
          <div className={ this.props.horizontal ? this.devHoriz : this.devVerti }>
            <img src={this.props.pic}/>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Feature;
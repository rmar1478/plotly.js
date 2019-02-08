/**
* Copyright 2012-2019, Plotly, Inc.
* All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

'use strict';

var barAttrs = require('../bar/attributes');

var attrs = {

    x: barAttrs.x,
    x0: barAttrs.x0,
    dx: barAttrs.dx,
    y: barAttrs.y,
    y0: barAttrs.y0,
    dy: barAttrs.dy,

    text: barAttrs.text,
    hovertext: barAttrs.hovertext,
    hovertemplate: barAttrs.hovertemplate,

    textposition: barAttrs.textposition,

    textfont: barAttrs.textfont,

    insidetextfont: barAttrs.insidetextfont,

    outsidetextfont: barAttrs.outsidetextfont,

    constraintext: barAttrs.constraintext,

    cliponaxis: barAttrs.cliponaxis,

    orientation: barAttrs.orientation,

    base: barAttrs.base,

    offset: barAttrs.offset,

    width: barAttrs.width,
    marker: barAttrs.marker,

    selected: barAttrs.selected,
    unselected: barAttrs.unselected,

    r: barAttrs.r,
    t: barAttrs.t,

    _deprecated: barAttrs._deprecated,
};

attrs.marker.shape = {
    valType: 'enumerated',
    values: ['rectangle', 'triangle'],
    dflt: 'rectangle',
    role: 'style',
    editType: 'style',
    description: [
        'Enables triangular bars showing the direction of the changes'
    ].join(' ')
};

module.exports = attrs;

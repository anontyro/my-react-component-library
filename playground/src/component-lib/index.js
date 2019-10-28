/* eslint-disable */
import React from 'react';
import styled, { css } from 'styled-components';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var ButtonContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  cursor: pointer;\n"], ["\n  cursor: pointer;\n"])));
var MainButton = function (_a) {
    var label = _a.label;
    return React.createElement(ButtonContainer, null, label);
};
var templateObject_1;

var DEFAULT_BLUE = '#4196ea';

var colours = /*#__PURE__*/Object.freeze({
    __proto__: null,
    DEFAULT_BLUE: DEFAULT_BLUE
});



var index = /*#__PURE__*/Object.freeze({
    __proto__: null,
    COLOURS: colours
});

var baseHeadingStyle = css(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  font-family: 'Noto Sans TC', sans-serif;\n  text-align: center;\n  color: ", ";\n  ", "\n"], ["\n  font-family: 'Noto Sans TC', sans-serif;\n  text-align: center;\n  color: ", ";\n  ",
    "\n"])), DEFAULT_BLUE, function (props) {
    return props.outline ? 'text-shadow: 1px 1px black;' : '';
});
var Heading1 = styled.h1(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), baseHeadingStyle);
var Heading2 = styled.h2(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), baseHeadingStyle);
var Heading3 = styled.h3(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), baseHeadingStyle);
var Heading4 = styled.h4(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), baseHeadingStyle);
var templateObject_1$1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

var HtmlHeading;
(function (HtmlHeading) {
    HtmlHeading["h1"] = "h1";
    HtmlHeading["h2"] = "h2";
    HtmlHeading["h3"] = "h3";
    HtmlHeading["h4"] = "h4";
})(HtmlHeading || (HtmlHeading = {}));
var PageHeadings = function (_a) {
    var text = _a.text, type = _a.type, style = _a.style, _b = _a.outline, outline = _b === void 0 ? false : _b;
    switch (type) {
        case HtmlHeading.h2:
            return React.createElement(Heading2, { outline: outline }, text);
        case HtmlHeading.h3:
            return React.createElement(Heading3, { outline: outline }, text);
        case HtmlHeading.h4:
            return React.createElement(Heading4, { outline: outline }, text);
        default:
            return React.createElement(Heading1, { outline: outline }, text);
    }
};

export { index as CONSTS, Heading1, Heading2, Heading3, Heading4, MainButton, PageHeadings };

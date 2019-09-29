(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{199:function(module,exports){module.exports="# rc-resize-observer\n\n[![NPM version][npm-image]][npm-url]\n[![build status][travis-image]][travis-url]\n[![Codecov][codecov-image]][codecov-url]\n[![david deps][david-image]][david-url]\n[![david devDeps][david-dev-image]][david-dev-url]\n[![npm download][download-image]][download-url]\n\n[npm-image]: http://img.shields.io/npm/v/rc-resize-observer.svg?style=flat-square\n[npm-url]: http://npmjs.org/package/rc-resize-observer\n[travis-image]: https://img.shields.io/travis/com/react-component/resize-observer.svg?style=flat-square\n[travis-url]: https://travis-ci.com/react-component/resize-observer\n[codecov-image]: https://img.shields.io/codecov/c/github/react-component/resize-observer/master.svg?style=flat-square\n[codecov-url]: https://codecov.io/gh/react-component/resize-observer/branch/master\n[david-image]: https://david-dm.org/react-component/resize-observer/status.svg?style=flat-square\n[david-dev-url]: https://david-dm.org/react-component/resize-observer?type=dev\n[david-dev-image]: https://david-dm.org/react-component/resize-observer/dev-status.svg?style=flat-square\n[david-url]: https://david-dm.org/react-component/resize-observer\n[download-image]: https://img.shields.io/npm/dm/rc-resize-observer.svg?style=flat-square\n[download-url]: https://npmjs.org/package/rc-resize-observer\n\nResize observer for React.\n\n## Live Demo\n\nhttps://react-component.github.io/resize-observer/\n\n## Install\n\n[![rc-resize-observer](https://nodei.co/npm/rc-resize-observer.png)](https://npmjs.org/package/rc-resize-observer)\n\n## Usage\n\n```js\nimport ResizeObserver from 'rc-resize-observer';\nimport { render } from 'react-dom';\n\nrender(\n  <ResizeObserver\n    onResize={() => {\n      console.log('resized!');\n    }}\n  >\n    <textarea />\n  </ResizeObserver>,\n  mountNode,\n);\n```\n\n## API\n\n| Property | Type                        | Default | Description                     |\n| -------- | --------------------------- | ------- | ------------------------------- |\n| disabled | boolean                     | false   |                                 |\n| onResize | ({ width, height }) => void | -       | Trigger when child node resized |\n\n## Development\n\n```\nnpm install\nnpm start\n```\n\n## License\n\nrc-resize-observer is released under the MIT license.\n"},318:function(module,exports){module.exports="import '../assets/index.less';\nimport React from 'react';\nimport ResizeObserver from '../src';\n\nexport default function App() {\n  const [times, setTimes] = React.useState(0);\n  const [disabled, setDisabled] = React.useState(false);\n  const textareaRef = React.useRef<HTMLTextAreaElement>(null);\n\n  React.useEffect(() => {\n    console.log('Ref:', textareaRef.current);\n  }, []);\n\n  const onResize = ({ width, height }: { width: number; height: number }) => {\n    setTimes(prevTimes => prevTimes + 1);\n    console.log('Resize:', width, height);\n  };\n\n  return (\n    <React.StrictMode>\n      <div>\n        <div>\n          <label>\n            <input\n              type=\"checkbox\"\n              onChange={() => {\n                setDisabled(!disabled);\n              }}\n              checked={disabled}\n            />{' '}\n            Disabled Observe\n          </label>\n          {' >>> '}\n          <span>Resize times: {times}</span>\n        </div>\n        <ResizeObserver onResize={onResize} disabled={disabled}>\n          <textarea ref={textareaRef} placeholder=\"I'm a textarea!\" />\n        </ResizeObserver>\n      </div>\n    </React.StrictMode>\n  );\n}\n"},321:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(815);var react=__webpack_require__(1),react_default=__webpack_require__.n(react),findDOMNode=__webpack_require__(319),findDOMNode_default=__webpack_require__.n(findDOMNode),toArray=__webpack_require__(320),toArray_default=__webpack_require__.n(toArray),warning=__webpack_require__(198),warning_default=__webpack_require__.n(warning),ResizeObserver=__webpack_require__(100),ResizeObserver_default=__webpack_require__.n(ResizeObserver);class src_ReactResizeObserver extends react.Component{constructor(){super(...arguments),this.resizeObserver=null,this.childNode=null,this.currentElement=null,this.state={width:0,height:0},this.onResize=entries=>{const{onResize:onResize}=this.props,{target:target}=entries[0],{width:width,height:height}=target.getBoundingClientRect(),fixedWidth=Math.floor(width),fixedHeight=Math.floor(height);if(this.state.width!==fixedWidth||this.state.height!==fixedHeight){const size={width:fixedWidth,height:fixedHeight};this.setState(size),onResize&&onResize(size)}}}componentDidMount(){this.onComponentUpdated()}componentDidUpdate(){this.onComponentUpdated()}componentWillUnmount(){this.destroyObserver()}onComponentUpdated(){const{disabled:disabled}=this.props;if(disabled)return void this.destroyObserver();const element=findDOMNode_default()(this.childNode||this);element!==this.currentElement&&this.destroyObserver(),!this.resizeObserver&&element&&(this.resizeObserver=new ResizeObserver_default.a(this.onResize),this.resizeObserver.observe(element))}destroyObserver(){this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null)}render(){const{children:children}=this.props,childNodes=toArray_default()(children);childNodes.length>1?warning_default()(!1,"Find more than one child node with `children` in ResizeObserver. Will only render first one."):0===childNodes.length&&warning_default()(!1,"`children` of ResizeObserver is empty. Nothing is in observe.");const childNode=childNodes[0];if(react.isValidElement(childNode)){const{ref:ref}=childNode;return react.cloneElement(childNode,{ref:node=>{if(this.childNode=node,!ref)return;const type=typeof ref;"function"===type?ref(node):"object"===type&&(ref.current=node)}})}return childNode||null}}src_ReactResizeObserver.displayName="ResizeObserver";var src=src_ReactResizeObserver;try{ResizeObserver_default.a.displayName="ResizeObserver",ResizeObserver_default.a.__docgenInfo={description:"",displayName:"ResizeObserver",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onResize:{defaultValue:null,description:"Trigger if element resized. Will always trigger when first time render.",name:"onResize",required:!1,type:{name:"(size: { width: number; height: number; }) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#ResizeObserver"]={docgenInfo:ResizeObserver_default.a.__docgenInfo,name:"ResizeObserver",path:"src/index.tsx#ResizeObserver"})}catch(__react_docgen_typescript_loader_error){}function App(){const[times,setTimes]=react_default.a.useState(0),[disabled,setDisabled]=react_default.a.useState(!1),textareaRef=react_default.a.useRef(null);react_default.a.useEffect(()=>{console.log("Ref:",textareaRef.current)},[]);return react_default.a.createElement(react_default.a.StrictMode,null,react_default.a.createElement("div",null,react_default.a.createElement("div",null,react_default.a.createElement("label",null,react_default.a.createElement("input",{type:"checkbox",onChange:()=>{setDisabled(!disabled)},checked:disabled})," ","Disabled Observe")," >>> ",react_default.a.createElement("span",null,"Resize times: ",times)),react_default.a.createElement(src,{onResize:({width:width,height:height})=>{setTimes(prevTimes=>prevTimes+1),console.log("Resize:",width,height)},disabled:disabled},react_default.a.createElement("textarea",{ref:textareaRef,placeholder:"I'm a textarea!"}))))}__webpack_require__.d(__webpack_exports__,"a",(function(){return App}))},322:function(module,exports,__webpack_require__){__webpack_require__(323),__webpack_require__(418),module.exports=__webpack_require__(419)},346:function(module,exports){},419:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(69),_storybook_addon_notes__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(310),_storybook_addon_options__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(311),storybook_addon_source__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(312),storybook_addon_source__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(storybook_addon_source__WEBPACK_IMPORTED_MODULE_3__);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addDecorator)(_storybook_addon_notes__WEBPACK_IMPORTED_MODULE_1__.withNotes),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addDecorator)(storybook_addon_source__WEBPACK_IMPORTED_MODULE_3___default.a),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addDecorator)(Object(_storybook_addon_options__WEBPACK_IMPORTED_MODULE_2__.withOptions)({name:"rc-resize-observer",url:"https://react-component.github.io/resize-observer",title:"rc-resize-observer"})),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)((function(){__webpack_require__(517)}),module)}.call(this,__webpack_require__(223)(module))},517:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),react_markdown__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(313),react_markdown__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__),_storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(314),_storybook_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(69),_storybook_addon_console__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(315),_storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(316),_storybook_addon_info__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(317),rc_source_loader_examples_basic__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(318),rc_source_loader_examples_basic__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(rc_source_loader_examples_basic__WEBPACK_IMPORTED_MODULE_7__),_examples_basic__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(321),_README_md__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(199),_README_md__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_README_md__WEBPACK_IMPORTED_MODULE_9__);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.storiesOf)("rc-resize-observer",module).addDecorator(_storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_2__.checkA11y).addDecorator(_storybook_addon_info__WEBPACK_IMPORTED_MODULE_6__.withInfo).addDecorator((function(storyFn,context){return Object(_storybook_addon_console__WEBPACK_IMPORTED_MODULE_4__.withConsole)()(storyFn)(context)})).addDecorator(Object(_storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_5__.withViewport)()).add("readMe",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"markdown-body entry-content",style:{padding:24}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a,{escapeHtml:!1,source:_README_md__WEBPACK_IMPORTED_MODULE_9___default.a}))}),{source:{code:_README_md__WEBPACK_IMPORTED_MODULE_9___default.a}}).add("basic",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_examples_basic__WEBPACK_IMPORTED_MODULE_8__.a,null)}),{source:{code:rc_source_loader_examples_basic__WEBPACK_IMPORTED_MODULE_7___default.a}})}.call(this,__webpack_require__(223)(module))},710:function(module,exports,__webpack_require__){var map={"./nestedObjectAssign":287,"./nestedObjectAssign.js":287};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=710},815:function(module,exports,__webpack_require__){var content=__webpack_require__(816);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0,insertInto:void 0};__webpack_require__(818)(content,options);content.locals&&(module.exports=content.locals)},816:function(module,exports,__webpack_require__){(module.exports=__webpack_require__(817)(!1)).push([module.i,".rc-footer {\n  position: relative;\n  clear: both;\n  color: rgba(255, 255, 255, 0.4);\n  font-size: 14px;\n  line-height: 1.5;\n  background-color: #000;\n}\n.rc-footer a {\n  transition: all 0.3s;\n  color: rgba(255, 255, 255, 0.9);\n  text-decoration: none;\n}\n.rc-footer a:hover {\n  color: #40a9ff;\n}\n.rc-footer-container {\n  width: 100%;\n  max-width: 1200px;\n  padding: 80px 0;\n  margin: auto;\n}\n.rc-footer-columns {\n  display: flex;\n  justify-content: space-around;\n}\n.rc-footer-column h2 {\n  position: relative;\n  margin: 0 auto 24px;\n  font-weight: 500;\n  font-size: 16px;\n  color: #fff;\n}\n.rc-footer-column-icon {\n  margin-right: 0.5em;\n  width: 22px;\n  display: inline-block;\n  vertical-align: middle;\n  top: -1px;\n  position: relative;\n  text-align: center;\n}\n.rc-footer-column-icon > span,\n.rc-footer-column-icon > svg,\n.rc-footer-column-icon img {\n  width: 100%;\n  display: block;\n}\n.rc-footer-item {\n  margin: 12px 0;\n}\n.rc-footer-item-icon {\n  margin-right: 0.4em;\n  width: 16px;\n  display: inline-block;\n  vertical-align: middle;\n  top: -1px;\n  position: relative;\n  text-align: center;\n}\n.rc-footer-item-icon > span,\n.rc-footer-item-icon > svg,\n.rc-footer-item-icon img {\n  width: 100%;\n  display: block;\n}\n.rc-footer-item-separator {\n  margin: 0 0.3em;\n}\n.rc-footer-bottom-container {\n  border-top: 1px solid rgba(255, 255, 255, 0.25);\n  width: 100%;\n  max-width: 1200px;\n  text-align: center;\n  margin: 0 auto;\n  padding: 16px 0;\n  line-height: 32px;\n  font-size: 16px;\n}\n.rc-footer-light {\n  background-color: transparent;\n  color: rgba(0, 0, 0, 0.85);\n}\n.rc-footer-light h2,\n.rc-footer-light a {\n  color: rgba(0, 0, 0, 0.85);\n}\n.rc-footer-light .rc-footer-bottom-container {\n  border-top-color: #e8e8e8;\n}\n.rc-footer-light .rc-footer-item-separator,\n.rc-footer-light .rc-footer-item-description {\n  color: rgba(0, 0, 0, 0.45);\n}\n@media only screen and (max-width: 767.99px) {\n  .rc-footer {\n    text-align: center;\n  }\n  .rc-footer-container {\n    padding: 40px 0;\n  }\n  .rc-footer-columns {\n    display: block;\n  }\n  .rc-footer-column {\n    display: block;\n    margin-bottom: 40px;\n  }\n  .rc-footer-column:last-child {\n    margin-bottom: 0;\n  }\n}\n",""])}},[[322,1,2]]]);
//# sourceMappingURL=main.9b98ab6ccbe5595e9c8c.bundle.js.map
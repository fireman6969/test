System.register("chunks:///_virtual/Utils.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "693b1BzTt9Fo5pJY/ksFgHP", "Utils", undefined); // Learn TypeScript:
      //  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
      //  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
      // Learn Attribute:
      //  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
      //  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
      // Learn life-cycle callbacks:
      //  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
      //  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html


      class Utils {
        static getNumber() {
          return Math.random();
        }

      }

      exports('default', Utils);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LoadingScene.ts", ['cc', './Utils.ts', './_rollupPluginModLoBabelHelpers.js'], function (exports) {
  'use strict';

  var cclegacy, Label, _decorator, Component, Utils, _applyDecoratedDescriptor, _initializerDefineProperty;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Label = module.Label;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      Utils = module.default;
    }, function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _temp;

      cclegacy._RF.push({}, "b98c8ia9/lFk4MfBPm83LYR", "LoadingScene", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      /**
       * Predefined variables
       * Name = LoadingScene
       * DateTime = Fri Feb 10 2023 13:05:54 GMT+0400 (Gulf Standard Time)
       * Author = yangdev
       * FileBasename = LoadingScene.ts
       * FileBasenameNoExtension = LoadingScene
       * URL = db://assets/loading/Script/LoadingScene.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      let LoadingScene = exports('LoadingScene', (_dec = ccclass('LoadingScene'), _dec2 = property(Label), _dec(_class = (_class2 = (_temp = class LoadingScene extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "numberLB", _descriptor, this);
        }

        onClickMe() {
          this.numberLB.string = Utils.getNumber().toString();
        }

      }, _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "numberLB", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _class2)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/decorator.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/loading", ['./Utils.ts', './LoadingScene.ts'], function () {
  'use strict';

  return {
    setters: [null, null],
    execute: function () {}
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/loading', 'chunks:///_virtual/loading'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});
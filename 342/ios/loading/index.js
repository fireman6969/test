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

System.register("chunks:///_virtual/LoadingScene.ts", ['cc', './Utils.ts'], function (exports) {
  'use strict';

  var cclegacy, Component, log, _decorator, Utils;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      log = module.log;
      _decorator = module._decorator;
    }, function (module) {
      Utils = module.default;
    }],
    execute: function () {
      var _dec, _class;

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

      let LoadingScene = exports('LoadingScene', (_dec = ccclass('LoadingScene'), _dec(_class = class LoadingScene extends Component {
        //     @property(Label)
        //     private numberLB : Label = null;
        onClickMe() {
          log(Utils.getNumber().toString()); //    this.numberLB.string = Utils.getNumber().toString();
        }

      }) || _class));
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
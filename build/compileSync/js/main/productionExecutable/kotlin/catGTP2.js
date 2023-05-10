(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'react', '@emotion/css', 'react-dom/client', './kotlin-wrappers-kotlin-react-dom-js-ir.js', './kotlin-kotlin-stdlib-js-ir.js', './kotlin-wrappers-kotlin-react-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('react'), require('@emotion/css'), require('react-dom/client'), require('./kotlin-wrappers-kotlin-react-dom-js-ir.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlin-wrappers-kotlin-react-js-ir.js'));
  else {
    if (typeof react === 'undefined') {
      throw new Error("Error loading module 'catGTP2'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'catGTP2'.");
    }
    if (typeof this['@emotion/css'] === 'undefined') {
      throw new Error("Error loading module 'catGTP2'. Its dependency '@emotion/css' was not found. Please, check whether '@emotion/css' is loaded prior to 'catGTP2'.");
    }
    if (typeof this['react-dom/client'] === 'undefined') {
      throw new Error("Error loading module 'catGTP2'. Its dependency 'react-dom/client' was not found. Please, check whether 'react-dom/client' is loaded prior to 'catGTP2'.");
    }
    if (typeof this['kotlin-wrappers-kotlin-react-dom-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'catGTP2'. Its dependency 'kotlin-wrappers-kotlin-react-dom-js-ir' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-dom-js-ir' is loaded prior to 'catGTP2'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'catGTP2'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'catGTP2'.");
    }
    if (typeof this['kotlin-wrappers-kotlin-react-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'catGTP2'. Its dependency 'kotlin-wrappers-kotlin-react-js-ir' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-js-ir' is loaded prior to 'catGTP2'.");
    }
    root.catGTP2 = factory(typeof catGTP2 === 'undefined' ? {} : catGTP2, react, this['@emotion/css'], this['react-dom/client'], this['kotlin-wrappers-kotlin-react-dom-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlin-wrappers-kotlin-react-js-ir']);
  }
}(this, function (_, $module$react, $module$_emotion_css_2enn37, $module$react_dom_client_y5z5eu, kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_dom, kotlin_kotlin, kotlin_org_jetbrains_kotlin_wrappers_kotlin_react) {
  'use strict';
  //region block: imports
  var useState = $module$react.useState;
  var css = $module$_emotion_css_2enn37.css;
  var createRoot = $module$react_dom_client_y5z5eu.createRoot;
  var ReactHTML_getInstance = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_dom.$_$.a;
  var Unit_getInstance = kotlin_kotlin.$_$.b;
  var KMutableProperty0 = kotlin_kotlin.$_$.l;
  var THROW_ISE = kotlin_kotlin.$_$.o;
  var getLocalDelegateReference = kotlin_kotlin.$_$.f;
  var FC = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react.$_$.a;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.a;
  var create = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react.$_$.b;
  var split = kotlin_kotlin.$_$.m;
  var Collection = kotlin_kotlin.$_$.c;
  var isInterface = kotlin_kotlin.$_$.h;
  var startsWith = kotlin_kotlin.$_$.n;
  //endregion
  //region block: pre-declaration
  //endregion
  function get_App() {
    _init_properties_App_kt__fk8usv();
    return App;
  }
  var App;
  function App$lambda($this$FC, props) {
    _init_properties_App_kt__fk8usv();
    var query$delegate = useState(props.query);
    var response$delegate = useState(props.response);
    var tmp$ret$2;
    // Inline function 'react.dom.html.ReactHTML.div' call
    var tmp0__get_div__2k2o9m = ReactHTML_getInstance();
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'div';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp = tmp$ret$2;
    $this$FC.z3(tmp, App$lambda$lambda(query$delegate, response$delegate));
    return Unit_getInstance();
  }
  function invoke$lambda($query$delegate) {
    _init_properties_App_kt__fk8usv();
    var tmp$ret$1;
    // Inline function 'react.StateInstance.getValue' call
    var tmp0_getValue = getLocalDelegateReference('query', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = $query$delegate;
    tmp$ret$1 = tmp$ret$0[0];
    return tmp$ret$1;
  }
  function invoke$lambda_0($query$delegate, value) {
    _init_properties_App_kt__fk8usv();
    var tmp0_setValue = getLocalDelegateReference('query', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = $query$delegate;
    return tmp$ret$0[1](value);
  }
  function invoke$lambda_1($response$delegate) {
    _init_properties_App_kt__fk8usv();
    var tmp$ret$1;
    // Inline function 'react.StateInstance.getValue' call
    var tmp0_getValue = getLocalDelegateReference('response', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = $response$delegate;
    tmp$ret$1 = tmp$ret$0[0];
    return tmp$ret$1;
  }
  function invoke$lambda_2($response$delegate, value) {
    _init_properties_App_kt__fk8usv();
    var tmp0_setValue = getLocalDelegateReference('response', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = $response$delegate;
    return tmp$ret$0[1](value);
  }
  function App$lambda$lambda$lambda($this$invoke) {
    _init_properties_App_kt__fk8usv();
    $this$invoke.y3('catGPT');
    return Unit_getInstance();
  }
  function App$lambda$lambda$lambda_0($this$invoke) {
    _init_properties_App_kt__fk8usv();
    $this$invoke.y3('Input a question below and catGPT will respond!');
    return Unit_getInstance();
  }
  function App$lambda$lambda$lambda_1($query$delegate) {
    return function ($this$invoke) {
      $this$invoke.y3('you input: ' + invoke$lambda($query$delegate));
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda_2($response$delegate) {
    return function ($this$invoke) {
      $this$invoke.y3('catGTP response: ' + invoke$lambda_1($response$delegate));
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda$lambda$lambda($query$delegate) {
    return function (event) {
      invoke$lambda_0($query$delegate, event.target.value);
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda$lambda($query$delegate) {
    return function ($this$invoke) {
      var tmp1_css = $this$invoke;
      var tmp$ret$12;
      // Inline function 'emotion.css.ClassName' call
      var tmp$ret$11;
      // Inline function 'kotlinx.js.jso' call
      var tmp$ret$10;
      // Inline function 'kotlin.apply' call
      var tmp$ret$0;
      // Inline function 'kotlinx.js.jso' call
      tmp$ret$0 = {};
      var tmp0_apply = tmp$ret$0;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'App.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var tmp$ret$3;
      // Inline function 'csstype.px' call
      var tmp$ret$2;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast = '5px';
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = tmp0_unsafeCast;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      tmp0_apply.marginTop = tmp$ret$3;
      var tmp$ret$6;
      // Inline function 'csstype.px' call
      var tmp$ret$5;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp1_unsafeCast = '5px';
      var tmp$ret$4;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$4 = tmp1_unsafeCast;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      tmp0_apply.marginBottom = tmp$ret$6;
      var tmp$ret$9;
      // Inline function 'csstype.px' call
      var tmp$ret$8;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp2_unsafeCast = '14px';
      var tmp$ret$7;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$7 = tmp2_unsafeCast;
      tmp$ret$8 = tmp$ret$7;
      tmp$ret$9 = tmp$ret$8;
      tmp0_apply.fontSize = tmp$ret$9;
      tmp$ret$10 = tmp0_apply;
      tmp$ret$11 = tmp$ret$10;
      tmp$ret$12 = css(tmp$ret$11);
      tmp1_css.className = tmp$ret$12;
      $this$invoke.type = (/*union*/{button: 'button', checkbox: 'checkbox', color: 'color', date: 'date', datetimeLocal: 'datetime-local', email: 'email', file: 'file', hidden: 'hidden', image: 'image', month: 'month', number: 'number', password: 'password', radio: 'radio', range: 'range', reset: 'reset', search: 'search', submit: 'submit', tel: 'tel', text: 'text', time: 'time', url: 'url', week: 'week'}/*union*/).text;
      $this$invoke.value = invoke$lambda($query$delegate);
      $this$invoke.onChange = App$lambda$lambda$lambda$lambda$lambda($query$delegate);
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda$lambda$lambda_0($query$delegate, $response$delegate) {
    return function (it) {
      invoke$lambda_2($response$delegate, algorithm(invoke$lambda($query$delegate)));
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda$lambda_0($query$delegate, $response$delegate) {
    return function ($this$invoke) {
      $this$invoke.onClick = App$lambda$lambda$lambda$lambda$lambda_0($query$delegate, $response$delegate);
      $this$invoke.y3('Submit');
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda_3($query$delegate, $response$delegate) {
    return function ($this$invoke) {
      var tmp$ret$2;
      // Inline function 'react.dom.html.ReactHTML.input' call
      var tmp0__get_input__prnny7 = ReactHTML_getInstance();
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = 'input';
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var tmp = tmp$ret$2;
      $this$invoke.z3(tmp, App$lambda$lambda$lambda$lambda($query$delegate));
      var tmp$ret$5;
      // Inline function 'react.dom.html.ReactHTML.button' call
      var tmp1__get_button__gut1ry = ReactHTML_getInstance();
      var tmp$ret$4;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$3;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$3 = 'button';
      tmp$ret$4 = tmp$ret$3;
      tmp$ret$5 = tmp$ret$4;
      var tmp_0 = tmp$ret$5;
      $this$invoke.z3(tmp_0, App$lambda$lambda$lambda$lambda_0($query$delegate, $response$delegate));
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda($query$delegate, $response$delegate) {
    return function ($this$invoke) {
      var tmp1_css = $this$invoke;
      var tmp$ret$9;
      // Inline function 'emotion.css.ClassName' call
      var tmp$ret$8;
      // Inline function 'kotlinx.js.jso' call
      var tmp$ret$7;
      // Inline function 'kotlin.apply' call
      var tmp$ret$0;
      // Inline function 'kotlinx.js.jso' call
      tmp$ret$0 = {};
      var tmp0_apply = tmp$ret$0;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'App.<anonymous>.<anonymous>.<anonymous>' call
      tmp0_apply.fontFamily = (/*union*/{cursive: 'cursive', fantasy: 'fantasy', monospace: 'monospace', sansSerif: 'sans-serif', serif: 'serif'}/*union*/).serif;
      var tmp$ret$3;
      // Inline function 'csstype.px' call
      var tmp$ret$2;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast = '10px';
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = tmp0_unsafeCast;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      tmp0_apply.top = tmp$ret$3;
      var tmp$ret$6;
      // Inline function 'csstype.px' call
      var tmp$ret$5;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp1_unsafeCast = '10px';
      var tmp$ret$4;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$4 = tmp1_unsafeCast;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      tmp0_apply.right = tmp$ret$6;
      tmp$ret$7 = tmp0_apply;
      tmp$ret$8 = tmp$ret$7;
      tmp$ret$9 = css(tmp$ret$8);
      tmp1_css.className = tmp$ret$9;
      var tmp$ret$12;
      // Inline function 'react.dom.html.ReactHTML.h1' call
      var tmp2__get_h1__vme0ka = ReactHTML_getInstance();
      var tmp$ret$11;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$10;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$10 = 'h1';
      tmp$ret$11 = tmp$ret$10;
      tmp$ret$12 = tmp$ret$11;
      var tmp = tmp$ret$12;
      $this$invoke.z3(tmp, App$lambda$lambda$lambda);
      var tmp$ret$15;
      // Inline function 'react.dom.html.ReactHTML.p' call
      var tmp3__get_p__3ezexu = ReactHTML_getInstance();
      var tmp$ret$14;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$13;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$13 = 'p';
      tmp$ret$14 = tmp$ret$13;
      tmp$ret$15 = tmp$ret$14;
      var tmp_0 = tmp$ret$15;
      $this$invoke.z3(tmp_0, App$lambda$lambda$lambda_0);
      var tmp$ret$18;
      // Inline function 'react.dom.html.ReactHTML.p' call
      var tmp4__get_p__xb3fq9 = ReactHTML_getInstance();
      var tmp$ret$17;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$16;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$16 = 'p';
      tmp$ret$17 = tmp$ret$16;
      tmp$ret$18 = tmp$ret$17;
      var tmp_1 = tmp$ret$18;
      $this$invoke.z3(tmp_1, App$lambda$lambda$lambda_1($query$delegate));
      var tmp$ret$21;
      // Inline function 'react.dom.html.ReactHTML.p' call
      var tmp5__get_p__7twlgg = ReactHTML_getInstance();
      var tmp$ret$20;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$19;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$19 = 'p';
      tmp$ret$20 = tmp$ret$19;
      tmp$ret$21 = tmp$ret$20;
      var tmp_2 = tmp$ret$21;
      $this$invoke.z3(tmp_2, App$lambda$lambda$lambda_2($response$delegate));
      var tmp$ret$24;
      // Inline function 'react.dom.html.ReactHTML.div' call
      var tmp6__get_div__xoun1c = ReactHTML_getInstance();
      var tmp$ret$23;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$22;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$22 = 'div';
      tmp$ret$23 = tmp$ret$22;
      tmp$ret$24 = tmp$ret$23;
      var tmp_3 = tmp$ret$24;
      $this$invoke.z3(tmp_3, App$lambda$lambda$lambda_3($query$delegate, $response$delegate));
      return Unit_getInstance();
    };
  }
  var properties_initialized_App_kt_kalemn;
  function _init_properties_App_kt__fk8usv() {
    if (properties_initialized_App_kt_kalemn) {
    } else {
      properties_initialized_App_kt_kalemn = true;
      App = FC(App$lambda);
    }
  }
  function main() {
    var tmp0_elvis_lhs = document.getElementById('root');
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$("Couldn't find root");
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var container = tmp;
    var tmp_0 = createRoot(container);
    var tmp_1 = get_App();
    tmp_0.render(create(tmp_1, main$lambda));
  }
  function algorithm(input) {
    var tmp$ret$1;
    // Inline function 'kotlin.text.lowercase' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = input;
    tmp$ret$1 = tmp$ret$0.toLowerCase();
    var split_0 = split(tmp$ret$1, [' ']);
    var tmp;
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp_0;
      if (isInterface(split_0, Collection)) {
        tmp_0 = split_0.j();
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$2 = false;
        break $l$block_0;
      }
      var tmp0_iterator = split_0.b();
      while (tmp0_iterator.c()) {
        var element = tmp0_iterator.d();
        var tmp$ret$3;
        // Inline function 'algorithm.<anonymous>' call
        tmp$ret$3 = startsWith(element, 'what');
        if (tmp$ret$3) {
          tmp$ret$2 = true;
          break $l$block_0;
        }
      }
      tmp$ret$2 = false;
    }
    if (tmp$ret$2) {
      tmp = 'Meow?';
    } else {
      var tmp$ret$4;
      $l$block_2: {
        // Inline function 'kotlin.collections.any' call
        var tmp_1;
        if (isInterface(split_0, Collection)) {
          tmp_1 = split_0.j();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$4 = false;
          break $l$block_2;
        }
        var tmp0_iterator_0 = split_0.b();
        while (tmp0_iterator_0.c()) {
          var element_0 = tmp0_iterator_0.d();
          var tmp$ret$5;
          // Inline function 'algorithm.<anonymous>' call
          tmp$ret$5 = startsWith(element_0, 'when');
          if (tmp$ret$5) {
            tmp$ret$4 = true;
            break $l$block_2;
          }
        }
        tmp$ret$4 = false;
      }
      if (tmp$ret$4) {
        tmp = 'Meow Meow Meow 12/23/92 Meow Meow...meow meow?';
      } else {
        var tmp$ret$6;
        $l$block_4: {
          // Inline function 'kotlin.collections.any' call
          var tmp_2;
          if (isInterface(split_0, Collection)) {
            tmp_2 = split_0.j();
          } else {
            tmp_2 = false;
          }
          if (tmp_2) {
            tmp$ret$6 = false;
            break $l$block_4;
          }
          var tmp0_iterator_1 = split_0.b();
          while (tmp0_iterator_1.c()) {
            var element_1 = tmp0_iterator_1.d();
            var tmp$ret$7;
            // Inline function 'algorithm.<anonymous>' call
            tmp$ret$7 = startsWith(element_1, 'who');
            if (tmp$ret$7) {
              tmp$ret$6 = true;
              break $l$block_4;
            }
          }
          tmp$ret$6 = false;
        }
        if (tmp$ret$6) {
          tmp = 'Meow meow ---> MEOW --> meow';
        } else {
          var tmp$ret$8;
          $l$block_6: {
            // Inline function 'kotlin.collections.any' call
            var tmp_3;
            if (isInterface(split_0, Collection)) {
              tmp_3 = split_0.j();
            } else {
              tmp_3 = false;
            }
            if (tmp_3) {
              tmp$ret$8 = false;
              break $l$block_6;
            }
            var tmp0_iterator_2 = split_0.b();
            while (tmp0_iterator_2.c()) {
              var element_2 = tmp0_iterator_2.d();
              var tmp$ret$9;
              // Inline function 'algorithm.<anonymous>' call
              tmp$ret$9 = startsWith(element_2, 'where');
              if (tmp$ret$9) {
                tmp$ret$8 = true;
                break $l$block_6;
              }
            }
            tmp$ret$8 = false;
          }
          if (tmp$ret$8) {
            tmp = 'Meow -> Meow <- Meow Meow --> Meow -> meow <--- Meow';
          } else {
            tmp = 'MEOW!!!!';
          }
        }
      }
    }
    return tmp;
  }
  function main$lambda($this$create) {
    $this$create.query = 'what do you want to ask?';
    $this$create.response = 'Meow?';
    return Unit_getInstance();
  }
  main();
  return _;
}));

//# sourceMappingURL=catGTP2.js.map

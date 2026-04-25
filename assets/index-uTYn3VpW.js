var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=c(o(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):n.page=r()})(e,(function(){var e=Array.isArray||function(e){return Object.prototype.toString.call(e)==`[object Array]`},t=v,n=s,r=c,i=l,a=_,o=new RegExp([`(\\\\.)`,`([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))`].join(`|`),`g`);function s(e){for(var t=[],n=0,r=0,i=``,a;(a=o.exec(e))!=null;){var s=a[0],c=a[1],l=a.index;if(i+=e.slice(r,l),r=l+s.length,c){i+=c[1];continue}i&&=(t.push(i),``);var u=a[2],f=a[3],p=a[4],m=a[5],h=a[6],g=a[7],_=h===`+`||h===`*`,v=h===`?`||h===`*`,y=u||`/`,b=p||m||(g?`.*`:`[^`+y+`]+?`);t.push({name:f||n++,prefix:u||``,delimiter:y,optional:v,repeat:_,pattern:d(b)})}return r<e.length&&(i+=e.substr(r)),i&&t.push(i),t}function c(e){return l(s(e))}function l(t){for(var n=Array(t.length),r=0;r<t.length;r++)typeof t[r]==`object`&&(n[r]=RegExp(`^`+t[r].pattern+`$`));return function(r){for(var i=``,a=r||{},o=0;o<t.length;o++){var s=t[o];if(typeof s==`string`){i+=s;continue}var c=a[s.name],l;if(c==null){if(s.optional)continue;throw TypeError(`Expected "`+s.name+`" to be defined`)}if(e(c)){if(!s.repeat)throw TypeError(`Expected "`+s.name+`" to not repeat, but received "`+c+`"`);if(c.length===0){if(s.optional)continue;throw TypeError(`Expected "`+s.name+`" to not be empty`)}for(var u=0;u<c.length;u++){if(l=encodeURIComponent(c[u]),!n[o].test(l))throw TypeError(`Expected all "`+s.name+`" to match "`+s.pattern+`", but received "`+l+`"`);i+=(u===0?s.prefix:s.delimiter)+l}continue}if(l=encodeURIComponent(c),!n[o].test(l))throw TypeError(`Expected "`+s.name+`" to match "`+s.pattern+`", but received "`+l+`"`);i+=s.prefix+l}return i}}function u(e){return e.replace(/([.+*?=^!:${}()[\]|\/])/g,`\\$1`)}function d(e){return e.replace(/([=!:$\/()])/g,`\\$1`)}function f(e,t){return e.keys=t,e}function p(e){return e.sensitive?``:`i`}function m(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return f(e,t)}function h(e,t,n){for(var r=[],i=0;i<e.length;i++)r.push(v(e[i],t,n).source);return f(RegExp(`(?:`+r.join(`|`)+`)`,p(n)),t)}function g(e,t,n){for(var r=s(e),i=_(r,n),a=0;a<r.length;a++)typeof r[a]!=`string`&&t.push(r[a]);return f(i,t)}function _(e,t){t||={};for(var n=t.strict,r=t.end!==!1,i=``,a=e[e.length-1],o=typeof a==`string`&&/\/$/.test(a),s=0;s<e.length;s++){var c=e[s];if(typeof c==`string`)i+=u(c);else{var l=u(c.prefix),d=c.pattern;c.repeat&&(d+=`(?:`+l+d+`)*`),d=c.optional?l?`(?:`+l+`(`+d+`))?`:`(`+d+`)?`:l+`(`+d+`)`,i+=d}}return n||(i=(o?i.slice(0,-2):i)+`(?:\\/(?=$))?`),r?i+=`$`:i+=n&&o?``:`(?=\\/|$)`,RegExp(`^`+i,p(t))}function v(t,n,r){return n||=[],e(n)?r||={}:(r=n,n=[]),t instanceof RegExp?m(t,n,r):e(t)?h(t,n,r):g(t,n,r)}t.parse=n,t.compile=r,t.tokensToFunction=i,t.tokensToRegExp=a;var y=typeof document<`u`,b=typeof window<`u`,x=typeof history<`u`,S=typeof process<`u`,C=y&&document.ontouchstart?`touchstart`:`click`,w=b&&!!(window.history.location||window.location);function T(){this.callbacks=[],this.exits=[],this.current=``,this.len=0,this._decodeURLComponents=!0,this._base=``,this._strict=!1,this._running=!1,this._hashbang=!1,this.clickHandler=this.clickHandler.bind(this),this._onpopstate=this._onpopstate.bind(this)}T.prototype.configure=function(e){var t=e||{};this._window=t.window||b&&window,this._decodeURLComponents=t.decodeURLComponents!==!1,this._popstate=t.popstate!==!1&&b,this._click=t.click!==!1&&y,this._hashbang=!!t.hashbang;var n=this._window;this._popstate?n.addEventListener(`popstate`,this._onpopstate,!1):b&&n.removeEventListener(`popstate`,this._onpopstate,!1),this._click?n.document.addEventListener(C,this.clickHandler,!1):y&&n.document.removeEventListener(C,this.clickHandler,!1),this._hashbang&&b&&!x?n.addEventListener(`hashchange`,this._onpopstate,!1):b&&n.removeEventListener(`hashchange`,this._onpopstate,!1)},T.prototype.base=function(e){if(arguments.length===0)return this._base;this._base=e},T.prototype._getBase=function(){var e=this._base;if(e)return e;var t=b&&this._window&&this._window.location;return b&&this._hashbang&&t&&t.protocol===`file:`&&(e=t.pathname),e},T.prototype.strict=function(e){if(arguments.length===0)return this._strict;this._strict=e},T.prototype.start=function(e){var t=e||{};if(this.configure(t),!1!==t.dispatch){this._running=!0;var n;if(w){var r=this._window.location;n=this._hashbang&&~r.hash.indexOf(`#!`)?r.hash.substr(2)+r.search:this._hashbang?r.search+r.hash:r.pathname+r.search+r.hash}this.replace(n,null,!0,t.dispatch)}},T.prototype.stop=function(){if(this._running){this.current=``,this.len=0,this._running=!1;var e=this._window;this._click&&e.document.removeEventListener(C,this.clickHandler,!1),b&&e.removeEventListener(`popstate`,this._onpopstate,!1),b&&e.removeEventListener(`hashchange`,this._onpopstate,!1)}},T.prototype.show=function(e,t,n,r){var i=new A(e,t,this),a=this.prevContext;return this.prevContext=i,this.current=i.path,!1!==n&&this.dispatch(i,a),!1!==i.handled&&!1!==r&&i.pushState(),i},T.prototype.back=function(e,t){var n=this;if(this.len>0){var r=this._window;x&&r.history.back(),this.len--}else setTimeout(e?function(){n.show(e,t)}:function(){n.show(n._getBase(),t)})},T.prototype.redirect=function(e,t){var n=this;typeof e==`string`&&typeof t==`string`&&D.call(this,e,function(e){setTimeout(function(){n.replace(t)},0)}),typeof e==`string`&&t===void 0&&setTimeout(function(){n.replace(e)},0)},T.prototype.replace=function(e,t,n,r){var i=new A(e,t,this),a=this.prevContext;return this.prevContext=i,this.current=i.path,i.init=n,i.save(),!1!==r&&this.dispatch(i,a),i},T.prototype.dispatch=function(e,t){var n=0,r=0,i=this;function a(){var e=i.exits[r++];if(!e)return o();e(t,a)}function o(){var t=i.callbacks[n++];if(e.path!==i.current){e.handled=!1;return}if(!t)return O.call(i,e);t(e,o)}t?a():o()},T.prototype.exit=function(e,t){if(typeof e==`function`)return this.exit(`*`,e);for(var n=new j(e,null,this),r=1;r<arguments.length;++r)this.exits.push(n.middleware(arguments[r]))},T.prototype.clickHandler=function(e){if(this._which(e)===1&&!(e.metaKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented){var t=e.target,n=e.path||(e.composedPath?e.composedPath():null);if(n){for(var r=0;r<n.length;r++)if(n[r].nodeName&&n[r].nodeName.toUpperCase()===`A`&&n[r].href){t=n[r];break}}for(;t&&t.nodeName.toUpperCase()!==`A`;)t=t.parentNode;if(!(!t||t.nodeName.toUpperCase()!==`A`)){var i=typeof t.href==`object`&&t.href.constructor.name===`SVGAnimatedString`;if(!(t.hasAttribute(`download`)||t.getAttribute(`rel`)===`external`)){var a=t.getAttribute(`href`);if(!(!this._hashbang&&this._samePath(t)&&(t.hash||a===`#`))&&!(a&&a.indexOf(`mailto:`)>-1)&&!(i?t.target.baseVal:t.target)&&!(!i&&!this.sameOrigin(t.href))){var o=i?t.href.baseVal:t.pathname+t.search+(t.hash||``);o=o[0]===`/`?o:`/`+o,S&&o.match(/^\/[a-zA-Z]:\//)&&(o=o.replace(/^\/[a-zA-Z]:\//,`/`));var s=o,c=this._getBase();o.indexOf(c)===0&&(o=o.substr(c.length)),this._hashbang&&(o=o.replace(`#!`,``)),!(c&&s===o&&(!w||this._window.location.protocol!==`file:`))&&(e.preventDefault(),this.show(s))}}}}},T.prototype._onpopstate=(function(){var e=!1;return b?(y&&document.readyState===`complete`?e=!0:window.addEventListener(`load`,function(){setTimeout(function(){e=!0},0)}),function(t){if(e){var n=this;if(t.state){var r=t.state.path;n.replace(r,t.state)}else if(w){var i=n._window.location;n.show(i.pathname+i.search+i.hash,void 0,void 0,!1)}}}):function(){}})(),T.prototype._which=function(e){return e||=b&&this._window.event,e.which==null?e.button:e.which},T.prototype._toURL=function(e){var t=this._window;if(typeof URL==`function`&&w)return new URL(e,t.location.toString());if(y){var n=t.document.createElement(`a`);return n.href=e,n}},T.prototype.sameOrigin=function(e){if(!e||!w)return!1;var t=this._toURL(e),n=this._window.location;return n.protocol===t.protocol&&n.hostname===t.hostname&&(n.port===t.port||n.port===``&&(t.port==80||t.port==443))},T.prototype._samePath=function(e){if(!w)return!1;var t=this._window.location;return e.pathname===t.pathname&&e.search===t.search},T.prototype._decodeURLEncodedURIComponent=function(e){return typeof e==`string`&&this._decodeURLComponents?decodeURIComponent(e.replace(/\+/g,` `)):e};function E(){var e=new T;function t(){return D.apply(e,arguments)}return t.callbacks=e.callbacks,t.exits=e.exits,t.base=e.base.bind(e),t.strict=e.strict.bind(e),t.start=e.start.bind(e),t.stop=e.stop.bind(e),t.show=e.show.bind(e),t.back=e.back.bind(e),t.redirect=e.redirect.bind(e),t.replace=e.replace.bind(e),t.dispatch=e.dispatch.bind(e),t.exit=e.exit.bind(e),t.configure=e.configure.bind(e),t.sameOrigin=e.sameOrigin.bind(e),t.clickHandler=e.clickHandler.bind(e),t.create=E,Object.defineProperty(t,`len`,{get:function(){return e.len},set:function(t){e.len=t}}),Object.defineProperty(t,`current`,{get:function(){return e.current},set:function(t){e.current=t}}),t.Context=A,t.Route=j,t}function D(e,t){if(typeof e==`function`)return D.call(this,`*`,e);if(typeof t==`function`)for(var n=new j(e,null,this),r=1;r<arguments.length;++r)this.callbacks.push(n.middleware(arguments[r]));else typeof e==`string`?this[typeof t==`string`?`redirect`:`show`](e,t):this.start(e)}function O(e){if(!e.handled){var t,n=this,r=n._window;t=n._hashbang?w&&this._getBase()+r.location.hash.replace(`#!`,``):w&&r.location.pathname+r.location.search,t!==e.canonicalPath&&(n.stop(),e.handled=!1,w&&(r.location.href=e.canonicalPath))}}function k(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,`\\$1`)}function A(e,t,n){var r=this.page=n||D,i=r._window,a=r._hashbang,o=r._getBase();e[0]===`/`&&e.indexOf(o)!==0&&(e=o+(a?`#!`:``)+e);var s=e.indexOf(`?`);this.canonicalPath=e;var c=RegExp(`^`+k(o));if(this.path=e.replace(c,``)||`/`,a&&(this.path=this.path.replace(`#!`,``)||`/`),this.title=y&&i.document.title,this.state=t||{},this.state.path=e,this.querystring=~s?r._decodeURLEncodedURIComponent(e.slice(s+1)):``,this.pathname=r._decodeURLEncodedURIComponent(~s?e.slice(0,s):e),this.params={},this.hash=``,!a){if(!~this.path.indexOf(`#`))return;var l=this.path.split(`#`);this.path=this.pathname=l[0],this.hash=r._decodeURLEncodedURIComponent(l[1])||``,this.querystring=this.querystring.split(`#`)[0]}}A.prototype.pushState=function(){var e=this.page,t=e._window,n=e._hashbang;e.len++,x&&t.history.pushState(this.state,this.title,n&&this.path!==`/`?`#!`+this.path:this.canonicalPath)},A.prototype.save=function(){var e=this.page;x&&e._window.history.replaceState(this.state,this.title,e._hashbang&&this.path!==`/`?`#!`+this.path:this.canonicalPath)};function j(e,n,r){var i=this.page=r||M,a=n||{};a.strict=a.strict||i._strict,this.path=e===`*`?`(.*)`:e,this.method=`GET`,this.regexp=t(this.path,this.keys=[],a)}j.prototype.middleware=function(e){var t=this;return function(n,r){if(t.match(n.path,n.params))return n.routePath=t.path,e(n,r);r()}},j.prototype.match=function(e,t){var n=this.keys,r=e.indexOf(`?`),i=~r?e.slice(0,r):e,a=this.regexp.exec(decodeURIComponent(i));if(!a)return!1;delete t[0];for(var o=1,s=a.length;o<s;++o){var c=n[o-1],l=this.page._decodeURLEncodedURIComponent(a[o]);(l!==void 0||!hasOwnProperty.call(t,c.name))&&(t[c.name]=l)}return!0};var M=E(),N=M;return N.default=M,N}))}))(),1),u={en:{header:{nav:{home:`Home`,rent:`Rent`,materials:`Materials`,about:`About Us`,contacts:`Contacts`},button:`Request a callback`,mobileMenu:{button:`Request a callback`,policy:`Privacy Policy © Spec-Trans, 2026`}},hero:{title:`Sale and delivery of aggregates`,subtitle:`You can order premium-quality materials from us. An individual approach and high-quality products are the key advantages of our company.`,button:`Request a callback`},main:{whyus:{title:`Why choose us`,block1:`We have been operating since <span class='green_color'>2000</span>`,block2:`Over <span class='green_color'>5,000</span> satisfied customers`,block3:`Best prices.`,block4:`High-quality products.`,block5:`Efficiency.`},equipment:{title:`Equipment rental.`,subtitle:`We operate our own fleet of modern construction equipment in Prague. We offer reliable solutions for earthworks, material transportation, and site preparation. We work efficiently and at competitive prices.`,button1:`Request a callback`,button2:`Learn more`},materials:{title:`Main materials`,card1:`Sand`,card2:`Crushed stone`,card3:`Asphalt millings`,card4:`Topsoil`},about:{title:`About SPEC-TRANS`,subtitle:`Our company has been operating for many years, earning a reputation in the market as a reliable and responsible partner. Our clients include some of the largest organizations. At the same time, both large companies and private individuals can count on an individual approach when ordering our services.`,textOnBlock1:`Units of equipment`,textOnBlock2:`Quarries`},questions:{title:`Got questions?`,subtitle:`Request a call back and learn more about our services!`,text:`Submit your request and we’ll call you back in 10 minutes.`,button:`Request a callback`,namePlaceholder:`Name`,phonePlaceholder:`Phone number`,commentPlacholder:`Message`,agreeText:`I agree to the processing of personal data`,successText:`Sent`,form:{name:{error1:`This field is required`,error2:`Minimum 3 characters`},tel:{error1:`This field is required`,error2:`Phone number must start with +`,error3:`Invalid phone number length`,error4:`Only digits are allowed`},com:{error1:`This field is required`},agree:{error1:`Please check the box`}}},delivery:{title:`Delivery`,subtitle:`We provide prompt delivery of construction materials and special equipment throughout Prague and the surrounding areas. Your cargo will arrive on time and in complete safety.`,item1:`You leave a request through the website or by phone.`,item2:`We prepare an accurate cost estimate.`,item3:`We deliver the materials you ordered exactly on time.`,item4:`We ensure proper and timely document processing.`,addressTitle:`Prague`,addressSubtitle:`Za Stodola 20, 251 01 Modletice`,phoneTitle:`+420 606 110 110`,phoneSubtitle:`On weekdays from 07:00 to 17:00`,button:`Delivery area`,shortButton:`Area`}},pages:{rent:{special:{title:`Special equipment rental`,subtitle:`We offer affordable rental terms for various equipment on a daily or long-term basis.`,item1:{name:`Mini-excavator`,text:`(up to 5t)`},item2:{name:`Backhoe loader JCB`,text:`(up to 12t)`},item3:{name:`Crawler excavator`,text:`(up to 22t)`},slashHour:`/hour`,slashDay:`/day`},trucks:{title:`Dump truck rental`,subtitle:`We offer affordable rental terms for various trucks on a daily or long-term basis.`,item1:{name:`Dump truck`,text:`(20m³)`},item2:{name:`Dump truck`,text:`(25m³)`},item3:{name:`Dump truck`,text:`(30m³)`},slashHour:`/hour`,slashDay:`/day`}},materials:{block1:{title:`Construction Sand`,subtitle:`Quarry and river sand of all fractions. Ideal for concrete work, bricklaying, and foundation backfilling.`},block2:{title:`Crushed Stone`,subtitle:`High-strength crushed stone of various fractions for foundation pouring, road works, and concrete production. Resistant to frost and loads.`},block3:{title:`Asphalt Millings`,subtitle:`Recycled material from processed asphalt. Ideal for paving country roads, garage cooperatives, and parking lots. Moisture resistant.`},block4:{title:`Black Earth`,subtitle:`Humus-rich soil for landscaping, gardens, and orchards. Cleaned of weeds and stones. Ensures ideal plant growth.`},button:`Learn more`}},errors:{title:`Page not found`,subtitle:`Go to the homepage or contact us.`,button:`Go home`},footer:{policy:`Privacy Policy © Spec-Trans, 2026`,rent:`Equipment rental`,materials:`Materials`,phone:`+420 606 110 110`}},ru:{header:{nav:{home:`Главная`,rent:`Аренда`,materials:`Материалы`,about:`О нас`,contacts:`Контакты`},button:`Заказать звонок`,mobileMenu:{button:`Заказать звонок`,policy:`Политика конфиденциальности © Спец-Транс, 2026`}},hero:{title:`Продажа и доставка нерудных материалов`,subtitle:`У нас вы можете заказать материалы премиального качества. Индивидуальный подход и качественная продукция – ключевые преимущества нашей компании.`,button:`Заказать звонок`},main:{whyus:{title:`Почему выбирают нас`,block1:`Мы работаем с <span class='green_color'>2000</span> года`,block2:`Более <span class='green_color'>5000</span> счастливых клиентов`,block3:`Лучшие цены`,block4:`Качественная продукция`,block5:`Оперативность`},equipment:{title:`Аренда техники`,subtitle:`Собственный парк современной строительной техники в Праге. Предлагаем надежные решения для земляных работ, транспортировки материалов и подготовки площадок. Работаем оперативно и по доступным ценам.`,button1:`Заказать звонок`,button2:`Подробнее`},materials:{title:`Основные материалы`,card1:`Песок`,card2:`Щебень`,card3:`Асфальтная крошка`,card4:`Чернозём`},about:{title:`О компании СПЕЦ-ТРАНС`,subtitle:`Наша компания работает на рынке уже много лет, зарекомендовав себя как надежный и ответственный партнер. Среди наших клиентов — одни из крупнейших организаций. При этом как крупные компании, так и частные лица могут рассчитывать на индивидуальный подход при заказе наших услуг.`,textOnBlock1:`Единиц техники`,textOnBlock2:`Карьеров `},questions:{title:`Остались вопросы?`,subtitle:`Закажите обратный звонок и узнайте больше о наших услугах!`,text:`Оставьте заявку и наш менеджер перезвонит вам в течении 10 минут`,button:`Заказать звонок`,namePlaceholder:`Имя`,phonePlaceholder:`Телефон`,commentPlacholder:`Коментарии`,agreeText:`Соглашение о персональных данных`,successText:`Отправлено`,form:{name:{error1:`Заполните поле`,error2:`Минимум 3 символа`},tel:{error1:`Заполните поле`,error2:`Телефон должен начинаться с +`,error3:`Неверная длина номера`,error4:`Только цифры`},com:{error1:`Заполните поле`},agree:{error1:`Поставьте галочку`}}},delivery:{title:`Доставка`,subtitle:`Мы Обеспечиваем оперативную доставку строительных материалов и спецтехники по всей Праге и пригороду. Ваш груз прибудет вовремя и в полной сохранности.`,item1:`Вы оставляете заявку через сайт или по телефону`,item2:`Мы производим точный расчет стоимости`,item3:`Осуществляем поставку заказанного вами материала точно в срок`,item4:`Соблюдаем своевременный документооборот`,addressTitle:`г. Прага`,addressSubtitle:`За Стодола 20, 251 01 Модлетице`,phoneTitle:`+420 606 110 110`,phoneSubtitle:`По будням с 07:00 до 17:00`,button:`Зона доставки`,shortButton:`Зона`}},pages:{rent:{special:{title:`Аренда спецтехники`,subtitle:`Мы предлагаем доступные условия аренды различной техники посуточно и на длительный срок.`,item1:{name:`Мини-экскаватор`,text:`(до 5т)`,priceHour:`850 Kč`,priceDay:`6 000 Kč`},item2:{name:`Экскаватор-погрузчик JCB`,text:`(до 12т)`,priceHour:`1 100 Kč`,priceDay:`8 000 Kč`},item3:{name:`Гусеничный экскаватор`,text:`(до 22т)`,priceHour:`1 500 Kč`,priceDay:`11 000 Kč`},slashHour:`/час`,slashDay:`/день`},trucks:{title:`Аренда самосвалов`,subtitle:`Мы предлагаем доступные условия аренды различной техники посуточно и на длительный срок.`,item1:{name:`Самосвал`,text:`(20м³)`,priceHour:`850 Kč`,priceDay:`6 500 Kč`},item2:{name:`Самосвал`,text:`(25м³)`,priceHour:`950 Kč`,priceDay:`7 500 Kč`},item3:{name:`Самосвал`,text:`(30м³)`,priceHour:`1 150 Kč`,priceDay:`9 500 Kč`},slashHour:`/час`,slashDay:`/день`}},materials:{block1:{title:`Песок строительный`,subtitle:`Карьерный и речной песок всех фракций. Идеально подходит для бетонных работ, кладки кирпича и засыпки фундамента.`},block2:{title:`Щебень`,subtitle:`Высокопрочный щебень различных фракций для заливки фундамента, дорожных работ и производства бетона. Устойчив к морозам и нагрузкам.`},block3:{title:`Асфальтная крошка`,subtitle:`Вторичный материал из переработанного асфальта. Идеально подходит для отсыпки дачных дорог, гаражных кооперативов и стоянок. Не боится влаги.`},block4:{title:`Чернозём`,subtitle:`Богатая гумусом почва для ландшафтного дизайна, садов и огородов. Очищен от сорняков и камней. Обеспечивает идеальный рост растений.`},button:`Подробнее`}},errors:{title:`Страница не найдена`,subtitle:`Перейдите на главную или свяжитесь с нами.`,button:`На главную`},footer:{policy:`Политика конфиденциальности © Спец-Транс, 2026`,rent:`Аренда техники`,materials:`Материалы`,phone:`+420 606 110 110`}},cs:{header:{nav:{home:`Domů`,rent:`Pronájem`,materials:`Materiály`,about:`O nás`,contacts:`Kontakty`},button:`Objednat hovor`,mobileMenu:{button:`Objednat hovor`,policy:`Zásady ochrany osobních údajů © Spec-Trans, 2026`}},hero:{title:`Prodej a dodávka sypkých materiálů`,subtitle:`U nás si můžete objednat materiály prémiové kvality. Individuální přístup a kvalitní produkty jsou hlavními výhodami naší společnosti.`,button:`Objednat hovor`},main:{whyus:{title:`Proč si vybrat nás`,block1:`Působíme na trhu od roku <span class='green_color'>2000</span>`,block2:`Více než <span class='green_color'>5 000</span> spokojených zákazníků`,block3:`Nejlepší ceny`,block4:`Kvalitní produkty`,block5:`Rychlé vyřízení`},equipment:{title:`Pronájem techniky`,subtitle:`Disponujeme vlastním parkem moderní stavební techniky v Praze. Nabízíme spolehlivá řešení pro zemní práce, dopravu materiálů a přípravu staveb. Pracujeme rychle a za dostupné ceny.`,button1:`Objednat hovor`,button2:`Více informací`},materials:{title:`Hlavní materiály`,card1:`Písek`,card2:`Štěrk`,card3:`Asfaltová drť`,card4:`Ornice`},about:{title:`O společnosti SPEC-TRANS`,subtitle:`Naše společnost působí na trhu již mnoho let a vybudovala si pověst spolehlivého a odpovědného partnera. Mezi naše klienty patří i velké organizace. Zároveň nabízíme individuální přístup jak firmám, tak i soukromým osobám.`,textOnBlock1:`Jednotek techniky`,textOnBlock2:`Lomů`},questions:{title:`Máte dotazy?`,subtitle:`Objednejte si zpětný hovor a zjistěte více o našich službách!`,text:`Zanechte žádost a náš manažer vám zavolá do 10 minut`,button:`Objednat hovor`,namePlaceholder:`Jméno`,phonePlaceholder:`Telefon`,commentPlacholder:`Zpráva`,agreeText:`Souhlasím se zpracováním osobních údajů`,successText:`Odesláno`,form:{name:{error1:`Vyplňte pole`,error2:`Minimálně 3 znaky`},tel:{error1:`Vyplňte pole`,error2:`Telefon musí začínat znakem +`,error3:`Neplatná délka čísla`,error4:`Pouze číslice`},com:{error1:`Vyplňte pole`},agree:{error1:`Zaškrtněte políčko`}}},delivery:{title:`Doprava`,subtitle:`Zajišťujeme rychlou dodávku stavebních materiálů a techniky po celé Praze a okolí. Váš náklad dorazí včas a v naprostém pořádku.`,item1:`Zanecháte objednávku přes web nebo telefonicky`,item2:`Připravíme přesnou cenovou nabídku`,item3:`Dodáme objednaný materiál přesně včas`,item4:`Zajišťujeme správnou dokumentaci`,addressTitle:`Praha`,addressSubtitle:`Za Stodola 20, 251 01 Modletice`,phoneTitle:`+420 606 110 110`,phoneSubtitle:`Ve všední dny od 07:00 do 17:00`,button:`Oblast dopravy`,shortButton:`Oblast`}},pages:{rent:{special:{title:`Pronájem stavební mechanizace`,subtitle:`Nabízíme dostupné podmínky pronájmu různé techniky denně i dlouhodobě.`,item1:{name:`Minirypadlo`,text:`(do 5t)`,priceHour:`850 Kč`,priceDay:`6 000 Kč`},item2:{name:`Rypadlo-nakladač JCB`,text:`(do 12t)`,priceHour:`1 100 Kč`,priceDay:`8 000 Kč`},item3:{name:`Pásové rypadlo`,text:`(do 22t)`,priceHour:`1 500 Kč`,priceDay:`11 000 Kč`},slashHour:`/hod`,slashDay:`/den`},trucks:{title:`Pronájem sklápěčů`,subtitle:`Nabízíme dostupné podmínky pronájmu různé techniky denně i dlouhodobě.`,item1:{name:`Sklápěč`,text:`(20m³)`},item2:{name:`Sklápěč`,text:`(25m³)`},item3:{name:`Sklápěč`,text:`(30m³)`},slashHour:`hod`,slashDay:`/den`}},materials:{block1:{title:`Stavební písek`,subtitle:`Lomový a říční písek všech frakcí. Ideální pro betonářské práce, zdění a zasypávání základů.`},block2:{title:`Drcené kamenivo`,subtitle:`Vysokopevnostní drcené kamenivo různých frakcí pro zalévání základů, silniční práce a výrobu betonu. Odolné vůči mrazu a zatížení.`},block3:{title:`Asfaltový recyklát`,subtitle:`Recyklovaný materiál ze zpracovaného asfaltu. Ideální pro zpevnění polních cest, garážových družstev a parkovišť. Odolný vůči vlhkosti.`},block4:{title:`Černozem`,subtitle:`Půda bohatá na humus pro terénní úpravy, zahrady a sady. Vyčištěno od plevele a kamenů. Zajišťuje ideální růst rostlin.`},button:`Více informací`}},errors:{title:`Stránka nenalezena`,subtitle:`Přejděte na hlavní stránku nebo nás kontaktujte.`,button:`Domů`},footer:{policy:`Zásady ochrany osobních údajů © Spec-Trans, 2026`,rent:`Pronájem techniky`,materials:`Materiály`,phone:`+420 606 110 110`}},uk:{header:{nav:{home:`Головна`,rent:`Оренда`,materials:`Матеріали`,about:`Про нас`,contacts:`Контакти`},button:`Замовити дзвінок`,mobileMenu:{button:`Замовити дзвінок`,policy:`Політика конфіденційності © Спец-Транс, 2026`}},hero:{title:`Продаж і доставка сипучих матеріалів`,subtitle:`У нас ви можете замовити матеріали преміальної якості. Індивідуальний підхід і якісна продукція — головні переваги нашої компанії.`,button:`Замовити дзвінок`},main:{whyus:{title:`Чому обирають нас`,block1:`Ми працюємо з <span class='green_color'>2000</span> року`,block2:`Понад <span class='green_color'>5000</span> щасливих клієнтів`,block3:`Найкращі ціни`,block4:`Якісна продукція`,block5:`Оперативність`},equipment:{title:`Оренда техніки`,subtitle:`Маємо власний парк сучасної будівельної техніки в Празі. Пропонуємо надійні рішення для земляних робіт, транспортування матеріалів і підготовки ділянок. Працюємо швидко та за доступними цінами.`,button1:`Замовити дзвінок`,button2:`Детальніше`},materials:{title:`Основні матеріали`,card1:`Пісок`,card2:`Щебінь`,card3:`Асфальтна крихта`,card4:`Чорнозем`},about:{title:`Про SPEC-TRANS`,subtitle:`Наша компанія працює на ринку вже багато років, зарекомендувавши себе як надійний і відповідальний партнер. Серед наших клієнтів — великі організації. Водночас як компанії, так і приватні особи можуть розраховувати на індивідуальний підхід.`,textOnBlock1:`Одиниць техніки`,textOnBlock2:`Кар’єрів`},questions:{title:`Залишились питання?`,subtitle:`Замовте зворотний дзвінок і дізнайтесь більше про наші послуги!`,text:`Залиште заявку і наш менеджер передзвонить вам протягом 10 хвилин`,button:`Замовити дзвінок`,namePlaceholder:`Ім’я`,phonePlaceholder:`Телефон`,commentPlacholder:`Повідомлення`,agreeText:`Я погоджуюсь на обробку персональних даних`,successText:`Відправлено`,form:{name:{error1:`Заповніть поле`,error2:`Мінімум 3 символи`},tel:{error1:`Заповніть поле`,error2:`Телефон має починатися з +`,error3:`Невірна довжина номера`,error4:`Тільки цифри`},com:{error1:`Заповніть поле`},agree:{error1:`Поставте галочку`}}},delivery:{title:`Доставка`,subtitle:`Ми забезпечуємо оперативну доставку будівельних матеріалів і спецтехніки по всій Празі та передмістю. Ваш вантаж прибуде вчасно і в повній безпеці.`,item1:`Ви залишаєте заявку через сайт або телефоном`,item2:`Ми робимо точний розрахунок вартості`,item3:`Доставляємо матеріал точно в обумовлений термін`,item4:`Дотримуємось своєчасного документообігу`,addressTitle:`м. Прага`,addressSubtitle:`За Стодола, 20, 251 01 Модлетіце`,phoneTitle:`+420 606 110 110`,phoneSubtitle:`У будні з 07:00 до 17:00`,button:`Зона доставки`,shortButton:`Зона`}},pages:{rent:{special:{title:`Оренда спецтехніки`,subtitle:`Ми пропонуємо доступні умови оренди різної техніки подобово та на тривалий термін.`,item1:{name:`Міні-екскаватор`,text:`(до 5т)`,priceHour:`850 Kč`,priceDay:`6 000 Kč`},item2:{name:`Екскаватор-навантажувач JCB`,text:`(до 12т)`,priceHour:`1 100 Kč`,priceDay:`8 000 Kč`},item3:{name:`Гусеничний екскаватор`,text:`(до 22т)`,priceHour:`1 500 Kč`,priceDay:`11 000 Kč`},slashHour:`/год`,slashDay:`/день`},trucks:{title:`Оренда самоскидів`,subtitle:`Ми пропонуємо доступні умови оренди різної техніки подобово та на тривалий термін.`,item1:{name:`Самоскид`,text:`(20м³)`,priceHour:`850 Kč`,priceDay:`6 500 Kč`},item2:{name:`Самоскид`,text:`(25м³)`,priceHour:`950 Kč`,priceDay:`7 500 Kč`},item3:{name:`Самоскид`,text:`(30м³)`,priceHour:`1 150 Kč`,priceDay:`9 500 Kč`},slashHour:`/год`,slashDay:`/день`}},materials:{block1:{title:`Пісок будівельний`,subtitle:`Кар'єрний та річковий пісок усіх фракцій. Ідеально підходить для бетонних робіт, цегляної кладки та засипки фундаменту.`},block2:{title:`Щебінь`,subtitle:`Високоміцний щебінь різних фракцій для заливки фундаменту, дорожніх робіт та виробництва бетону. Стійкий до морозів та навантажень.`},block3:{title:`Асфальтна крихта`,subtitle:`Вторинний матеріал із переробленого асфальту. Ідеально підходить для відсипання дачних доріг, гаражних кооперативів та стоянок. Не боїться вологи.`},block4:{title:`Чорнозем`,subtitle:`Багатий на гумус ґрунт для ландшафтного дизайну, садів та городів. Очищений від бур'янів та каміння. Забезпечує ідеальний ріст рослин.`},button:`Докладніше`}},errors:{title:`Сторінку не знайдено`,subtitle:`Перейдіть на головну або зв’яжіться з нами.`,button:`На головну`},footer:{policy:`Політика конфіденційності © Спец-Транс, 2026`,rent:`Оренда техніки`,materials:`Матеріали`,phone:`+420 606 110 110`}}},d=`en`,f=`lang`,p=()=>localStorage.getItem(f)||d,m=e=>{localStorage.setItem(f,e)},h=(e,t)=>{let n=t.split(`.`),r=u[e];for(let e of n)r&&=r[e];return r},g=e=>h(p(),e),_=()=>{window.changeLang=e=>{m(e);let t=window.location.pathname.replace(`/spec-tranc-site`,``)||`/`;l.default.show(t)};let e=p().toUpperCase(),t=``;return e!==`EN`&&(t+=`<li><button onclick="changeLang('en')">EN</button></li>`),e!==`RU`&&(t+=`<li><button onclick="changeLang('ru')">RU</button></li>`),e!==`CS`&&(t+=`<li><button onclick="changeLang('cs')">CZ</button></li>`),e!==`UK`&&(t+=`<li><button onclick="changeLang('uk')">UK</button></li>`),`
        <div class="lang_container">
        <button class="lang_current">${e===`CS`?`CZ`:e}</button>
        <ul class="lang_list">
            ${t}
        </ul>
        </div>
    `},v=`data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4%2018L20%2018'%20stroke='%23000000'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M4%2012L20%2012'%20stroke='%23000000'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M4%206L20%206'%20stroke='%23000000'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e`,y=`data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_998_782)'%3e%3cpath%20d='M12%2010.586L16.243%206.34299C16.6335%205.95252%2017.2665%205.95252%2017.657%206.34299C18.0475%206.73345%2018.0475%207.36652%2017.657%207.75699L13.414%2012L17.657%2016.243C18.0475%2016.6335%2018.0475%2017.2665%2017.657%2017.657C17.2665%2018.0475%2016.6335%2018.0475%2016.243%2017.657L12%2013.414L7.75699%2017.657C7.36652%2018.0475%206.73345%2018.0475%206.34299%2017.657C5.95252%2017.2665%205.95252%2016.6335%206.34299%2016.243L10.586%2012L6.34299%207.75699C5.95252%207.36652%205.95252%206.73345%206.34299%206.34299C6.73345%205.95252%207.36652%205.95252%207.75699%206.34299L12%2010.586Z'%20fill='%231D1D1B'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_998_782'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e`,b=[{name:`header.nav.home`,link:`/spec-tranc-site/`},{name:`header.nav.rent`,link:`/spec-tranc-site/rent`},{name:`header.nav.materials`,link:`/spec-tranc-site/materials`},{name:`header.nav.about`,link:`/spec-tranc-site/about`},{name:`header.nav.contacts`,link:`/spec-tranc-site/contacts`}],x=e=>b.map(t=>{let n=t.link===e?`active`:``;return`<a href="${t.link}" class="nav_link ${n}">${g(t.name)}</a>`}).join(``),S=e=>`
    <header class="header">
     <div class="header_container">
     <a href="/spec-tranc-site/">
     <img class="logo_header" src="/spec-tranc-site/Icon/logo_en.svg" alt="Спец-Транс">
     </a>
     <nav class="nav_links">
     ${x(e)}
     </nav>
     <div class="header_rigth_block">
     <button class="btn_header">
        <span class="btn_header_title">${g(`header.button`)}</span>
     </button>
     ${_()}
     </div>

     <button class="burger" popovertarget="burger_menu" type="button">
     <span class="burger_icon">
     <img src=${v} alt="Burger Menu"></span></button>
     </div>

     <div popover id="burger_menu" class="burger_menu">
     <div class="burger_window">
     <div class="burger_header">
     <img class="burger_logo" src="/spec-tranc-site/Icon/logo_en.svg" alt="Burger Logo" />
     <button class="burger_close" popovertarget="burger_menu" popovertargetaction="hide">
     <img class="burger_close_img" src=${y} alt="Burger Close" />
     </button>
     </div>
     
     <nav class="burger_nav">
     ${x(e)}
     <button class="burger_btn"> <span class="burger_btn_title">${g(`header.mobileMenu.button`)}</span></button>
     ${_()}
     </nav>
     
     
    <div class="burger_footer">
    <p class="confidentiality_burger">${g(`header.mobileMenu.policy`)}</p>
    </div>
    </div>
    </div>
    </header>
    `,C=()=>`
  <section id="hero" class="hero"
  data-aos="fade" 
  data-aos-duration="1000">
  <div class="containerHero">
  <div class="hero_content"
  data-aos="fade-right" 
  data-aos-delay="100" 
  data-aos-duration="800">
  <h1 class="hero_title">${g(`hero.title`)}</h1>
  <p class="hero_subtitle">  ${g(`hero.subtitle`)}</p>
  <div
  data-aos="fade-up"
  data-aos-delay="300"
  data-aos-duration="600">
      <button class="hero_btn">
      <span class="hero_btn_title">${g(`hero.button`)}</span>
      </button>
      <div class="hero_blur"></div>
      </div>
  </div>
        </section>
    `,w=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%3e%3cdefs%3e%3cmask%20id='cut-fb'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3crect%20width='24'%20height='24'%20fill='black'/%3e%3ccircle%20cx='12'%20cy='12'%20r='11'%20fill='white'/%3e%3cpath%20d='M13.15%2019V12.8H15.24L15.55%2010.38H13.15V8.84C13.15%208.14%2013.34%207.67%2014.35%207.67H15.63V5.5C15.01%205.43%2014.38%205.4%2013.76%205.41C11.92%205.41%2010.67%206.53%2010.67%208.59V10.38H8.62V12.8H10.67V19H13.15Z'%20fill='black'/%3e%3c/mask%3e%3c/defs%3e%3crect%20width='24'%20height='24'%20fill='white'%20mask='url(%23cut-fb)'/%3e%3c/svg%3e`,T=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%3e%3cdefs%3e%3cmask%20id='cut-ig'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3crect%20width='24'%20height='24'%20fill='black'/%3e%3ccircle%20cx='12'%20cy='12'%20r='11'%20fill='white'/%3e%3crect%20x='6.1'%20y='6.1'%20width='11.8'%20height='11.8'%20rx='3.2'%20stroke='black'%20stroke-width='1.9'%20fill='none'/%3e%3ccircle%20cx='12'%20cy='12'%20r='3.15'%20stroke='black'%20stroke-width='1.9'%20fill='none'/%3e%3ccircle%20cx='15.8'%20cy='8.4'%20r='1.1'%20fill='black'/%3e%3c/mask%3e%3c/defs%3e%3crect%20width='24'%20height='24'%20fill='white'%20mask='url(%23cut-ig)'/%3e%3c/svg%3e`,E=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%3e%3cdefs%3e%3cmask%20id='cut-yt'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3crect%20width='24'%20height='24'%20fill='black'/%3e%3ccircle%20cx='12'%20cy='12'%20r='11'%20fill='white'/%3e%3crect%20x='6.2'%20y='8.1'%20width='11.6'%20height='7.8'%20rx='2.5'%20fill='black'/%3e%3cpath%20d='M10.4%209.95L14.9%2012L10.4%2014.05V9.95Z'%20fill='white'/%3e%3c/mask%3e%3c/defs%3e%3crect%20width='24'%20height='24'%20fill='white'%20mask='url(%23cut-yt)'/%3e%3c/svg%3e`,D=[{name:`footer.rent`,link:`/spec-tranc-site/rent`},{name:`footer.materials`,link:`/spec-tranc-site/materials`}],O=e=>D.map(t=>{let n=t.link===e?`active`:``;return`<a href="${t.link}" class="nav_link ${n}">${g(t.name)}</a>`}).join(``),k=e=>`
    <section id="footer" class="footer">
    <div class="footer_container">
    <div class="footer_left">
    <a href="/spec-tranc-site/">
    <img class="logo_footer" src="/spec-tranc-site/Icon/logo_en_w.svg" alt="Спец-Транс"/>
    </a>
    </div>
    <div class="footer_confidentiality">
    <p class="confidentiality">${g(`footer.policy`)}</p>
    </div>
    <div class="footer_center">
    <nav class="footer_nav_links">
    <div class="links_list">
    ${O(e)}
    </div>
    </nav>
    </div>
    <div class="icon_footer">
    <img id="facebook" src=${w} alt="Facebook" />
    <img id="instagram" src=${T} alt="Instagram" />
    <img id="youtube" src=${E} alt="Youtube" />
    </div>
    <div class="footer_btn">
    <button class="num_btn_footer"> <span class="num_title_footer">+420 606 110 110</span></button>
    </div>
    </div>
    </section>
    `,A=()=>{document.querySelector(`#facebook`).addEventListener(`click`,e=>{window.open(`https://www.facebook.com/?locale=ru_RU`,`_blank`)}),document.querySelector(`#instagram`).addEventListener(`click`,e=>{window.open(`https://www.instagram.com/`,`_blank`)}),document.querySelector(`#youtube`).addEventListener(`click`,e=>{window.open(`https://www.youtube.com/`,`_blank`)})},j=()=>`
    <section id="about-us" class="about_us">
    <div class="containerAbout">
    <div class="about_container">
    <div class="about_text"
    data-aos="fade-right" 
    data-aos-duration="800" 
    data-aos-delay="200">
    <h1 class="about_title">${g(`main.about.title`)}</h1>
    <p class="about_subtitle">${g(`main.about.subtitle`)}</p>
    </div>
    <div class="about_stats"
    data-aos="fade-left" 
    data-aos-duration="800" 
    data-aos-delay="200">
    <div class="stat_blocks">
    <div class="stat">
    <h1 class="stat_num">60<span class="stat_plus">+</span></h1>
    <p class="stat_subtitle">${g(`main.about.textOnBlock1`)}</p>
    </div>
    <div class="stat">
    <h1 class="stat_num">15</h1>
    <p class="stat_subtitle">${g(`main.about.textOnBlock2`)}</p>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
    `,M=`data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_998_943)'%3e%3cpath%20d='M12%2018.26L6.83874%2021.1491C6.09414%2021.5659%205.20319%2020.9186%205.36946%2020.0816L6.52204%2014.28L2.17884%2010.2639C1.55231%209.68457%201.89259%208.63716%202.73998%208.53666L8.61404%207.84L11.092%202.4684C11.4494%201.69358%2012.5506%201.69358%2012.9081%202.4684L15.386%207.84L21.2601%208.53666C22.1075%208.63716%2022.4478%209.68457%2021.8212%2010.2639L17.478%2014.28L18.6306%2020.0816C18.7969%2020.9186%2017.9059%2021.5659%2017.1613%2021.1491L12%2018.26Z'%20fill='%2327AE60'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_998_943'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e`,N=()=>`
    <section id="delivery" class="delivery">
    <div class="containerDelivery">

    <div class="delivery_container">
    <div class="delivery_block_left">
    <h1 class="delivery_title" data-aos="fade" data-aos-duration="1000">${g(`main.delivery.title`)}</h1>
    <p class="delivery_text" data-aos="fade-right" 
    data-aos-delay="200" 
    data-aos-duration="800">${g(`main.delivery.subtitle`)}
</p>
<ul class="delivery_list"
  data-aos="fade-right" 
  data-aos-delay="400" 
  data-aos-duration="800">
    <li class="delivery_item">
    <img src=${M} alt="star"/>
    <p>${g(`main.delivery.item1`)}</p>
    </li>
    <li class="delivery_item">
    <img src=${M} alt="star"/>
    <p>${g(`main.delivery.item2`)}</p>
    </li>
    <li class="delivery_item">
    <img src=${M} alt="star"/>
    <p>${g(`main.delivery.item3`)}</p>
    </li>
    <li class="delivery_item">
    <img src=${M} alt="star"/>
    <p>${g(`main.delivery.item4`)}</p>
    </li>
</ul>
<div class="delivery_contacts"
data-aos="fade-up" 
data-aos-duration="200"
  data-aos-delay="150">
<div class="delivery_adress">
<h4 class="adress_title">
${g(`main.delivery.addressTitle`)}
</h4>
<p class="adress_subtitle">
${g(`main.delivery.addressSubtitle`)}
</p>
</div>
<div class="delivery_num">
<h4 class="num_title">
${g(`main.delivery.phoneTitle`)}
</h4>
<p class="num_subtitle">
${g(`main.delivery.phoneSubtitle`)}
</p>
</div>
</div>
    </div>
    <div class="delivery_block_right"
    data-aos="fade"
    data-aos-duration="1700"
    data-aos-delay="400">
    <div class="map_delivery">
    <div class="map_wrapper">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2566.1974274573536!2d14.589376!3d49.970155999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b8ee356e9ab6f%3A0x58dfcf23a32364a4!2sSpecTrans!5e0!3m2!1sru!2scz!4v1774808009640!5m2!1sru!2scz" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <button id="map-btn" class="map_btn"><span class="map_btn_title">${g(`main.delivery.button`)}
</span>
    <span class="short_title">${g(`main.delivery.shortButton`)}
</span></button>

    <div class="map-overlay"></div>
    </div>
    </div>
    </div>
    </div>
    </section>
    `,ee=()=>{let e=document.querySelector(`#map-btn`);e&&e.addEventListener(`click`,e=>{window.open(`https://maps.app.goo.gl/eP8tAhQH418hE5CD9`,`_blank`)})},P=`/spec-tranc-site/assets/sand-kcvqnrlN.png`,F=`/spec-tranc-site/assets/stone-BQnPT-wb.webp`,I=`/spec-tranc-site/assets/asphalt-6OW4kjpF.webp`,L=`/spec-tranc-site/assets/black_earth-DsVp2ZXy.webp`,R=[{image:P,title:`main.materials.card1`,link:`/materials`},{image:F,title:`main.materials.card2`,link:`/materials`},{image:I,title:`main.materials.card3`,link:`/materials`},{image:L,title:`main.materials.card4`,link:`/materials`}],z=()=>R.map((e,t)=>`
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="${t*200}"
      >
        <a href="/spec-tranc-site/materials" class="materials_item">
        <img class="materials_img" src="${e.image}" alt="Image Material">
        <div class="materials_overlay"></div>
        <p class="materials_text">${g(e.title)}</p>
        </a>
        </div>
    `).join(``),B=()=>`
    <section id="materials" class="materials">
    <div class="containerMaterials">
    <h1 class="materials_title" data-aos="fade" data-aos-duration="1000">${g(`main.materials.title`)}</h1>
    <div class="materials_list">
    ${z()}
    </div>
    </div>
    </section>
    `,V=()=>`
   <section id="questions" class="questions">
   <div class="containerQuestions">
   <div class="questions_container">
   <div class="questions_block"
   data-aos="fade-right" 
   data-aos-duration="800" 
   data-aos-delay="200">
   <h1 class="questions_title">${g(`main.questions.title`)}</h1>
   <h3 class="questions_subtit">${g(`main.questions.subtitle`)}</h3>
   <p class="questions_text">${g(`main.questions.text`)}</p>
   <button type="submit" form="questions-form" class="questions_btn"><span class="btn_questions_title">${g(`main.questions.button`)}</span></button>
   </div>
   <div class="contacts_block"
   data-aos="fade-left" 
   data-aos-duration="800" 
   data-aos-delay="200">
   <div class="back_green_bg"></div>
   <form id="questions-form" class="form">
   <input type="text" id="name" name="userName" placeholder=${g(`main.questions.namePlaceholder`)} class="form_input">
   <span class="error_name" data-error-for="name"></span>
   <input type="tel" id="tel" name="userTel" placeholder=${g(`main.questions.phonePlaceholder`)} class="form_input">
   <span class="error_tel" data-error-for="tel"></span>
   <textarea name="userComment" id="comment" placeholder=${g(`main.questions.commentPlacholder`)} class="form_textarea"></textarea>
   <span class="error_com" data-error-for="comment"></span>
   <div class="form_agree">
   <input class="checkbox_agree" type="checkbox" id="agree" name="agree">
   <label for="agree">${g(`main.questions.commentPlacholder`)}</label>
   </div>
   <span class="error_agree" data-error-for="agree"></span>
   </form>
   </div>
   </div>
   </div>
   </section>
   `,H=()=>{let e=document.querySelector(`.questions_btn`);e&&e.addEventListener(`click`,e=>{e.preventDefault();let t=!1,n=document.querySelector(`#name`),r=n.value,i=document.querySelector(`.error_name`),a=document.querySelector(`#tel`),o=a.value,s=document.querySelector(`.error_tel`),c=document.querySelector(`#comment`),l=c.value,u=document.querySelector(`.error_com`);r===``?(n.classList.add(`error_Form`),i.textContent=g(`main.questions.form.name.error1`),t=!0):r.length<3?(n.classList.add(`error_Form`),i.textContent=g(`main.questions.form.name.error2`),t=!0):(n.classList.remove(`error_Form`),i.textContent=``),o===``?(a.classList.add(`error_Form`),s.textContent=g(`main.questions.form.tel.error1`),t=!0):o.startsWith(`+`)?o.length<10||o.length>15?(a.classList.add(`error_Form`),s.textContent=g(`main.questions.form.tel.error3`),t=!0):isNaN(o)?(s.textContent=g(`main.questions.form.tel.error4`),t=!0):(a.classList.remove(`error_Form`),s.textContent=``):(a.classList.add(`error_Form`),s.textContent=g(`main.questions.form.tel.error2`),t=!0),l===``?(c.classList.add(`error_Form`),u.textContent=g(`main.questions.form.com.error1`),t=!0):(c.classList.remove(`error_Form`),u.textContent=``);let d=document.querySelector(`#agree`),f=document.querySelector(`label[for='agree']`),p=document.querySelector(`.error_agree`);if(d.checked?(f.classList.remove(`text_agree_checked`),p.textContent=``):(f.classList.add(`text_agree_checked`),p.textContent=g(`main.questions.form.agree.error1`),t=!0),!t){let e=document.querySelector(`.btn_questions_title`);e.textContent=g(`main.questions.successText`),document.querySelector(`#questions-form`).reset(),setTimeout(()=>{e.textContent=g(`main.questions.button`)},2e3)}})},U=[{icon:`data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_998_870)'%3e%3cpath%20d='M16.0003%202.66675C23.3643%202.66675%2029.3337%208.63608%2029.3337%2016.0001C29.3337%2023.3641%2023.3643%2029.3334%2016.0003%2029.3334C8.63633%2029.3334%202.66699%2023.3641%202.66699%2016.0001H5.33366C5.33366%2021.8907%2010.1097%2026.6667%2016.0003%2026.6667C21.891%2026.6667%2026.667%2021.8907%2026.667%2016.0001C26.667%2010.1094%2021.891%205.33341%2016.0003%205.33341C12.715%205.33341%209.77633%206.81875%207.82033%209.15342L10.667%2012.0001H2.66699V4.00008L5.92966%207.26142C8.37366%204.44808%2011.979%202.66675%2016.0003%202.66675ZM17.3337%209.33342V15.4467L21.6577%2019.7707L19.771%2021.6574L14.667%2016.5507V9.33342H17.3337Z'%20fill='%2327AE60'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_998_870'%3e%3crect%20width='32'%20height='32'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e`,text:`main.whyus.block1`},{icon:`data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_998_876)'%3e%3cg%20clip-path='url(%23clip1_998_876)'%3e%3cpath%20d='M21.9864%209.76347H27.542V11.9857H21.9864V9.76347ZM19.7642%2015.319H27.542V17.5412H19.7642V15.319ZM23.0975%2020.8746H27.542V23.0968H23.0975V20.8746ZM3.09753%2026.4301C3.09753%2024.0727%204.03404%2021.8117%205.70103%2020.1447C7.36802%2018.4777%209.62894%2017.5412%2011.9864%2017.5412C14.3439%2017.5412%2016.6048%2018.4777%2018.2718%2020.1447C19.9388%2021.8117%2020.8753%2024.0727%2020.8753%2026.4301H18.6531C18.6531%2024.662%2017.9507%2022.9663%2016.7005%2021.7161C15.4502%2020.4658%2013.7545%2019.7635%2011.9864%2019.7635C10.2183%2019.7635%208.52262%2020.4658%207.27238%2021.7161C6.02214%2022.9663%205.31976%2024.662%205.31976%2026.4301H3.09753ZM11.9864%2016.4301C8.30309%2016.4301%205.31976%2013.4468%205.31976%209.76347C5.31976%206.08013%208.30309%203.0968%2011.9864%203.0968C15.6698%203.0968%2018.6531%206.08013%2018.6531%209.76347C18.6531%2013.4468%2015.6698%2016.4301%2011.9864%2016.4301ZM11.9864%2014.2079C14.442%2014.2079%2016.4309%2012.219%2016.4309%209.76347C16.4309%207.30791%2014.442%205.31902%2011.9864%205.31902C9.53087%205.31902%207.54198%207.30791%207.54198%209.76347C7.54198%2012.219%209.53087%2014.2079%2011.9864%2014.2079Z'%20fill='%2327AE60'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_998_876'%3e%3crect%20width='32'%20height='32'%20fill='white'/%3e%3c/clipPath%3e%3cclipPath%20id='clip1_998_876'%3e%3crect%20width='26.6667'%20height='26.6667'%20fill='white'%20transform='translate(1.89246%203.0968)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e`,text:`main.whyus.block2`},{icon:`data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15.9993%2026.6667C21.8904%2026.6667%2026.666%2021.8911%2026.666%2016.0001C26.666%2010.109%2021.8904%205.33341%2015.9993%205.33341C10.1083%205.33341%205.33268%2010.109%205.33268%2016.0001C5.33268%2021.8911%2010.1083%2026.6667%2015.9993%2026.6667ZM15.9993%2029.3334C8.63555%2029.3334%202.66602%2023.3638%202.66602%2016.0001C2.66602%208.63628%208.63555%202.66675%2015.9993%202.66675C23.3631%202.66675%2029.3327%208.63628%2029.3327%2016.0001C29.3327%2023.3638%2023.3631%2029.3334%2015.9993%2029.3334ZM15.9993%2021.3334C18.9448%2021.3334%2021.3327%2018.9455%2021.3327%2016.0001C21.3327%2013.0546%2018.9448%2010.6667%2015.9993%2010.6667C13.0538%2010.6667%2010.666%2013.0546%2010.666%2016.0001C10.666%2018.9455%2013.0538%2021.3334%2015.9993%2021.3334ZM15.9993%2024.0001C11.5811%2024.0001%207.99935%2020.4183%207.99935%2016.0001C7.99935%2011.5818%2011.5811%208.00008%2015.9993%208.00008C20.4176%208.00008%2023.9993%2011.5818%2023.9993%2016.0001C23.9993%2020.4183%2020.4176%2024.0001%2015.9993%2024.0001ZM15.9993%2018.6667C14.5265%2018.6667%2013.3327%2017.4729%2013.3327%2016.0001C13.3327%2014.5273%2014.5265%2013.3334%2015.9993%2013.3334C17.4721%2013.3334%2018.666%2014.5273%2018.666%2016.0001C18.666%2017.4729%2017.4721%2018.6667%2015.9993%2018.6667Z'%20fill='%2327AE60'/%3e%3c/svg%3e`,text:`main.whyus.block3`},{icon:`/spec-tranc-site/assets/frame4(WhyUs)-DeMBZdz3.svg`,text:`main.whyus.block4`},{icon:`data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15.9988%2029.3334C9.37144%2029.3334%203.99886%2023.9609%203.99886%2017.3334C3.99886%2010.706%209.37144%205.33345%2015.9988%205.33345C22.6263%205.33345%2027.9988%2010.706%2027.9988%2017.3334C27.9988%2023.9609%2022.6263%2029.3334%2015.9988%2029.3334ZM15.9988%2026.6668C21.1535%2026.6668%2025.3321%2022.4881%2025.3321%2017.3334C25.3321%2012.1788%2021.1535%208.00012%2015.9988%208.00012C10.8442%208.00012%206.66552%2012.1788%206.66552%2017.3334C6.66552%2022.4881%2010.8442%2026.6668%2015.9988%2026.6668ZM17.3321%2017.3334H21.3321V20.0001H14.6655V10.6668H17.3321V17.3334ZM2.32812%208.37676L7.04218%203.66272L8.92779%205.54833L4.21375%2010.2624L2.32812%208.37676ZM24.9556%203.66272L29.6696%208.37676L27.784%2010.2624L23.0699%205.54833L24.9556%203.66272Z'%20fill='%2327AE60'/%3e%3c/svg%3e`,text:`main.whyus.block5`}],W=()=>U.map((e,t)=>`
    <div class="advantages_item"
    data-aos="fade-up"
    data-aos-delay="${t*100}">
    <img class="advantages_icon" src="${e.icon}" alt="Icon">
    <p class="advantages_text">${g(e.text)}</p>
    </div>
    `).join(``),G=()=>`
    <section id="advantages" class="advantages">
    <div class="containerAdvantages">
    <h1 class="advantages_title" 
    data-aos="fade" 
    data-aos-duration="1000">${g(`main.whyus.title`)}</h1>
    <div class="advantages_list">
    ${W()}
    </div>
    </div>
    </section>
    `,K=e=>`
        <main class="main">
            ${e()}
        </main>
    `,q=`/spec-tranc-site/assets/equipment-DXP4B6GV.jpg`,J=()=>`
    <section id="equipment" class="equipment">
    <div class="containerEquipment">
    <div class="equipment_container">
    <img class="equipment_img" src=${q} alt="Equipment" data-aos="fade-right" 
    data-aos-duration="800" 
    data-aos-delay="100" />
    <div class="equipment_content"
    data-aos="fade-left" 
    data-aos-duration="800"
    data-aos-delay="100">
    <h1 class="equipment_title" >${g(`main.equipment.title`)}</h1>
    <p class="equipment_subtitle">
    ${g(`main.equipment.subtitle`)}</p>
    <div class="equipment_buttons">
    <button id="eq_btn_to_questions" class="equipment_btn"><span class="equipment_btn_title">${g(`main.equipment.button1`)}</span></button>
    <button id="eq_btn_to_page" class="equipment_btn"><span class="equipment_btn_title">${g(`main.equipment.button2`)}</span></button>
    </div>

    </div>
    </div>
    </section>
    `,Y=()=>`
    ${C()}
    ${G()}
    ${J()}
    ${B()}
    ${j()}
    ${V()}
    ${N()}
    `,X=`/spec-tranc-site/assets/rent_img1-Bio4SFi-.png`,Z=`/spec-tranc-site/assets/rent_img2-B_fR9yBM.png`,Q=()=>`
    <section id="rent" class="rent">
    <div class="rent_container">
    <div class="rent_block one">
    <img class="img_rent" src=${X} alt="Rental of special equipment"
    data-aos="fade-right" 
    data-aos-duration="800" 
    data-aos-delay="200" />
    <div class="rent_right_text"
      data-aos="fade-left" data-aos-duration="800"
      data-aos-delay="200">
    <h1 class="rent_title">
    ${g(`pages.rent.special.title`)}
    </h1>
    <p class="rent_subtitle">${g(`pages.rent.special.subtitle`)}</p>
    
    <ul class="rent_price_list">
    <li class="rent_price_item">
    <div class="rent_tech">
      <span class="rent_tech_title">${g(`pages.rent.special.item1.name`)}</span>
      <span class="rent_tech_subtitle">${g(`pages.rent.special.item1.text`)}</span>
    </div>
    <span class="rent_line"></span>
  
    <div class="rent_price">
      <span class="price_item">850 Kč</span>
      <span class="price_time">${g(`pages.rent.special.slashHour`)}</span>
      <span class="price_divider">|</span>
      <span class="price_item">6 000 Kč</span>
      <span class="price_time">${g(`pages.rent.special.slashDay`)}</span>
    </div>
  </li>

     <li class="rent_price_item">
    <div class="rent_tech">
      <span class="rent_tech_title">${g(`pages.rent.special.item2.name`)}</span>
      <span class="rent_tech_subtitle">${g(`pages.rent.special.item2.text`)}</span>
    </div>
    <span class="rent_line"></span>
    <div class="rent_price">
      <span class="price_item">1 100 Kč</span>
      <span class="price_time">${g(`pages.rent.special.slashHour`)}</span>
      <span class="price_divider">|</span>
      <span class="price_item">8 000 Kč</span>
      <span class="price_time">${g(`pages.rent.special.slashDay`)}</span>
    </div>
  </li>
    <li class="rent_price_item">
    <div class="rent_tech">
      <span class="rent_tech_title">${g(`pages.rent.special.item3.name`)}</span>
      <span class="rent_tech_subtitle">${g(`pages.rent.special.item3.text`)}</span>
    </div>
    <span class="rent_line"></span>
    <div class="rent_price">
      <span class="price_item">1 500 Kč</span>
      <span class="price_time">${g(`pages.rent.special.slashHour`)}</span>
      <span class="price_divider">|</span>
      <span class="price_item">11 000 Kč</span>
      <span class="price_time">${g(`pages.rent.special.slashDay`)}</span>
    </div>
  </li>
</ul>
    </div>
    </div>



    <div class="rent_block two">
      <img class="img_rent" src=${Z} alt="Dump truck rental" 
           data-aos="fade-right" 
           data-aos-duration="800" 
           data-aos-delay="200"/>

      <div class="rent_right_text"
           data-aos="fade-left" 
           data-aos-duration="800" 
           data-aos-delay="200"> <h1 class="rent_title">${g(`pages.rent.trucks.title`)}</h1>
        <p class="rent_subtitle">
          ${g(`pages.rent.trucks.subtitle`)}
        </p>

    <ul class="rent_price_list">
    <li class="rent_price_item">
    <div class="rent_tech">
      <span class="rent_tech_title">${g(`pages.rent.trucks.item1.name`)}</span>
      <span class="rent_tech_subtitle">${g(`pages.rent.trucks.item1.text`)}</span>
    </div>
    <span class="rent_line"></span>
  
    <div class="rent_price">
      <span class="price_item">850 Kč</span>
      <span class="price_time">${g(`pages.rent.trucks.slashHour`)}</span>
      <span class="price_divider">|</span>
      <span class="price_item">6 500 Kč</span>
      <span class="price_time">${g(`pages.rent.trucks.slashDay`)}</span>
    </div>
  </li>

    <li class="rent_price_item">
    <div class="rent_tech">
      <span class="rent_tech_title">${g(`pages.rent.trucks.item2.name`)}</span>
      <span class="rent_tech_subtitle">${g(`pages.rent.trucks.item2.text`)}</span>
    </div>
    <span class="rent_line"></span>
  
    <div class="rent_price">
      <span class="price_item">950 Kč</span>
      <span class="price_time">${g(`pages.rent.trucks.slashHour`)}</span>
      <span class="price_divider">|</span>
      <span class="price_item">7 500 Kč</span>
      <span class="price_time">${g(`pages.rent.trucks.slashDay`)}</span>
    </div>
  </li>

    <li class="rent_price_item">
    <div class="rent_tech">
      <span class="rent_tech_title">${g(`pages.rent.trucks.item3.name`)}</span>
      <span class="rent_tech_subtitle">${g(`pages.rent.trucks.item3.text`)}</span>
    </div>
    <span class="rent_line"></span>
  
    <div class="rent_price">
      <span class="price_item">1 150 Kč</span>
      <span class="price_time">${g(`pages.rent.trucks.slashHour`)}</span>
      <span class="price_divider">|</span>
      <span class="price_item">9 500 Kč</span>
      <span class="price_time">${g(`pages.rent.trucks.slashDay`)}</span>
    </div>
  </li>

    </div>
    </div>
    </div>
    ${V()}
    </section>
  
  `,te=()=>`
  <section id="MaterialsPage" class="MaterialsPage"> 
  <div class="material_page_container">
  <div class="material_page_block"
  data-aos="fade" 
  data-aos-duration="800"
  data-aos-delay="100">
  <img class="imgMaterialPage" src=${P}  alt="Sand"/>
  <div class="material_page_content">
  <h1 class="material_page_title">
  ${g(`pages.materials.block1.title`)}</h1>
  <p class="material_page_subtitle">
  ${g(`pages.materials.block1.subtitle`)}
  </p>
  <a href="materials/sand" class="material_page_btn"><span class="material_page_title_btn">${g(`pages.materials.button`)}</span></a>
  </div>
  </div>




  <div class="material_page_block"
  data-aos="fade" 
  data-aos-duration="800"
  data-aos-delay="200">
  <img class="imgMaterialPage" src=${F} alt="Stone"/>
  <div class="material_page_content">
  <h1 class="material_page_title">
 ${g(`pages.materials.block2.title`)}</h1>
  <p class="material_page_subtitle">
  ${g(`pages.materials.block2.subtitle`)}
  </p>
  <a href="materials/sand" class="material_page_btn"><span class="material_page_title_btn">${g(`pages.materials.button`)}</span></a>
  </div>
  </div>


  <div class="material_page_block"
  data-aos="fade" 
  data-aos-duration="800"
  data-aos-delay="300">
  <img class="imgMaterialPage" src=${I} alt="Asphalt"/>
  <div class="material_page_content">
  <h1 class="material_page_title">
  ${g(`pages.materials.block3.title`)}</h1>
  <p class="material_page_subtitle">
  ${g(`pages.materials.block3.subtitle`)}
  </p>
  <a href="materials/sand" class="material_page_btn"><span class="material_page_title_btn">${g(`pages.materials.button`)}</span></a>
  </div>
  </div>


  <div class="material_page_block"
  data-aos="fade" 
  data-aos-duration="800"
  data-aos-delay="400">
  <img class="imgMaterialPage" src=${L} alt="Earth"/>
  <div class="material_page_content">
  <h1 class="material_page_title">
  ${g(`pages.materials.block4.title`)}</h1>
  <p class="material_page_subtitle">
  ${g(`pages.materials.block4.subtitle`)}
  </p>
  <a href="materials/sand" class="material_page_btn"><span class="material_page_title_btn">${g(`pages.materials.button`)}</span></a>
  </div>
  </div>
  </div>
  ${V()}
  </section>
  `,ne=`/spec-tranc-site/assets/tire-BvJy4z9R.png`,$=()=>`
    <div class="notfound_container">
    <div class="notfound_error">
    <span class="notfound_four">4</span>
    <span class="notfound_zero">
    <img src=${ne} alt="Wheel" class="notfound_wheel">
    
    </span>
    <span class="notfound_four">4</span>
    </div>
    <h1 class="notfound_title">${g(`errors.title`)}</h1>
    <p class="notfound_subtitle">${g(`errors.subtitle`)}</p>
    <a href="/spec-tranc-site/" class="notfound_btn">${g(`errors.button`)}</a>
    </div>
    `,re=()=>$(),ie=()=>$(),ae=e=>{l.default.base(`/spec-tranc-site`),(0,l.default)(`/`,t=>e(Y,t.pathname)),(0,l.default)(`/rent`,t=>e(Q,t.pathname)),(0,l.default)(`/materials`,t=>e(te,t.pathname)),(0,l.default)(`/about`,t=>e(re,t.pathname)),(0,l.default)(`/contacts`,t=>e(ie,t.pathname)),(0,l.default)(`*`,t=>e($,t.pathname)),(0,l.default)()};c(o(((e,t)=>{(function(n,r){typeof e==`object`&&typeof t==`object`?t.exports=r():typeof define==`function`&&define.amd?define([],r):typeof e==`object`?e.AOS=r():n.AOS=r()})(e,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p=`dist/`,t(0)}([function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=r((r(n(1)),n(6))),o=r(n(7)),s=r(n(8)),c=r(n(9)),l=r(n(10)),u=r(n(11)),d=r(n(14)),f=[],p=!1,m={offset:120,delay:0,easing:`ease`,duration:400,disable:!1,once:!1,startEvent:`DOMContentLoaded`,throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},h=function(){if(arguments.length>0&&arguments[0]!==void 0&&arguments[0]&&(p=!0),p)return f=(0,u.default)(f,m),(0,l.default)(f,m.once),f},g=function(){f=(0,d.default)(),h()},_=function(){f.forEach(function(e,t){e.node.removeAttribute(`data-aos`),e.node.removeAttribute(`data-aos-easing`),e.node.removeAttribute(`data-aos-duration`),e.node.removeAttribute(`data-aos-delay`)})},v=function(e){return e===!0||e===`mobile`&&c.default.mobile()||e===`phone`&&c.default.phone()||e===`tablet`&&c.default.tablet()||typeof e==`function`&&e()===!0};e.exports={init:function(e){m=i(m,e),f=(0,d.default)();var t=document.all&&!window.atob;return v(m.disable)||t?_():(m.disableMutationObserver||s.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),m.disableMutationObserver=!0),document.querySelector(`body`).setAttribute(`data-aos-easing`,m.easing),document.querySelector(`body`).setAttribute(`data-aos-duration`,m.duration),document.querySelector(`body`).setAttribute(`data-aos-delay`,m.delay),m.startEvent===`DOMContentLoaded`&&[`complete`,`interactive`].indexOf(document.readyState)>-1?h(!0):m.startEvent===`load`?window.addEventListener(m.startEvent,function(){h(!0)}):document.addEventListener(m.startEvent,function(){h(!0)}),window.addEventListener(`resize`,(0,o.default)(h,m.debounceDelay,!0)),window.addEventListener(`orientationchange`,(0,o.default)(h,m.debounceDelay,!0)),window.addEventListener(`scroll`,(0,a.default)(function(){(0,l.default)(f,m.once)},m.throttleDelay)),m.disableMutationObserver||s.default.ready(`[data-aos]`,g),f)},refresh:h,refreshHard:g}},function(e,t){},,,,,function(e,t){(function(t){function n(e,t,n){function r(t){var n=h,r=g;return h=g=void 0,w=t,v=e.apply(r,n)}function a(e){return w=e,y=setTimeout(u,t),T?r(e):v}function o(e){var n=e-b,r=e-w,i=t-n;return E?S(i,_-r):i}function c(e){var n=e-b,r=e-w;return b===void 0||n>=t||n<0||E&&r>=_}function u(){var e=C();return c(e)?d(e):void(y=setTimeout(u,o(e)))}function d(e){return y=void 0,D&&h?r(e):(h=g=void 0,v)}function f(){y!==void 0&&clearTimeout(y),w=0,h=b=g=y=void 0}function p(){return y===void 0?v:d(C())}function m(){var e=C(),n=c(e);if(h=arguments,g=this,b=e,n){if(y===void 0)return a(b);if(E)return y=setTimeout(u,t),r(b)}return y===void 0&&(y=setTimeout(u,t)),v}var h,g,_,v,y,b,w=0,T=!1,E=!1,D=!0;if(typeof e!=`function`)throw TypeError(l);return t=s(t)||0,i(n)&&(T=!!n.leading,E=`maxWait`in n,_=E?x(s(n.maxWait)||0,t):_,D=`trailing`in n?!!n.trailing:D),m.cancel=f,m.flush=p,m}function r(e,t,r){var a=!0,o=!0;if(typeof e!=`function`)throw TypeError(l);return i(r)&&(a=`leading`in r?!!r.leading:a,o=`trailing`in r?!!r.trailing:o),n(e,t,{leading:a,maxWait:t,trailing:o})}function i(e){var t=e===void 0?`undefined`:c(e);return!!e&&(t==`object`||t==`function`)}function a(e){return!!e&&(e===void 0?`undefined`:c(e))==`object`}function o(e){return(e===void 0?`undefined`:c(e))==`symbol`||a(e)&&b.call(e)==d}function s(e){if(typeof e==`number`)return e;if(o(e))return u;if(i(e)){var t=typeof e.valueOf==`function`?e.valueOf():e;e=i(t)?t+``:t}if(typeof e!=`string`)return e===0?e:+e;e=e.replace(f,``);var n=m.test(e);return n||h.test(e)?g(e.slice(2),n?2:8):p.test(e)?u:+e}var c=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},l=`Expected a function`,u=NaN,d=`[object Symbol]`,f=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,h=/^0o[0-7]+$/i,g=parseInt,_=(t===void 0?`undefined`:c(t))==`object`&&t&&t.Object===Object&&t,v=(typeof self>`u`?`undefined`:c(self))==`object`&&self&&self.Object===Object&&self,y=_||v||Function(`return this`)(),b=Object.prototype.toString,x=Math.max,S=Math.min,C=function(){return y.Date.now()};e.exports=r}).call(t,function(){return this}())},function(e,t){(function(t){function n(e,t,n){function i(t){var n=h,r=g;return h=g=void 0,w=t,v=e.apply(r,n)}function a(e){return w=e,y=setTimeout(u,t),T?i(e):v}function s(e){var n=e-C,r=e-w,i=t-n;return E?x(i,_-r):i}function l(e){var n=e-C,r=e-w;return C===void 0||n>=t||n<0||E&&r>=_}function u(){var e=S();return l(e)?d(e):void(y=setTimeout(u,s(e)))}function d(e){return y=void 0,D&&h?i(e):(h=g=void 0,v)}function f(){y!==void 0&&clearTimeout(y),w=0,h=C=g=y=void 0}function p(){return y===void 0?v:d(S())}function m(){var e=S(),n=l(e);if(h=arguments,g=this,C=e,n){if(y===void 0)return a(C);if(E)return y=setTimeout(u,t),i(C)}return y===void 0&&(y=setTimeout(u,t)),v}var h,g,_,v,y,C,w=0,T=!1,E=!1,D=!0;if(typeof e!=`function`)throw TypeError(c);return t=o(t)||0,r(n)&&(T=!!n.leading,E=`maxWait`in n,_=E?b(o(n.maxWait)||0,t):_,D=`trailing`in n?!!n.trailing:D),m.cancel=f,m.flush=p,m}function r(e){var t=e===void 0?`undefined`:s(e);return!!e&&(t==`object`||t==`function`)}function i(e){return!!e&&(e===void 0?`undefined`:s(e))==`object`}function a(e){return(e===void 0?`undefined`:s(e))==`symbol`||i(e)&&y.call(e)==u}function o(e){if(typeof e==`number`)return e;if(a(e))return l;if(r(e)){var t=typeof e.valueOf==`function`?e.valueOf():e;e=r(t)?t+``:t}if(typeof e!=`string`)return e===0?e:+e;e=e.replace(d,``);var n=p.test(e);return n||m.test(e)?h(e.slice(2),n?2:8):f.test(e)?l:+e}var s=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},c=`Expected a function`,l=NaN,u=`[object Symbol]`,d=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,h=parseInt,g=(t===void 0?`undefined`:s(t))==`object`&&t&&t.Object===Object&&t,_=(typeof self>`u`?`undefined`:s(self))==`object`&&self&&self.Object===Object&&self,v=g||_||Function(`return this`)(),y=Object.prototype.toString,b=Math.max,x=Math.min,S=function(){return v.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){function n(e){var t=void 0,r=void 0;for(t=0;t<e.length;t+=1)if(r=e[t],r.dataset&&r.dataset.aos||r.children&&n(r.children))return!0;return!1}function r(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function i(){return!!r()}function a(e,t){var n=window.document,i=new(r())(o);s=t,i.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function o(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),r=Array.prototype.slice.call(e.removedNodes);if(n(t.concat(r)))return s()})}Object.defineProperty(t,`__esModule`,{value:!0});var s=function(){};t.default={isSupported:i,ready:a}},function(e,t){function n(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function r(){return navigator.userAgent||navigator.vendor||window.opera||``}Object.defineProperty(t,`__esModule`,{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,o=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;t.default=new(function(){function e(){n(this,e)}return i(e,[{key:`phone`,value:function(){var e=r();return!(!a.test(e)&&!o.test(e.substr(0,4)))}},{key:`mobile`,value:function(){var e=r();return!(!s.test(e)&&!c.test(e.substr(0,4)))}},{key:`tablet`,value:function(){return this.mobile()&&!this.phone()}}]),e}())},function(e,t){Object.defineProperty(t,`__esModule`,{value:!0});var n=function(e,t,n){var r=e.node.getAttribute(`data-aos-once`);t>e.position?e.node.classList.add(`aos-animate`):r!==void 0&&(r===`false`||!n&&r!==`true`)&&e.node.classList.remove(`aos-animate`)};t.default=function(e,t){var r=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,a){n(e,i+r,t)})}},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,`__esModule`,{value:!0});var i=r(n(12));t.default=function(e,t){return e.forEach(function(e,n){e.node.classList.add(`aos-init`),e.position=(0,i.default)(e.node,t.offset)}),e}},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,`__esModule`,{value:!0});var i=r(n(13));t.default=function(e,t){var n=0,r=0,a=window.innerHeight,o={offset:e.getAttribute(`data-aos-offset`),anchor:e.getAttribute(`data-aos-anchor`),anchorPlacement:e.getAttribute(`data-aos-anchor-placement`)};switch(o.offset&&!isNaN(o.offset)&&(r=parseInt(o.offset)),o.anchor&&document.querySelectorAll(o.anchor)&&(e=document.querySelectorAll(o.anchor)[0]),n=(0,i.default)(e).top,o.anchorPlacement){case`top-bottom`:break;case`center-bottom`:n+=e.offsetHeight/2;break;case`bottom-bottom`:n+=e.offsetHeight;break;case`top-center`:n+=a/2;break;case`bottom-center`:n+=a/2+e.offsetHeight;break;case`center-center`:n+=a/2+e.offsetHeight/2;break;case`top-top`:n+=a;break;case`bottom-top`:n+=e.offsetHeight+a;break;case`center-top`:n+=e.offsetHeight/2+a}return o.anchorPlacement||o.offset||isNaN(t)||(r=t),n+r}},function(e,t){Object.defineProperty(t,`__esModule`,{value:!0}),t.default=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-(e.tagName==`BODY`?0:e.scrollLeft),n+=e.offsetTop-(e.tagName==`BODY`?0:e.scrollTop),e=e.offsetParent;return{top:n,left:t}}},function(e,t){Object.defineProperty(t,`__esModule`,{value:!0}),t.default=function(e){return e||=document.querySelectorAll(`[data-aos]`),Array.prototype.map.call(e,function(e){return{node:e}})}}])})}))(),1).default.init({once:!0,easing:`ease-out`,offset:50});var oe=()=>{ee(),H(),A(),document.querySelector(`.btn_header`).addEventListener(`click`,()=>{document.querySelector(`#questions`).scrollIntoView({behavior:`smooth`})});let e=document.querySelector(`.hero_btn`);e&&e.addEventListener(`click`,()=>{document.querySelector(`#questions`).scrollIntoView({behavior:`smooth`})});let t=document.querySelector(`#eq_btn_to_questions`);t&&t.addEventListener(`click`,()=>{document.querySelector(`#questions`).scrollIntoView({behavior:`smooth`})});let n=document.querySelector(`.burger_btn`);n&&n.addEventListener(`click`,()=>{document.querySelector(`#questions`).scrollIntoView({behavior:`smooth`})});let r=document.querySelector(`#eq_btn_to_page`);r&&r.addEventListener(`click`,()=>{l.default.show(`/rent`)})};ae((e,t)=>{document.querySelector(`#root`).innerHTML=`
    ${S(t)}
    ${K(e)}
    ${k(t)}
    `,window.scrollTo({top:0,behavior:`instant`}),oe()});
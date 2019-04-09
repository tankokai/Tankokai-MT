'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var baseUrl = document.location.pathname;
var examples = [];
var KEY_CODE_ESC = 27;
var currentFilter = {};

function parseParams() {
  var filterString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  return filterString.split('/').reduce(function (params, filter) {
    var _filter$split = filter.split('='),
        _filter$split2 = _slicedToArray(_filter$split, 2),
        key = _filter$split2[0],
        value = _filter$split2[1];

    params[key] = value;
    return params;
  }, {});
}

function getRouteByFilter(filter) {
  return (filter.tags.length ? '/tags=' + filter.tags.join(',') : '') + (filter.qwords ? '/qwords=' + filter.qwords : '') + (filter.version ? '/version=' + filter.version : '') + (filter.author ? '/author=' + filter.author : '');
}

function tagView(tag, filterUpdates) {
  return m("li.tag.dib", linkView(filterUpdates, tag));
}

function linkView(filterUpdates, children) {
  return m("a.dib.f7.b.db.pa1.link.dim.dark-gray.ba.b--black-20.mr1.mb1.helvetica", {
    className: filterUpdates.className || '',
    href: getRouteByFilter(Object.assign({}, currentFilter, filterUpdates)),
    oncreate: m.route.link
  }, children);
}

function currentFilterView() {
    return [
m(".mt3.mb4.measure.center", 	
m("form.pa1.black-80", 
  m(".measure",
    [
	m("input.fl.input-reset.ba.b--black-20.pa1.mb2.db.w-80-ns.w-70.helvetica[placeholder='Filter Tags'][autofocus]", {
    oncreate: function oncreate(_ref) {
      var dom = _ref.dom;
      return setTimeout(function () {
        return dom.focus();
      });
    }, // fix focus error old = setTimeout(dom.focus)
      
    onkeydown: function onkeydown(e) {
      if (e.keyCode === KEY_CODE_ESC) {
          currentFilter.qwords = '', m.route.set(getRouteByFilter(currentFilter));
      }
    },
      
    oninput: function oninput(e) {
      currentFilter.qwords = e.target.value; // fix change event.target for e.target
      m.route.set(getRouteByFilter(currentFilter));
    }
 	}),
 m("a.fr.f6.link.dim.br1.ph2.pv2.mb2.dib.white.bg-black[href='#0']",
   "Reset"
  ),	
    ]
  )
 ),



	  
 //currentFilter.qwords && linkView({
 //   className: 'clear',
 //    qwords: '',
 // }, 'x'),
	  
  m("ul.dib.toto.pa1", currentFilter.tags.map(function (tag) {
    return tagView(tag, {
      tags: currentFilter.tags.filter(function (t) {
        return tag !== t;
      })
    });
  })),

  




	
  currentFilter.version && linkView({
    className: 'version current b--dark-blue', // old css
    version: ''
  },currentFilter.version),
	  
  currentFilter.author && linkView({
    className: 'author current b--dark-red', // old css
    author: ''
  }, currentFilter.author),

 ),
    ];
}

function exampleTagsView(example) {
  return m("ul.list.ph0", example.tags.map(function (tag) {
    return tagView(tag, {
      tags: currentFilter.tags.includes(tag) ? currentFilter.tags : currentFilter.tags.concat(tag)
    });
  }));
}




// duplicate code
// function versionView(example) {
//  return linkView(
//    {
//      className: 'version',
//      version: example.mithrilVersion,
//    },
//    example.mithrilVersion
//  )
// }


function versionView(example) {
  return linkView({
    className: 'version', // old css
    version: example.mithrilVersion
  }, example.mithrilVersion);
}


function authorView(example) {
  return linkView({
    className: 'author',  // old css
    author: example.author
  }, example.author);
}






function matchesFilter(example) {
  if (currentFilter.tags.length && currentFilter.tags.some(function (tag) {
    return !example.tags.includes(tag);
  })) {
    return false;
  }
  if (currentFilter.qwords && example.tags.concat([example.name, example.description]).join('').indexOf(currentFilter.qwords) < 0) {
    return false;
  }
  if (currentFilter.version && example.mithrilVersion !== currentFilter.version) {
    return false;
  }
  if (currentFilter.author && example.author !== currentFilter.author) {
    return false;
  }
  return true;
}

function examplesView(examples) {
  return m("ul.list.mw7.center.pl1.helvetica", examples.filter(function (example) {
    return matchesFilter(example);
  }).map(function (example) {
    return [
  m("div" , m("li.w-100.bb.b--black-05.pb2.mt2.helvetica", {
      title: example.description
    }, [m("a.dib.black.link.dim.f6-ns.f7.fw6.lh-title.black.mv0.ttu.helvetica", {
      href: example.link
    }, example.name) ,
	m("a.link.dim",  { href: example.link },
	    m( 'img.fr.pr2.pt2', { src : example.image } ) ),
	exampleTagsView(example), versionView(example), authorView(example)])
   )]; })); 
}


function contributeView() {
    return m("div.mw7.center.pl1.pv4.helvetica", ['Contribute ', m("a.dark-red.link.dim.helvetica[href='https://github.com/porsager/flems']", 'Flems'), ' | ', m("a.dark-red.link.dim.helvetica[href='https://github.com/StephanHoyer/how-to-mithril']", 'How To Mithril'), '.' ]);
}

function headerViewa() {
return m("nav.bg-black-90.dt.w-100.border-box.pa3.ph5-ns",
  [
    m(".dtc.v-mid.w-75.tr",
      [
        m("a.link.dim.white.b.f6.f5-ns.dib.mr3.mr4-ns.helvetica[href='https://mithril.js.org/'][title='Mithril.js GitHub']", 
          "Mithril"
         ),
	          m("a.link.white.b.f6.f5-ns.dib.mr3.mr4-ns.helvetica[href='#'][title='and']", 
          "+"
		   ),
        m("a.link.dim.white.b.f6.f5-ns.dib.mr3.mr4-ns.helvetica[href='https://tachyons.io/'][title='Tachyons css GitHub']", 
          "Tachyons"
        )
      ]
    )
  ]
)
}


function headerViewb() {
return m("nav.dt.w-100.border-box.pa3.ph5-ns",
  [
    m("a.dtc.v-mid.mid-gray.link.dim.w-10[href='#'][title='Home']", 
      m("img.dib.w2.h2.br-100[alt='Site Name'][src='./img/240px.svg']")
    ),
    m(".dtc.v-mid.w-75.tr",
      [
       m("a.link.dim.b.black.f6.f5-ns.dib.mr3.mr4-ns.helvetica[href='https://github.com/tankokai/Tankokai-MT'][title='Tankokai MT GitHub']", 
          "Tankokai MT"
        )
      ]
    )
  ]
)
}



var app = {
  oninit: async function oninit() {
    examples = await m.request(baseUrl + 'examples.json');
  },
  view: function view(_ref2) {
    var attrs = _ref2.attrs;

    var params = parseParams(attrs.filter);
    currentFilter = {
      tags: params.tags ? params.tags.split(',') : [],
      qwords: params.qwords || '',
      version: params.version || '',
      author: params.author || 'tankokai-0.0.0'
    };
    return [headerViewa(), headerViewb(), currentFilterView(), examplesView(examples), contributeView()];
  }
};



m.route(document.body, '/', {
  '/': app,
  '/:filter...': app
});

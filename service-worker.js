/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "66193c8c0a9aec0c6886dc2dab538baa"
  },
  {
    "url": "assets/css/0.styles.b0d79c76.css",
    "revision": "acb882d5e0ff3a4406a58f558569c41c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.056c50d3.js",
    "revision": "dc7ba48bbf579c50bda9bb4c3fa682bf"
  },
  {
    "url": "assets/js/11.2c4b8c47.js",
    "revision": "369ef6990ef1dccc01bdfca52f34c082"
  },
  {
    "url": "assets/js/12.80f32d51.js",
    "revision": "cd57e24ab182ef51279e0eae9a13ff8b"
  },
  {
    "url": "assets/js/13.cd0ec34c.js",
    "revision": "07333b303710c6cc9ed7bad533020dce"
  },
  {
    "url": "assets/js/14.8c1f34ad.js",
    "revision": "587dbba6878b2a3a1cfbdbbdcbe6a73a"
  },
  {
    "url": "assets/js/15.49a6654c.js",
    "revision": "1397c77b2bb3b7715fb4bb1293816381"
  },
  {
    "url": "assets/js/16.22cc860c.js",
    "revision": "d01533e6262cd2304925e2096f2f9989"
  },
  {
    "url": "assets/js/17.f25f0266.js",
    "revision": "b152fea6e044a9c7085700acaec7229a"
  },
  {
    "url": "assets/js/18.bc8df447.js",
    "revision": "f9bcd1e836626a2c4100ade1592c20da"
  },
  {
    "url": "assets/js/19.660cfc60.js",
    "revision": "b0ffa7ae4dffdcccb0c3550a0683353e"
  },
  {
    "url": "assets/js/20.594991f6.js",
    "revision": "d25762d2ec6496b45014410d6827a73f"
  },
  {
    "url": "assets/js/21.d22ba2b6.js",
    "revision": "ea347e2c8a6fbe1d133e419ef43ca3df"
  },
  {
    "url": "assets/js/22.72261af2.js",
    "revision": "88483cb437eaa52d3e7c701601be3dc4"
  },
  {
    "url": "assets/js/23.9f62a99f.js",
    "revision": "3dfd01a3e1a9a3758eac5ed51b03eb55"
  },
  {
    "url": "assets/js/24.165e8e65.js",
    "revision": "47665414132e430b66167907c09b4fbc"
  },
  {
    "url": "assets/js/25.07d4ffe8.js",
    "revision": "01375d9e3a81c7e151231f62af710344"
  },
  {
    "url": "assets/js/26.4f318fe6.js",
    "revision": "e76c6317b4c68513a07c0335ef174f3d"
  },
  {
    "url": "assets/js/27.6600e043.js",
    "revision": "38a3f299e59fb0f2c6160cf71fbed9bc"
  },
  {
    "url": "assets/js/28.fe9e453c.js",
    "revision": "a4c45dfb48edc3d5fcf978ca556be4e5"
  },
  {
    "url": "assets/js/29.c9e47194.js",
    "revision": "eb50c9a5054024386559122f536046f6"
  },
  {
    "url": "assets/js/3.679ea204.js",
    "revision": "0bbae4ebf8897035644e0f50030d72e8"
  },
  {
    "url": "assets/js/30.e12175d0.js",
    "revision": "1ad6f394d52925963a1aaf3259ac45a4"
  },
  {
    "url": "assets/js/31.f77a7114.js",
    "revision": "cfa4fd3b9304b02f897567106f3a38f0"
  },
  {
    "url": "assets/js/32.0d9d8c9e.js",
    "revision": "983cec2d0b8320dea2b73f3063e5d1cb"
  },
  {
    "url": "assets/js/33.da0bc5d3.js",
    "revision": "be5fbd06f6009d77c74ff723aa95307c"
  },
  {
    "url": "assets/js/34.dd859d6f.js",
    "revision": "06d3e34e01162df18e02e919b32bb8d1"
  },
  {
    "url": "assets/js/35.eecffe47.js",
    "revision": "642e874391abae44e26634e5208fb9d9"
  },
  {
    "url": "assets/js/36.59c9800d.js",
    "revision": "34625174a187f9ced060f83659a35005"
  },
  {
    "url": "assets/js/37.d35bb3ab.js",
    "revision": "cdc653e7bf53e22b3633ec4fc7b4a0e9"
  },
  {
    "url": "assets/js/38.53af4a13.js",
    "revision": "309ea10b973d2f90d83a88e0185c4a9b"
  },
  {
    "url": "assets/js/39.1d332b97.js",
    "revision": "8a1b504324692ceef02fa174b4f16c8d"
  },
  {
    "url": "assets/js/4.42d54af8.js",
    "revision": "a8f783d48ffc5b4fa5d5134473048262"
  },
  {
    "url": "assets/js/40.9eef6fd5.js",
    "revision": "e9f6f3c3b380be0171ad92a8286ea08e"
  },
  {
    "url": "assets/js/41.e43a1732.js",
    "revision": "d108518a898a2d76fb4f833eefe98678"
  },
  {
    "url": "assets/js/42.e2fd61a1.js",
    "revision": "922f5272afb1ae97def27fb40043973a"
  },
  {
    "url": "assets/js/43.e3d45e58.js",
    "revision": "cce8fc88fc846b2a264e3ccb8c735e41"
  },
  {
    "url": "assets/js/44.ec1cdea9.js",
    "revision": "5c72a338304a91a7f85e7b27a34db69f"
  },
  {
    "url": "assets/js/45.3498759f.js",
    "revision": "93d57f2e3d814e959a8b682b375356d0"
  },
  {
    "url": "assets/js/46.bd1e8dac.js",
    "revision": "e71911a8eb2714a71f17f8995a3cb2d1"
  },
  {
    "url": "assets/js/47.08608f5f.js",
    "revision": "c54337500d32a1062435b5611f037f0d"
  },
  {
    "url": "assets/js/48.177979ca.js",
    "revision": "3659b62c7a8ddf524077be3458cdc928"
  },
  {
    "url": "assets/js/49.429b29cb.js",
    "revision": "7af34d53bb6ce160466c338e355e00a1"
  },
  {
    "url": "assets/js/5.aac4eebf.js",
    "revision": "6c113221ab3e39a2fc0f6c88218eeed4"
  },
  {
    "url": "assets/js/50.1cfffc4c.js",
    "revision": "f6320f9491060ed2e4a8cd5557d5fcf9"
  },
  {
    "url": "assets/js/51.64e8697a.js",
    "revision": "095c0d0799ae47c316e5e1c7a8bcc756"
  },
  {
    "url": "assets/js/52.43178b5d.js",
    "revision": "e022c1fcb8798903d3fde8d86b47048e"
  },
  {
    "url": "assets/js/53.318725f0.js",
    "revision": "8bb0ab375bf952917b810d8146885cf8"
  },
  {
    "url": "assets/js/54.2f961444.js",
    "revision": "0d6a62148cd68e1569408abf2d7cda22"
  },
  {
    "url": "assets/js/55.67bab3ce.js",
    "revision": "84bef58c9950c509bd69178a838064d5"
  },
  {
    "url": "assets/js/56.d07e1922.js",
    "revision": "5aecebafee7222aeb637177115d43827"
  },
  {
    "url": "assets/js/57.5452a3c5.js",
    "revision": "0ce7087c56d9d7b8ffd1925e8915d024"
  },
  {
    "url": "assets/js/58.7ae86bb1.js",
    "revision": "a4078159398241057819572b9b83253c"
  },
  {
    "url": "assets/js/59.e89529b2.js",
    "revision": "1f75758b37d4c61563cfc4fe6d042457"
  },
  {
    "url": "assets/js/6.90ef92ef.js",
    "revision": "ce795d1e5b0bb577c7fa969a0272a090"
  },
  {
    "url": "assets/js/60.c3889f51.js",
    "revision": "d408600453fa92ab5a4addf260358d3a"
  },
  {
    "url": "assets/js/61.d480d5c9.js",
    "revision": "16eb53c1835aa06ccf7958d9428a873b"
  },
  {
    "url": "assets/js/62.26ffd564.js",
    "revision": "bbc3a553611cc74baae75fdcc115a31d"
  },
  {
    "url": "assets/js/63.104e7ff8.js",
    "revision": "c3ef2ea6d2d51b91cc19a1c117a21dff"
  },
  {
    "url": "assets/js/64.f33d8c94.js",
    "revision": "77ba932f14cc7ef17c96e2a4705d8c75"
  },
  {
    "url": "assets/js/65.f66c95d4.js",
    "revision": "5e3cadc6a500106cd9cdbcdbafffeae8"
  },
  {
    "url": "assets/js/66.abc7ea5a.js",
    "revision": "1cc0975a03e2659d5f965e8bda13165a"
  },
  {
    "url": "assets/js/67.ff8c8364.js",
    "revision": "75a2d7616365bd91f2a11ffc28e86141"
  },
  {
    "url": "assets/js/68.1433f8f3.js",
    "revision": "c457507d10fabdd6fbceea59c451baa8"
  },
  {
    "url": "assets/js/69.c74a9cea.js",
    "revision": "7a2c048d6f7f133c352bdc89c4a633e5"
  },
  {
    "url": "assets/js/7.99cab0ec.js",
    "revision": "92b2aebd862cb5c0b02c4826e564ade3"
  },
  {
    "url": "assets/js/70.b9dfcfd9.js",
    "revision": "6f4561c818fc4752f4743d56f1b89ee2"
  },
  {
    "url": "assets/js/8.01225e4f.js",
    "revision": "e37097a46069007554381cc2ca8f0c6b"
  },
  {
    "url": "assets/js/9.236e7410.js",
    "revision": "bc1d36a9b5098deb3ad8e1ebb0381dc0"
  },
  {
    "url": "assets/js/app.96531e86.js",
    "revision": "65a479b806d10a4204fc43af3e9d85ec"
  },
  {
    "url": "assets/js/vendors~docsearch.78000d06.js",
    "revision": "0693e04bcc46d4e00e6c3273f8b35226"
  },
  {
    "url": "compiler/ast.html",
    "revision": "56571aa08b2fa8e5c1a43f9f330bf14a"
  },
  {
    "url": "compiler/binder.html",
    "revision": "5d08d35ac2a0da1aca34040ef744fb5a"
  },
  {
    "url": "compiler/checker.html",
    "revision": "4431e9f1c32aa55da8121521d0b2b530"
  },
  {
    "url": "compiler/emitter.html",
    "revision": "f0b2877c7c9435101f07c9caadef23aa"
  },
  {
    "url": "compiler/overview.html",
    "revision": "185f78cb14d3e0e483e5f6353b09720f"
  },
  {
    "url": "compiler/parser.html",
    "revision": "607150621b19411ea8d0fe5852beab68"
  },
  {
    "url": "compiler/program.html",
    "revision": "737ae2870445661e94f1303362595325"
  },
  {
    "url": "compiler/scanner.html",
    "revision": "4219e426e492bd544fe79de62007f2f5"
  },
  {
    "url": "contact.png",
    "revision": "a6cf2f922478f7839d9fa1f5c21bb3db"
  },
  {
    "url": "error/common.html",
    "revision": "80e17499a5ce5b2fd7a35b9219f2d02e"
  },
  {
    "url": "error/interpreting.html",
    "revision": "aa42bd2ee70b2fcaad8d8f106a132700"
  },
  {
    "url": "ide.png",
    "revision": "0552400adbb2b3fcbed10a98a02e2516"
  },
  {
    "url": "index.html",
    "revision": "7082ebe7a3e55e9e0971f779449464e9"
  },
  {
    "url": "jsx/nonReactJSX.html",
    "revision": "1afa8b9f1377e62958cf40d23c4435af"
  },
  {
    "url": "jsx/reactJSX.html",
    "revision": "b6a71df2e9c958fe7b03019723bba68d"
  },
  {
    "url": "jsx/support.html",
    "revision": "c3f7d284fa939d8c8760013994a88511"
  },
  {
    "url": "logo.png",
    "revision": "166813938a8a65cf3197fa7da1d131f4"
  },
  {
    "url": "project/compilationContext.html",
    "revision": "f6cd2e73e990058b866f30621c200f85"
  },
  {
    "url": "project/declarationspaces.html",
    "revision": "518106b7a448361eaa3bc603172f1b51"
  },
  {
    "url": "project/dynamicImportExpressions.html",
    "revision": "e322271333b54c0f4bf15af43b965375"
  },
  {
    "url": "project/modules.html",
    "revision": "79394daac6b025e4cbdf90128671e441"
  },
  {
    "url": "project/namespaces.html",
    "revision": "e25c317e92ad929439714181530e9ef7"
  },
  {
    "url": "tips/avoidExportDefault.html",
    "revision": "0b02caae8d28d67e7c75b3d7ede55934"
  },
  {
    "url": "tips/barrel.html",
    "revision": "edee86a9ba61410cc57b1134beaaaaec"
  },
  {
    "url": "tips/bind.html",
    "revision": "7f48decf6a1f63ff37be33d1fcd712f7"
  },
  {
    "url": "tips/buildToggles.html",
    "revision": "27ba80328f5fb73a9428c851370b5264"
  },
  {
    "url": "tips/classAreUseful.html",
    "revision": "61aced492ab72b5b2f577cd043a7d025"
  },
  {
    "url": "tips/covarianceAndContravariance.html",
    "revision": "eacbb431a8c2bb3d740194fe5cb8b23d"
  },
  {
    "url": "tips/createArrays.html",
    "revision": "569df75f370626346b018214a40bbef1"
  },
  {
    "url": "tips/curry.html",
    "revision": "f752bed46e87d5543e0282b448055e75"
  },
  {
    "url": "tips/functionParameters.html",
    "revision": "beff25e8379560a25f20ecd70d317dc4"
  },
  {
    "url": "tips/lazyObjectLiteralInitialization.html",
    "revision": "a2752ba463741bea0d57abb82e08671f"
  },
  {
    "url": "tips/limitPropertySetters.html",
    "revision": "ed8065cf2915e677af51cada2a9ac716"
  },
  {
    "url": "tips/metadata.html",
    "revision": "6a907e7194ac3af469facf79a8e19fb0"
  },
  {
    "url": "tips/nominalTyping.html",
    "revision": "56f54234d91e31bdd532fe6c713b63c3"
  },
  {
    "url": "tips/outFileCaution.html",
    "revision": "070bc60006b1d0d18e1b34522ee1de72"
  },
  {
    "url": "tips/singletonPatern.html",
    "revision": "1d8e44b63e9f8831ddb14dde69f5fc9c"
  },
  {
    "url": "tips/statefulFunctions.html",
    "revision": "ca365623c9776cc08799eb2386028c2b"
  },
  {
    "url": "tips/staticConstructors.html",
    "revision": "a1c8c2477e5b37b0781ffbe20887d201"
  },
  {
    "url": "tips/stringBasedEmuns.html",
    "revision": "dd7483e22d22edd86eb2850e029ef6d7"
  },
  {
    "url": "tips/truthy.html",
    "revision": "eaeed957aded1e4c0829bbb17dca0f46"
  },
  {
    "url": "tips/typeInstantiation.html",
    "revision": "8ea6c74e03975d7e661b1a36bdf400d4"
  },
  {
    "url": "tips/typesafeEventEmitter.html",
    "revision": "57221b98b7098ba3c35806c6541e6241"
  },
  {
    "url": "typescript-downloads.jpg",
    "revision": "c820bb267e14bd6881db03696f3ae603"
  },
  {
    "url": "typings/ambient.html",
    "revision": "8a650c4d58ec93adfa63aeb1805d7d0e"
  },
  {
    "url": "typings/callable.html",
    "revision": "1aa13d7158f008517a68d4ff6f483028"
  },
  {
    "url": "typings/discrominatedUnion.html",
    "revision": "1785e7c7ad30067411031980a5a67257"
  },
  {
    "url": "typings/enums.html",
    "revision": "43888c74fb70612a7db04fb509f0d469"
  },
  {
    "url": "typings/exceptionsHanding.html",
    "revision": "174fb4ba024d69fe540156939f157633"
  },
  {
    "url": "typings/freshness.html",
    "revision": "48f8942fceec32061c53f8ff169ad438"
  },
  {
    "url": "typings/functions.html",
    "revision": "2a2ef991fb1bf413f79fe116dc962c15"
  },
  {
    "url": "typings/generices.html",
    "revision": "c0cd290bc162f4f13baaa7ee38626356"
  },
  {
    "url": "typings/indexSignatures.html",
    "revision": "17674b156e28e8879fb01d3dc456a8f1"
  },
  {
    "url": "typings/interfaces.html",
    "revision": "85da78bf71b922d9b25eaac5181e5621"
  },
  {
    "url": "typings/lib.html",
    "revision": "1a2e30e1b3bf37d689a50b4605f7230a"
  },
  {
    "url": "typings/literals.html",
    "revision": "4de5847e69222c832389ea9f46a6306e"
  },
  {
    "url": "typings/migrating.html",
    "revision": "6c1ce4a21863e3b3139767dcf35f76cb"
  },
  {
    "url": "typings/mixins.html",
    "revision": "d424cac107fce4236996d89774fe10b9"
  },
  {
    "url": "typings/movingTypes.html",
    "revision": "34440125de538b4b28311ca153ffaa7f"
  },
  {
    "url": "typings/neverType.html",
    "revision": "58c8c0101f185c40247c0db9fb3db576"
  },
  {
    "url": "typings/overview.html",
    "revision": "591320a828493cc045c59b80fe413602"
  },
  {
    "url": "typings/readonly.html",
    "revision": "1f8c69b6953d27d7024baa1d6ae61632"
  },
  {
    "url": "typings/thisType.html",
    "revision": "a8f8752ff0f4a495d40178b9ec16f099"
  },
  {
    "url": "typings/typeAssertion.html",
    "revision": "6bb62724505f1da6949d97edf9f2af43"
  },
  {
    "url": "typings/typeCompatibility.html",
    "revision": "f911a8fae520fc69c47cc3a1eb245b0b"
  },
  {
    "url": "typings/typeGuard.html",
    "revision": "9e9d1090f994df1ccd8954af060c64e7"
  },
  {
    "url": "typings/typeInference.html",
    "revision": "0721509a41e725fff7615072a69e0c39"
  },
  {
    "url": "typings/types.html",
    "revision": "4f429d3f1bf496b14e50e45443ed0934"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

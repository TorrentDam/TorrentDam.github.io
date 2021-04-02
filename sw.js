'use strict';
import * as $j_main$002dsw from "./main-sw.js";
function $s_Ldefault_ServiceWorker__init__V() {
  $m_Ldefault_ServiceWorker$().init__V()
}
/** @constructor */
function $c_Ldefault_ServiceWorker$() {
  /*<skip>*/
}
$c_Ldefault_ServiceWorker$.prototype = new $j_main$002dsw.$h_O();
$c_Ldefault_ServiceWorker$.prototype.constructor = $c_Ldefault_ServiceWorker$;
/** @constructor */
function $h_Ldefault_ServiceWorker$() {
  /*<skip>*/
}
$h_Ldefault_ServiceWorker$.prototype = $c_Ldefault_ServiceWorker$.prototype;
$c_Ldefault_ServiceWorker$.prototype.init__V = (function() {
  $j_main$002dsw.$m_Lorg_scalajs_dom_package$().console__Lorg_scalajs_dom_raw_Console().info("ServiceWorker.init")
});
var $d_Ldefault_ServiceWorker$ = new $j_main$002dsw.$TypeData().initClass({
  Ldefault_ServiceWorker$: 0
}, false, "default.ServiceWorker$", {
  Ldefault_ServiceWorker$: 1,
  O: 1
});
$c_Ldefault_ServiceWorker$.prototype.$classData = $d_Ldefault_ServiceWorker$;
var $n_Ldefault_ServiceWorker$;
function $m_Ldefault_ServiceWorker$() {
  if ((!$n_Ldefault_ServiceWorker$)) {
    $n_Ldefault_ServiceWorker$ = new $c_Ldefault_ServiceWorker$()
  };
  return $n_Ldefault_ServiceWorker$
}
$s_Ldefault_ServiceWorker__init__V();
//# sourceMappingURL=sw.js.map

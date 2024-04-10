import { useSSRContext, defineComponent, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import LocationSVG from './location-BQME8RIF.mjs';
import TimeSVG from './time-DNuJjEiW.mjs';
import PhoneSVG from './phone-Cq8sPugy.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './nuxt-icon-DlqTrmoT.mjs';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:net';
import 'node:path';
import 'vue-router';

const _imports_0 = publicAssetsURL("/images/bg.jpg");
const _imports_1 = publicAssetsURL("/images/door.png");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "relative h-300" }, _attrs))} data-v-873128c5><div class="flex flex-col gap-30 px-3.5 lg:flex-row lg:px-10 justify-between items-center max-w-360 mx-auto pt-10" data-v-873128c5><div class="flex flex-col gap-3.5" data-v-873128c5><div class="flex flex-row" data-v-873128c5>`);
      _push(ssrRenderComponent(unref(LocationSVG), { class: "text-red text-4xl" }, null, _parent));
      _push(`<p class="ml-2" data-v-873128c5> \u0423\u0441\u043B\u0443\u0433\u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B \u0432 <br data-v-873128c5><b data-v-873128c5>\u041C\u0438\u043D\u0441\u043A\u0435</b> \u0438 <b data-v-873128c5>\u041C\u0438\u043D\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438</b></p></div><div class="flex flex-row tracking-wide" data-v-873128c5>`);
      _push(ssrRenderComponent(unref(TimeSVG), { class: "text-red text-4xl" }, null, _parent));
      _push(`<p class="ml-2" data-v-873128c5> \u0412\u0440\u0435\u043C\u044F \u0440\u0430\u0431\u043E\u0442\u044B: \u0441 <br data-v-873128c5><b data-v-873128c5>8:00</b> \u0434\u043E <b data-v-873128c5>23:00</b> \u0431\u0435\u0437 \u0432\u044B\u0445\u043E\u0434\u043D\u044B\u0445 </p></div></div><div class="" data-v-873128c5><p class="text-xl" data-v-873128c5>Fix My Doors</p></div><div class="flex flex-col items-center lg:flex-row" data-v-873128c5>`);
      _push(ssrRenderComponent(unref(PhoneSVG), { class: "phone-icon text-[#000] text-6xl" }, null, _parent));
      _push(`<div class="ml-2" data-v-873128c5><p class="text-center lg:text-left" data-v-873128c5> \u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u0435 \u043D\u0430\u043C, \u0438 \u043C\u044B \u0441 \u0443\u0434\u043E\u0432\u043E\u043B\u044C\u0441\u0442\u0432\u0438\u0435\u043C \u043E\u043A\u0430\u0436\u0435\u043C <br data-v-873128c5> \u0432\u0430\u043C \u0432\u0441\u044E \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u0443\u044E \u043F\u043E\u043C\u043E\u0449\u044C \u0438 \u043E\u0442\u0432\u0435\u0442\u0438\u043C \u043D\u0430 \u0432\u0441\u0435 \u0432\u0430\u0448\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B. </p><a class="text-4xl font-600 text-red decoration-none flex mt-2 justify-center lg:justify-start" href="tel:+375297066446" data-v-873128c5>+375 (29) 706-64-46</a></div></div></div><img${ssrRenderAttr("src", _imports_0)} class="w-full h-full object-cover absolute bottom-0 top-0 -z-1 blur" data-v-873128c5><div class="flex flex-row mt-40 items-center justify-center mx-auto gap-20" data-v-873128c5><img class="w-80"${ssrRenderAttr("src", _imports_1)} data-v-873128c5><p class="max-w-180 text-center leading-normal text-2xl" data-v-873128c5> \u0420\u0430\u0441\u043F\u0430\u0445\u043D\u0438\u0442\u0435 \u0434\u0432\u0435\u0440\u0438 \u043A \u0431\u0435\u0437\u0443\u043F\u0440\u0435\u0447\u043D\u043E\u043C\u0443 \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u0443 \u0438 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438 \u0441 \u043D\u0430\u0448\u0435\u0439 \u043F\u043E\u043C\u043E\u0449\u044C\u044E! <br data-v-873128c5>\u041C\u044B - \u0432\u0430\u0448 \u043D\u0430\u0434\u0435\u0436\u043D\u044B\u0439 \u043F\u0430\u0440\u0442\u043D\u0435\u0440 \u0432 \u043C\u0438\u0440\u0435 \u0440\u0435\u043C\u043E\u043D\u0442\u0430 \u0438 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u044F \u0434\u0432\u0435\u0440\u0435\u0439. \u041D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E \u043E\u0442 \u0442\u043E\u0433\u043E, \u0441\u043B\u043E\u043C\u0430\u043B\u0441\u044F \u043B\u0438 \u0437\u0430\u043C\u043E\u043A \u0438\u043B\u0438 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0440\u0435\u043C\u043E\u043D\u0442 \u0434\u0432\u0435\u0440\u043D\u043E\u0433\u043E \u043F\u043E\u043B\u043E\u0442\u043D\u0430, \u043D\u0430\u0448\u0438 \u0432\u044B\u0441\u043E\u043A\u043E\u043A\u0432\u0430\u043B\u0438\u0444\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B \u0433\u043E\u0442\u043E\u0432\u044B \u043E\u0442\u0432\u0435\u0442\u0438\u0442\u044C \u043D\u0430 \u0432\u0430\u0448 \u0432\u044B\u0437\u043E\u0432. <br data-v-873128c5><br data-v-873128c5> \u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u0435 \u043D\u0430\u043C \u043F\u043E \u043D\u043E\u043C\u0435\u0440\u0443 <b class="text-red text-4xl" data-v-873128c5>+375 (29) 706-64-46</b>, \u0438 \u043C\u044B \u0441\u0434\u0435\u043B\u0430\u0435\u043C \u0432\u0441\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0435, \u0447\u0442\u043E\u0431\u044B \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0442\u044C \u0432\u0430\u0441 \u043D\u0430\u0434\u0435\u0436\u043D\u043E\u0439 \u0437\u0430\u0449\u0438\u0442\u043E\u0439 \u0438 \u0431\u0435\u0437\u0443\u043F\u0440\u0435\u0447\u043D\u044B\u043C \u0441\u0442\u0438\u043B\u0435\u043C. </p></div></header>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-873128c5"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Content.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Header = __nuxt_component_0;
  const _component_Content = __nuxt_component_1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(ssrRenderComponent(_component_Content, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-DSmxRtgh.mjs.map

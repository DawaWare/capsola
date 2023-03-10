"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9083],{9083:(S,v,r)=>{r.r(v),r.d(v,{TabsPageModule:()=>W});var d=r(6895),g=r(433),a=r(4556),c=r(1407),m=r(655),h=r(7579),f=r(727);class C extends f.w0{constructor(o,t){super()}schedule(o,t=0){return this}}const T={setInterval(n,o,...t){const{delegate:s}=T;return null!=s&&s.setInterval?s.setInterval(n,o,...t):setInterval(n,o,...t)},clearInterval(n){const{delegate:o}=T;return((null==o?void 0:o.clearInterval)||clearInterval)(n)},delegate:void 0};var I=r(8737);const x={now:()=>(x.delegate||Date).now(),delegate:void 0};class y{constructor(o,t=y.now){this.schedulerActionCtor=o,this.now=t}schedule(o,t=0,s){return new this.schedulerActionCtor(this,o).schedule(s,t)}}y.now=x.now;const w=new class A extends y{constructor(o,t=y.now){super(o,t),this.actions=[],this._active=!1}flush(o){const{actions:t}=this;if(this._active)return void t.push(o);let s;this._active=!0;do{if(s=o.execute(o.state,o.delay))break}while(o=t.shift());if(this._active=!1,s){for(;o=t.shift();)o.unsubscribe();throw s}}}(class Z extends C{constructor(o,t){super(o,t),this.scheduler=o,this.work=t,this.pending=!1}schedule(o,t=0){var s;if(this.closed)return this;this.state=o;const i=this.id,l=this.scheduler;return null!=i&&(this.id=this.recycleAsyncId(l,i,t)),this.pending=!0,this.delay=t,this.id=null!==(s=this.id)&&void 0!==s?s:this.requestAsyncId(l,this.id,t),this}requestAsyncId(o,t,s=0){return T.setInterval(o.flush.bind(o,this),s)}recycleAsyncId(o,t,s=0){if(null!=s&&this.delay===s&&!1===this.pending)return t;null!=t&&T.clearInterval(t)}execute(o,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const s=this._execute(o,t);if(s)return s;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(o,t){let i,s=!1;try{this.work(o)}catch(l){s=!0,i=l||new Error("Scheduled action threw falsy error")}if(s)return this.unsubscribe(),i}unsubscribe(){if(!this.closed){const{id:o,scheduler:t}=this,{actions:s}=t;this.work=this.state=this.scheduler=null,this.pending=!1,(0,I.P)(s,this),null!=o&&(this.id=this.recycleAsyncId(t,o,null)),this.delay=null,super.unsubscribe()}}});var O=r(4482),H=r(5403),J=r(7266),e=r(8256),N=r(649),D=r(1188),K=r(5260);function z(n,o){1&n&&(e.TgZ(0,"h3"),e._uU(1,"Fetching drugs, please wait..."),e.qZA())}function E(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",13)(1,"ion-text",14)(2,"h3"),e._uU(3," No Drugs Found for input "),e.TgZ(4,"ion-text",0),e._uU(5),e.qZA(),e._uU(6," do you want to use AI to find the required drug? "),e.qZA(),e.TgZ(7,"ion-button",15),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.doApproximateSearch())}),e._uU(8,"Use AI"),e.qZA()()()}if(2&n){const t=e.oxw();e.xp6(5),e.Oqu(t.searchTerm)}}function B(n,o){1&n&&(e.TgZ(0,"div",13)(1,"ion-text",14)(2,"h3"),e._uU(3,"No history available yet"),e.qZA()()())}function F(n,o){if(1&n&&(e.TgZ(0,"p",22),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.hij(" ",t.activeingredient||"No Known ActiveIngredient"," ")}}function Y(n,o){if(1&n&&(e.TgZ(0,"p",22),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit,s=e.oxw();e.xp6(1),e.hij(" ",t[s.searchKey]," ")}}function R(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div")(1,"div",16),e.NdJ("click",function(){const l=e.CHM(t).$implicit,u=e.oxw();return e.KtG(u.openDrugDetails(l))}),e.TgZ(2,"div",17),e._UZ(3,"ion-img",18),e.qZA(),e.TgZ(4,"div",19)(5,"ion-text",0)(6,"h3",20),e._uU(7),e.qZA()(),e.TgZ(8,"ion-text",14),e.YNc(9,F,2,1,"p",21),e.YNc(10,Y,2,1,"p",21),e.qZA()()()()}if(2&n){const t=o.$implicit,s=e.oxw();e.xp6(3),e.Q6J("src",s.getDrugImage(t.id)),e.xp6(4),e.Oqu(t.tradename),e.xp6(2),e.Q6J("ngIf","tradename"===s.searchKey),e.xp6(1),e.Q6J("ngIf","tradename"!==s.searchKey)}}let b=(()=>{class n{constructor(t,s,i,l,u,P){this.drugsService=t,this.alertController=s,this.storage=i,this.router=l,this.route=u,this.analytics=P,this.searchTerm="",this.searchTerm$=new h.x,this.drugs=[],this.drugsToShow=[],this.worker=new Worker(r.tu(new URL(r.p+r.u(954),r.b))),this.searchType="exact",this.searchKey="tradename",this.segmentType="all",this.drugsHistory=[],this.noHistory=!1,this.isLoading=!0}ngOnInit(){return(0,m.mG)(this,void 0,void 0,function*(){this.analytics.setSecreenName("Home"),this.drugsService.drugs$.subscribe(t=>{this.drugs=t,this.worker.postMessage({drugs:this.drugs}),this.drugsToShow=this.drugs,setTimeout(()=>{this.isLoading=!1},200),this.prepareSearch(),this.showSearchResults()}),this.route.queryParams.subscribe(()=>{var t,s;const i=null===(s=null===(t=this.router.getCurrentNavigation())||void 0===t?void 0:t.extras)||void 0===s?void 0:s.queryParams;i&&i.searchTerm&&i.searchKey&&i.searchType&&(this.searchKey=i.searchKey,this.searchTerm=i.searchTerm,this.searchType=i.searchType,this.doSearch(i.searchTerm,i.searchKey,i.searchType))})})}onSearchInput(t){this.searchTerm$.next(t.target.value)}prepareSearch(){this.searchTerm$.pipe(function U(n,o=w){return(0,O.e)((t,s)=>{let i=null,l=null,u=null;const P=()=>{if(i){i.unsubscribe(),i=null;const p=l;l=null,s.next(p)}};function V(){const p=u+n,M=o.now();if(M<p)return i=this.schedule(void 0,p-M),void s.add(i);P()}t.subscribe((0,H.x)(s,p=>{l=p,u=o.now(),i||(i=o.schedule(V,n),s.add(i))},()=>{P(),s.complete()},void 0,()=>{l=i=null}))})}(200)).subscribe(t=>{console.time("Search took: "),this.searchTerm=t,this.doSearch(t)})}doSearch(t,s,i){0!==t.length?"exact"!==this.searchType||i?s&&i?this.worker.postMessage({searchTerm:t,searchKey:s,searchType:i}):"approximate"===this.searchType&&this.worker.postMessage({searchTerm:t,searchKey:this.searchKey,searchType:"approximate"}):this.worker.postMessage({searchTerm:t,searchKey:this.searchKey,searchType:"exact"}):this.drugsToShow=this.drugs}showSearchResults(){this.worker.onmessage=({data:t})=>{0===t.length?this.presenetNotFoundUI():this.drugsToShow=t,console.timeEnd("Search took: ")}}presenetNotFoundUI(){this.drugsToShow=[]}doApproximateSearch(){this.searchType="approximate",this.doSearch(this.searchTerm),this.searchType="exact"}changeSegmentTo(t){const i=t.detail.value;"history"===i?this.storage.get("history").then(l=>{if(l){const u=JSON.parse(l);this.drugsToShow=u}else this.drugsToShow=[],this.noHistory=!0}):"all"===i&&(this.drugsToShow=this.drugs)}chooseToSearchBy(){return(0,m.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:"Select To Search By:",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:s=>{}},{text:"Ok",handler:s=>{this.searchKey=s}}],inputs:[{label:"Tradename",type:"radio",value:"tradename"},{label:"Active Ingredient",type:"radio",value:"activeingredient"},{label:"Company",type:"radio",value:"company"},{label:"Group",type:"radio",value:"group"},{label:"Pamphlet",type:"radio",value:"pamphlet"},{label:"Dosage",type:"radio",value:"dosage"},{label:"Composition",type:"radio",value:"composition"},{label:"Price",type:"radio",value:"price"},{label:"ID",type:"radio",value:"id"}]})).present()})}openDrugDetails(t){this.router.navigate(["app/tabs/drugs/drug",t.id]),this.saveDrugToHistory(t)}saveDrugToHistory(t){return(0,m.mG)(this,void 0,void 0,function*(){const s=yield this.storage.get("history");if(s){const i=JSON.parse(s);i.push(t),yield this.storage.set("history",JSON.stringify(i))}else yield this.storage.set("history",JSON.stringify([t]))})}getDrugImage(t){return`${J._}/assets/imgs5/drugs/${t}.jpg`}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(N.e),e.Y36(a.Br),e.Y36(D.V),e.Y36(c.F0),e.Y36(c.gz),e.Y36(K.y))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-home"]],decls:22,vars:7,consts:[["color","primary"],["slot","start"],[3,"ngModel","ngModelChange","ionChange"],["value","all"],["value","history"],["slot","end"],[3,"click"],["slot","icon-only","name","ellipsis-vertical-outline"],[3,"placeholder","ngModel","ngModelChange","ionInput"],[4,"ngIf"],["class","notfound ion-padding ion-text-center",4,"ngIf"],["approxItemHeight","100px",3,"items"],[4,"virtualItem"],[1,"notfound","ion-padding","ion-text-center"],["color","medium"],["color","primary",3,"click"],[1,"card",3,"click"],[1,"avatar"],["height","100",3,"src"],[1,"drug-details"],[1,"tradename"],["class","activeingredient",4,"ngIf"],[1,"activeingredient"]],template:function(t,s){1&t&&(e.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),e._UZ(3,"ion-menu-button"),e.qZA(),e.TgZ(4,"ion-segment",2),e.NdJ("ngModelChange",function(l){return s.segmentType=l})("ionChange",function(l){return s.changeSegmentTo(l)}),e.TgZ(5,"ion-segment-button",3)(6,"ion-label"),e._uU(7,"All"),e.qZA()(),e.TgZ(8,"ion-segment-button",4)(9,"ion-label"),e._uU(10,"History"),e.qZA()()(),e.TgZ(11,"ion-buttons",5)(12,"ion-button",6),e.NdJ("click",function(){return s.chooseToSearchBy()}),e._UZ(13,"ion-icon",7),e.qZA()()(),e.TgZ(14,"ion-toolbar",0)(15,"ion-searchbar",8),e.NdJ("ngModelChange",function(l){return s.searchTerm=l})("ionInput",function(l){return s.onSearchInput(l)}),e.qZA()()(),e.TgZ(16,"ion-content"),e.YNc(17,z,2,0,"h3",9),e.YNc(18,E,9,1,"div",10),e.YNc(19,B,4,0,"div",10),e.TgZ(20,"ion-virtual-scroll",11),e.YNc(21,R,11,4,"div",12),e.qZA()()),2&t&&(e.xp6(4),e.Q6J("ngModel",s.segmentType),e.xp6(11),e.MGl("placeholder","Search By ",s.searchKey.charAt(0).toUpperCase()+s.searchKey.slice(1),"..."),e.Q6J("ngModel",s.searchTerm),e.xp6(2),e.Q6J("ngIf",s.isLoading),e.xp6(1),e.Q6J("ngIf",0===s.drugsToShow.length&&!s.noHistory&&!s.isLoading),e.xp6(1),e.Q6J("ngIf",0===s.drugsToShow.length&&s.noHistory&&!s.isLoading),e.xp6(1),e.Q6J("items",s.drugsToShow))},dependencies:[d.O5,g.JJ,g.On,a.YG,a.Sm,a.W2,a.Gu,a.gu,a.Xz,a.Q$,a.fG,a.VI,a.cJ,a.GO,a.yW,a.sr,a.QI,a.j9,a.Rw,a.aJ],styles:["[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]{--background: white}ion-virtual-scroll[_ngcontent-%COMP%]{width:100%;margin-top:8px}ion-virtual-scroll[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{display:flex;flex-direction:row;border-radius:12px;height:100px;background:#fafafa;box-shadow:0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px rgba(0,0,0,.12);margin:8px 16px}ion-virtual-scroll[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{padding:5px;width:20%;display:flex;justify-content:center;align-items:center}ion-virtual-scroll[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:auto;height:100%;mix-blend-mode:multiply;filter:contrast(1)}ion-virtual-scroll[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .drug-details[_ngcontent-%COMP%]{padding:5px;width:80%;display:flex;flex-direction:column;justify-content:space-around}ion-virtual-scroll[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .drug-details[_ngcontent-%COMP%]   .tradename[_ngcontent-%COMP%]{font-size:22px;font-weight:700;margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}ion-virtual-scroll[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .drug-details[_ngcontent-%COMP%]   .activeingredient[_ngcontent-%COMP%]{font-size:15px;color:#777;margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}"]}),n})();const Q=[{path:"tabs",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-tabs"]],decls:14,vars:0,consts:[["color","primary","slot","bottom"],["tab","drugs"],["name","search"],["tab","interactions"],["name","medkit"],["tab","settings"],["name","settings"]],template:function(t,s){1&t&&(e.TgZ(0,"ion-tabs")(1,"ion-tab-bar",0)(2,"ion-tab-button",1),e._UZ(3,"ion-icon",2),e.TgZ(4,"ion-label"),e._uU(5,"Drug Search"),e.qZA()(),e.TgZ(6,"ion-tab-button",3),e._UZ(7,"ion-icon",4),e.TgZ(8,"ion-label"),e._uU(9,"Drug Interactions"),e.qZA()(),e.TgZ(10,"ion-tab-button",5),e._UZ(11,"ion-icon",6),e.TgZ(12,"ion-label"),e._uU(13,"Settings"),e.qZA()()()())},dependencies:[a.gu,a.Q$,a.yq,a.ZU,a.UN]}),n})(),children:[{path:"drugs",children:[{path:"",component:b},{path:"drug/:id",loadChildren:()=>r.e(3637).then(r.bind(r,3637)).then(n=>n.DrugDetailsPageModule)}]},{path:"interactions",children:[{path:"",loadChildren:()=>r.e(3735).then(r.bind(r,3735)).then(n=>n.InteractionsPageModule)}]},{path:"settings",children:[{path:"",loadChildren:()=>r.e(2471).then(r.bind(r,2471)).then(n=>n.SettingsPageModule)}]}]},{path:"",redirectTo:"/app/tabs/drugs",pathMatch:"full"},{path:"interactions",loadChildren:()=>r.e(3735).then(r.bind(r,3735)).then(n=>n.InteractionsPageModule)},{path:"settings",loadChildren:()=>r.e(2471).then(r.bind(r,2471)).then(n=>n.SettingsPageModule)}];let $=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.Bz.forChild(Q),c.Bz]}),n})();const j=[{path:"",component:b}];let G=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.Bz.forChild(j),c.Bz]}),n})(),L=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.ez,g.u5,a.Pc,G]}),n})(),W=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.ez,g.u5,a.Pc,$,L]}),n})()},5260:(S,v,r)=>{r.d(v,{y:()=>a});var d=r(652),g=r(8256);let a=(()=>{class c{constructor(){d.z.setCollectionEnabled({enabled:!0})}setUserId(h){d.z.setUserId({userId:h})}setUserProperty(h,f){d.z.setUserProperty({name:h,value:f})}setSecreenName(h){d.z.setScreenName({screenName:h})}logEvent(h,f){d.z.logEvent({name:h,params:f})}}return c.\u0275fac=function(h){return new(h||c)},c.\u0275prov=g.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()}}]);
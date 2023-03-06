"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9083],{7266:(M,f,r)=>{r.d(f,{T:()=>p,_:()=>g});const g="https://dawaware.github.io/website",p=`${g}/api/v3/eg/drugs.json`},9083:(M,f,r)=>{r.r(f),r.d(f,{TabsPageModule:()=>z});var g=r(6895),p=r(433),a=r(4556),c=r(1407),P=r(655),x=r(7579),b=r(727);class m extends b.w0{constructor(s,t){super()}schedule(s,t=0){return this}}const v={setInterval(o,s,...t){const{delegate:n}=v;return null!=n&&n.setInterval?n.setInterval(o,s,...t):setInterval(o,s,...t)},clearInterval(o){const{delegate:s}=v;return((null==s?void 0:s.clearInterval)||clearInterval)(o)},delegate:void 0};var h=r(8737);const C={now:()=>(C.delegate||Date).now(),delegate:void 0};class T{constructor(s,t=T.now){this.schedulerActionCtor=s,this.now=t}schedule(s,t=0,n){return new this.schedulerActionCtor(this,s).schedule(n,t)}}T.now=C.now;const Z=new class O extends T{constructor(s,t=T.now){super(s,t),this.actions=[],this._active=!1}flush(s){const{actions:t}=this;if(this._active)return void t.push(s);let n;this._active=!0;do{if(n=s.execute(s.state,s.delay))break}while(s=t.shift());if(this._active=!1,n){for(;s=t.shift();)s.unsubscribe();throw n}}}(class d extends m{constructor(s,t){super(s,t),this.scheduler=s,this.work=t,this.pending=!1}schedule(s,t=0){var n;if(this.closed)return this;this.state=s;const i=this.id,l=this.scheduler;return null!=i&&(this.id=this.recycleAsyncId(l,i,t)),this.pending=!0,this.delay=t,this.id=null!==(n=this.id)&&void 0!==n?n:this.requestAsyncId(l,this.id,t),this}requestAsyncId(s,t,n=0){return v.setInterval(s.flush.bind(s,this),n)}recycleAsyncId(s,t,n=0){if(null!=n&&this.delay===n&&!1===this.pending)return t;null!=t&&v.clearInterval(t)}execute(s,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const n=this._execute(s,t);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(s,t){let i,n=!1;try{this.work(s)}catch(l){n=!0,i=l||new Error("Scheduled action threw falsy error")}if(n)return this.unsubscribe(),i}unsubscribe(){if(!this.closed){const{id:s,scheduler:t}=this,{actions:n}=t;this.work=this.state=this.scheduler=null,this.pending=!1,(0,h.P)(n,this),null!=s&&(this.id=this.recycleAsyncId(t,s,null)),this.delay=null,super.unsubscribe()}}});var w=r(4482),D=r(5403),H=r(7266),e=r(8256),J=r(649),E=r(1188);function N(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"div",13)(1,"ion-text",14)(2,"h3"),e._uU(3," No Drugs Found for input "),e.TgZ(4,"ion-text",0),e._uU(5),e.qZA(),e._uU(6," do you want to make use AI to find the required drug? "),e.qZA(),e.TgZ(7,"ion-button",15),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.doApproximateSearch())}),e._uU(8,"Use AI"),e.qZA()()()}if(2&o){const t=e.oxw();e.xp6(5),e.Oqu(t.searchTerm)}}function K(o,s){1&o&&(e.TgZ(0,"div",13)(1,"ion-text",14)(2,"h3"),e._uU(3,"No history available yet"),e.qZA()()())}function B(o,s){if(1&o&&(e.TgZ(0,"p",22),e._uU(1),e.qZA()),2&o){const t=e.oxw().$implicit;e.xp6(1),e.hij(" ",t.activeingredient||"No Known ActiveIngredient"," ")}}function R(o,s){if(1&o&&(e.TgZ(0,"p",22),e._uU(1),e.qZA()),2&o){const t=e.oxw().$implicit,n=e.oxw();e.xp6(1),e.hij(" ",t[n.searchKey]," ")}}function $(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"div")(1,"div",16),e.NdJ("click",function(){const l=e.CHM(t).$implicit,u=e.oxw();return e.KtG(u.openDrugDetails(l))}),e.TgZ(2,"div",17),e._UZ(3,"ion-img",18),e.qZA(),e.TgZ(4,"div",19)(5,"ion-text",0)(6,"h3",20),e._uU(7),e.qZA()(),e.TgZ(8,"ion-text",14),e.YNc(9,B,2,1,"p",21),e.YNc(10,R,2,1,"p",21),e.qZA()()()()}if(2&o){const t=s.$implicit,n=e.oxw();e.xp6(3),e.Q6J("src",n.getDrugImage(t.id)),e.xp6(4),e.Oqu(t.tradename),e.xp6(2),e.Q6J("ngIf","tradename"===n.searchKey),e.xp6(1),e.Q6J("ngIf","tradename"!==n.searchKey)}}let S=(()=>{class o{constructor(t,n,i,l,u){this.drugsService=t,this.alertController=n,this.storage=i,this.router=l,this.route=u,this.searchTerm="",this.searchTerm$=new x.x,this.drugs=[],this.drugsToShow=[],this.worker=new Worker(r.tu(new URL(r.p+r.u(954),r.b))),this.searchType="exact",this.searchKey="tradename",this.segmentType="all",this.drugsHistory=[],this.noHistory=!1,this.isLoading=!0}ngOnInit(){this.drugsService.drugs$.subscribe(t=>{this.drugs=t,this.worker.postMessage({drugs:this.drugs}),this.drugsToShow=this.drugs,setTimeout(()=>{this.isLoading=!1},200),this.prepareSearch(),this.showSearchResults()}),this.route.queryParams.subscribe(()=>{var t,n;const i=null===(n=null===(t=this.router.getCurrentNavigation())||void 0===t?void 0:t.extras)||void 0===n?void 0:n.queryParams;i&&i.searchTerm&&i.searchKey&&i.searchType&&(this.searchKey=i.searchKey,this.searchTerm=i.searchTerm,this.searchType=i.searchType,this.doSearch(i.searchTerm,i.searchKey,i.searchType))})}onSearchInput(t){this.searchTerm$.next(t.target.value)}prepareSearch(){this.searchTerm$.pipe(function U(o,s=Z){return(0,w.e)((t,n)=>{let i=null,l=null,u=null;const I=()=>{if(i){i.unsubscribe(),i=null;const y=l;l=null,n.next(y)}};function Q(){const y=u+o,A=s.now();if(A<y)return i=this.schedule(void 0,y-A),void n.add(i);I()}t.subscribe((0,D.x)(n,y=>{l=y,u=s.now(),i||(i=s.schedule(Q,o),n.add(i))},()=>{I(),n.complete()},void 0,()=>{l=i=null}))})}(200)).subscribe(t=>{console.time("Search took: "),this.searchTerm=t,this.doSearch(t)})}doSearch(t,n,i){0!==t.length?"exact"!==this.searchType||i?n&&i?(console.log("searching with key and type"),this.worker.postMessage({searchTerm:t,searchKey:n,searchType:i})):"approximate"===this.searchType&&this.worker.postMessage({searchTerm:t,searchKey:this.searchKey,searchType:"approximate"}):this.worker.postMessage({searchTerm:t,searchKey:this.searchKey,searchType:"exact"}):this.drugsToShow=this.drugs}showSearchResults(){this.worker.onmessage=({data:t})=>{console.log(t),0===t.length?(console.log("no results found"),this.presenetNotFoundUI()):this.drugsToShow=t,console.timeEnd("Search took: ")}}presenetNotFoundUI(){this.drugsToShow=[]}doApproximateSearch(){console.log("open AI"),this.searchType="approximate",this.doSearch(this.searchTerm),this.searchType="exact"}changeSegmentTo(t){const i=t.detail.value;"history"===i?(console.log("history"),this.storage.get("history").then(l=>{if(l){const u=JSON.parse(l);console.log(u),this.drugsToShow=u}else this.drugsToShow=[],this.noHistory=!0})):"all"===i&&(this.drugsToShow=this.drugs)}chooseToSearchBy(){return(0,P.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:"Select To Search By:",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:n=>{console.log("Confirm Cancel: blah")}},{text:"Ok",handler:n=>{this.searchKey=n}}],inputs:[{label:"Tradename",type:"radio",value:"tradename"},{label:"Active Ingredient",type:"radio",value:"activeingredient"},{label:"Company",type:"radio",value:"company"},{label:"Group",type:"radio",value:"group"},{label:"Pamphlet",type:"radio",value:"pamphlet"},{label:"Dosage",type:"radio",value:"dosage"},{label:"Composition",type:"radio",value:"composition"},{label:"Price",type:"radio",value:"price"},{label:"ID",type:"radio",value:"id"}]})).present()})}openDrugDetails(t){console.log(t),this.router.navigate(["app/tabs/drugs/drug",t.id]),this.saveDrugToHistory(t)}saveDrugToHistory(t){return(0,P.mG)(this,void 0,void 0,function*(){console.log("save drug to history");const n=yield this.storage.get("history");if(console.log(n),n){const i=JSON.parse(n);i.push(t),yield this.storage.set("history",JSON.stringify(i))}else yield this.storage.set("history",JSON.stringify([t]))})}getDrugImage(t){return`${H._}/assets/imgs/drugs/${t-1>-1?t:0}.jpg`}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(J.e),e.Y36(a.Br),e.Y36(E.V),e.Y36(c.F0),e.Y36(c.gz))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-home"]],decls:25,vars:6,consts:[["color","primary"],["slot","start"],[3,"ngModel","ngModelChange","ionChange"],["value","all"],["value","history"],["slot","end"],[3,"click"],["slot","icon-only","name","ellipsis-vertical-outline"],[3,"placeholder","ngModel","ngModelChange","ionInput"],[1,"wave"],["class","notfound ion-padding ion-text-center",4,"ngIf"],["approxItemHeight","100px",3,"items"],[4,"virtualItem"],[1,"notfound","ion-padding","ion-text-center"],["color","medium"],["color","primary",3,"click"],[1,"card",3,"click"],[1,"avatar"],["height","100",3,"src"],[1,"drug-details"],[1,"tradename"],["class","activeingredient",4,"ngIf"],[1,"activeingredient"]],template:function(t,n){1&t&&(e.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),e._UZ(3,"ion-menu-button"),e.qZA(),e.TgZ(4,"ion-segment",2),e.NdJ("ngModelChange",function(l){return n.segmentType=l})("ionChange",function(l){return n.changeSegmentTo(l)}),e.TgZ(5,"ion-segment-button",3)(6,"ion-label"),e._uU(7,"All"),e.qZA()(),e.TgZ(8,"ion-segment-button",4)(9,"ion-label"),e._uU(10,"History"),e.qZA()()(),e.TgZ(11,"ion-buttons",5)(12,"ion-button",6),e.NdJ("click",function(){return n.chooseToSearchBy()}),e._UZ(13,"ion-icon",7),e.qZA()()(),e.TgZ(14,"ion-toolbar",0)(15,"ion-searchbar",8),e.NdJ("ngModelChange",function(l){return n.searchTerm=l})("ionInput",function(l){return n.onSearchInput(l)}),e.qZA()()(),e.TgZ(16,"ion-content")(17,"div"),e._UZ(18,"div",9)(19,"div",9)(20,"div",9),e.qZA(),e.YNc(21,N,9,1,"div",10),e.YNc(22,K,4,0,"div",10),e.TgZ(23,"ion-virtual-scroll",11),e.YNc(24,$,11,4,"div",12),e.qZA()()),2&t&&(e.xp6(4),e.Q6J("ngModel",n.segmentType),e.xp6(11),e.MGl("placeholder","Search By ",n.searchKey.charAt(0).toUpperCase()+n.searchKey.slice(1),"..."),e.Q6J("ngModel",n.searchTerm),e.xp6(6),e.Q6J("ngIf",0===n.drugsToShow.length&&!n.noHistory&&!n.isLoading),e.xp6(1),e.Q6J("ngIf",0===n.drugsToShow.length&&n.noHistory&&!n.isLoading),e.xp6(1),e.Q6J("items",n.drugsToShow))},dependencies:[g.O5,p.JJ,p.On,a.YG,a.Sm,a.W2,a.Gu,a.gu,a.Xz,a.Q$,a.fG,a.VI,a.cJ,a.GO,a.yW,a.sr,a.QI,a.j9,a.Rw,a.aJ],styles:["[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]{--background: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)}ion-virtual-scroll[_ngcontent-%COMP%]{width:100%;margin-top:8px}ion-virtual-scroll[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{display:flex;flex-direction:row;height:100px;background:rgba(255,255,255,.2);border-radius:16px;box-shadow:0 4px 30px rgba(0,0,0,.1);backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);border:1px solid rgba(255,255,255,.3);margin:8px 16px}ion-virtual-scroll[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{padding:5px;width:20%;display:flex;justify-content:center;align-items:center}ion-virtual-scroll[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:auto;height:100%;mix-blend-mode:multiply;filter:contrast(1)}ion-virtual-scroll[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .drug-details[_ngcontent-%COMP%]{padding:5px;width:80%;display:flex;flex-direction:column;justify-content:space-around}ion-virtual-scroll[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .drug-details[_ngcontent-%COMP%]   .tradename[_ngcontent-%COMP%]{font-size:22px;font-weight:700;margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}ion-virtual-scroll[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .drug-details[_ngcontent-%COMP%]   .activeingredient[_ngcontent-%COMP%]{font-size:15px;color:#777;margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}"]}),o})();const F=[{path:"tabs",component:(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-tabs"]],decls:14,vars:0,consts:[["color","primary","slot","bottom"],["tab","drugs"],["name","search"],["tab","interactions"],["name","medkit"],["tab","settings"],["name","settings"]],template:function(t,n){1&t&&(e.TgZ(0,"ion-tabs")(1,"ion-tab-bar",0)(2,"ion-tab-button",1),e._UZ(3,"ion-icon",2),e.TgZ(4,"ion-label"),e._uU(5,"Drug Search"),e.qZA()(),e.TgZ(6,"ion-tab-button",3),e._UZ(7,"ion-icon",4),e.TgZ(8,"ion-label"),e._uU(9,"Drug Interactions"),e.qZA()(),e.TgZ(10,"ion-tab-button",5),e._UZ(11,"ion-icon",6),e.TgZ(12,"ion-label"),e._uU(13,"Settings"),e.qZA()()()())},dependencies:[a.gu,a.Q$,a.yq,a.ZU,a.UN]}),o})(),children:[{path:"drugs",children:[{path:"",component:S},{path:"drug/:id",loadChildren:()=>r.e(1240).then(r.bind(r,1240)).then(o=>o.DrugDetailsPageModule)}]},{path:"interactions",children:[{path:"",loadChildren:()=>r.e(3735).then(r.bind(r,3735)).then(o=>o.InteractionsPageModule)}]},{path:"settings",children:[{path:"",loadChildren:()=>r.e(2471).then(r.bind(r,2471)).then(o=>o.SettingsPageModule)}]}]},{path:"",redirectTo:"/app/tabs/drugs",pathMatch:"full"},{path:"interactions",loadChildren:()=>r.e(3735).then(r.bind(r,3735)).then(o=>o.InteractionsPageModule)},{path:"settings",loadChildren:()=>r.e(2471).then(r.bind(r,2471)).then(o=>o.SettingsPageModule)}];let L=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[c.Bz.forChild(F),c.Bz]}),o})();const j=[{path:"",component:S}];let G=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[c.Bz.forChild(j),c.Bz]}),o})(),Y=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[g.ez,p.u5,a.Pc,G]}),o})(),z=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[g.ez,p.u5,a.Pc,L,Y]}),o})()},649:(M,f,r)=>{r.d(f,{e:()=>b});var g=r(1135),p=r(4004),a=r(7266),c=r(8256),P=r(529),x=r(1188);let b=(()=>{class m{constructor(h,d){this.http=h,this.storage=d,this.drugs$=new g.X([]),console.log("Drugs Service"),this.getDrugs()}getDrugs(){if(console.log("i am here"),this.drugs$.getValue().length>0)return console.log("i am here 2"),this.drugs$;console.log("i am here 3"),this.storage.get("drugs").then(h=>{if(h){console.log("i am here 4",JSON.stringify(h));const d=JSON.parse(h);this.drugs$.next(d)}else console.log("i am here 5"),this.http.get(a.T).pipe((0,p.U)(d=>{console.log("i am here 6",d.drugs),this.drugs$.next(d.drugs),console.log("i am here 7"),this.storage.set("drugs",JSON.stringify(this.drugs$.getValue()))})).subscribe(d=>{console.log("data fetched from api")})})}getDrugsFromLocal(){}}return m.\u0275fac=function(h){return new(h||m)(c.LFG(P.eN),c.LFG(x.V))},m.\u0275prov=c.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()}}]);
"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3637],{3637:(G,_,s)=>{s.r(_),s.d(_,{DrugDetailsPageModule:()=>q});var p=s(6895),x=s(433),g=s(4556),l=s(1407),h=s(655),v=s(7266),m=s(7423),u=s(5861);class P extends m.Uw{write(o){var n=this;return(0,u.Z)(function*(){if(typeof navigator>"u"||!navigator.clipboard)throw n.unavailable("Clipboard API not available in this browser");if(void 0!==o.string)yield n.writeText(o.string);else if(o.url)yield n.writeText(o.url);else{if(!o.image)throw new Error("Nothing to write");if(!(typeof ClipboardItem<"u"))throw n.unavailable("Writing images to the clipboard is not supported in this browser");try{const i=yield(yield fetch(o.image)).blob(),r=new ClipboardItem({[i.type]:i});yield navigator.clipboard.write([r])}catch(i){throw new Error("Failed to write image")}}})()}read(){var o=this;return(0,u.Z)(function*(){if(typeof navigator>"u"||!navigator.clipboard)throw o.unavailable("Clipboard API not available in this browser");if(!(typeof ClipboardItem<"u"))return o.readText();try{const n=yield navigator.clipboard.read(),i=n[0].types[0],r=yield n[0].getType(i);return{value:yield o._getBlobData(r,i),type:i}}catch(n){return o.readText()}})()}readText(){var o=this;return(0,u.Z)(function*(){if(typeof navigator>"u"||!navigator.clipboard||!navigator.clipboard.readText)throw o.unavailable("Reading from clipboard not supported in this browser");return{value:yield navigator.clipboard.readText(),type:"text/plain"}})()}writeText(o){var n=this;return(0,u.Z)(function*(){if(typeof navigator>"u"||!navigator.clipboard||!navigator.clipboard.writeText)throw n.unavailable("Writting to clipboard not supported in this browser");yield navigator.clipboard.writeText(o)})()}_getBlobData(o,n){return new Promise((i,r)=>{const a=new FileReader;n.includes("image")?a.readAsDataURL(o):a.readAsText(o),a.onloadend=()=>{i(a.result)},a.onerror=c=>{r(c)}})}}const f=(0,m.fo)("Clipboard",{web:()=>new P});var t=s(8256),C=s(649),w=s(5260),b=s(1188);const M=["ionInputEl"];function y(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"div",30)(1,"ion-text",31)(2,"h3",28),t._uU(3,"Tradename:"),t.qZA()(),t.TgZ(4,"ion-text",32),t.NdJ("click",function(){t.CHM(n);const r=t.oxw(2);return t.KtG(r.copyTradename())}),t.TgZ(5,"p",33),t._uU(6),t.qZA()()()}if(2&e){const n=t.oxw(2);t.xp6(6),t.hij(" ",n.drug.tradename," ")}}function O(e,o){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"p",35),t.NdJ("click",function(){const a=t.CHM(n).$implicit,c=t.oxw(3);return t.KtG(c.searchActiveIngredient(a))}),t.TgZ(2,"span"),t._uU(3,"\u{1f48a} "),t.qZA(),t.TgZ(4,"span",36),t._uU(5),t.qZA()(),t.BQk()}if(2&e){const n=o.$implicit;t.xp6(5),t.Oqu(n)}}function D(e,o){if(1&e&&(t.TgZ(0,"div",30)(1,"ion-text",31)(2,"h3",28),t._uU(3,"Active Ingredients:"),t.qZA()(),t.TgZ(4,"ion-text",34),t.YNc(5,O,6,1,"ng-container",26),t.qZA()()),2&e){const n=t.oxw(2);t.xp6(5),t.Q6J("ngForOf",n.activeingredients)}}function T(e,o){if(1&e&&(t.TgZ(0,"div",30)(1,"ion-text",31)(2,"h3",28),t._uU(3," Price: "),t.TgZ(4,"ion-text",37),t._uU(5),t.qZA()()()()),2&e){const n=t.oxw(2);t.xp6(5),t.hij("",n.drug.price," EGP")}}function Z(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"div",30)(1,"ion-text",31)(2,"h3",28),t._uU(3,"Drug group:"),t.qZA()(),t.TgZ(4,"ion-text",38),t.NdJ("click",function(){t.CHM(n);const r=t.oxw(2);return t.KtG(r.viewDrugGroupProducts())}),t.TgZ(5,"p",39),t._uU(6),t.qZA()()()}if(2&e){const n=t.oxw(2);t.xp6(6),t.Oqu(n.drug.group)}}function k(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"div",30)(1,"ion-text",31)(2,"h3",28),t._uU(3,"Company:"),t.qZA()(),t.TgZ(4,"p",40),t.NdJ("click",function(){t.CHM(n);const r=t.oxw(2);return t.KtG(r.viewCompanyProducts())}),t.TgZ(5,"ion-text",41),t._uU(6),t.qZA()()()}if(2&e){const n=t.oxw(2);t.xp6(6),t.hij(" ",n.drug.company," ")}}function U(e,o){1&e&&(t.TgZ(0,"h3",28),t._uU(1,"Details:"),t.qZA())}function A(e,o){if(1&e&&(t.TgZ(0,"p")(1,"strong",42),t._uU(2),t.qZA()()),2&e){const n=o.$implicit;t.xp6(2),t.Oqu(n)}}function I(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"div",43),t.NdJ("click",function(){const a=t.CHM(n).$implicit,c=t.oxw(2);return t.KtG(c.openDrug(a))}),t.TgZ(1,"div",44)(2,"ion-text",31),t._uU(3),t.qZA()(),t.TgZ(4,"div",45)(5,"ion-text",34),t._uU(6),t.qZA()()()}if(2&e){const n=o.$implicit;t.xp6(3),t.hij("",n.tradename," "),t.xp6(3),t.hij("",n.price," EGP")}}function N(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"div",8)(1,"div",9)(2,"div",10),t._UZ(3,"ion-img",11),t.qZA()(),t.TgZ(4,"div",12),t.YNc(5,y,7,1,"div",13),t.YNc(6,D,6,1,"div",13),t.YNc(7,T,6,1,"div",13),t.YNc(8,Z,7,1,"div",13),t.YNc(9,k,7,1,"div",13),t.TgZ(10,"div",14)(11,"ion-button",15),t.NdJ("click",function(){t.CHM(n);const r=t.oxw();return t.KtG(r.googleMore())}),t._UZ(12,"ion-icon",16),t.TgZ(13,"ion-text",17),t._uU(14,"Google more"),t.qZA()(),t.TgZ(15,"ion-button",18),t.NdJ("click",function(){t.CHM(n);const r=t.oxw();return t.KtG(r.viewPicture())}),t._UZ(16,"ion-icon",19),t.TgZ(17,"ion-text",17),t._uU(18,"View Picture"),t.qZA()()(),t.TgZ(19,"div",20)(20,"ion-button",21),t.NdJ("click",function(){t.CHM(n);const r=t.oxw();return t.KtG(r.togglePharma())}),t._UZ(21,"ion-icon",22),t.TgZ(22,"ion-text",17),t._uU(23),t.qZA()()(),t._UZ(24,"div",23),t.TgZ(25,"div",24)(26,"div"),t.YNc(27,U,2,0,"h3",25),t.TgZ(28,"div"),t.YNc(29,A,3,1,"p",26),t.qZA()()()(),t.TgZ(30,"div",27)(31,"h3",28),t._uU(32,"Similar Drugs:"),t.qZA(),t.YNc(33,I,7,2,"div",29),t.qZA()()}if(2&e){const n=t.oxw();t.xp6(3),t.Q6J("src",n.getDrugImage(n.drug.id)),t.xp6(2),t.Q6J("ngIf",n.drug.tradename),t.xp6(1),t.Q6J("ngIf",n.activeingredients.length),t.xp6(1),t.Q6J("ngIf",n.drug.price),t.xp6(1),t.Q6J("ngIf",n.drug.group),t.xp6(1),t.Q6J("ngIf",n.drug.company),t.xp6(14),t.Oqu(n.showPharma?"Hide Detailed Info":"View Detailed Info"),t.xp6(1),t.MGl("id","pharma",n.drug.id,""),t.xp6(1),t.Q6J("hidden",!n.showPharma),t.xp6(2),t.Q6J("ngIf",n.drug.info),t.xp6(2),t.Q6J("ngForOf",null==n.drug.info?null:n.drug.info.split("\n")),t.xp6(4),t.Q6J("ngForOf",n.similars)}}const j=[{path:"",component:(()=>{class e{constructor(n,i,r,a,c){this.route=n,this.drugsService=i,this.router=r,this.analytics=a,this.storage=c,this.drugId=0,this.drugs=[],this.drug={id:0,tradename:"",activeingredient:"",price:"",company:"",group:"",info:""},this.loading=!0,this.activeingredients=[],this.showPharma=!1,this.similars=[],this.newPrice="",this.route.paramMap.subscribe(d=>{this.drugId=Number(d.get("id"))})}ngOnInit(){this.drugs.length?(this.drugs=this.drugsService.drugs$.getValue(),this.drug=this.drugs.find(n=>n.id===this.drugId),this.prepareUI()):this.drugsService.drugs$.subscribe(n=>{this.drugs=n,this.drug=this.drugs.find(i=>i.id===this.drugId),this.prepareUI()})}getClipboardAndUpdatePrice(){f.read().then(n=>{console.log(n),this.updatePrice(n.value)})}prepareUI(){this.analytics.setSecreenName(this.drugId.toString()),this.analytics.logEvent("screen_view",{screen_name:this.drug.tradename}),this.activeingredients=this.drug.activeingredient.split("+"),this.loadDrugSimilars().then(i=>{this.similars=i,this.loading=!1}),document.onkeydown=i=>(0,h.mG)(this,void 0,void 0,function*(){"38"==(i=i||window.event).keyCode||("40"==i.keyCode?yield f.write({string:this.drug.tradename}):"37"==i.keyCode?this.router.navigate(["/app/tabs/drugs/drug",this.drug.id-1],{replaceUrl:!0}):"39"==i.keyCode&&this.router.navigate(["/app/tabs/drugs/drug",this.drug.id+1],{replaceUrl:!0}))})}searchActiveIngredient(n){this.router.navigate(["/app/tabs/drugs"],{queryParams:{searchKey:"activeingredient",searchType:"exact",searchTerm:n}})}viewDrugGroup(){console.log(this.drug.group)}viewCompanyProducts(){this.router.navigate(["/app/tabs/drugs/"],{queryParams:{searchKey:"company",searchType:"exact",searchTerm:this.drug.company}})}viewDrugGroupProducts(){this.router.navigate(["/app/tabs/drugs/"],{queryParams:{searchKey:"group",searchType:"exact",searchTerm:this.drug.group}})}togglePharma(){this.showPharma=!this.showPharma}openDrug(n){this.router.navigateByUrl(`/app/tabs/drugs/drug/${n.id}`)}viewPicture(){this.openLinkSystemBrowser(`https://www.google.com/search?tbm=isch&q=${this.drug.tradename.split(" ").slice(0,2).join(" ")} drug`)}googleMore(){this.openLinkSystemBrowser(`https://www.google.com/search?&q=${this.drug.tradename.split(" ").slice(0,2).join(" ")} drug`)}openLinkSystemBrowser(n){window.open(n,"_system")}loadDrugSimilars(){let n=[];const i=()=>{for(let a=0;a<this.drugs.length;a++)this.drug.activeingredient===this.drugs[a].activeingredient&&n.push(this.drugs[a])},r=a=>a.sort((d,F)=>Number(d.price)-Number(F.price));return new Promise((a,c)=>{this.drugs.length?(i(),r(n)):this.drugsService.drugs$.subscribe(d=>{this.drugs=d,i(),r(n)}),a(n)})}getDrugImage(n){return`${v._}/assets/imgs5/drugs/${n}.jpg`}updatePrice(n){}downloadData(){return(0,h.mG)(this,void 0,void 0,function*(){let n=null;const r=document.createElement("a");r.setAttribute("download",`drugs${this.drug.id}.json`),this.storage.get("drugs").then(a=>{r.href=function(a){var c=new Blob([JSON.parse(a)],{type:"text/json"});return null!==n&&window.URL.revokeObjectURL(n),n=window.URL.createObjectURL(c),n}(JSON.stringify(a,null,2)),document.body.appendChild(r),window.requestAnimationFrame(function(){var c=new MouseEvent("click");r.dispatchEvent(c),document.body.removeChild(r)})})})}copyTradename(){document.execCommand("copy")}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(l.gz),t.Y36(C.e),t.Y36(l.F0),t.Y36(w.y),t.Y36(b.V))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-drug-details"]],viewQuery:function(n,i){if(1&n&&t.Gf(M,7),2&n){let r;t.iGM(r=t.CRH())&&(i.ionInputEl=r.first)}},decls:11,vars:1,consts:[["color","primary"],["slot","start"],["defaultHref","app/tabs/drugs"],["slot","start","slot","end"],[3,"click"],["name","medkit"],[1,"ion-padding"],["class","card",4,"ngIf"],[1,"card"],[1,"picture-container","ion-padding-top"],[1,"picture"],["height","100",3,"src"],[1,"details"],["class","detail",4,"ngIf"],[1,"actions","ion-padding-start","ion-padding-end","ion-padding-top"],["color","warning","expand","block",1,"action",3,"click"],["color","light","name","search"],["color","light"],["color","dark","expand","block",1,"action",3,"click"],["color","light","name","aperture-outline"],[1,"full-width","ion-padding-start","ion-padding-end","ion-padding-bottom"],["color","dark","expand","full",3,"click"],["color","light","name","flask-outline"],[2,"height","1px",3,"id"],[3,"hidden"],["class","title",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"similars"],[1,"title"],["class","card",3,"click",4,"ngFor","ngForOf"],[1,"detail"],["color","dark"],["color","dark",3,"click"],[1,"tradename","ion-margin-start","ion-text-center"],["color","danger"],[1,"ion-margin-start",3,"click"],[1,"clickable"],["color","success"],["color","danger",3,"click"],[1,"info","clickable","ion-margin-start"],[1,"company-container",3,"click"],["color","danger",1,"clickable"],["padding-left",""],[1,"card",3,"click"],[1,"name"],[1,"price"]],template:function(n,i){1&n&&(t.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),t._UZ(3,"ion-back-button",2),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5,"Drug Details"),t.qZA(),t.TgZ(6,"ion-buttons",3)(7,"ion-button",4),t.NdJ("click",function(){return i.getClipboardAndUpdatePrice()}),t._UZ(8,"ion-icon",5),t.qZA()()()(),t.TgZ(9,"ion-content",6),t.YNc(10,N,34,12,"div",7),t.qZA()),2&n&&(t.xp6(10),t.Q6J("ngIf",!i.loading))},dependencies:[p.sg,p.O5,g.oU,g.YG,g.Sm,g.W2,g.Gu,g.gu,g.Xz,g.yW,g.wd,g.sr,g.cs],styles:['ion-content[_ngcontent-%COMP%]{--background: #fafafa}ion-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px}ion-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:start;align-items:start;border-radius:12px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;background:white;border:1px solid rgba(255,255,255,.3);box-shadow:0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px rgba(0,0,0,.12)}ion-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .picture-container[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:row;justify-content:center;align-items:center}ion-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .picture-container[_ngcontent-%COMP%]   .picture[_ngcontent-%COMP%]{padding:5px;width:50%;margin:auto;display:flex;justify-content:center;align-items:center}ion-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .picture-container[_ngcontent-%COMP%]   .picture[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:auto;height:100%;filter:contrast(1);border:1px solid #fff}ion-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{justify-content:start;display:flex;align-items:start;flex-direction:column;width:100%}ion-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .clickable[_ngcontent-%COMP%]{border-bottom:2px solid tomato;display:inline-block;line-height:.85}ion-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]{-webkit-margin-start:16px;margin-inline-start:16px;width:100%}ion-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .company-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;width:calc(100% - 32px)}ion-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .tradename[_ngcontent-%COMP%]{text-align:justify;font-size:5.4vw;margin-bottom:-1em!important}ion-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .tradename[_ngcontent-%COMP%]:after{content:"";display:inline-block;width:100%}ion-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%}ion-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;width:50%;color:#fff}ion-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{margin-right:8px}ion-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%]{width:100%}ion-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .bg-transparent[_ngcontent-%COMP%]{background:transparent}ion-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .clickable[_ngcontent-%COMP%]{border-bottom:2px solid tomato;display:inline-block;line-height:.85}ion-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .similars[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%}ion-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .similars[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{align-self:flex-start;margin-left:16px}ion-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .similars[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-between;background-color:#fff;border-radius:10px;box-shadow:0 2px 6px rgba(0,0,0,.15);cursor:pointer;padding:10px;transition:all .2s ease-in-out;width:calc(100% - 32px);margin-bottom:10px}ion-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .similars[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover{transform:scale(1.05)}ion-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .similars[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:700;text-align:left;margin-bottom:10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:70%}ion-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .similars[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{font-size:1.1rem;color:#666;text-align:right;width:30%}']}),e})()}];let J=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.Bz.forChild(j),l.Bz]}),e})(),q=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[p.ez,x.u5,g.Pc,J]}),e})()}}]);
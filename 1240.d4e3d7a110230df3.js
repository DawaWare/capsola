"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1240],{1240:(J,p,g)=>{g.r(p),g.d(p,{DrugDetailsPageModule:()=>q});var d=g(6895),_=g(433),a=g(4556),l=g(1407),h=g(7266),t=g(8256),m=g(649),P=g(5260);function f(e,o){if(1&e&&(t.TgZ(0,"div",27)(1,"ion-text",28)(2,"h3",25),t._uU(3,"Tradename:"),t.qZA()(),t.TgZ(4,"ion-text",28)(5,"p",29),t._uU(6),t.qZA()()()),2&e){const n=t.oxw();t.xp6(6),t.hij(" ",n.drug.tradename," ")}}function C(e,o){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"p",31),t.NdJ("click",function(){const r=t.CHM(n).$implicit,s=t.oxw(2);return t.KtG(s.searchActiveIngredient(r))}),t.TgZ(2,"span"),t._uU(3,"\u{1f48a} "),t.qZA(),t.TgZ(4,"span",32),t._uU(5),t.qZA()(),t.BQk()}if(2&e){const n=o.$implicit;t.xp6(5),t.Oqu(n)}}function O(e,o){if(1&e&&(t.TgZ(0,"div",27)(1,"ion-text",28)(2,"h3",25),t._uU(3,"Active Ingredients:"),t.qZA()(),t.TgZ(4,"ion-text",30),t.YNc(5,C,6,1,"ng-container",22),t.qZA()()),2&e){const n=t.oxw();t.xp6(5),t.Q6J("ngForOf",n.activeingredients)}}function M(e,o){if(1&e&&(t.TgZ(0,"div",27)(1,"ion-text",28)(2,"h3",25),t._uU(3," Price: "),t.TgZ(4,"ion-text",33),t._uU(5),t.qZA()()()()),2&e){const n=t.oxw();t.xp6(5),t.hij("",n.drug.price," EGP")}}function x(e,o){if(1&e&&(t.TgZ(0,"div",27)(1,"ion-text",28)(2,"h3",25),t._uU(3,"Drug group:"),t.qZA()(),t.TgZ(4,"ion-text",28)(5,"p",34),t._uU(6),t.qZA()()()),2&e){const n=t.oxw();t.xp6(6),t.Oqu(n.drug.group)}}function v(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"div",27)(1,"ion-text",28)(2,"h3",25),t._uU(3,"Company:"),t.qZA()(),t.TgZ(4,"p",35),t.NdJ("click",function(){t.CHM(n);const c=t.oxw();return t.KtG(c.viewCompanyProducts())}),t.TgZ(5,"ion-text",36),t._uU(6),t.qZA()()()}if(2&e){const n=t.oxw();t.xp6(6),t.hij(" ",n.drug.company," ")}}function D(e,o){1&e&&(t.TgZ(0,"h3",25),t._uU(1,"Composition:"),t.qZA())}function Z(e,o){if(1&e&&(t.TgZ(0,"p")(1,"strong",37),t._uU(2),t.qZA()()),2&e){const n=o.$implicit;t.xp6(2),t.Oqu(n)}}function T(e,o){1&e&&(t.TgZ(0,"h3",25),t._uU(1,"Pharmacology"),t.qZA())}function w(e,o){if(1&e&&(t.TgZ(0,"p")(1,"strong"),t._uU(2),t.qZA()()),2&e){const n=o.$implicit;t.xp6(2),t.Oqu(n)}}function y(e,o){1&e&&(t.TgZ(0,"h3",25),t._uU(1,"Dose"),t.qZA())}function b(e,o){if(1&e&&(t.TgZ(0,"p")(1,"strong"),t._uU(2),t.qZA()()),2&e){const n=o.$implicit;t.xp6(2),t.Oqu(n)}}function k(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"div",38),t.NdJ("click",function(){const r=t.CHM(n).$implicit,s=t.oxw();return t.KtG(s.openDrug(r))}),t.TgZ(1,"div",39)(2,"ion-text",28),t._uU(3),t.qZA()(),t.TgZ(4,"div",40)(5,"ion-text",30),t._uU(6),t.qZA()()()}if(2&e){const n=o.$implicit;t.xp6(3),t.hij("",n.tradename," "),t.xp6(3),t.hij("",n.price," EGP")}}const A=[{path:"",component:(()=>{class e{constructor(n,i,c,r){this.route=n,this.drugsService=i,this.router=c,this.analytics=r,this.drugId=0,this.drugs=[],this.drug={id:0,tradename:"",activeingredient:"",price:"",company:"",group:"",pamphlet:"",dosage:"",composition:""},this.loading=!0,this.activeingredients=[],this.showPharma=!1,this.similars=[],this.route.paramMap.subscribe(s=>{this.drugId=Number(s.get("id"))})}ngOnInit(){this.drugs.length?(this.drugs=this.drugsService.drugs$.getValue(),this.drug=this.drugs.find(n=>n.id===this.drugId),this.prepareUI()):this.drugsService.drugs$.subscribe(n=>{this.drugs=n,this.drug=this.drugs.find(i=>i.id===this.drugId),this.prepareUI()})}prepareUI(){this.analytics.setSecreenName(this.drugId.toString()),this.loading=!1,console.log(this.drug),this.activeingredients=this.drug.activeingredient.split("+"),this.loadDrugSimilars().then(n=>{this.similars=n,console.log("similars",this.similars)}),console.log(this.activeingredients)}searchActiveIngredient(n){this.router.navigate(["/home"],{queryParams:{searchKey:"activeingredient",searchType:"exact",searchTerm:n}})}viewDrugGroup(){console.log(this.drug.group)}viewCompanyProducts(){this.router.navigate(["/app/tabs/drugs/"],{queryParams:{searchKey:"company",searchType:"exact",searchTerm:this.drug.company}})}togglePharma(){this.showPharma=!this.showPharma}openDrug(n){this.router.navigateByUrl(`/app/tabs/drugs/${n.id}`)}viewPicture(){this.openLinkSystemBrowser(`https://www.google.com/search?tbm=isch&q=${this.drug.tradename.split(" ").slice(0,2).join(" ")} drug`)}googleMore(){this.openLinkSystemBrowser(`https://www.google.com/search?&q=${this.drug.tradename.split(" ").slice(0,2).join(" ")} drug`)}openLinkSystemBrowser(n){window.open(n,"_system")}loadDrugSimilars(){let n=[];const i=()=>{for(let r=0;r<this.drugs.length;r++)this.drug.activeingredient===this.drugs[r].activeingredient&&n.push(this.drugs[r])},c=r=>r.sort((u,I)=>Number(u.price)-Number(I.price));return new Promise((r,s)=>{this.drugs.length?(i(),c(n)):this.drugsService.drugs$.subscribe(u=>{this.drugs=u,i(),c(n)}),r(n)})}getDrugImage(n){return`${h._}/assets/imgs/drugs/${n-1>-1?n:0}.jpg`}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(l.gz),t.Y36(m.e),t.Y36(l.F0),t.Y36(P.y))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-drug-details"]],decls:49,vars:16,consts:[["color","primary"],["slot","start"],["defaultHref","home"],[1,"ion-padding"],[1,"card"],[1,"picture-container","ion-padding-top"],[1,"picture"],["height","100",3,"src"],[1,"details"],["class","detail",4,"ngIf"],[1,"actions","ion-padding-start","ion-padding-end","ion-padding-top"],["color","warning","expand","block",1,"action",3,"click"],["color","light","name","search"],["color","light"],["color","dark","expand","block",1,"action",3,"click"],["color","light","name","aperture-outline"],[1,"full-width","ion-padding-start","ion-padding-end","ion-padding-bottom"],["color","dark","expand","full",3,"click"],["color","light","name","flask-outline"],[2,"height","1px",3,"id"],[3,"hidden"],["class","title",4,"ngIf"],[4,"ngFor","ngForOf"],["padding",""],[1,"similars"],[1,"title"],["class","card",3,"click",4,"ngFor","ngForOf"],[1,"detail"],["color","dark"],[1,"tradename","ion-margin-start","ion-text-center"],["color","danger"],[1,"ion-margin-start",3,"click"],[1,"clickable"],["color","success"],[1,"info","ion-margin-start"],[1,"company-container",3,"click"],["color","danger",1,"clickable"],["padding-left",""],[1,"card",3,"click"],[1,"name"],[1,"price"]],template:function(n,i){1&n&&(t.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),t._UZ(3,"ion-back-button",2),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5,"Drug Details"),t.qZA()()(),t.TgZ(6,"ion-content",3)(7,"div",4)(8,"div",5)(9,"div",6),t._UZ(10,"ion-img",7),t.qZA()(),t.TgZ(11,"div",8),t.YNc(12,f,7,1,"div",9),t.YNc(13,O,6,1,"div",9),t.YNc(14,M,6,1,"div",9),t.YNc(15,x,7,1,"div",9),t.YNc(16,v,7,1,"div",9),t.TgZ(17,"div",10)(18,"ion-button",11),t.NdJ("click",function(){return i.googleMore()}),t._UZ(19,"ion-icon",12),t.TgZ(20,"ion-text",13),t._uU(21,"Google more"),t.qZA()(),t.TgZ(22,"ion-button",14),t.NdJ("click",function(){return i.viewPicture()}),t._UZ(23,"ion-icon",15),t.TgZ(24,"ion-text",13),t._uU(25,"View Picture"),t.qZA()()(),t.TgZ(26,"div",16)(27,"ion-button",17),t.NdJ("click",function(){return i.togglePharma()}),t._UZ(28,"ion-icon",18),t.TgZ(29,"ion-text",13),t._uU(30),t.qZA()()(),t._UZ(31,"div",19),t.TgZ(32,"div",20)(33,"div"),t.YNc(34,D,2,0,"h3",21),t.TgZ(35,"div"),t.YNc(36,Z,3,1,"p",22),t.qZA()(),t.TgZ(37,"div"),t.YNc(38,T,2,0,"h3",21),t.TgZ(39,"div",23),t.YNc(40,w,3,1,"p",22),t.qZA()(),t.TgZ(41,"div"),t.YNc(42,y,2,0,"h3",21),t.TgZ(43,"div",23),t.YNc(44,b,3,1,"p",22),t.qZA()()()(),t.TgZ(45,"div",24)(46,"h3",25),t._uU(47,"Similar Drugs:"),t.qZA(),t.YNc(48,k,7,2,"div",26),t.qZA()()()),2&n&&(t.xp6(10),t.Q6J("src",i.getDrugImage(i.drug.id)),t.xp6(2),t.Q6J("ngIf",i.drug.tradename),t.xp6(1),t.Q6J("ngIf",i.activeingredients.length),t.xp6(1),t.Q6J("ngIf",i.drug.price),t.xp6(1),t.Q6J("ngIf",i.drug.group),t.xp6(1),t.Q6J("ngIf",i.drug.company),t.xp6(14),t.Oqu(i.showPharma?"Hide Detailed Pharma":"View Detailed Pharma"),t.xp6(1),t.MGl("id","pharma",i.drug.id,""),t.xp6(1),t.Q6J("hidden",!i.showPharma),t.xp6(2),t.Q6J("ngIf",i.drug.composition),t.xp6(2),t.Q6J("ngForOf",null==i.drug.composition?null:i.drug.composition.split("\n")),t.xp6(2),t.Q6J("ngIf",i.drug.pamphlet),t.xp6(2),t.Q6J("ngForOf",null==i.drug||null==i.drug.pamphlet?null:i.drug.pamphlet.split("\n")),t.xp6(2),t.Q6J("ngIf",i.drug.dosage),t.xp6(2),t.Q6J("ngForOf",null==i.drug||null==i.drug.dosage?null:i.drug.dosage.split("\n")),t.xp6(4),t.Q6J("ngForOf",i.similars))},dependencies:[d.sg,d.O5,a.oU,a.YG,a.Sm,a.W2,a.Gu,a.gu,a.Xz,a.yW,a.wd,a.sr,a.cs],styles:['ion-content[_ngcontent-%COMP%]{--background: #eee}ion-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px}ion-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:start;align-items:start;border-radius:12px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;background:white;border:1px solid rgba(255,255,255,.3)}ion-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .picture-container[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:row;justify-content:center;align-items:center}ion-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .picture-container[_ngcontent-%COMP%]   .picture[_ngcontent-%COMP%]{padding:5px;width:50%;margin:auto;display:flex;justify-content:center;align-items:center}ion-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .picture-container[_ngcontent-%COMP%]   .picture[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:auto;height:100%;filter:contrast(1);border:1px solid #fff}ion-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{justify-content:start;display:flex;align-items:start;flex-direction:column;width:100%}ion-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .clickable[_ngcontent-%COMP%]{border-bottom:2px solid tomato;display:inline-block;line-height:.85}ion-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]{-webkit-margin-start:16px;margin-inline-start:16px;width:100%}ion-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .company-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;width:calc(100% - 32px)}ion-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .tradename[_ngcontent-%COMP%]{text-align:justify;font-size:5.4vw;margin-bottom:-1em!important}ion-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .tradename[_ngcontent-%COMP%]:after{content:"";display:inline-block;width:100%}ion-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%}ion-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;width:50%;color:#fff}ion-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{margin-right:8px}ion-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%]{width:100%}ion-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .bg-transparent[_ngcontent-%COMP%]{background:transparent}ion-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .clickable[_ngcontent-%COMP%]{border-bottom:2px solid tomato;display:inline-block;line-height:.85}ion-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .similars[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}ion-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .similars[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{align-self:flex-start;margin-left:16px}ion-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .similars[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-between;background-color:#fff;border-radius:10px;box-shadow:0 2px 6px rgba(0,0,0,.15);cursor:pointer;padding:10px;transition:all .2s ease-in-out;width:calc(100% - 32px);margin-bottom:10px}ion-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .similars[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover{transform:scale(1.05)}ion-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .similars[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:700;text-align:left;margin-bottom:10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:75%}ion-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .similars[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{font-size:1.1rem;color:#666;text-align:right;width:25%}']}),e})()}];let U=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.Bz.forChild(A),l.Bz]}),e})(),q=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.ez,_.u5,a.Pc,U]}),e})()}}]);
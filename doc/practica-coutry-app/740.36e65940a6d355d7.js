"use strict";(self.webpackChunkpracticaCoutryApp=self.webpackChunkpracticaCoutryApp||[]).push([[740],{740:(nt,v,a)=>{a.r(v),a.d(v,{CountriesModule:()=>tt});var u=a(895),d=a(551),t=a(256),Z=a(262),C=a(646),A=a(4),l=a(505),U=a(529);let m=(()=>{class i{constructor(e){this.http=e,this.apiUrl="https://restcountries.com/v3.1",this.cacheStore={byCapital:{term:"",countries:[]},byCountries:{term:"",countries:[]},byRegion:{region:"",countries:[]}},this.loadFromLocalStorage()}saveToLocalStorage(){localStorage.setItem("cacheStore",JSON.stringify(this.cacheStore))}loadFromLocalStorage(){localStorage.getItem("cacheStore")&&(this.cacheStore=JSON.parse(localStorage.getItem("cacheStore")))}getCountriesRequest(e){return this.http.get(e).pipe((0,Z.K)(()=>(0,C.of)([])))}searchCountryByAlphaCode(e){return this.http.get(`${this.apiUrl}/alpha/${e}`).pipe((0,A.U)(r=>r.length>0?r[0]:null),(0,Z.K)(()=>(0,C.of)(null)))}searchCapital(e){return this.getCountriesRequest(`${this.apiUrl}/capital/${e}`).pipe((0,l.b)(r=>this.cacheStore.byCapital={term:e,countries:r}),(0,l.b)(()=>this.saveToLocalStorage()))}searchCountry(e){return this.getCountriesRequest(`${this.apiUrl}/name/${e}`).pipe((0,l.b)(r=>this.cacheStore.byCountries={term:e,countries:r}),(0,l.b)(()=>this.saveToLocalStorage()))}searchRegion(e){return this.getCountriesRequest(`${this.apiUrl}/region/${e}`).pipe((0,l.b)(r=>this.cacheStore.byRegion={region:e,countries:r}),(0,l.b)(()=>this.saveToLocalStorage()))}static#t=this.\u0275fac=function(n){return new(n||i)(t.LFG(U.eN))};static#e=this.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),b=(()=>{class i{static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["shared-loading-spinner"]],decls:15,vars:0,consts:[[1,"spinner-container","bg-dark"],["width","45","height","45","viewBox","0 0 45 45","xmlns","http://www.w3.org/2000/svg","stroke","#fff"],["fill","none","fill-rule","evenodd","transform","translate(1 1)","stroke-width","2"],["cx","22","cy","22","r","6","stroke-opacity","0"],["attributeName","r","begin","1.5s","dur","3s","values","6;22","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-opacity","begin","1.5s","dur","3s","values","1;0","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-width","begin","1.5s","dur","3s","values","2;0","calcMode","linear","repeatCount","indefinite"],["attributeName","r","begin","3s","dur","3s","values","6;22","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-opacity","begin","3s","dur","3s","values","1;0","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-width","begin","3s","dur","3s","values","2;0","calcMode","linear","repeatCount","indefinite"],["cx","22","cy","22","r","8"],["attributeName","r","begin","0s","dur","1.5s","values","6;1;2;3;4;5;6","calcMode","linear","repeatCount","indefinite"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0)(1,"span"),t._uU(2,"Buscando"),t.qZA(),t.O4$(),t.TgZ(3,"svg",1)(4,"g",2)(5,"circle",3),t._UZ(6,"animate",4)(7,"animate",5)(8,"animate",6),t.qZA(),t.TgZ(9,"circle",3),t._UZ(10,"animate",7)(11,"animate",8)(12,"animate",9),t.qZA(),t.TgZ(13,"circle",10),t._UZ(14,"animate",11),t.qZA()()()())},styles:[".spinner-container[_ngcontent-%COMP%]{align-items:center;background-color:#000;border-radius:20px;bottom:15px;color:#fff;display:flex;padding:5px 10px;position:fixed;right:15px;box-shadow:0 0 5px #000}span[_ngcontent-%COMP%]{margin-left:5px}"]})}return i})();var S=a(579),w=a(727);class q extends w.w0{constructor(o,e){super()}schedule(o,e=0){return this}}const y={setInterval(i,o,...e){const{delegate:n}=y;return n?.setInterval?n.setInterval(i,o,...e):setInterval(i,o,...e)},clearInterval(i){const{delegate:o}=y;return(o?.clearInterval||clearInterval)(i)},delegate:void 0};var I=a(737);const _={now:()=>(_.delegate||Date).now(),delegate:void 0};class g{constructor(o,e=g.now){this.schedulerActionCtor=o,this.now=e}schedule(o,e=0,n){return new this.schedulerActionCtor(this,o).schedule(n,e)}}g.now=_.now;const V=new class P extends g{constructor(o,e=g.now){super(o,e),this.actions=[],this._active=!1}flush(o){const{actions:e}=this;if(this._active)return void e.push(o);let n;this._active=!0;do{if(n=o.execute(o.state,o.delay))break}while(o=e.shift());if(this._active=!1,n){for(;o=e.shift();)o.unsubscribe();throw n}}}(class B extends q{constructor(o,e){super(o,e),this.scheduler=o,this.work=e,this.pending=!1}schedule(o,e=0){var n;if(this.closed)return this;this.state=o;const r=this.id,s=this.scheduler;return null!=r&&(this.id=this.recycleAsyncId(s,r,e)),this.pending=!0,this.delay=e,this.id=null!==(n=this.id)&&void 0!==n?n:this.requestAsyncId(s,this.id,e),this}requestAsyncId(o,e,n=0){return y.setInterval(o.flush.bind(o,this),n)}recycleAsyncId(o,e,n=0){if(null!=n&&this.delay===n&&!1===this.pending)return e;null!=e&&y.clearInterval(e)}execute(o,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const n=this._execute(o,e);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(o,e){let r,n=!1;try{this.work(o)}catch(s){n=!0,r=s||new Error("Scheduled action threw falsy error")}if(n)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){const{id:o,scheduler:e}=this,{actions:n}=e;this.work=this.state=this.scheduler=null,this.pending=!1,(0,I.P)(n,this),null!=o&&(this.id=this.recycleAsyncId(e,o,null)),this.delay=null,super.unsubscribe()}}});var J=a(482),O=a(403);let T=(()=>{class i{constructor(){this.debouncer=new S.x,this.placeHolder="",this.initialValue="",this.onValue=new t.vpe,this.onDebounce=new t.vpe}ngOnInit(){this.debouncerSuscription=this.debouncer.pipe(function L(i,o=V){return(0,J.e)((e,n)=>{let r=null,s=null,c=null;const h=()=>{if(r){r.unsubscribe(),r=null;const p=s;s=null,n.next(p)}};function et(){const p=c+i,x=o.now();if(x<p)return r=this.schedule(void 0,p-x),void n.add(r);h()}e.subscribe((0,O.x)(n,p=>{s=p,c=o.now(),r||(r=o.schedule(et,i),n.add(r))},()=>{h(),n.complete()},void 0,()=>{s=r=null}))})}(300)).subscribe(e=>{this.onDebounce.emit(e)})}ngOnDestroy(){this.debouncerSuscription?.unsubscribe()}emitValue(e){this.onValue.emit(e)}onKeyPress(e){this.debouncer.next(e)}static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["shared-search-box"]],inputs:{placeHolder:"placeHolder",initialValue:"initialValue"},outputs:{onValue:"onValue",onDebounce:"onDebounce"},decls:2,vars:2,consts:[["type","text",1,"form-control",3,"placeholder","value","keyup.enter","keyup"],["txtInput",""]],template:function(n,r){if(1&n){const s=t.EpF();t.TgZ(0,"input",0,1),t.NdJ("keyup.enter",function(){t.CHM(s);const h=t.MAs(1);return t.KtG(r.emitValue(h.value))})("keyup",function(){t.CHM(s);const h=t.MAs(1);return t.KtG(r.onKeyPress(h.value))}),t.qZA()}2&n&&t.Q6J("placeholder",r.placeHolder)("value",r.initialValue)},encapsulation:2})}return i})();function N(i,o){1&i&&(t.TgZ(0,"div",2),t._uU(1," no hay paises "),t.qZA())}const R=function(i){return["/countries/by",i]};function F(i,o){if(1&i&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._UZ(6,"img",5),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.ALo(13,"number"),t.qZA(),t.TgZ(14,"td")(15,"a",6),t._uU(16,"Ver mas"),t.qZA()()()),2&i){const e=o.$implicit,n=o.index;t.xp6(2),t.Oqu(n+1),t.xp6(2),t.Oqu(e.flag),t.xp6(2),t.Q6J("src",e.flags.svg,t.LSH)("alt",e.name.common),t.xp6(2),t.hij(" ",e.name.common," "),t.xp6(2),t.hij(" ",e.capital," "),t.xp6(2),t.hij(" ",t.lcZ(13,8,e.population)," "),t.xp6(3),t.Q6J("routerLink",t.VKq(10,R,e.cca3))}}function M(i,o){if(1&i&&(t.TgZ(0,"table",3)(1,"thead")(2,"tr")(3,"th"),t._uU(4,"#"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Icon"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Bandera"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Nombre"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Capital"),t.qZA(),t.TgZ(13,"th"),t._uU(14,"Poblacion"),t.qZA()()(),t.TgZ(15,"tbody"),t.YNc(16,F,17,12,"tr",4),t.qZA()()),2&i){const e=t.oxw();t.xp6(16),t.Q6J("ngForOf",e.countries)}}let f=(()=>{class i{constructor(){this.countries=[]}static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["countries-country-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["class","alert alert-warning",4,"ngIf","ngIfElse"],["table",""],[1,"alert","alert-warning"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[3,"src","alt"],[3,"routerLink"]],template:function(n,r){if(1&n&&(t.YNc(0,N,2,0,"div",0),t.YNc(1,M,17,1,"ng-template",null,1,t.W1O)),2&n){const s=t.MAs(2);t.Q6J("ngIf",0===r.countries.length)("ngIfElse",s)}},dependencies:[u.sg,u.O5,d.rH,u.JJ],styles:["img[_ngcontent-%COMP%]{width:25px}"]})}return i})();function j(i,o){1&i&&t._UZ(0,"shared-loading-spinner")}let k=(()=>{class i{constructor(e){this.countriesService=e,this.countries=[],this.isLoading=!1,this.initialValue=""}ngOnInit(){this.countries=this.countriesService.cacheStore.byCapital.countries,this.initialValue=this.countriesService.cacheStore.byCapital.term}searchByCapital(e){this.isLoading=!0,this.countriesService.searchCapital(e).subscribe(n=>{this.countries=n,this.isLoading=!1})}static#t=this.\u0275fac=function(n){return new(n||i)(t.Y36(m))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["countries-by-capita-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],["placeHolder","por capital",3,"initialValue","onValue","onDebounce"],[4,"ngIf"],[3,"countries"]],template:function(n,r){1&n&&(t.TgZ(0,"h2"),t._uU(1,"Por capital"),t.qZA(),t._UZ(2,"hr"),t.TgZ(3,"div",0)(4,"div",1)(5,"shared-search-box",2),t.NdJ("onValue",function(c){return r.searchByCapital(c)})("onDebounce",function(c){return r.searchByCapital(c)}),t.qZA()()(),t.TgZ(6,"div",0)(7,"div",1),t._UZ(8,"hr"),t.YNc(9,j,1,0,"shared-loading-spinner",3),t._UZ(10,"countries-country-table",4),t.qZA()()),2&n&&(t.xp6(5),t.Q6J("initialValue",r.initialValue),t.xp6(4),t.Q6J("ngIf",r.isLoading),t.xp6(1),t.Q6J("countries",r.countries))},dependencies:[u.O5,b,T,f],encapsulation:2})}return i})();function Q(i,o){1&i&&t._UZ(0,"shared-loading-spinner")}let Y=(()=>{class i{constructor(e){this.countriesService=e,this.countriesComponent=[],this.ifLoading=!1,this.initialValue=""}ngOnInit(){this.countriesComponent=this.countriesService.cacheStore.byCountries.countries,this.initialValue=this.countriesService.cacheStore.byCountries.term}searchByCountry(e){this.ifLoading=!0,this.countriesService.searchCountry(e).subscribe(n=>{this.countriesComponent=n,this.ifLoading=!1})}static#t=this.\u0275fac=function(n){return new(n||i)(t.Y36(m))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["countries-by-country-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],["placeHolder","por pais",3,"initialValue","onValue","onDebounce"],[4,"ngIf"],[3,"countries"]],template:function(n,r){1&n&&(t.TgZ(0,"h2"),t._uU(1,"Por pais"),t.qZA(),t._UZ(2,"hr"),t.TgZ(3,"div",0)(4,"div",1)(5,"shared-search-box",2),t.NdJ("onValue",function(c){return r.searchByCountry(c)})("onDebounce",function(c){return r.searchByCountry(c)}),t.qZA()()(),t.TgZ(6,"div",0)(7,"div",1),t._UZ(8,"hr"),t.YNc(9,Q,1,0,"shared-loading-spinner",3),t._UZ(10,"countries-country-table",4),t.qZA()()),2&n&&(t.xp6(5),t.Q6J("initialValue",r.initialValue),t.xp6(4),t.Q6J("ngIf",r.ifLoading),t.xp6(1),t.Q6J("countries",r.countriesComponent))},dependencies:[u.O5,b,T,f],encapsulation:2})}return i})();const D=function(i){return{"btn-outline-primary":i}};function H(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"button",5),t.NdJ("click",function(){const s=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.searchByRegion(s))}),t._uU(1),t.qZA()}if(2&i){const e=o.$implicit,n=t.oxw();t.Q6J("ngClass",t.VKq(2,D,n.selectedRegion===e)),t.xp6(1),t.hij(" ",e," ")}}let $=(()=>{class i{constructor(e){this.countryService=e,this.regionCountry=[],this.regions=["Africa","Americas","Asia","Europe","Oceania"]}ngOnInit(){this.regionCountry=this.countryService.cacheStore.byRegion.countries,this.selectedRegion=this.countryService.cacheStore.byRegion.region}searchByRegion(e){this.selectedRegion=e,this.countryService.searchRegion(e).subscribe(n=>{this.regionCountry=n})}static#t=this.\u0275fac=function(n){return new(n||i)(t.Y36(m))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["countries-by-region"]],decls:10,vars:2,consts:[[1,"row"],[1,"col","text-center"],["class","btn mx-2 ",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"col"],[3,"countries"],[1,"btn","mx-2",3,"ngClass","click"]],template:function(n,r){1&n&&(t.TgZ(0,"h2"),t._uU(1,"Por region"),t.qZA(),t._UZ(2,"hr"),t.TgZ(3,"div",0)(4,"div",1),t.YNc(5,H,2,4,"button",2),t.qZA()(),t._UZ(6,"hr"),t.TgZ(7,"div",0)(8,"div",3),t._UZ(9,"countries-country-table",4),t.qZA()()),2&n&&(t.xp6(5),t.Q6J("ngForOf",r.regions),t.xp6(4),t.Q6J("countries",r.regionCountry))},dependencies:[u.mk,u.sg,f],encapsulation:2})}return i})();var E=a(900);function K(i,o){1&i&&(t.TgZ(0,"div",2),t._uU(1," espere por favor "),t.qZA())}function X(i,o){if(1&i&&(t.TgZ(0,"div")(1,"div",3)(2,"div",4)(3,"h2"),t._uU(4,"Pais: "),t.TgZ(5,"strong"),t._uU(6),t.qZA()(),t._UZ(7,"hr"),t.qZA()(),t.TgZ(8,"div",3)(9,"div",5)(10,"h3"),t._uU(11,"Bandera"),t.qZA(),t._UZ(12,"img",6),t.qZA(),t.TgZ(13,"div",7)(14,"h3"),t._uU(15,"Informacion"),t.qZA(),t.TgZ(16,"ul",8)(17,"li",9)(18,"strong"),t._uU(19,"Poblacion "),t.qZA(),t._uU(20),t.ALo(21,"number"),t.qZA(),t.TgZ(22,"li",9)(23,"strong"),t._uU(24,"Codigo "),t.qZA(),t._uU(25),t.qZA()()()(),t.TgZ(26,"div",10)(27,"div",7)(28,"h3"),t._uU(29,"Traducciones"),t.qZA(),t.TgZ(30,"div",11)(31,"span",12),t._uU(32),t.qZA(),t.TgZ(33,"span",12),t._uU(34),t.qZA(),t.TgZ(35,"span",12),t._uU(36),t.qZA(),t.TgZ(37,"span",12),t._uU(38),t.qZA(),t.TgZ(39,"span",12),t._uU(40),t.qZA(),t.TgZ(41,"span",12),t._uU(42),t.qZA(),t.TgZ(43,"span",12),t._uU(44),t.qZA(),t.TgZ(45,"span",12),t._uU(46),t.qZA(),t.TgZ(47,"span",12),t._uU(48),t.qZA()()()()()),2&i){const e=t.oxw();t.xp6(6),t.hij("",null==e.country||null==e.country.name?null:e.country.name.common," "),t.xp6(6),t.Q6J("src",e.country.flags.svg,t.LSH)("alt",e.country.name.common),t.xp6(8),t.hij("",t.lcZ(21,14,e.country.population)," "),t.xp6(5),t.hij("",e.country.cca3," "),t.xp6(7),t.hij(" ",e.country.translations.ara.common,""),t.xp6(2),t.hij(" ",e.country.translations.bre.common,""),t.xp6(2),t.hij(" ",e.country.translations.cym.common,""),t.xp6(2),t.hij(" ",e.country.translations.deu.common,""),t.xp6(2),t.hij(" ",e.country.translations.est.common,""),t.xp6(2),t.hij(" ",e.country.translations.fin.common,""),t.xp6(2),t.hij(" ",e.country.translations.ita.common,""),t.xp6(2),t.hij(" ",e.country.translations.kor.common,""),t.xp6(2),t.hij(" ",e.country.translations.per.common,"")}}const z=[{path:"by-capital",component:k},{path:"by-country",component:Y},{path:"by-region",component:$},{path:"by/:id",component:(()=>{class i{constructor(e,n,r){this.activatedRoute=e,this.countryService=n,this.router=r}ngOnInit(){this.activatedRoute.params.pipe((0,E.w)(({id:e})=>this.countryService.searchCountryByAlphaCode(e))).subscribe(e=>e?this.country=e:this.router.navigateByUrl(""))}static#t=this.\u0275fac=function(n){return new(n||i)(t.Y36(d.gz),t.Y36(m),t.Y36(d.F0))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["countries-country-page"]],decls:3,vars:2,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"alert","alert-info","text-center"],[1,"row"],[1,"col-12"],[1,"col-4"],[1,"img-thumbnail",3,"src","alt"],[1,"col"],[1,"list-group"],[1,"list-group-item"],[1,"row","mt-2"],[1,"d-flex","flex-wrap"],[1,"badge","bg-primary","m-1"]],template:function(n,r){if(1&n&&(t.YNc(0,K,2,0,"ng-template",null,0,t.W1O),t.YNc(2,X,49,16,"div",1)),2&n){const s=t.MAs(1);t.xp6(2),t.Q6J("ngIf",r.country)("ngIfElse",s)}},dependencies:[u.O5,u.JJ],encapsulation:2})}return i})()},{path:"**",redirectTo:"by-capital"}];let G=(()=>{class i{static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275mod=t.oAB({type:i});static#n=this.\u0275inj=t.cJS({imports:[u.ez,d.Bz.forChild(z),d.Bz]})}return i})();var W=a(466);let tt=(()=>{class i{static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275mod=t.oAB({type:i});static#n=this.\u0275inj=t.cJS({imports:[u.ez,G,W.m]})}return i})()}}]);
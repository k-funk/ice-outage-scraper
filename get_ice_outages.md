# cURL-Based Approach

On 2022-03-20, they have what appears to be a client bug that makes the data not load on the page. However, network requests suggests that the data is still coming through. Might need to do a more manual approach if this a common ocurrence.

## request 1

https://www.grupoice.com/wps/portal/ICE/electricidad/suspensiones-electricas-programadas
which 302s to
https://www.grupoice.com/wps/portal/ICE/electricidad/suspensiones-electricas-programadas/!ut/p/z1/jZBBDsIgEEXP0hMwUC10OSEFrFYhaW3LxrAyJFpdGM-v6V5kdj95b35miCcT8Ut4x2t4xccSbt88--pSoxFGSrBCKgZOsdq1rWGaMjKugLZ7pOWGWuGgAUfL01nVHTv2nPgcnzuB1Gg4aG4kYNdXSHnDunab58OPQcjzE4BPrx-JX5HUB1YgdeK_kud9GIYJ4g6L4gO-AUgk/#/
may not be necessary, but will give a cookie

## request 2

```
curl 'https://www.grupoice.com/wps/wcm/connect/ice%20es/ice/electricidad/suspensiones%20electricas/untitled?SRV=cmpnt&cmpntname=main.js&source=content' \
  -H 'Connection: keep-alive' \
  -H 'Pragma: no-cache' \
  -H 'Cache-Control: no-cache' \
  -H 'sec-ch-ua: " Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"' \
  -H 'Origin: https://www.grupoice.com' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36' \
  -H 'sec-ch-ua-platform: "macOS"' \
  -H 'Accept: */*' \
  -H 'Sec-Fetch-Site: same-origin' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Dest: script' \
  -H 'Accept-Language: en-US,en;q=0.9,es;q=0.8' \
  --compressed
```

### response

```
(self.webpackChunkSuspenciones_Electricas_Programadas=self.webpackChunkSuspenciones_Electricas_Programadas||[]).push([["main"],{944:(d,f,o)=>{"use strict";var p=o(318),t=o(2311),r=o(1876),l=o(6362),c=o(8784),j=o(8962),m=o(6317),_=o(4929);const M=window.location,P_url="/wps/contenthandler/wcmrest/";M.origin;class g{constructor(n){this.http=n,this.url=P_url}getIdsContenidosPorPlantillaCreacionSinPaginar(n){const e=(new c.WM).set("Content-Type","application/json");return this.http.get(this.url+"query?mime-type=application/json&authoringtemplateid="+n+"&pagesize=500&sort=created&state=PUBLISHED",{headers:e})}getDatosContenidos(n){const e=(new c.WM).set("Content-Type","application/json");return this.http.get(this.url+"Content/"+n+"/?mime-type=application/json&sort=created",{headers:e})}}g.\u0275fac=function(n){return new(n||g)(t.LFG(c.eN))},g.\u0275prov=t.Yz7({token:g,factory:g.\u0275fac});var C=o(8216),O=o(2218),x=o(6908);function y(a,n){if(1&a&&(t.TgZ(0,"tr"),t.TgZ(1,"td"),t.TgZ(2,"label",28),t.TgZ(3,"span",29),t._uU(4,"Fecha y hora"),t.qZA(),t._UZ(5,"span",30),t.qZA(),t.qZA(),t.TgZ(6,"td",21),t.TgZ(7,"label",31),t.TgZ(8,"span",29),t._uU(9,"Ubicaci\xf3n"),t.qZA(),t._UZ(10,"span",30),t.qZA(),t.qZA(),t.TgZ(11,"td",21),t.TgZ(12,"label",28),t.TgZ(13,"span",29),t._uU(14,"Trabajos a realizar"),t.qZA(),t._UZ(15,"span",30),t.qZA(),t.qZA(),t.TgZ(16,"td",22),t.TgZ(17,"label",28),t.TgZ(18,"span",29),t._uU(19,"ordemamiento fecha"),t.qZA(),t._UZ(20,"span",30),t.qZA(),t.qZA(),t.qZA()),2&a){const e=n.$implicit;t.xp6(5),t.Q6J("innerHtml",e.fecha,t.oJD),t.xp6(5),t.Q6J("innerHtml",e.ubicacion,t.oJD),t.xp6(5),t.Q6J("innerHtml",e.trabajos,t.oJD),t.xp6(1),t.Q6J("hidden",!0),t.xp6(4),t.Q6J("innerHtml",e.ordenamientoFecha,t.oJD)}}class u{constructor(n,e,s){this.service=n,this.router=e,this.route=s,this.dtOptions={},this.dtTrigger=new O.xQ,this.idTemplate="0c8fde2e-1cda-46c1-a609-11984f3eb4df",this.datos=[],this.arrayIDs=[],this.authorized=!1,this.dropdownText="Seleccione",this.inputPalClaves="ej. a nivel nacional, horas\u2026"}ngOnInit(){console.log("carga de modulo"),this.getIDsPerAuthoringTemplate(this.idTemplate),$("#txtSearch").on("keyup",()=>{$("#tablaDatos").DataTable().search($("#txtSearch").val().toString(),!1,!0).draw()}),this.dtOptions={pagingType:"full_numbers",pageLength:10,language:{url:"//cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json",search:""},search:!1,responsive:!0,dom:"ltpr",order:[[3,"asc"]],initComplete(){this.api().columns().every(function(){const n=this;$("input",this.footer()).on("keyup",function(){n.search()!==this.value&&n.search(this.value).draw()})})}}}getIDsPerAuthoringTemplate(n){return new Promise(e=>{this.service.getIdsContenidosPorPlantillaCreacionSinPaginar(n).subscribe(s=>{s.feed.entry.forEach(i=>{this.arrayIDs.push(i.id.split(":")[1])}),e(this.getContent())},s=>{console.log(s)})})}getContent(){this.arrayIDs.forEach(n=>{this.getData(n)})}getData(n){this.service.getDatosContenidos(n).subscribe(e=>{const i=e.entry.workflow.expiryDate.split(" "),A=new Map([["Jan","01"],["Feb","02"],["Mar","03"],["Apr","04"],["May","05"],["Jun","06"],["Jul","07"],["Aug","08"],["Sep","09"],["Oct","10"],["Nov","11"],["Dec","12"]]),k=i[3]+"-"+A.get(""+i[2])+"-"+i[1]+" "+i[4],w=x(k).format("YYYY-MM-DD HH:mm:ss"),D={fecha:e.entry.content.content.elements.element[0].data.value,ubicacion:e.entry.content.content.elements.element[1].data.value,trabajos:e.entry.content.content.elements.element[2].data.value,ordenamientoFecha:w};this.datos.push(D),this.datos.sort((S,z)=>S.ordenamientoFecha>z.ordenamientoFecha?1:-1),$("#tablaDatos").DataTable().destroy(),this.datos.length===this.arrayIDs.length&&this.pintarTabla()},e=>{console.log(e)})}pintarTabla(){return(0,_.mG)(this,void 0,void 0,function*(){yield this.dtTrigger.next()})}capturar(n){const e=n.target.options,i=e[e.selectedIndex].text;"Seleccione"==i?$("#tablaDatos").DataTable().column(1).search("").draw():$("#tablaDatos").DataTable().column(1).search(i).draw()}limpiar(){this.dropdownText="Seleccione",this.inputPalClaves="ej. a nivel nacional, horas\u2026",$("#txtSearch").val(""),$("#tablaDatos").DataTable().destroy(),this.pintarTabla()}}u.\u0275fac=function(n){return new(n||u)(t.Y36(g),t.Y36(m.F0),t.Y36(m.gz))},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-suspenciones-electricas"]],viewQuery:function(n,e){if(1&n&&t.Gf(C.G,5),2&n){let s;t.iGM(s=t.CRH())&&(e.datatableElement=s.first)}},features:[t._Bn([g])],decls:57,vars:7,consts:[[1,"menuBusqueda","col-xs-10","col-sm-10","col-md-10","col-lg-10","offset-md-1","offset-lg-1"],["name","opcionSeleccionado",1,"form-inline","formularioSuspencionElectrica"],[1,"formValues","col-xs-12","col-sm-12","col-md-12","col-lg-3"],["for","elementoSel",1,"textMen"],["id","elementoSel","selected","","name","dropdownText",1,"custom-select","custom-select-lg","form-control","provinciasList",3,"ngModel","ngModelChange","change"],[1,"seleccionado"],["value","Guanacaste"],["value","Alajuela"],["value","San Jos\xe9"],["value","Heredia"],["value","Lim\xf3n"],["value","Puntarenas"],["value","Cartago"],["value","A nivel nacional"],[1,"formValues","col-xs-12","col-sm-12","col-md-12","col-lg-6"],["for","txtSearch","id","labelSearchKeyWord",1,"textMen"],["type","text","id","txtSearch",1,"form-control","inputPalabrasClave",3,"placeholder"],[1,"buttonLimpiar","col-sm-12","col-md-2","col-lg-2","col-xl-2"],["type","button","id","limpiarForm",1,"btn","btn-link",3,"click"],[1,"tablaRTFs","col-xs-10","col-sm-10","col-md-10","col-lg-10","offset-md-1","offset-lg-1"],["datatable","","id","tablaDatos",1,"row-border","hover","table","table-resposive","table-striped",3,"dtOptions","dtTrigger"],["scope","col"],["scope","col",3,"hidden"],[4,"ngFor","ngForOf"],["id","fecha"],[1,"my-1","mr-2","textMen"],["id","servAfect"],["id","ordemamientoFecha",3,"hidden"],[1,"labelsTableMobile"],[1,"label"],[1,"contenidoSpan",3,"innerHtml"],[1,"labelsTableMobile","ubic"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"form",1),t.TgZ(2,"div",2),t.TgZ(3,"label",3),t._uU(4,"Provincia"),t.qZA(),t.TgZ(5,"select",4),t.NdJ("ngModelChange",function(i){return e.dropdownText=i})("change",function(i){return e.capturar(i)}),t.TgZ(6,"option",5),t._uU(7,"Seleccione"),t.qZA(),t.TgZ(8,"option",6),t._uU(9,"Guanacaste"),t.qZA(),t.TgZ(10,"option",7),t._uU(11,"Alajuela"),t.qZA(),t.TgZ(12,"option",8),t._uU(13,"San Jos\xe9"),t.qZA(),t.TgZ(14,"option",9),t._uU(15,"Heredia"),t.qZA(),t.TgZ(16,"option",10),t._uU(17,"Lim\xf3n"),t.qZA(),t.TgZ(18,"option",11),t._uU(19,"Puntarenas"),t.qZA(),t.TgZ(20,"option",12),t._uU(21,"Cartago"),t.qZA(),t.TgZ(22,"option",13),t._uU(23,"A nivel nacional"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(24,"div",14),t.TgZ(25,"label",15),t._uU(26,"B\xfasqueda por palabra clave"),t.qZA(),t._UZ(27,"input",16),t.qZA(),t._UZ(28,"br"),t.TgZ(29,"div",17),t.TgZ(30,"button",18),t.NdJ("click",function(){return e.limpiar()}),t._uU(31,"Limpiar"),t.qZA(),t.qZA(),t._UZ(32,"br"),t.qZA(),t.qZA(),t.TgZ(33,"div",19),t.TgZ(34,"table",20),t.TgZ(35,"thead"),t.TgZ(36,"tr"),t.TgZ(37,"th",21),t._uU(38,"Fecha y hora"),t.qZA(),t.TgZ(39,"th",21),t._uU(40,"Ubicaci\xf3n"),t.qZA(),t.TgZ(41,"th",21),t._uU(42,"Trabajos a realizar"),t.qZA(),t.TgZ(43,"th",22),t._uU(44,"ordemamiento"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(45,"tbody"),t.YNc(46,y,21,5,"tr",23),t.qZA(),t.TgZ(47,"tfoot"),t.TgZ(48,"tr"),t.TgZ(49,"th",24),t._uU(50,"Fecha y hora"),t.qZA(),t.TgZ(51,"th",25),t._uU(52,"Provincia"),t.qZA(),t.TgZ(53,"th",26),t._uU(54,"Trabajos a realizar"),t.qZA(),t.TgZ(55,"th",27),t._uU(56,"ordemamiento"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(5),t.Q6J("ngModel",e.dropdownText),t.xp6(22),t.s9C("placeholder",e.inputPalClaves),t.xp6(7),t.Q6J("dtOptions",e.dtOptions)("dtTrigger",e.dtTrigger),t.xp6(9),t.Q6J("hidden",!0),t.xp6(3),t.Q6J("ngForOf",e.datos),t.xp6(9),t.Q6J("hidden",!0))},directives:[r._Y,r.JL,r.F,r.EJ,r.JJ,r.On,r.YN,r.Kr,C.G,l.sg],styles:["table[_ngcontent-%COMP%]{display:table!important}#inlineFormCustomSelectPref[_ngcontent-%COMP%]{box-sizing:border-box;border:1px solid #c6e4ff;border-radius:4px;background-color:#f0f8ff;width:20%;height:37px}.inputPalabrasClave[_ngcontent-%COMP%]{box-sizing:border-box;border:1px solid #c6e4ff;border-radius:4px;background-color:#f0f8ff;height:37px;width:100%!important;margin-top:6px;font-family:Helvetica;font-size:14px;letter-spacing:0;line-height:17px}table.dataTable.hover[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{pointer-events:none}.provinciasList[_ngcontent-%COMP%]{box-sizing:border-box;border:1px solid #c6e4ff;border-radius:4px;background-color:#f0f8ff;height:37px;margin-top:6px;font-family:Helvetica;font-size:14px;letter-spacing:0;width:100%!important;line-height:17px}#fecha[_ngcontent-%COMP%], #servAfect[_ngcontent-%COMP%]{display:none}tfoot[_ngcontent-%COMP%]{display:table-caption}.buttonLimpiar[_ngcontent-%COMP%]{text-align:center;margin-top:28px}.buttonLimpiar[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{color:#000!important}.buttonLimpiar[_ngcontent-%COMP%]   .limpiar[_ngcontent-%COMP%]{font-family:Helvetica;font-size:14px;letter-spacing:0;line-height:17px}.menuBusqueda[_ngcontent-%COMP%]{height:94px;border-radius:4px;background-color:#fff;box-shadow:0 2px 40px #acacac80;display:flex;flex-direction:column}.textMen[_ngcontent-%COMP%]{height:14px;color:#000;font-family:Helvetica;font-size:12px;font-weight:700;letter-spacing:0;line-height:14px}.textInterno[_ngcontent-%COMP%]{height:19px;color:#00f;font-family:Helvetica;font-size:14px;letter-spacing:0;line-height:17px}.dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_length[_ngcontent-%COMP%]{background-color:red;display:none!important}.tablaRTFs[_ngcontent-%COMP%]{padding-left:0;padding-right:0;margin-top:50px;margin-bottom:25px}.tablaRTFs[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(odd){border-radius:4px;background-color:#daecfc!important}.columnasMobile[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%], #tablaDatos[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], #tablaDatos_info[_ngcontent-%COMP%]{display:none}.form-inline[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block!important;justify-content:left!important}.formValues[_ngcontent-%COMP%]{margin-top:10px}#tablaDatos[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:14px!important}@media only screen and (max-width: 768px){.labelsTableMobile[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .labelsTableMobile[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{color:#000!important}.provinciasList[_ngcontent-%COMP%]{width:100%;margin-left:0!important}table.dataTable[_ngcontent-%COMP%]{border-collapse:collapse!important}.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-top:none!important}#tablaDatos[_ngcontent-%COMP%]{width:100%!important}#tablaDatos[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{display:none}#tablaDatos[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{display:flex;margin-top:75px;flex-direction:column}#tablaDatos[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-top:2px solid #99caf1!important}#tablaDatos[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before{display:none!important}#tablaDatos[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{display:flex;flex-direction:column;text-align:left}#tablaDatos[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:flex}#tablaDatos[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-weight:700;display:block;width:70px}#tablaDatos[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .contenidoSpan[_ngcontent-%COMP%]{margin-left:20px}.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex!important}.columnasMobile[_ngcontent-%COMP%]{display:flex}.inputPalabrasClave[_ngcontent-%COMP%]{width:100%!important;margin-left:0!important}.formularioSuspencionElectrica[_ngcontent-%COMP%]{flex-direction:column;align-items:end}.formularioSuspencionElectrica[_ngcontent-%COMP%]   .formValues[_ngcontent-%COMP%]{display:block}.formularioSuspencionElectrica[_ngcontent-%COMP%]   #inlineFormCustomSelectPref[_ngcontent-%COMP%]{justify-content:left;width:100%}.formularioSuspencionElectrica[_ngcontent-%COMP%]   .textMen[_ngcontent-%COMP%]{margin-left:0!important}.menuBusqueda[_ngcontent-%COMP%]{height:auto;margin-left:40px;margin-right:40px}.tablaRTFs[_ngcontent-%COMP%]{margin-left:40px;margin-right:40px}.tablaRTFs[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{display:none}.menuBusqueda[_ngcontent-%COMP%], .tablaRTFs[_ngcontent-%COMP%]{max-width:88.666667%}}@media (max-width: 576px){.menuBusqueda[_ngcontent-%COMP%], .tablaRTFs[_ngcontent-%COMP%]{margin-left:20px}}@-moz-document url-prefix(){table{display:table!important}}"]});const v=[{path:"",component:u},{path:"inicio",component:u},{path:"**",component:u}],T=m.Bz.forRoot(v,{useHash:!0});class b{constructor(n){this.router=n,this.title="Suspenciones-Electricas-Programadas",this.spinkit=j.dw,this.loading=!0}ngOnInit(){this.router.events.subscribe(n=>{n instanceof m.m2&&window.scrollTo(0,0)})}}b.\u0275fac=function(n){return new(n||b)(t.Y36(m.F0))},b.\u0275cmp=t.Xpm({type:b,selectors:[["app-root"]],decls:2,vars:7,consts:[[3,"backdrop","backgroundColor","debounceDelay","extraDuration","minDuration","opacity","spinner"]],template:function(n,e){1&n&&(t._UZ(0,"router-outlet"),t._UZ(1,"ng-http-loader",0)),2&n&&(t.xp6(1),t.Q6J("backdrop",!1)("backgroundColor","#004B93")("debounceDelay",100)("extraDuration",300)("minDuration",300)("opacity",.6)("spinner",e.spinkit.skCubeGrid))},directives:[m.lC,j.QN],styles:[""]});class h{}h.\u0275fac=function(n){return new(n||h)},h.\u0275mod=t.oAB({type:h,bootstrap:[b]}),h.\u0275inj=t.cJS({providers:[[],g],imports:[[r.u5,c.JF,j.wc.forRoot(),p.b2,l.ez,T,C.T]]}),p.q6().bootstrapModule(h).catch(a=>console.error(a))},6700:(d,f,o)=>{var p={"./af":8685,"./af.js":8685,"./ar":254,"./ar-dz":4312,"./ar-dz.js":4312,"./ar-kw":2614,"./ar-kw.js":2614,"./ar-ly":8630,"./ar-ly.js":8630,"./ar-ma":8674,"./ar-ma.js":8674,"./ar-sa":9032,"./ar-sa.js":9032,"./ar-tn":4730,"./ar-tn.js":4730,"./ar.js":254,"./az":3052,"./az.js":3052,"./be":150,"./be.js":150,"./bg":3069,"./bg.js":3069,"./bm":3466,"./bm.js":3466,"./bn":8516,"./bn-bd":557,"./bn-bd.js":557,"./bn.js":8516,"./bo":6273,"./bo.js":6273,"./br":9588,"./br.js":9588,"./bs":9815,"./bs.js":9815,"./ca":3331,"./ca.js":3331,"./cs":1320,"./cs.js":1320,"./cv":2219,"./cv.js":2219,"./cy":8266,"./cy.js":8266,"./da":6427,"./da.js":6427,"./de":7435,"./de-at":2871,"./de-at.js":2871,"./de-ch":2994,"./de-ch.js":2994,"./de.js":7435,"./dv":2357,"./dv.js":2357,"./el":5649,"./el.js":5649,"./en-au":9961,"./en-au.js":9961,"./en-ca":9878,"./en-ca.js":9878,"./en-gb":3924,"./en-gb.js":3924,"./en-ie":864,"./en-ie.js":864,"./en-il":1579,"./en-il.js":1579,"./en-in":940,"./en-in.js":940,"./en-nz":6181,"./en-nz.js":6181,"./en-sg":4301,"./en-sg.js":4301,"./eo":5291,"./eo.js":5291,"./es":4529,"./es-do":3764,"./es-do.js":3764,"./es-mx":2584,"./es-mx.js":2584,"./es-us":3425,"./es-us.js":3425,"./es.js":4529,"./et":5203,"./et.js":5203,"./eu":678,"./eu.js":678,"./fa":3483,"./fa.js":3483,"./fi":6262,"./fi.js":6262,"./fil":2521,"./fil.js":2521,"./fo":4555,"./fo.js":4555,"./fr":3131,"./fr-ca":8239,"./fr-ca.js":8239,"./fr-ch":1702,"./fr-ch.js":1702,"./fr.js":3131,"./fy":267,"./fy.js":267,"./ga":3821,"./ga.js":3821,"./gd":1753,"./gd.js":1753,"./gl":4074,"./gl.js":4074,"./gom-deva":2762,"./gom-deva.js":2762,"./gom-latn":5969,"./gom-latn.js":5969,"./gu":2809,"./gu.js":2809,"./he":5402,"./he.js":5402,"./hi":315,"./hi.js":315,"./hr":410,"./hr.js":410,"./hu":8288,"./hu.js":8288,"./hy-am":7928,"./hy-am.js":7928,"./id":1334,"./id.js":1334,"./is":6959,"./is.js":6959,"./it":4864,"./it-ch":1124,"./it-ch.js":1124,"./it.js":4864,"./ja":6141,"./ja.js":6141,"./jv":9187,"./jv.js":9187,"./ka":2136,"./ka.js":2136,"./kk":4332,"./kk.js":4332,"./km":8607,"./km.js":8607,"./kn":4305,"./kn.js":4305,"./ko":234,"./ko.js":234,"./ku":6003,"./ku.js":6003,"./ky":5061,"./ky.js":5061,"./lb":2786,"./lb.js":2786,"./lo":6183,"./lo.js":6183,"./lt":29,"./lt.js":29,"./lv":4169,"./lv.js":4169,"./me":8577,"./me.js":8577,"./mi":8177,"./mi.js":8177,"./mk":337,"./mk.js":337,"./ml":5260,"./ml.js":5260,"./mn":2325,"./mn.js":2325,"./mr":4695,"./mr.js":4695,"./ms":5334,"./ms-my":7151,"./ms-my.js":7151,"./ms.js":5334,"./mt":3570,"./mt.js":3570,"./my":7963,"./my.js":7963,"./nb":8028,"./nb.js":8028,"./ne":6638,"./ne.js":6638,"./nl":302,"./nl-be":6782,"./nl-be.js":6782,"./nl.js":302,"./nn":3501,"./nn.js":3501,"./oc-lnc":563,"./oc-lnc.js":563,"./pa-in":869,"./pa-in.js":869,"./pl":5302,"./pl.js":5302,"./pt":9687,"./pt-br":4884,"./pt-br.js":4884,"./pt.js":9687,"./ro":9107,"./ro.js":9107,"./ru":3627,"./ru.js":3627,"./sd":355,"./sd.js":355,"./se":3427,"./se.js":3427,"./si":1848,"./si.js":1848,"./sk":4590,"./sk.js":4590,"./sl":184,"./sl.js":184,"./sq":6361,"./sq.js":6361,"./sr":8965,"./sr-cyrl":1287,"./sr-cyrl.js":1287,"./sr.js":8965,"./ss":5456,"./ss.js":5456,"./sv":451,"./sv.js":451,"./sw":7558,"./sw.js":7558,"./ta":2702,"./ta.js":2702,"./te":3693,"./te.js":3693,"./tet":1243,"./tet.js":1243,"./tg":2500,"./tg.js":2500,"./th":5768,"./th.js":5768,"./tk":7761,"./tk.js":7761,"./tl-ph":5780,"./tl-ph.js":5780,"./tlh":9590,"./tlh.js":9590,"./tr":3807,"./tr.js":3807,"./tzl":3857,"./tzl.js":3857,"./tzm":654,"./tzm-latn":8806,"./tzm-latn.js":8806,"./tzm.js":654,"./ug-cn":845,"./ug-cn.js":845,"./uk":9232,"./uk.js":9232,"./ur":7052,"./ur.js":7052,"./uz":7967,"./uz-latn":2233,"./uz-latn.js":2233,"./uz.js":7967,"./vi":8615,"./vi.js":8615,"./x-pseudo":2320,"./x-pseudo.js":2320,"./yo":1313,"./yo.js":1313,"./zh-cn":4490,"./zh-cn.js":4490,"./zh-hk":5910,"./zh-hk.js":5910,"./zh-mo":8262,"./zh-mo.js":8262,"./zh-tw":4223,"./zh-tw.js":4223};function t(l){var c=r(l);return o(c)}function r(l){if(!o.o(p,l)){var c=new Error("Cannot find module '"+l+"'");throw c.code="MODULE_NOT_FOUND",c}return p[l]}t.keys=function(){return Object.keys(p)},t.resolve=r,d.exports=t,t.id=6700}},d=>{d.O(0,["vendor"],()=>{return p=944,d(d.s=p);var p});d.O()}]);
//# sourceMappingURL=main.js.map
```

^ contains:
```
return this.http.get(this.url + "Content/" + n + "/?mime-type=application/json&sort=created", {
    headers: e
})
```
which helps construct request 3

grep for:
```
this.idTemplate="0c8fde2e-1cda-46c1-a609-11984f3eb4df"
```


## request 3

```
curl $'https://www.grupoice.com/wps/contenthandler/\u0021ut/p/digest\u0021A0WkfjONSrx-7vb4RW6Egw/wcmrest/query?authoringtemplateid=0c8fde2e-1cda-46c1-a609-11984f3eb4df&mime-type=application/json&sort=created&state=PUBLISHED&pagesize=500' \
  -H 'Connection: keep-alive' \
  -H 'Pragma: no-cache' \
  -H 'Cache-Control: no-cache' \
  -H 'sec-ch-ua: " Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Content-Type: application/json' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36' \
  -H 'sec-ch-ua-platform: "macOS"' \
  -H 'Sec-Fetch-Site: same-origin' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Dest: empty' \
  -H $'Referer: https://www.grupoice.com/wps/portal/ICE/electricidad/suspensiones-electricas-programadas/\u0021ut/p/z1/jZBBDsIgEEXP0hMwUC10OSEFrFYhaW3LxrAyJFpdGM-v6V5kdj95b35miCcT8Ut4x2t4xccSbt88--pSoxFGSrBCKgZOsdq1rWGaMjKugLZ7pOWGWuGgAUfL01nVHTv2nPgcnzuB1Gg4aG4kYNdXSHnDunab58OPQcjzE4BPrx-JX5HUB1YgdeK_kud9GIYJ4g6L4gO-AUgk/' \
  -H 'Accept-Language: en-US,en;q=0.9,es;q=0.8' \
  -H 'Cookie: DigestTracker=AAABf5sWAYw; JSESSIONID=000075Tq0N2oqZnzj2IkzABAG5-:1d6hjn6re' \
  --compressed

  sometimes 200s, sometimes 302s, with or without cookie
```

### response

```
  {
    "feed" :
    {
        "id" : "wcmrest:query?authoringtemplateid=0c8fde2e-1cda-46c1-a609-11984f3eb4df&mime-type=application%2Fjson&pagesize=500&pragma=no-cache&sort=created&state=PUBLISHED",
        "title" : "wcmrest:query?authoringtemplateid=0c8fde2e-1cda-46c1-a609-11984f3eb4df&mime-type=application%2Fjson&pagesize=500&pragma=no-cache&sort=created&state=PUBLISHED",
        "updated" : "Fri, 18 Mar 2022 03:47:19.884Z",
        "total" : "19",
        "entry" :
        [
            {
                "id" : "wcmrest:04f40deb-21ff-4090-9b2f-39b4d708f6fd",
                "title" :
                {
                    "lang" : "es",
                    "value" : "AlajuELA_Sabana Larga"
                },
                "summary" :
                {
                    "lang" : "es"
                },
                "name" : "AlajuELA_Sabana Larga",
                "type" : "Content",
                "updated" : "Sun, 13 Mar 2022 06:00:07.800Z",
                "author" :
                [
                    {
                        "distinguishedName" : "cn=Erick Jose Barrantes Barrantes (erbarr5),ou=empleados,o=grupoice,o=ice",
                        "uri" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/um/users/profiles/Z9eAeK9P83QO6L1D0JMK6KPDGJM46GPCEJM47PHCGJM07O9OA3J57K1D86QS6J1",
                        "email" : "EBarrantesB@ice.go.cr",
                        "name" : "Erick Jose Barrantes Barrantes (erbarr5)",
                        "type" : "USER"
                    }
                ],
                "lastModifier" :
                {
                    "distinguishedName" : "cn=Erick Jose Barrantes Barrantes (erbarr5),ou=empleados,o=grupoice,o=ice",
                    "uri" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/um/users/profiles/Z9eAeK9P83QO6L1D0JMK6KPDGJM46GPCEJM47PHCGJM07O9OA3J57K1D86QS6J1",
                    "email" : "EBarrantesB@ice.go.cr",
                    "name" : "Erick Jose Barrantes Barrantes (erbarr5)",
                    "type" : "USER"
                },
                "link" :
                [
                    {
                        "rel" : "edit",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Content/04f40deb-21ff-4090-9b2f-39b4d708f6fd",
                        "lang" : "en",
                        "label" : "Edit"
                    },
                    {
                        "rel" : "alternate",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Content/04f40deb-21ff-4090-9b2f-39b4d708f6fd",
                        "lang" : "en",
                        "label" : "Read"
                    },
                    {
                        "rel" : "library",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Library/86d09cdc-bc52-4924-b06a-dcb5a823de38",
                        "lang" : "en",
                        "label" : "Library"
                    },
                    {
                        "rel" : "preview",
                        "href" : "/wps/poc/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcm/oid:04f40deb-21ff-4090-9b2f-39b4d708f6fd",
                        "lang" : "en",
                        "label" : "Preview"
                    }
                ],
                "category" :
                [
                    {
                        "scheme" : "wcmrest:workflowState",
                        "term" : "PUBLISHED",
                        "label" : "Published",
                        "lang" : "en"
                    }
                ]
            },
            {
                "id" : "wcmrest:d9fe7e3c-4a6a-47e2-bd48-4eb3bf72c538",
                "title" :
                {
                    "lang" : "es",
                    "value" : "Alajuela_Los Ángeles"
                },
                "summary" :
                {
                    "lang" : "es"
                },
                "name" : "Alajuela_Los Angeles",
                "type" : "Content",
                "updated" : "Sun, 13 Mar 2022 06:00:07.911Z",
                "author" :
                [
                    {
                        "distinguishedName" : "cn=Erick Jose Barrantes Barrantes (erbarr5),ou=empleados,o=grupoice,o=ice",
                        "uri" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/um/users/profiles/Z9eAeK9P83QO6L1D0JMK6KPDGJM46GPCEJM47PHCGJM07O9OA3J57K1D86QS6J1",
                        "email" : "EBarrantesB@ice.go.cr",
                        "name" : "Erick Jose Barrantes Barrantes (erbarr5)",
                        "type" : "USER"
                    }
                ],
                "lastModifier" :
                {
                    "distinguishedName" : "cn=Erick Jose Barrantes Barrantes (erbarr5),ou=empleados,o=grupoice,o=ice",
                    "uri" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/um/users/profiles/Z9eAeK9P83QO6L1D0JMK6KPDGJM46GPCEJM47PHCGJM07O9OA3J57K1D86QS6J1",
                    "email" : "EBarrantesB@ice.go.cr",
                    "name" : "Erick Jose Barrantes Barrantes (erbarr5)",
                    "type" : "USER"
                },
                "link" :
                [
                    {
                        "rel" : "edit",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Content/d9fe7e3c-4a6a-47e2-bd48-4eb3bf72c538",
                        "lang" : "en",
                        "label" : "Edit"
                    },
                    {
                        "rel" : "alternate",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Content/d9fe7e3c-4a6a-47e2-bd48-4eb3bf72c538",
                        "lang" : "en",
                        "label" : "Read"
                    },
                    {
                        "rel" : "library",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Library/86d09cdc-bc52-4924-b06a-dcb5a823de38",
                        "lang" : "en",
                        "label" : "Library"
                    },
                    {
                        "rel" : "preview",
                        "href" : "/wps/poc/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcm/oid:d9fe7e3c-4a6a-47e2-bd48-4eb3bf72c538",
                        "lang" : "en",
                        "label" : "Preview"
                    }
                ],
                "category" :
                [
                    {
                        "scheme" : "wcmrest:workflowState",
                        "term" : "PUBLISHED",
                        "label" : "Published",
                        "lang" : "en"
                    }
                ]
            },
            {
                "id" : "wcmrest:dc655fe9-4c20-4b97-807e-3027079fb8a7",
                "title" :
                {
                    "lang" : "es",
                    "value" : "Limon_Bananera"
                },
                "summary" :
                {
                    "lang" : "es"
                },
                "name" : "Limon_Bananera",
                "type" : "Content",
                "updated" : "Sun, 13 Mar 2022 06:00:07.569Z",
                "author" :
                [
                    {
                        "distinguishedName" : "cn=Erick Jose Barrantes Barrantes (erbarr5),ou=empleados,o=grupoice,o=ice",
                        "uri" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/um/users/profiles/Z9eAeK9P83QO6L1D0JMK6KPDGJM46GPCEJM47PHCGJM07O9OA3J57K1D86QS6J1",
                        "email" : "EBarrantesB@ice.go.cr",
                        "name" : "Erick Jose Barrantes Barrantes (erbarr5)",
                        "type" : "USER"
                    }
                ],
                "lastModifier" :
                {
                    "distinguishedName" : "cn=Erick Jose Barrantes Barrantes (erbarr5),ou=empleados,o=grupoice,o=ice",
                    "uri" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/um/users/profiles/Z9eAeK9P83QO6L1D0JMK6KPDGJM46GPCEJM47PHCGJM07O9OA3J57K1D86QS6J1",
                    "email" : "EBarrantesB@ice.go.cr",
                    "name" : "Erick Jose Barrantes Barrantes (erbarr5)",
                    "type" : "USER"
                },
                "link" :
                [
                    {
                        "rel" : "edit",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Content/dc655fe9-4c20-4b97-807e-3027079fb8a7",
                        "lang" : "en",
                        "label" : "Edit"
                    },
                    {
                        "rel" : "alternate",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Content/dc655fe9-4c20-4b97-807e-3027079fb8a7",
                        "lang" : "en",
                        "label" : "Read"
                    },
                    {
                        "rel" : "library",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Library/86d09cdc-bc52-4924-b06a-dcb5a823de38",
                        "lang" : "en",
                        "label" : "Library"
                    },
                    {
                        "rel" : "preview",
                        "href" : "/wps/poc/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcm/oid:dc655fe9-4c20-4b97-807e-3027079fb8a7",
                        "lang" : "en",
                        "label" : "Preview"
                    }
                ],
                "category" :
                [
                    {
                        "scheme" : "wcmrest:workflowState",
                        "term" : "PUBLISHED",
                        "label" : "Published",
                        "lang" : "en"
                    }
                ]
            },
            {
                "id" : "wcmrest:2eca88c9-0d0d-4f2c-bd93-2dafcfcdb6d3",
                "title" :
                {
                    "lang" : "es",
                    "value" : "Puntarenas_Jaco"
                },
                "summary" :
                {
                    "lang" : "es"
                },
                "name" : "Puntarenas_Jaco",
                "type" : "Content",
                "updated" : "Sun, 13 Mar 2022 06:00:07.841Z",
                "author" :
                [
                    {
                        "distinguishedName" : "cn=Erick Jose Barrantes Barrantes (erbarr5),ou=empleados,o=grupoice,o=ice",
                        "uri" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/um/users/profiles/Z9eAeK9P83QO6L1D0JMK6KPDGJM46GPCEJM47PHCGJM07O9OA3J57K1D86QS6J1",
                        "email" : "EBarrantesB@ice.go.cr",
                        "name" : "Erick Jose Barrantes Barrantes (erbarr5)",
                        "type" : "USER"
                    }
                ],
                "lastModifier" :
                {
                    "distinguishedName" : "cn=Erick Jose Barrantes Barrantes (erbarr5),ou=empleados,o=grupoice,o=ice",
                    "uri" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/um/users/profiles/Z9eAeK9P83QO6L1D0JMK6KPDGJM46GPCEJM47PHCGJM07O9OA3J57K1D86QS6J1",
                    "email" : "EBarrantesB@ice.go.cr",
                    "name" : "Erick Jose Barrantes Barrantes (erbarr5)",
                    "type" : "USER"
                },
                "link" :
                [
                    {
                        "rel" : "edit",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Content/2eca88c9-0d0d-4f2c-bd93-2dafcfcdb6d3",
                        "lang" : "en",
                        "label" : "Edit"
                    },
                    {
                        "rel" : "alternate",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Content/2eca88c9-0d0d-4f2c-bd93-2dafcfcdb6d3",
                        "lang" : "en",
                        "label" : "Read"
                    },
                    {
                        "rel" : "library",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Library/86d09cdc-bc52-4924-b06a-dcb5a823de38",
                        "lang" : "en",
                        "label" : "Library"
                    },
                    {
                        "rel" : "preview",
                        "href" : "/wps/poc/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcm/oid:2eca88c9-0d0d-4f2c-bd93-2dafcfcdb6d3",
                        "lang" : "en",
                        "label" : "Preview"
                    }
                ],
                "category" :
                [
                    {
                        "scheme" : "wcmrest:workflowState",
                        "term" : "PUBLISHED",
                        "label" : "Published",
                        "lang" : "en"
                    }
                ]
            },
            {
                "id" : "wcmrest:2ad9e580-e9db-477a-9eaf-e94454c8b94a",
                "title" :
                {
                    "lang" : "es",
                    "value" : "Cartago_TresEquis"
                },
                "summary" :
                {
                    "lang" : "es"
                },
                "name" : "Cartago_TresEquis",
                "type" : "Content",
                "updated" : "Sun, 13 Mar 2022 06:00:08.302Z",
                "author" :
                [
                    {
                        "distinguishedName" : "cn=Erick Jose Barrantes Barrantes (erbarr5),ou=empleados,o=grupoice,o=ice",
                        "uri" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/um/users/profiles/Z9eAeK9P83QO6L1D0JMK6KPDGJM46GPCEJM47PHCGJM07O9OA3J57K1D86QS6J1",
                        "email" : "EBarrantesB@ice.go.cr",
                        "name" : "Erick Jose Barrantes Barrantes (erbarr5)",
                        "type" : "USER"
                    }
                ],
                "lastModifier" :
                {
                    "distinguishedName" : "cn=Erick Jose Barrantes Barrantes (erbarr5),ou=empleados,o=grupoice,o=ice",
                    "uri" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/um/users/profiles/Z9eAeK9P83QO6L1D0JMK6KPDGJM46GPCEJM47PHCGJM07O9OA3J57K1D86QS6J1",
                    "email" : "EBarrantesB@ice.go.cr",
                    "name" : "Erick Jose Barrantes Barrantes (erbarr5)",
                    "type" : "USER"
                },
                "link" :
                [
                    {
                        "rel" : "edit",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Content/2ad9e580-e9db-477a-9eaf-e94454c8b94a",
                        "lang" : "en",
                        "label" : "Edit"
                    },
                    {
                        "rel" : "alternate",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Content/2ad9e580-e9db-477a-9eaf-e94454c8b94a",
                        "lang" : "en",
                        "label" : "Read"
                    },
                    {
                        "rel" : "library",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Library/86d09cdc-bc52-4924-b06a-dcb5a823de38",
                        "lang" : "en",
                        "label" : "Library"
                    },
                    {
                        "rel" : "preview",
                        "href" : "/wps/poc/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcm/oid:2ad9e580-e9db-477a-9eaf-e94454c8b94a",
                        "lang" : "en",
                        "label" : "Preview"
                    }
                ],
                "category" :
                [
                    {
                        "scheme" : "wcmrest:workflowState",
                        "term" : "PUBLISHED",
                        "label" : "Published",
                        "lang" : "en"
                    }
                ]
            },
            {
                "id" : "wcmrest:06b0aafe-c936-4afe-91ee-18b212f01374",
                "title" :
                {
                    "lang" : "es",
                    "value" : "Cartago_TresEquis2"
                },
                "summary" :
                {
                    "lang" : "es"
                },
                "name" : "Cartago_TresEquis2",
                "type" : "Content",
                "updated" : "Sun, 13 Mar 2022 06:00:08.690Z",
                "author" :
                [
                    {
                        "distinguishedName" : "cn=Erick Jose Barrantes Barrantes (erbarr5),ou=empleados,o=grupoice,o=ice",
                        "uri" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/um/users/profiles/Z9eAeK9P83QO6L1D0JMK6KPDGJM46GPCEJM47PHCGJM07O9OA3J57K1D86QS6J1",
                        "email" : "EBarrantesB@ice.go.cr",
                        "name" : "Erick Jose Barrantes Barrantes (erbarr5)",
                        "type" : "USER"
                    }
                ],
                "lastModifier" :
                {
                    "distinguishedName" : "cn=Erick Jose Barrantes Barrantes (erbarr5),ou=empleados,o=grupoice,o=ice",
                    "uri" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/um/users/profiles/Z9eAeK9P83QO6L1D0JMK6KPDGJM46GPCEJM47PHCGJM07O9OA3J57K1D86QS6J1",
                    "email" : "EBarrantesB@ice.go.cr",
                    "name" : "Erick Jose Barrantes Barrantes (erbarr5)",
                    "type" : "USER"
                },
                "link" :
                [
                    {
                        "rel" : "edit",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Content/06b0aafe-c936-4afe-91ee-18b212f01374",
                        "lang" : "en",
                        "label" : "Edit"
                    },
                    {
                        "rel" : "alternate",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Content/06b0aafe-c936-4afe-91ee-18b212f01374",
                        "lang" : "en",
                        "label" : "Read"
                    },
                    {
                        "rel" : "library",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Library/86d09cdc-bc52-4924-b06a-dcb5a823de38",
                        "lang" : "en",
                        "label" : "Library"
                    },
                    {
                        "rel" : "preview",
                        "href" : "/wps/poc/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcm/oid:06b0aafe-c936-4afe-91ee-18b212f01374",
                        "lang" : "en",
                        "label" : "Preview"
                    }
                ],
                "category" :
                [
                    {
                        "scheme" : "wcmrest:workflowState",
                        "term" : "PUBLISHED",
                        "label" : "Published",
                        "lang" : "en"
                    }
                ]
            },
            {
                "id" : "wcmrest:163e9184-5e78-4dc8-975f-5e0f65df5753",
                "title" :
                {
                    "lang" : "es",
                    "value" : "Alajuela_Los Angeles2"
                },
                "summary" :
                {
                    "lang" : "es"
                },
                "name" : "Alajuela_Los Angeles2",
                "type" : "Content",
                "updated" : "Sun, 13 Mar 2022 06:00:07.184Z",
                "author" :
                [
                    {
                        "distinguishedName" : "cn=Erick Jose Barrantes Barrantes (erbarr5),ou=empleados,o=grupoice,o=ice",
                        "uri" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/um/users/profiles/Z9eAeK9P83QO6L1D0JMK6KPDGJM46GPCEJM47PHCGJM07O9OA3J57K1D86QS6J1",
                        "email" : "EBarrantesB@ice.go.cr",
                        "name" : "Erick Jose Barrantes Barrantes (erbarr5)",
                        "type" : "USER"
                    }
                ],
                "lastModifier" :
                {
                    "distinguishedName" : "cn=Erick Jose Barrantes Barrantes (erbarr5),ou=empleados,o=grupoice,o=ice",
                    "uri" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/um/users/profiles/Z9eAeK9P83QO6L1D0JMK6KPDGJM46GPCEJM47PHCGJM07O9OA3J57K1D86QS6J1",
                    "email" : "EBarrantesB@ice.go.cr",
                    "name" : "Erick Jose Barrantes Barrantes (erbarr5)",
                    "type" : "USER"
                },
                "link" :
                [
                    {
                        "rel" : "edit",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Content/163e9184-5e78-4dc8-975f-5e0f65df5753",
                        "lang" : "en",
                        "label" : "Edit"
                    },
                    {
                        "rel" : "alternate",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Content/163e9184-5e78-4dc8-975f-5e0f65df5753",
                        "lang" : "en",
                        "label" : "Read"
                    },
                    {
                        "rel" : "library",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Library/86d09cdc-bc52-4924-b06a-dcb5a823de38",
                        "lang" : "en",
                        "label" : "Library"
                    },
                    {
                        "rel" : "preview",
                        "href" : "/wps/poc/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcm/oid:163e9184-5e78-4dc8-975f-5e0f65df5753",
                        "lang" : "en",
                        "label" : "Preview"
                    }
                ],
                "category" :
                [
                    {
                        "scheme" : "wcmrest:workflowState",
                        "term" : "PUBLISHED",
                        "label" : "Published",
                        "lang" : "en"
                    }
                ]
            },
            {
                "id" : "wcmrest:365a7129-17a2-4850-a647-16e92bba40c0",
                "title" :
                {
                    "lang" : "es",
                    "value" : "Guanacaste_AltoJilguero"
                },
                "summary" :
                {
                    "lang" : "es"
                },
                "name" : "Guanacaste_AltoJilguero",
                "type" : "Content",
                "updated" : "Sun, 13 Mar 2022 06:00:07.740Z",
                "author" :
                [
                    {
                        "distinguishedName" : "cn=Erick Jose Barrantes Barrantes (erbarr5),ou=empleados,o=grupoice,o=ice",
                        "uri" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/um/users/profiles/Z9eAeK9P83QO6L1D0JMK6KPDGJM46GPCEJM47PHCGJM07O9OA3J57K1D86QS6J1",
                        "email" : "EBarrantesB@ice.go.cr",
                        "name" : "Erick Jose Barrantes Barrantes (erbarr5)",
                        "type" : "USER"
                    }
                ],
                "lastModifier" :
                {
                    "distinguishedName" : "cn=Erick Jose Barrantes Barrantes (erbarr5),ou=empleados,o=grupoice,o=ice",
                    "uri" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/um/users/profiles/Z9eAeK9P83QO6L1D0JMK6KPDGJM46GPCEJM47PHCGJM07O9OA3J57K1D86QS6J1",
                    "email" : "EBarrantesB@ice.go.cr",
                    "name" : "Erick Jose Barrantes Barrantes (erbarr5)",
                    "type" : "USER"
                },
                "link" :
                [
                    {
                        "rel" : "edit",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Content/365a7129-17a2-4850-a647-16e92bba40c0",
                        "lang" : "en",
                        "label" : "Edit"
                    },
                    {
                        "rel" : "alternate",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Content/365a7129-17a2-4850-a647-16e92bba40c0",
                        "lang" : "en",
                        "label" : "Read"
                    },
                    {
                        "rel" : "library",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Library/86d09cdc-bc52-4924-b06a-dcb5a823de38",
                        "lang" : "en",
                        "label" : "Library"
                    },
                    {
                        "rel" : "preview",
                        "href" : "/wps/poc/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcm/oid:365a7129-17a2-4850-a647-16e92bba40c0",
                        "lang" : "en",
                        "label" : "Preview"
                    }
                ],
                "category" :
                [
                    {
                        "scheme" : "wcmrest:workflowState",
                        "term" : "PUBLISHED",
                        "label" : "Published",
                        "lang" : "en"
                    }
                ]
            },
            {
                "id" : "wcmrest:0d1eb881-eb13-4f77-bd44-176856421252",
                "title" :
                {
                    "lang" : "es",
                    "value" : "Alajuela_Bodegas"
                },
                "summary" :
                {
                    "lang" : "es"
                },
                "name" : "Alajuela_Bodegas",
                "type" : "Content",
                "updated" : "Sun, 13 Mar 2022 06:00:07.238Z",
                "author" :
                [
                    {
                        "distinguishedName" : "cn=Erick Jose Barrantes Barrantes (erbarr5),ou=empleados,o=grupoice,o=ice",
                        "uri" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/um/users/profiles/Z9eAeK9P83QO6L1D0JMK6KPDGJM46GPCEJM47PHCGJM07O9OA3J57K1D86QS6J1",
                        "email" : "EBarrantesB@ice.go.cr",
                        "name" : "Erick Jose Barrantes Barrantes (erbarr5)",
                        "type" : "USER"
                    }
                ],
                "lastModifier" :
                {
                    "distinguishedName" : "cn=Erick Jose Barrantes Barrantes (erbarr5),ou=empleados,o=grupoice,o=ice",
                    "uri" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/um/users/profiles/Z9eAeK9P83QO6L1D0JMK6KPDGJM46GPCEJM47PHCGJM07O9OA3J57K1D86QS6J1",
                    "email" : "EBarrantesB@ice.go.cr",
                    "name" : "Erick Jose Barrantes Barrantes (erbarr5)",
                    "type" : "USER"
                },
                "link" :
                [
                    {
                        "rel" : "edit",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Content/0d1eb881-eb13-4f77-bd44-176856421252",
                        "lang" : "en",
                        "label" : "Edit"
                    },
                    {
                        "rel" : "alternate",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Content/0d1eb881-eb13-4f77-bd44-176856421252",
                        "lang" : "en",
                        "label" : "Read"
                    },
                    {
                        "rel" : "library",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Library/86d09cdc-bc52-4924-b06a-dcb5a823de38",
                        "lang" : "en",
                        "label" : "Library"
                    },
                    {
                        "rel" : "preview",
                        "href" : "/wps/poc/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcm/oid:0d1eb881-eb13-4f77-bd44-176856421252",
                        "lang" : "en",
                        "label" : "Preview"
                    }
                ],
                "category" :
                [
                    {
                        "scheme" : "wcmrest:workflowState",
                        "term" : "PUBLISHED",
                        "label" : "Published",
                        "lang" : "en"
                    }
                ]
            },
            {
                "id" : "wcmrest:c8e769eb-61b2-490d-85f1-39471e03315c",
                "title" :
                {
                    "lang" : "es",
                    "value" : "Alajuela_Subestación"
                },
                "summary" :
                {
                    "lang" : "es"
                },
                "name" : "Alajuela_SubestaciOn",
                "type" : "Content",
                "updated" : "Sun, 13 Mar 2022 06:00:07.348Z",
                "author" :
                [
                    {
                        "distinguishedName" : "cn=Erick Jose Barrantes Barrantes (erbarr5),ou=empleados,o=grupoice,o=ice",
                        "uri" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/um/users/profiles/Z9eAeK9P83QO6L1D0JMK6KPDGJM46GPCEJM47PHCGJM07O9OA3J57K1D86QS6J1",
                        "email" : "EBarrantesB@ice.go.cr",
                        "name" : "Erick Jose Barrantes Barrantes (erbarr5)",
                        "type" : "USER"
                    }
                ],
                "lastModifier" :
                {
                    "distinguishedName" : "cn=Erick Jose Barrantes Barrantes (erbarr5),ou=empleados,o=grupoice,o=ice",
                    "uri" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/um/users/profiles/Z9eAeK9P83QO6L1D0JMK6KPDGJM46GPCEJM47PHCGJM07O9OA3J57K1D86QS6J1",
                    "email" : "EBarrantesB@ice.go.cr",
                    "name" : "Erick Jose Barrantes Barrantes (erbarr5)",
                    "type" : "USER"
                },
                "link" :
                [
                    {
                        "rel" : "edit",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Content/c8e769eb-61b2-490d-85f1-39471e03315c",
                        "lang" : "en",
                        "label" : "Edit"
                    },
                    {
                        "rel" : "alternate",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Content/c8e769eb-61b2-490d-85f1-39471e03315c",
                        "lang" : "en",
                        "label" : "Read"
                    },
                    {
                        "rel" : "library",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Library/86d09cdc-bc52-4924-b06a-dcb5a823de38",
                        "lang" : "en",
                        "label" : "Library"
                    },
                    {
                        "rel" : "preview",
                        "href" : "/wps/poc/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcm/oid:c8e769eb-61b2-490d-85f1-39471e03315c",
                        "lang" : "en",
                        "label" : "Preview"
                    }
                ],
                "category" :
                [
                    {
                        "scheme" : "wcmrest:workflowState",
                        "term" : "PUBLISHED",
                        "label" : "Published",
                        "lang" : "en"
                    }
                ]
            },
            {
                "id" : "wcmrest:d06073b5-110d-4536-be69-3d89ded8d07b",
                "title" :
                {
                    "lang" : "es",
                    "value" : "Puntarenas_BellaVista"
                },
                "summary" :
                {
                    "lang" : "es"
                },
                "name" : "Puntarenas_BellaVista",
                "type" : "Content",
                "updated" : "Sun, 13 Mar 2022 06:00:08.284Z",
                "author" :
                [
                    {
                        "distinguishedName" : "cn=Erick Jose Barrantes Barrantes (erbarr5),ou=empleados,o=grupoice,o=ice",
                        "uri" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/um/users/profiles/Z9eAeK9P83QO6L1D0JMK6KPDGJM46GPCEJM47PHCGJM07O9OA3J57K1D86QS6J1",
                        "email" : "EBarrantesB@ice.go.cr",
                        "name" : "Erick Jose Barrantes Barrantes (erbarr5)",
                        "type" : "USER"
                    }
                ],
                "lastModifier" :
                {
                    "distinguishedName" : "cn=Erick Jose Barrantes Barrantes (erbarr5),ou=empleados,o=grupoice,o=ice",
                    "uri" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/um/users/profiles/Z9eAeK9P83QO6L1D0JMK6KPDGJM46GPCEJM47PHCGJM07O9OA3J57K1D86QS6J1",
                    "email" : "EBarrantesB@ice.go.cr",
                    "name" : "Erick Jose Barrantes Barrantes (erbarr5)",
                    "type" : "USER"
                },
                "link" :
                [
                    {
                        "rel" : "edit",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Content/d06073b5-110d-4536-be69-3d89ded8d07b",
                        "lang" : "en",
                        "label" : "Edit"
                    },
                    {
                        "rel" : "alternate",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Content/d06073b5-110d-4536-be69-3d89ded8d07b",
                        "lang" : "en",
                        "label" : "Read"
                    },
                    {
                        "rel" : "library",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Library/86d09cdc-bc52-4924-b06a-dcb5a823de38",
                        "lang" : "en",
                        "label" : "Library"
                    },
                    {
                        "rel" : "preview",
                        "href" : "/wps/poc/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcm/oid:d06073b5-110d-4536-be69-3d89ded8d07b",
                        "lang" : "en",
                        "label" : "Preview"
                    }
                ],
                "category" :
                [
                    {
                        "scheme" : "wcmrest:workflowState",
                        "term" : "PUBLISHED",
                        "label" : "Published",
                        "lang" : "en"
                    }
                ]
            },
            {
                "id" : "wcmrest:f4bdc607-5fa5-47ad-b27f-d97eb59cebf6",
                "title" :
                {
                    "lang" : "es",
                    "value" : "Puntarenas_Victoria"
                },
                "summary" :
                {
                    "lang" : "es"
                },
                "name" : "Puntarenas_Victoria",
                "type" : "Content",
                "updated" : "Sun, 13 Mar 2022 06:00:07.551Z",
                "author" :
                [
                    {
                        "distinguishedName" : "cn=Erick Jose Barrantes Barrantes (erbarr5),ou=empleados,o=grupoice,o=ice",
                        "uri" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/um/users/profiles/Z9eAeK9P83QO6L1D0JMK6KPDGJM46GPCEJM47PHCGJM07O9OA3J57K1D86QS6J1",
                        "email" : "EBarrantesB@ice.go.cr",
                        "name" : "Erick Jose Barrantes Barrantes (erbarr5)",
                        "type" : "USER"
                    }
                ],
                "lastModifier" :
                {
                    "distinguishedName" : "cn=Erick Jose Barrantes Barrantes (erbarr5),ou=empleados,o=grupoice,o=ice",
                    "uri" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/um/users/profiles/Z9eAeK9P83QO6L1D0JMK6KPDGJM46GPCEJM47PHCGJM07O9OA3J57K1D86QS6J1",
                    "email" : "EBarrantesB@ice.go.cr",
                    "name" : "Erick Jose Barrantes Barrantes (erbarr5)",
                    "type" : "USER"
                },
                "link" :
                [
                    {
                        "rel" : "edit",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Content/f4bdc607-5fa5-47ad-b27f-d97eb59cebf6",
                        "lang" : "en",
                        "label" : "Edit"
                    },
                    {
                        "rel" : "alternate",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Content/f4bdc607-5fa5-47ad-b27f-d97eb59cebf6",
                        "lang" : "en",
                        "label" : "Read"
                    },
                    {
                        "rel" : "library",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Library/86d09cdc-bc52-4924-b06a-dcb5a823de38",
                        "lang" : "en",
                        "label" : "Library"
                    },
                    {
                        "rel" : "preview",
                        "href" : "/wps/poc/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcm/oid:f4bdc607-5fa5-47ad-b27f-d97eb59cebf6",
                        "lang" : "en",
                        "label" : "Preview"
                    }
                ],
                "category" :
                [
                    {
                        "scheme" : "wcmrest:workflowState",
                        "term" : "PUBLISHED",
                        "label" : "Published",
                        "lang" : "en"
                    }
                ]
            },
            {
                "id" : "wcmrest:4e1643f8-e174-4726-99ae-10d9da8645d7",
                "title" :
                {
                    "lang" : "es",
                    "value" : "Alajuela_Jardin"
                },
                "summary" :
                {
                    "lang" : "es"
                },
                "name" : "Alajuela_Jardin",
                "type" : "Content",
                "updated" : "Sun, 13 Mar 2022 06:00:07.547Z",
                "author" :
                [
                    {
                        "distinguishedName" : "cn=Erick Jose Barrantes Barrantes (erbarr5),ou=empleados,o=grupoice,o=ice",
                        "uri" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/um/users/profiles/Z9eAeK9P83QO6L1D0JMK6KPDGJM46GPCEJM47PHCGJM07O9OA3J57K1D86QS6J1",
                        "email" : "EBarrantesB@ice.go.cr",
                        "name" : "Erick Jose Barrantes Barrantes (erbarr5)",
                        "type" : "USER"
                    }
                ],
                "lastModifier" :
                {
                    "distinguishedName" : "cn=Erick Jose Barrantes Barrantes (erbarr5),ou=empleados,o=grupoice,o=ice",
                    "uri" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/um/users/profiles/Z9eAeK9P83QO6L1D0JMK6KPDGJM46GPCEJM47PHCGJM07O9OA3J57K1D86QS6J1",
                    "email" : "EBarrantesB@ice.go.cr",
                    "name" : "Erick Jose Barrantes Barrantes (erbarr5)",
                    "type" : "USER"
                },
                "link" :
                [
                    {
                        "rel" : "edit",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Content/4e1643f8-e174-4726-99ae-10d9da8645d7",
                        "lang" : "en",
                        "label" : "Edit"
                    },
                    {
                        "rel" : "alternate",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Content/4e1643f8-e174-4726-99ae-10d9da8645d7",
                        "lang" : "en",
                        "label" : "Read"
                    },
                    {
                        "rel" : "library",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Library/86d09cdc-bc52-4924-b06a-dcb5a823de38",
                        "lang" : "en",
                        "label" : "Library"
                    },
                    {
                        "rel" : "preview",
                        "href" : "/wps/poc/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcm/oid:4e1643f8-e174-4726-99ae-10d9da8645d7",
                        "lang" : "en",
                        "label" : "Preview"
                    }
                ],
                "category" :
                [
                    {
                        "scheme" : "wcmrest:workflowState",
                        "term" : "PUBLISHED",
                        "label" : "Published",
                        "lang" : "en"
                    }
                ]
            },
            {
                "id" : "wcmrest:48fcc4f9-411b-40c2-8064-599ea0f349f0",
                "title" :
                {
                    "lang" : "es",
                    "value" : "Guanacaste_San Rafael"
                },
                "summary" :
                {
                    "lang" : "es"
                },
                "name" : "Guanacaste_San Rafael",
                "type" : "Content",
                "updated" : "Sun, 13 Mar 2022 06:00:07.507Z",
                "author" :
                [
                    {
                        "distinguishedName" : "cn=Erick Jose Barrantes Barrantes (erbarr5),ou=empleados,o=grupoice,o=ice",
                        "uri" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/um/users/profiles/Z9eAeK9P83QO6L1D0JMK6KPDGJM46GPCEJM47PHCGJM07O9OA3J57K1D86QS6J1",
                        "email" : "EBarrantesB@ice.go.cr",
                        "name" : "Erick Jose Barrantes Barrantes (erbarr5)",
                        "type" : "USER"
                    }
                ],
                "lastModifier" :
                {
                    "distinguishedName" : "cn=Erick Jose Barrantes Barrantes (erbarr5),ou=empleados,o=grupoice,o=ice",
                    "uri" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/um/users/profiles/Z9eAeK9P83QO6L1D0JMK6KPDGJM46GPCEJM47PHCGJM07O9OA3J57K1D86QS6J1",
                    "email" : "EBarrantesB@ice.go.cr",
                    "name" : "Erick Jose Barrantes Barrantes (erbarr5)",
                    "type" : "USER"
                },
                "link" :
                [
                    {
                        "rel" : "edit",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Content/48fcc4f9-411b-40c2-8064-599ea0f349f0",
                        "lang" : "en",
                        "label" : "Edit"
                    },
                    {
                        "rel" : "alternate",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Content/48fcc4f9-411b-40c2-8064-599ea0f349f0",
                        "lang" : "en",
                        "label" : "Read"
                    },
                    {
                        "rel" : "library",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Library/86d09cdc-bc52-4924-b06a-dcb5a823de38",
                        "lang" : "en",
                        "label" : "Library"
                    },
                    {
                        "rel" : "preview",
                        "href" : "/wps/poc/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcm/oid:48fcc4f9-411b-40c2-8064-599ea0f349f0",
                        "lang" : "en",
                        "label" : "Preview"
                    }
                ],
                "category" :
                [
                    {
                        "scheme" : "wcmrest:workflowState",
                        "term" : "PUBLISHED",
                        "label" : "Published",
                        "lang" : "en"
                    }
                ]
            },
            {
                "id" : "wcmrest:02edf41d-3f68-472b-aa56-3c7ae49fff4d",
                "title" :
                {
                    "lang" : "es",
                    "value" : "Alajuela_Lagunillas"
                },
                "summary" :
                {
                    "lang" : "es"
                },
                "name" : "Alajuela_Lagunillas",
                "type" : "Content",
                "updated" : "Sun, 13 Mar 2022 06:00:07.509Z",
                "author" :
                [
                    {
                        "distinguishedName" : "cn=Erick Jose Barrantes Barrantes (erbarr5),ou=empleados,o=grupoice,o=ice",
                        "uri" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/um/users/profiles/Z9eAeK9P83QO6L1D0JMK6KPDGJM46GPCEJM47PHCGJM07O9OA3J57K1D86QS6J1",
                        "email" : "EBarrantesB@ice.go.cr",
                        "name" : "Erick Jose Barrantes Barrantes (erbarr5)",
                        "type" : "USER"
                    }
                ],
                "lastModifier" :
                {
                    "distinguishedName" : "cn=Erick Jose Barrantes Barrantes (erbarr5),ou=empleados,o=grupoice,o=ice",
                    "uri" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/um/users/profiles/Z9eAeK9P83QO6L1D0JMK6KPDGJM46GPCEJM47PHCGJM07O9OA3J57K1D86QS6J1",
                    "email" : "EBarrantesB@ice.go.cr",
                    "name" : "Erick Jose Barrantes Barrantes (erbarr5)",
                    "type" : "USER"
                },
                "link" :
                [
                    {
                        "rel" : "edit",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Content/02edf41d-3f68-472b-aa56-3c7ae49fff4d",
                        "lang" : "en",
                        "label" : "Edit"
                    },
                    {
                        "rel" : "alternate",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Content/02edf41d-3f68-472b-aa56-3c7ae49fff4d",
                        "lang" : "en",
                        "label" : "Read"
                    },
                    {
                        "rel" : "library",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Library/86d09cdc-bc52-4924-b06a-dcb5a823de38",
                        "lang" : "en",
                        "label" : "Library"
                    },
                    {
                        "rel" : "preview",
                        "href" : "/wps/poc/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcm/oid:02edf41d-3f68-472b-aa56-3c7ae49fff4d",
                        "lang" : "en",
                        "label" : "Preview"
                    }
                ],
                "category" :
                [
                    {
                        "scheme" : "wcmrest:workflowState",
                        "term" : "PUBLISHED",
                        "label" : "Published",
                        "lang" : "en"
                    }
                ]
            },
            {
                "id" : "wcmrest:a633b5bc-d067-45e7-9b97-cf80fbf5a17a",
                "title" :
                {
                    "lang" : "es",
                    "value" : "Puntarenas_ManuelAntonio"
                },
                "summary" :
                {
                    "lang" : "es"
                },
                "name" : "Puntarenas_ManuelAntonio",
                "type" : "Content",
                "updated" : "Sun, 13 Mar 2022 06:00:05.723Z",
                "author" :
                [
                    {
                        "distinguishedName" : "cn=Erick Jose Barrantes Barrantes (erbarr5),ou=empleados,o=grupoice,o=ice",
                        "uri" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/um/users/profiles/Z9eAeK9P83QO6L1D0JMK6KPDGJM46GPCEJM47PHCGJM07O9OA3J57K1D86QS6J1",
                        "email" : "EBarrantesB@ice.go.cr",
                        "name" : "Erick Jose Barrantes Barrantes (erbarr5)",
                        "type" : "USER"
                    }
                ],
                "lastModifier" :
                {
                    "distinguishedName" : "cn=Erick Jose Barrantes Barrantes (erbarr5),ou=empleados,o=grupoice,o=ice",
                    "uri" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/um/users/profiles/Z9eAeK9P83QO6L1D0JMK6KPDGJM46GPCEJM47PHCGJM07O9OA3J57K1D86QS6J1",
                    "email" : "EBarrantesB@ice.go.cr",
                    "name" : "Erick Jose Barrantes Barrantes (erbarr5)",
                    "type" : "USER"
                },
                "link" :
                [
                    {
                        "rel" : "edit",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Content/a633b5bc-d067-45e7-9b97-cf80fbf5a17a",
                        "lang" : "en",
                        "label" : "Edit"
                    },
                    {
                        "rel" : "alternate",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Content/a633b5bc-d067-45e7-9b97-cf80fbf5a17a",
                        "lang" : "en",
                        "label" : "Read"
                    },
                    {
                        "rel" : "library",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Library/86d09cdc-bc52-4924-b06a-dcb5a823de38",
                        "lang" : "en",
                        "label" : "Library"
                    },
                    {
                        "rel" : "preview",
                        "href" : "/wps/poc/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcm/oid:a633b5bc-d067-45e7-9b97-cf80fbf5a17a",
                        "lang" : "en",
                        "label" : "Preview"
                    }
                ],
                "category" :
                [
                    {
                        "scheme" : "wcmrest:workflowState",
                        "term" : "PUBLISHED",
                        "label" : "Published",
                        "lang" : "en"
                    }
                ]
            },
            {
                "id" : "wcmrest:19cc5190-2dfe-47bb-8429-ac84b761f4f7",
                "title" :
                {
                    "lang" : "es",
                    "value" : "Limon_Envaco"
                },
                "summary" :
                {
                    "lang" : "es"
                },
                "name" : "Limon_Envaco",
                "type" : "Content",
                "updated" : "Sun, 13 Mar 2022 06:00:07.437Z",
                "author" :
                [
                    {
                        "distinguishedName" : "cn=Erick Jose Barrantes Barrantes (erbarr5),ou=empleados,o=grupoice,o=ice",
                        "uri" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/um/users/profiles/Z9eAeK9P83QO6L1D0JMK6KPDGJM46GPCEJM47PHCGJM07O9OA3J57K1D86QS6J1",
                        "email" : "EBarrantesB@ice.go.cr",
                        "name" : "Erick Jose Barrantes Barrantes (erbarr5)",
                        "type" : "USER"
                    }
                ],
                "lastModifier" :
                {
                    "distinguishedName" : "cn=Erick Jose Barrantes Barrantes (erbarr5),ou=empleados,o=grupoice,o=ice",
                    "uri" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/um/users/profiles/Z9eAeK9P83QO6L1D0JMK6KPDGJM46GPCEJM47PHCGJM07O9OA3J57K1D86QS6J1",
                    "email" : "EBarrantesB@ice.go.cr",
                    "name" : "Erick Jose Barrantes Barrantes (erbarr5)",
                    "type" : "USER"
                },
                "link" :
                [
                    {
                        "rel" : "edit",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Content/19cc5190-2dfe-47bb-8429-ac84b761f4f7",
                        "lang" : "en",
                        "label" : "Edit"
                    },
                    {
                        "rel" : "alternate",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Content/19cc5190-2dfe-47bb-8429-ac84b761f4f7",
                        "lang" : "en",
                        "label" : "Read"
                    },
                    {
                        "rel" : "library",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Library/86d09cdc-bc52-4924-b06a-dcb5a823de38",
                        "lang" : "en",
                        "label" : "Library"
                    },
                    {
                        "rel" : "preview",
                        "href" : "/wps/poc/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcm/oid:19cc5190-2dfe-47bb-8429-ac84b761f4f7",
                        "lang" : "en",
                        "label" : "Preview"
                    }
                ],
                "category" :
                [
                    {
                        "scheme" : "wcmrest:workflowState",
                        "term" : "PUBLISHED",
                        "label" : "Published",
                        "lang" : "en"
                    }
                ]
            },
            {
                "id" : "wcmrest:e80a62fc-4061-44a7-a9f6-1124ed52f7a5",
                "title" :
                {
                    "lang" : "es",
                    "value" : "Puntarenas_Aduana"
                },
                "summary" :
                {
                    "lang" : "es"
                },
                "name" : "Puntarenas_Aduana",
                "type" : "Content",
                "updated" : "Sun, 13 Mar 2022 06:00:05.735Z",
                "author" :
                [
                    {
                        "distinguishedName" : "cn=Erick Jose Barrantes Barrantes (erbarr5),ou=empleados,o=grupoice,o=ice",
                        "uri" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/um/users/profiles/Z9eAeK9P83QO6L1D0JMK6KPDGJM46GPCEJM47PHCGJM07O9OA3J57K1D86QS6J1",
                        "email" : "EBarrantesB@ice.go.cr",
                        "name" : "Erick Jose Barrantes Barrantes (erbarr5)",
                        "type" : "USER"
                    }
                ],
                "lastModifier" :
                {
                    "distinguishedName" : "cn=Erick Jose Barrantes Barrantes (erbarr5),ou=empleados,o=grupoice,o=ice",
                    "uri" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/um/users/profiles/Z9eAeK9P83QO6L1D0JMK6KPDGJM46GPCEJM47PHCGJM07O9OA3J57K1D86QS6J1",
                    "email" : "EBarrantesB@ice.go.cr",
                    "name" : "Erick Jose Barrantes Barrantes (erbarr5)",
                    "type" : "USER"
                },
                "link" :
                [
                    {
                        "rel" : "edit",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Content/e80a62fc-4061-44a7-a9f6-1124ed52f7a5",
                        "lang" : "en",
                        "label" : "Edit"
                    },
                    {
                        "rel" : "alternate",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Content/e80a62fc-4061-44a7-a9f6-1124ed52f7a5",
                        "lang" : "en",
                        "label" : "Read"
                    },
                    {
                        "rel" : "library",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Library/86d09cdc-bc52-4924-b06a-dcb5a823de38",
                        "lang" : "en",
                        "label" : "Library"
                    },
                    {
                        "rel" : "preview",
                        "href" : "/wps/poc/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcm/oid:e80a62fc-4061-44a7-a9f6-1124ed52f7a5",
                        "lang" : "en",
                        "label" : "Preview"
                    }
                ],
                "category" :
                [
                    {
                        "scheme" : "wcmrest:workflowState",
                        "term" : "PUBLISHED",
                        "label" : "Published",
                        "lang" : "en"
                    }
                ]
            },
            {
                "id" : "wcmrest:84cb1458-cf9e-4ecd-83e5-37f5204f5cfa",
                "title" :
                {
                    "lang" : "es",
                    "value" : "Puntarenas_LaCuesta2"
                },
                "summary" :
                {
                    "lang" : "es"
                },
                "name" : "Puntarenas_LaCuesta2",
                "type" : "Content",
                "updated" : "Sun, 13 Mar 2022 06:00:06.559Z",
                "author" :
                [
                    {
                        "distinguishedName" : "cn=Erick Jose Barrantes Barrantes (erbarr5),ou=empleados,o=grupoice,o=ice",
                        "uri" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/um/users/profiles/Z9eAeK9P83QO6L1D0JMK6KPDGJM46GPCEJM47PHCGJM07O9OA3J57K1D86QS6J1",
                        "email" : "EBarrantesB@ice.go.cr",
                        "name" : "Erick Jose Barrantes Barrantes (erbarr5)",
                        "type" : "USER"
                    }
                ],
                "lastModifier" :
                {
                    "distinguishedName" : "cn=Erick Jose Barrantes Barrantes (erbarr5),ou=empleados,o=grupoice,o=ice",
                    "uri" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/um/users/profiles/Z9eAeK9P83QO6L1D0JMK6KPDGJM46GPCEJM47PHCGJM07O9OA3J57K1D86QS6J1",
                    "email" : "EBarrantesB@ice.go.cr",
                    "name" : "Erick Jose Barrantes Barrantes (erbarr5)",
                    "type" : "USER"
                },
                "link" :
                [
                    {
                        "rel" : "edit",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Content/84cb1458-cf9e-4ecd-83e5-37f5204f5cfa",
                        "lang" : "en",
                        "label" : "Edit"
                    },
                    {
                        "rel" : "alternate",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Content/84cb1458-cf9e-4ecd-83e5-37f5204f5cfa",
                        "lang" : "en",
                        "label" : "Read"
                    },
                    {
                        "rel" : "library",
                        "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Library/86d09cdc-bc52-4924-b06a-dcb5a823de38",
                        "lang" : "en",
                        "label" : "Library"
                    },
                    {
                        "rel" : "preview",
                        "href" : "/wps/poc/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcm/oid:84cb1458-cf9e-4ecd-83e5-37f5204f5cfa",
                        "lang" : "en",
                        "label" : "Preview"
                    }
                ],
                "category" :
                [
                    {
                        "scheme" : "wcmrest:workflowState",
                        "term" : "PUBLISHED",
                        "label" : "Published",
                        "lang" : "en"
                    }
                ]
            }
        ]
    }
```

look for Puntarenas_ManuelAntonio, get link hrefs to make request 3


# #request 4

```
curl $'https://www.grupoice.com/wps/contenthandler/\u0021ut/p/digest\u0021A0WkfjONSrx-7vb4RW6Egw/wcmrest/Content/a633b5bc-d067-45e7-9b97-cf80fbf5a17a/?mime-type=application/json&sort=created' \
  -H 'Connection: keep-alive' \
  -H 'Pragma: no-cache' \
  -H 'Cache-Control: no-cache' \
  -H 'sec-ch-ua: " Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Content-Type: application/json' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36' \
  -H 'sec-ch-ua-platform: "macOS"' \
  -H 'Sec-Fetch-Site: same-origin' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Dest: empty' \
  -H $'Referer: https://www.grupoice.com/wps/portal/ICE/electricidad/suspensiones-electricas-programadas/\u0021ut/p/z1/jZBBDsIgEEXP0hMwUC10OSEFrFYhaW3LxrAyJFpdGM-v6V5kdj95b35miCcT8Ut4x2t4xccSbt88--pSoxFGSrBCKgZOsdq1rWGaMjKugLZ7pOWGWuGgAUfL01nVHTv2nPgcnzuB1Gg4aG4kYNdXSHnDunab58OPQcjzE4BPrx-JX5HUB1YgdeK_kud9GIYJ4g6L4gO-AUgk/' \
  -H 'Accept-Language: en-US,en;q=0.9,es;q=0.8' \
  -H 'Cookie: DigestTracker=AAABf5sWAYw; JSESSIONID=000075Tq0N2oqZnzj2IkzABAG5-:1d6hjn6re' \
  --compressed
```

### response

```
{
    "entry" :
    {
        "id" : "wcmrest:a633b5bc-d067-45e7-9b97-cf80fbf5a17a",
        "title" :
        {
            "lang" : "es",
            "value" : "Puntarenas_ManuelAntonio"
        },
        "summary" :
        {
            "lang" : "es"
        },
        "name" : "Puntarenas_ManuelAntonio",
        "type" : "Content",
        "updated" : "Sun, 13 Mar 2022 06:00:05.723Z",
        "published" : "Sun, 13 Mar 2022 06:00:00.519Z",
        "created" : "Sat, 12 Mar 2022 23:27:37.036Z",
        "author" :
        [
            {
                "distinguishedName" : "cn=Erick Jose Barrantes Barrantes (erbarr5),ou=empleados,o=grupoice,o=ice",
                "uri" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/um/users/profiles/Z9eAeK9P83QO6L1D0JMK6KPDGJM46GPCEJM47PHCGJM07O9OA3J57K1D86QS6J1",
                "email" : "EBarrantesB@ice.go.cr",
                "name" : "Erick Jose Barrantes Barrantes (erbarr5)",
                "type" : "USER"
            }
        ],
        "owner" :
        [
            {
                "distinguishedName" : "cn=Erick Jose Barrantes Barrantes (erbarr5),ou=empleados,o=grupoice,o=ice",
                "uri" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/um/users/profiles/Z9eAeK9P83QO6L1D0JMK6KPDGJM46GPCEJM47PHCGJM07O9OA3J57K1D86QS6J1",
                "email" : "EBarrantesB@ice.go.cr",
                "name" : "Erick Jose Barrantes Barrantes (erbarr5)",
                "type" : "USER"
            }
        ],
        "lastModifier" :
        {
            "distinguishedName" : "cn=Erick Jose Barrantes Barrantes (erbarr5),ou=empleados,o=grupoice,o=ice",
            "uri" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/um/users/profiles/Z9eAeK9P83QO6L1D0JMK6KPDGJM46GPCEJM47PHCGJM07O9OA3J57K1D86QS6J1",
            "email" : "EBarrantesB@ice.go.cr",
            "name" : "Erick Jose Barrantes Barrantes (erbarr5)",
            "type" : "USER"
        },
        "creator" :
        {
            "distinguishedName" : "cn=Erick Jose Barrantes Barrantes (erbarr5),ou=empleados,o=grupoice,o=ice",
            "uri" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/um/users/profiles/Z9eAeK9P83QO6L1D0JMK6KPDGJM46GPCEJM47PHCGJM07O9OA3J57K1D86QS6J1",
            "email" : "EBarrantesB@ice.go.cr",
            "name" : "Erick Jose Barrantes Barrantes (erbarr5)",
            "type" : "USER"
        },
        "profile" :
        {
        },
        "workflow" :
        {
            "publishDate" : "Sun, 13 Mar 2022 06:00:00.000Z",
            "expiryDate" : "Sun, 20 Mar 2022 06:00:00.000Z"
        },
        "link" :
        [
            {
                "rel" : "self",
                "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Content/a633b5bc-d067-45e7-9b97-cf80fbf5a17a",
                "lang" : "en",
                "label" : "Read"
            },
            {
                "rel" : "workflow-stage",
                "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/WorkflowStage/b3fd16af-f9e8-40d0-8376-1dc3e4f639a5",
                "lang" : "en",
                "label" : "Workflow Stage"
            },
            {
                "rel" : "workflow",
                "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Workflow/647106d7-a044-4dd4-bc12-96832c75ceb5",
                "lang" : "en",
                "label" : "Workflow"
            },
            {
                "rel" : "access-control",
                "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/ac/access:oid:Z6QReDe1JD6JP8CLHO6MMGCGHDEJMG6L9PEJM472BEEJMCC63E03J9C6BD2MOS613",
                "lang" : "en",
                "label" : "Access Control"
            },
            {
                "rel" : "library",
                "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Library/86d09cdc-bc52-4924-b06a-dcb5a823de38",
                "lang" : "en",
                "label" : "Library"
            },
            {
                "rel" : "parent",
                "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/SiteArea/e5763578-a7ed-4a86-a5cd-300b0368880e",
                "lang" : "en",
                "label" : "Parent"
            },
            {
                "rel" : "versions",
                "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/item/a633b5bc-d067-45e7-9b97-cf80fbf5a17a/versions",
                "lang" : "en",
                "label" : "Versions"
            },
            {
                "rel" : "preview",
                "href" : "/wps/poc/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcm/oid:a633b5bc-d067-45e7-9b97-cf80fbf5a17a",
                "lang" : "en",
                "label" : "Preview"
            },
            {
                "rel" : "content-template",
                "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/ContentTemplate/0c8fde2e-1cda-46c1-a609-11984f3eb4df",
                "lang" : "en",
                "label" : "Content Template"
            },
            {
                "rel" : "elements",
                "href" : "/wps/contenthandler/!ut/p/digest!A0WkfjONSrx-7vb4RW6Egw/wcmrest/Content/a633b5bc-d067-45e7-9b97-cf80fbf5a17a/elements",
                "lang" : "en",
                "label" : "Elements"
            }
        ],
        "category" :
        [
            {
                "scheme" : "wcmrest:workflowState",
                "term" : "PUBLISHED",
                "label" : "Published",
                "lang" : "en"
            }
        ],
        "content" :
        {
            "type" : "application/vnd.ibm.wcm+xml",
            "content" :
            {
                "elements" :
                {
                    "element" :
                    [
                        {
                            "name" : "Fecha y hora",
                            "title" :
                            {
                                "lang" : "es",
                                "value" : "Fecha y hora"
                            },
                            "type" : "RichTextComponent",
                            "data" :
                            {
                                "type" : "text/html",
                                "value" : "<p>Jueves 17 de marzo, de 9:00 a.m. a 1:00 p.m.\n\n  <br /><\/p>"
                            }
                        },
                        {
                            "name" : "Ubicacion",
                            "title" :
                            {
                                "lang" : "es",
                                "value" : "Ubicación"
                            },
                            "type" : "RichTextComponent",
                            "data" :
                            {
                                "type" : "text/html",
                                "value" : "<p>Puntarenas, Quepos: Manuel Antonio.<\/p>\n<p><br /><\/p>"
                            }
                        },
                        {
                            "name" : "Trabajos por realizar",
                            "title" :
                            {
                                "lang" : "es",
                                "value" : "Trabajos por realizar"
                            },
                            "type" : "RichTextComponent",
                            "data" :
                            {
                                "type" : "text/html",
                                "value" : "<p>Instalación de poste y reubicación de línea.<\/p>"
                            }
                        }
                    ]
                }
            }
        }
    }
}
```

cookie seems unecessary

(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{Lvw3:function(t,e,n){"use strict";n.r(e),n.d(e,"ProfileModule",(function(){return vt}));var o=n("ofXK"),r=n("wers"),a=n("PCNd"),c=n("kmnG"),i=n("qFsG"),l=n("bSwM"),s=n("bTqV"),m=n("wZkO"),b=n("d3UM"),u=n("STbY"),g=n("NFeN"),p=n("tyNb"),d=n("fXoL"),h=n("dJ3e"),f=n("AytR"),_=n("tk/3");let y=(()=>{class t{constructor(t){this.http=t}getUserData(t){return this.http.get(`${f.a.baseUrlWithoutVersion}Account/GetUserById?id=${t}`)}updateBasicUser(t,e){return this.http.put(`${f.a.baseUrlWithoutVersion}Account/updateBasic-${t}`,e)}updateBusinessUser(t,e){return this.http.put(`${f.a.baseUrlWithoutVersion}Account/updateBusiness-${t}`,e)}getAllTrackOrder(t){return this.http.get(`${f.a.baseUrl}Order?FilterValue[userId]=${t}`)}getAllTrackOrderinfo(t){return this.http.get(`${f.a.baseUrl}OrderInfo?FilterValue[orderNumber]=${t}`)}}return t.\u0275fac=function(e){return new(e||t)(d.ac(_.b))},t.\u0275prov=d.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var F=n("xtiZ"),C=n("RL7/");const N=function(t){return{requestId:t}},P=function(t){return["/fix-request/track-request",t]};function O(t,e){if(1&t&&(d.Wb(0,"td"),d.Wb(1,"span",6),d.Fc(2),d.Vb(),d.Vb()),2&t){const t=d.ic().$implicit;d.Db(1),d.oc("routerLink",d.rc(4,P,d.rc(2,N,t.requestNumber))),d.Db(1),d.Hc("#",t.requestNumber,"")}}function V(t,e){1&t&&(d.Wb(0,"td"),d.Fc(1," No Request Found"),d.Vb())}function W(t,e){if(1&t&&(d.Wb(0,"tr"),d.Ec(1,O,3,6,"td",5),d.Ec(2,V,2,0,"td",5),d.Vb()),2&t){const t=d.ic();d.Db(1),d.oc("ngIf",t.requestData.length>0),d.Db(1),d.oc("ngIf",0==t.requestData.length)}}let v=(()=>{class t{constructor(t,e){this._fixServ=t,this.authSrvc=e,this.requestData=[]}ngOnInit(){this.authSrvc.userData$.subscribe(t=>{t&&(this.userData=t)}),this.getMyRequests()}getMyRequests(){this._fixServ.getAllUserRequests(this.userData.id).subscribe(t=>{console.log(t),this.requestData=t.data})}}return t.\u0275fac=function(e){return new(e||t)(d.Qb(F.a),d.Qb(C.a))},t.\u0275cmp=d.Kb({type:t,selectors:[["app-my-requests"]],decls:7,vars:1,consts:[[1,"maketable",2,"height","300px"],[1,"table","text-center","table-striped","table-bordered"],[1,"bg-light"],["id","tablebody",1,"border","border-white"],[4,"ngFor","ngForOf"],[4,"ngIf"],[2,"outline","none","cursor","pointer",3,"routerLink"]],template:function(t,e){1&t&&(d.Wb(0,"div",0),d.Wb(1,"table",1),d.Wb(2,"thead",2),d.Wb(3,"th"),d.Fc(4," My Requests # "),d.Vb(),d.Vb(),d.Wb(5,"tbody",3),d.Ec(6,W,3,2,"tr",4),d.Vb(),d.Vb(),d.Vb()),2&t&&(d.Db(6),d.oc("ngForOf",e.requestData))},directives:[o.l,o.m,p.c],styles:[""]}),t})();const M=function(t){return{trackId:t}},I=function(t){return["/profile/track-order",t]};function D(t,e){if(1&t&&(d.Wb(0,"td"),d.Wb(1,"span",5),d.Fc(2),d.Vb(),d.Vb()),2&t){const t=d.ic().$implicit;d.Db(1),d.oc("routerLink",d.rc(4,I,d.rc(2,M,t.orderNumber))),d.Db(1),d.Hc("#",t.orderNumber,"")}}function x(t,e){1&t&&(d.Wb(0,"td"),d.Fc(1," No Orders Found"),d.Vb())}function w(t,e){if(1&t&&(d.Wb(0,"tbody",3),d.Ec(1,D,3,6,"td",4),d.Ec(2,x,2,0,"td",4),d.Vb()),2&t){const t=d.ic();d.Db(1),d.oc("ngIf",t.requestData.length>0),d.Db(1),d.oc("ngIf",0==t.requestData.length)}}let E=(()=>{class t{constructor(t,e){this.authSrvc=t,this._profileServ=e,this.requestData=[]}ngOnInit(){this.authSrvc.userData$.subscribe(t=>{t&&(this.userData=t)}),this.getAllTracks()}getAllTracks(){this._profileServ.getAllTrackOrder(this.userData.id).subscribe(t=>{console.log("resssss",t),this.requestData=t.data})}}return t.\u0275fac=function(e){return new(e||t)(d.Qb(C.a),d.Qb(y))},t.\u0275cmp=d.Kb({type:t,selectors:[["app-my-orders"]],decls:5,vars:1,consts:[[1,"table","text-center","table-striped","table-bordered",2,"width","60%"],[1,"bg-light"],["class","border border-white ","id","tablebody",4,"ngFor","ngForOf"],["id","tablebody",1,"border","border-white"],[4,"ngIf"],[2,"outline","none","cursor","pointer",3,"routerLink"]],template:function(t,e){1&t&&(d.Wb(0,"table",0),d.Wb(1,"thead",1),d.Wb(2,"th"),d.Fc(3," My Orders "),d.Vb(),d.Vb(),d.Ec(4,w,3,2,"tbody",2),d.Vb()),2&t&&(d.Db(4),d.oc("ngForOf",e.requestData))},directives:[o.l,o.m,p.c],styles:[""]}),t})();const q=["tabgroup"],k=function(){return["/profile/edit"]};function R(t,e){if(1&t&&(d.Wb(0,"div",10),d.Wb(1,"div",11),d.Wb(2,"div",12),d.Wb(3,"div",13),d.Rb(4,"img",14),d.Vb(),d.Vb(),d.Wb(5,"div",15),d.Wb(6,"div",16),d.Wb(7,"div",17),d.Wb(8,"h2"),d.Fc(9),d.Vb(),d.Wb(10,"h6"),d.Fc(11),d.Vb(),d.Vb(),d.Wb(12,"div",18),d.Wb(13,"h4"),d.Fc(14,"Personal info"),d.Vb(),d.Wb(15,"a",19),d.Fc(16,"Edit"),d.Vb(),d.Wb(17,"div",20),d.Wb(18,"span"),d.Fc(19,"Email Address"),d.Vb(),d.Wb(20,"h6"),d.Fc(21),d.Vb(),d.Vb(),d.Wb(22,"div",21),d.Wb(23,"span"),d.Fc(24,"Mobile Number"),d.Vb(),d.Wb(25,"h6"),d.Fc(26),d.Vb(),d.Vb(),d.Wb(27,"div",22),d.Wb(28,"span"),d.Fc(29,"Gender"),d.Vb(),d.Wb(30,"h6"),d.Fc(31),d.Vb(),d.Vb(),d.Wb(32,"div",23),d.Wb(33,"span"),d.Fc(34,"Birthdate"),d.Vb(),d.Wb(35,"h6"),d.Fc(36,"01-02-1900"),d.Vb(),d.Vb(),d.Vb(),d.Vb(),d.Vb(),d.Vb(),d.Vb()),2&t){const t=d.ic();d.Db(9),d.Ic("",t.personalInfo.firstName," ",t.personalInfo.lastName,""),d.Db(2),d.Gc(t.personalInfo.userType),d.Db(4),d.oc("routerLink",d.qc(7,k)),d.Db(6),d.Gc(t.personalInfo.email),d.Db(5),d.Gc(t.personalInfo.phoneNumber),d.Db(5),d.Gc(t.personalInfo.title)}}function L(t,e){if(1&t&&(d.Wb(0,"div",10),d.Wb(1,"div",11),d.Wb(2,"div",12),d.Wb(3,"div",13),d.Rb(4,"img",14),d.Vb(),d.Vb(),d.Wb(5,"div",15),d.Wb(6,"div",16),d.Wb(7,"div",17),d.Wb(8,"h2"),d.Fc(9),d.Vb(),d.Vb(),d.Wb(10,"div",18),d.Wb(11,"h4"),d.Fc(12,"Commercial info"),d.Vb(),d.Wb(13,"a",19),d.Fc(14,"Edit"),d.Vb(),d.Wb(15,"div",20),d.Wb(16,"span"),d.Fc(17,"Commerical Name"),d.Vb(),d.Wb(18,"h6"),d.Fc(19),d.Vb(),d.Vb(),d.Wb(20,"div",20),d.Wb(21,"span"),d.Fc(22,"Company Name"),d.Vb(),d.Wb(23,"h6"),d.Fc(24),d.Vb(),d.Vb(),d.Wb(25,"div",21),d.Wb(26,"span"),d.Fc(27,"Company Mobile Number"),d.Vb(),d.Wb(28,"h6"),d.Fc(29),d.Vb(),d.Vb(),d.Wb(30,"div",22),d.Wb(31,"span"),d.Fc(32,"Company Email"),d.Vb(),d.Wb(33,"h6"),d.Fc(34),d.Vb(),d.Vb(),d.Vb(),d.Vb(),d.Vb(),d.Vb(),d.Vb()),2&t){const t=d.ic(2);d.Db(9),d.Ic("",t.personalInfo.firstName," ",t.personalInfo.lastName,""),d.Db(4),d.oc("routerLink",d.qc(7,k)),d.Db(6),d.Gc(t.personalInfo.commercialName),d.Db(5),d.Gc(t.personalInfo.companyName),d.Db(5),d.Gc(t.personalInfo.contactTelefonNumber),d.Db(5),d.Gc(t.personalInfo.contactEmail)}}function A(t,e){if(1&t&&(d.Wb(0,"mat-tab",24),d.Wb(1,"div",4),d.Rb(2,"img",5),d.Ec(3,L,35,8,"div",6),d.Vb(),d.Vb()),2&t){const t=d.ic();d.Db(3),d.oc("ngIf",t.personalInfo)}}let T=(()=>{class t{constructor(t,e,n){this.authSrvc=t,this.profileServ=e,this.route=n,this.personalRoles=[],this.active=!0}ngOnInit(){this.authSrvc.userData$.subscribe(t=>{t&&(this.userData=t)}),this.getDataUser()}ngAfterViewInit(){this.tabgroup&&(console.log(this.tabgroup),this.checkRout())}checkRout(){this.route.paramMap.subscribe(t=>{switch(console.log(t.params.searchParam),t.params.searchParam){case"personal":this.tabgroup._tabs._results[0].isActive=!0,this.tabgroup.selectedIndex=0,console.log(this.tabgroup);break;case"commercial":this.tabgroup._tabs._results[1].isActive=!0,this.tabgroup.selectedIndex=1,console.log(this.tabgroup);break;case"requests":this.tabgroup._tabs._results[2].isActive=!0,this.tabgroup.selectedIndex=2,console.log(this.tabgroup);break;case"orders":this.tabgroup._tabs._results[3].isActive=!0,this.tabgroup.selectedIndex=3,console.log(this.tabgroup)}})}getDataUser(){this.profileServ.getUserData(this.userData.id).subscribe(t=>{console.log(t,"userdata"),this.personalInfo=t.data,this.personalRoles=t.data.roles,this.active="Basic"==this.personalRoles[0]})}}return t.\u0275fac=function(e){return new(e||t)(d.Qb(h.c),d.Qb(y),d.Qb(p.a))},t.\u0275cmp=d.Kb({type:t,selectors:[["app-info-personal"]],viewQuery:function(t,e){var n;1&t&&d.Kc(q,!0),2&t&&d.uc(n=d.fc())&&(e.tabgroup=n.first)},decls:13,vars:2,consts:[[1,"profile_personal_info","_angular_tabs"],[1,"container"],["tabgroup",""],["label","Personal info"],[1,"profile_personal_info_contant"],["src","../../../../../assets/images/Personal-info.jpg","alt","",1,"img_BG"],["class","profile_details",4,"ngIf"],["label","Commercial info",4,"ngIf"],["label","My Requests"],["label","My Orders"],[1,"profile_details"],[1,"row"],[1,"col-12","col-md-3","col-lg-3"],[1,"profile_details_img"],["src","../../../../../assets/images/NoPath - Copy (32)@2x.png","alt",""],[1,"col-12","col-md-9","col-lg-9"],[1,"profile_details_text"],[1,"user_name"],[1,"user_info"],[3,"routerLink"],[1,"UEmail"],[1,"Umobile"],[1,"UGender"],[1,"UBirthDay"],["label","Commercial info"]],template:function(t,e){1&t&&(d.Wb(0,"section",0),d.Wb(1,"div",1),d.Wb(2,"mat-tab-group",null,2),d.Wb(4,"mat-tab",3),d.Wb(5,"div",4),d.Rb(6,"img",5),d.Ec(7,R,37,8,"div",6),d.Vb(),d.Vb(),d.Ec(8,A,4,1,"mat-tab",7),d.Wb(9,"mat-tab",8),d.Rb(10,"app-my-requests"),d.Vb(),d.Wb(11,"mat-tab",9),d.Rb(12,"app-my-orders"),d.Vb(),d.Vb(),d.Vb(),d.Vb()),2&t&&(d.Db(7),d.oc("ngIf",e.personalInfo),d.Db(1),d.oc("ngIf",!e.active))},directives:[m.b,m.a,o.m,v,E,p.d],styles:[""]}),t})();var S=n("3Pt+"),B=n("NpXs"),U=n("Y+sq"),$=n("FKr1");function G(t,e){if(1&t&&(d.Wb(0,"h1"),d.Fc(1),d.Vb()),2&t){const t=d.ic();d.Db(1),d.Hc("",t.userType," User")}}function Q(t,e){1&t&&(d.Wb(0,"mat-error"),d.Fc(1," Company Name is Required "),d.Vb())}function K(t,e){if(1&t&&(d.Wb(0,"div",10),d.Wb(1,"mat-form-field",11),d.Wb(2,"mat-label"),d.Fc(3," * Company Name"),d.Vb(),d.Rb(4,"input",24),d.Ec(5,Q,2,0,"mat-error",2),d.Vb(),d.Vb()),2&t){const t=d.ic(2);d.Db(5),d.oc("ngIf",(null==t.myForm.controls.companyName?null:t.myForm.controls.companyName.invalid)&&(null==t.myForm.controls.companyName?null:t.myForm.controls.companyName.errors)&&((null==t.myForm.controls.companyName?null:t.myForm.controls.companyName.dirty)||(null==t.myForm.controls.companyName?null:t.myForm.controls.companyName.touched)))}}function H(t,e){1&t&&(d.Wb(0,"mat-error"),d.Fc(1," Commercial Name is Required "),d.Vb())}function j(t,e){if(1&t&&(d.Wb(0,"div",10),d.Wb(1,"mat-form-field",11),d.Wb(2,"mat-label"),d.Fc(3," * Commercial Name"),d.Vb(),d.Rb(4,"input",25),d.Ec(5,H,2,0,"mat-error",2),d.Vb(),d.Vb()),2&t){const t=d.ic(2);d.Db(5),d.oc("ngIf",(null==t.myForm.controls.commercialName?null:t.myForm.controls.commercialName.invalid)&&(null==t.myForm.controls.commercialName?null:t.myForm.controls.commercialName.errors)&&((null==t.myForm.controls.commercialName?null:t.myForm.controls.commercialName.dirty)||(null==t.myForm.controls.commercialName?null:t.myForm.controls.commercialName.touched)))}}function z(t,e){1&t&&(d.Wb(0,"mat-error",26),d.Fc(1," first Name is Required "),d.Vb())}function X(t,e){1&t&&(d.Wb(0,"mat-error",26),d.Fc(1," last Name is Required "),d.Vb())}function Y(t,e){if(1&t&&(d.Wb(0,"mat-option",27),d.Fc(1),d.Vb()),2&t){const t=e.$implicit;d.pc("value",t.name),d.Db(1),d.Hc(" ",t.name," ")}}function J(t,e){1&t&&(d.Wb(0,"mat-error"),d.Fc(1," Language Is Required "),d.Vb())}function Z(t,e){1&t&&(d.Wb(0,"mat-error"),d.Fc(1," Telefon Number is Required "),d.Vb())}function tt(t,e){1&t&&(d.Wb(0,"mat-error"),d.Fc(1," Phone Number is Required "),d.Vb())}function et(t,e){1&t&&(d.Wb(0,"mat-error"),d.Fc(1," Fax Number is Required "),d.Vb())}function nt(t,e){if(1&t&&(d.Wb(0,"mat-option",27),d.Fc(1),d.Vb()),2&t){const t=e.$implicit;d.pc("value",t.name),d.Db(1),d.Hc(" ",t.name," ")}}function ot(t,e){1&t&&(d.Wb(0,"mat-error"),d.Fc(1," Title Is Required "),d.Vb())}function rt(t,e){if(1&t&&(d.Wb(0,"mat-option",27),d.Fc(1),d.Vb()),2&t){const t=e.$implicit;d.pc("value",t.name),d.Db(1),d.Hc(" ",t.name," ")}}function at(t,e){1&t&&(d.Wb(0,"mat-error"),d.Fc(1," Contact Languge Is Required "),d.Vb())}function ct(t,e){if(1&t&&(d.Wb(0,"div",10),d.Wb(1,"mat-form-field",11),d.Wb(2,"mat-select",28),d.Wb(3,"mat-option",16),d.Fc(4," Choose Language "),d.Vb(),d.Ec(5,rt,2,2,"mat-option",17),d.Vb(),d.Ec(6,at,2,0,"mat-error",2),d.Vb(),d.Vb()),2&t){const t=d.ic(2);d.Db(5),d.oc("ngForOf",t.languages),d.Db(1),d.oc("ngIf",(null==t.myForm.controls.contactLanguge?null:t.myForm.controls.contactLanguge.invalid)&&(null==t.myForm.controls.contactLanguge?null:t.myForm.controls.contactLanguge.errors.required)&&((null==t.myForm.controls.contactLanguge?null:t.myForm.controls.contactLanguge.dirty)||(null==t.myForm.controls.contactLanguge?null:t.myForm.controls.contactLanguge.touched)))}}function it(t,e){1&t&&(d.Wb(0,"mat-error"),d.Fc(1," Contact Telefon Number is Required "),d.Vb())}function lt(t,e){if(1&t&&(d.Wb(0,"div",10),d.Wb(1,"mat-form-field",11),d.Wb(2,"mat-label"),d.Fc(3," * Telefon Number"),d.Vb(),d.Rb(4,"input",29),d.Ec(5,it,2,0,"mat-error",2),d.Vb(),d.Vb()),2&t){const t=d.ic(2);d.Db(5),d.oc("ngIf",(null==t.myForm.controls.contactTelefonNumber?null:t.myForm.controls.contactTelefonNumber.invalid)&&(null==t.myForm.controls.contactTelefonNumber?null:t.myForm.controls.contactTelefonNumber.errors.required)&&((null==t.myForm.controls.contactTelefonNumber?null:t.myForm.controls.contactTelefonNumber.dirty)||(null==t.myForm.controls.contactTelefonNumber?null:t.myForm.controls.contactTelefonNumber.touched)))}}function st(t,e){1&t&&(d.Wb(0,"mat-error"),d.Fc(1," Contact Phone Number is Required "),d.Vb())}function mt(t,e){if(1&t&&(d.Wb(0,"div",10),d.Wb(1,"mat-form-field",11),d.Wb(2,"mat-label"),d.Fc(3," * Phone Number"),d.Vb(),d.Rb(4,"input",30),d.Ec(5,st,2,0,"mat-error",2),d.Vb(),d.Vb()),2&t){const t=d.ic(2);d.Db(5),d.oc("ngIf",(null==t.myForm.controls.contactPhoneNumber?null:t.myForm.controls.contactPhoneNumber.invalid)&&(null==t.myForm.controls.contactPhoneNumber?null:t.myForm.controls.contactPhoneNumber.errors.required)&&((null==t.myForm.controls.contactPhoneNumber?null:t.myForm.controls.contactPhoneNumber.dirty)||(null==t.myForm.controls.contactPhoneNumber?null:t.myForm.controls.contactPhoneNumber.touched)))}}function bt(t,e){1&t&&(d.Wb(0,"mat-error"),d.Fc(1," Contact Fax Number is Required "),d.Vb())}function ut(t,e){if(1&t&&(d.Wb(0,"div",10),d.Wb(1,"mat-form-field",11),d.Wb(2,"mat-label"),d.Fc(3," Fax Number"),d.Vb(),d.Rb(4,"input",31),d.Ec(5,bt,2,0,"mat-error",2),d.Vb(),d.Vb()),2&t){const t=d.ic(2);d.Db(5),d.oc("ngIf",(null==t.myForm.controls.contactFaxNumber?null:t.myForm.controls.contactFaxNumber.invalid)&&(null==t.myForm.controls.contactFaxNumber?null:t.myForm.controls.contactFaxNumber.errors.required)&&((null==t.myForm.controls.contactFaxNumber?null:t.myForm.controls.contactFaxNumber.dirty)||(null==t.myForm.controls.contactFaxNumber?null:t.myForm.controls.contactFaxNumber.touched)))}}function gt(t,e){1&t&&(d.Wb(0,"mat-error"),d.Fc(1," Contact Email is Required "),d.Vb())}function pt(t,e){1&t&&(d.Wb(0,"mat-error"),d.Fc(1," Contact Email Is Invalid "),d.Vb())}function dt(t,e){if(1&t&&(d.Wb(0,"div",10),d.Wb(1,"mat-form-field",11),d.Wb(2,"mat-label"),d.Fc(3," * Email"),d.Vb(),d.Rb(4,"input",32),d.Ec(5,gt,2,0,"mat-error",2),d.Ec(6,pt,2,0,"mat-error",2),d.Vb(),d.Vb()),2&t){const t=d.ic(2);d.Db(5),d.oc("ngIf",(null==t.myForm.controls.contactEmail?null:t.myForm.controls.contactEmail.invalid)&&(null==t.myForm.controls.contactEmail?null:t.myForm.controls.contactEmail.errors.required)&&((null==t.myForm.controls.contactEmail?null:t.myForm.controls.contactEmail.dirty)||(null==t.myForm.controls.contactEmail?null:t.myForm.controls.contactEmail.touched))),d.Db(1),d.oc("ngIf",(null==t.myForm.controls.contactEmail?null:t.myForm.controls.contactEmail.invalid)&&(null==t.myForm.controls.contactEmail?null:t.myForm.controls.contactEmail.errors.email)&&((null==t.myForm.controls.contactEmail?null:t.myForm.controls.contactEmail.dirty)||(null==t.myForm.controls.contactEmail?null:t.myForm.controls.contactEmail.touched)))}}function ht(t,e){if(1&t){const t=d.Xb();d.Wb(0,"div",6),d.Wb(1,"form",7),d.ec("ngSubmit",(function(){d.xc(t);const e=d.ic();return e.updateData(e.myForm)})),d.Wb(2,"div",8),d.Ec(3,K,6,1,"div",9),d.Ec(4,j,6,1,"div",9),d.Wb(5,"div",10),d.Wb(6,"mat-form-field",11),d.Wb(7,"mat-label"),d.Fc(8,"first Name"),d.Vb(),d.Rb(9,"input",12),d.Ec(10,z,2,0,"mat-error",13),d.Vb(),d.Vb(),d.Wb(11,"div",10),d.Wb(12,"mat-form-field",11),d.Wb(13,"mat-label"),d.Fc(14,"last Name"),d.Vb(),d.Rb(15,"input",14),d.Ec(16,X,2,0,"mat-error",13),d.Vb(),d.Vb(),d.Wb(17,"div",10),d.Wb(18,"mat-form-field",11),d.Wb(19,"mat-select",15),d.Wb(20,"mat-option",16),d.Fc(21," Choose Language "),d.Vb(),d.Ec(22,Y,2,2,"mat-option",17),d.Vb(),d.Ec(23,J,2,0,"mat-error",2),d.Vb(),d.Vb(),d.Wb(24,"div",10),d.Wb(25,"mat-form-field",11),d.Wb(26,"mat-label"),d.Fc(27," * Telefon Number"),d.Vb(),d.Rb(28,"input",18),d.Ec(29,Z,2,0,"mat-error",2),d.Vb(),d.Vb(),d.Wb(30,"div",10),d.Wb(31,"mat-form-field",11),d.Wb(32,"mat-label"),d.Fc(33," * Phone Number"),d.Vb(),d.Rb(34,"input",19),d.Ec(35,tt,2,0,"mat-error",2),d.Vb(),d.Vb(),d.Wb(36,"div",10),d.Wb(37,"mat-form-field",11),d.Wb(38,"mat-label"),d.Fc(39," Fax Number"),d.Vb(),d.Rb(40,"input",20),d.Ec(41,et,2,0,"mat-error",2),d.Vb(),d.Vb(),d.Wb(42,"div",10),d.Wb(43,"mat-form-field",11),d.Wb(44,"mat-select",21),d.Wb(45,"mat-option",16),d.Fc(46," Choose Title "),d.Vb(),d.Ec(47,nt,2,2,"mat-option",17),d.Vb(),d.Ec(48,ot,2,0,"mat-error",2),d.Vb(),d.Vb(),d.Ec(49,ct,7,2,"div",9),d.Ec(50,lt,6,1,"div",9),d.Ec(51,mt,6,1,"div",9),d.Ec(52,ut,6,1,"div",9),d.Ec(53,dt,7,2,"div",9),d.Vb(),d.Wb(54,"div",22),d.Wb(55,"button",23),d.Fc(56,"Update"),d.Vb(),d.Vb(),d.Vb(),d.Vb()}if(2&t){const t=d.ic();d.Db(1),d.oc("formGroup",t.myForm),d.Db(2),d.oc("ngIf",!t.activeBusiness),d.Db(1),d.oc("ngIf",!t.activeBusiness),d.Db(6),d.oc("ngIf",1==t.firstNameCtrl.invalid&&1==t.firstNameCtrl.touched),d.Db(6),d.oc("ngIf",1==t.lastNameCtrl.invalid&&1==t.lastNameCtrl.touched),d.Db(6),d.oc("ngForOf",t.languages),d.Db(1),d.oc("ngIf",(null==t.myForm.controls.language?null:t.myForm.controls.language.invalid)&&(null==t.myForm.controls.language?null:t.myForm.controls.language.errors.required)&&((null==t.myForm.controls.language?null:t.myForm.controls.language.dirty)||(null==t.myForm.controls.language?null:t.myForm.controls.language.touched))),d.Db(6),d.oc("ngIf",(null==t.myForm.controls.telefonNumber?null:t.myForm.controls.telefonNumber.invalid)&&(null==t.myForm.controls.telefonNumber?null:t.myForm.controls.telefonNumber.errors.required)&&((null==t.myForm.controls.telefonNumber?null:t.myForm.controls.telefonNumber.dirty)||(null==t.myForm.controls.telefonNumber?null:t.myForm.controls.telefonNumber.touched))),d.Db(6),d.oc("ngIf",(null==t.myForm.controls.phoneNumber?null:t.myForm.controls.phoneNumber.invalid)&&(null==t.myForm.controls.phoneNumber?null:t.myForm.controls.phoneNumber.errors.required)&&((null==t.myForm.controls.phoneNumber?null:t.myForm.controls.phoneNumber.dirty)||(null==t.myForm.controls.phoneNumber?null:t.myForm.controls.phoneNumber.touched))),d.Db(6),d.oc("ngIf",(null==t.myForm.controls.faxNumber?null:t.myForm.controls.faxNumber.invalid)&&(null==t.myForm.controls.faxNumber?null:t.myForm.controls.faxNumber.errors.required)&&((null==t.myForm.controls.faxNumber?null:t.myForm.controls.faxNumber.dirty)||(null==t.myForm.controls.faxNumber?null:t.myForm.controls.faxNumber.touched))),d.Db(6),d.oc("ngForOf",t.gender),d.Db(1),d.oc("ngIf",(null==t.myForm.controls.title?null:t.myForm.controls.title.invalid)&&(null==t.myForm.controls.title?null:t.myForm.controls.title.errors.required)&&((null==t.myForm.controls.title?null:t.myForm.controls.title.dirty)||(null==t.myForm.controls.title?null:t.myForm.controls.title.touched))),d.Db(1),d.oc("ngIf",!t.activeBusiness),d.Db(1),d.oc("ngIf",!t.activeBusiness),d.Db(1),d.oc("ngIf",!t.activeBusiness),d.Db(1),d.oc("ngIf",!t.activeBusiness),d.Db(1),d.oc("ngIf",!t.activeBusiness)}}let ft=(()=>{class t{constructor(t,e,n,o,r,a){this.authApiService=t,this.alertSrvc=e,this.authSrvc=n,this.router=o,this.fb=r,this.profileServ=a,this.languages=[{id:1,name:"English"},{id:2,name:"French"},{id:3,name:"German"}],this.gender=[{id:1,name:"Mr"},{id:2,name:"Mrs"}],this.activeBusiness=!0,this.userType=""}get userNameCtrl(){return this.myForm.get("userName")}get firstNameCtrl(){return this.myForm.get("firstName")}get lastNameCtrl(){return this.myForm.get("lastName")}get mobileNumberCtrl(){return this.myForm.get("mobileNumber")}get emailCtrl(){return this.myForm.get("email")}get passwordCtrl(){return this.myForm.get("password")}get confirmPasswordCtrl(){return this.myForm.get("confirmPassword")}get policyAgreementCtrl(){return this.myForm.get("policyAgreement")}ngOnInit(){this.authSrvc.userData$.subscribe(t=>{t&&(this.userData=t)}),this.getUserData()}createNormalUserForm(t){this.myForm=this.fb.group({language:new S.e(t?t.language:"",[S.u.required]),telefonNumber:new S.e(t?t.telefonNumber:"",[S.u.required]),phoneNumber:new S.e(t?t.phoneNumber:"",[S.u.required]),faxNumber:new S.e(t?t.faxNumber:""),firstName:[t?t.firstName:"",[S.u.required,this.noWhitespaceValidator]],lastName:[t?t.lastName:"",[S.u.required,this.noWhitespaceValidator]],title:new S.e(t?t.title:"",[S.u.required])})}getUserData(){this.profileServ.getUserData(this.userData.id).subscribe(t=>{this.userInfo=t.data,console.log(t.data,"edit"),this.personalRoles=t.data.roles,this.personalRoles.includes("Basic")&&!this.personalRoles.includes("Business")?(this.activeBusiness=!0,this.userType="Basic",this.createNormalUserForm(this.userInfo)):(this.activeBusiness=!1,this.userType="Business",this.createBusinessUserForm(this.userInfo))})}createBusinessUserForm(t){this.myForm=this.fb.group({companyName:new S.e(t?t.companyName:"",[S.u.required]),commercialName:new S.e(t?t.commercialName:"",[S.u.required]),language:new S.e(t?t.language:"",[S.u.required]),telefonNumber:new S.e(t?t.telefonNumber:"",[S.u.required]),phoneNumber:new S.e(t?t.phoneNumber:"",[S.u.required]),faxNumber:new S.e(t?t.faxNumber:""),firstName:[t?t.firstName:"",[S.u.required,this.noWhitespaceValidator]],lastName:[t?t.lastName:"",[S.u.required,this.noWhitespaceValidator]],contactTelefonNumber:new S.e(t?t.contactTelefonNumber:"",[S.u.required]),contactPhoneNumber:new S.e(t?t.contactPhoneNumber:"",[S.u.required]),contactFaxNumber:new S.e(t?t.contactFaxNumber:""),contactLanguge:new S.e(t?t.contactLanguge:"",[S.u.required]),contactEmail:new S.e(t?t.contactEmail:"",{validators:[S.u.required,S.u.email]}),title:new S.e(t?t.title:"",[S.u.required])})}noWhitespaceValidator(t){if(t.value)return 0!==(t.value||"").trim().length?null:{whitespace:!0}}updateData(t){if(this.myForm.invalid)this.myForm.markAllAsTouched(),this.alertSrvc.error("Complete all the required fields(*) first");else{console.log(t);let e=t.value;e.id=this.userData.id,"Basic"==this.userType?this.profileServ.updateBasicUser(this.userData.id,e).subscribe(t=>{this.alertSrvc.success("Your Data updated SuccessFully"),this.router.navigate(["/profile",{searchParam:"personal"}])}):this.profileServ.updateBusinessUser(this.userData.id,e).subscribe(t=>{this.alertSrvc.success("Your Data updated SuccessFully"),this.router.navigate(["/profile",{searchParam:"personal"}])})}}}return t.\u0275fac=function(e){return new(e||t)(d.Qb(B.a),d.Qb(h.a),d.Qb(h.c),d.Qb(p.b),d.Qb(S.d),d.Qb(y))},t.\u0275cmp=d.Kb({type:t,selectors:[["app-profileedit"]],decls:6,vars:2,consts:[[1,"App_Loign"],[1,"container","pt-5"],[4,"ngIf"],["class","input_form","style","width:60%;",4,"ngIf"],[1,"auth_img"],["src","../../../../assets/images/Login_bg.jpg","alt",""],[1,"input_form",2,"width","60%"],[3,"formGroup","ngSubmit"],[1,"row"],["class","col-12 col-md-6 col-lg-6",4,"ngIf"],[1,"col-12","col-md-6","col-lg-6"],["appearance","outline"],["type","text","matInput","","name","firstName","formControlName","firstName","appNumberCharacters","","constraint","charsOnly"],["class","text-danger","role","alert",4,"ngIf"],["formControlName","lastName","matInput","","appNumberCharacters","","constraint","charsOnly","type","text"],["formControlName","language"],["value",""],[3,"value",4,"ngFor","ngForOf"],["type","text","matInput","","name","telefonNumber","formControlName","telefonNumber"],["type","text","matInput","","name","phoneNumber","formControlName","phoneNumber"],["type","text","matInput","","name","faxNumber","formControlName","faxNumber"],["formControlName","title"],[1,"pb-5"],["mat-flat-button","","color","primary"],["type","text","matInput","","name","companyName","formControlName","companyName"],["type","text","matInput","","name","commercialName","formControlName","commercialName"],["role","alert",1,"text-danger"],[3,"value"],["formControlName","contactLanguge"],["type","text","matInput","","name","contactTelefonNumber","formControlName","contactTelefonNumber"],["type","text","matInput","","name","contactPhoneNumber","formControlName","contactPhoneNumber"],["type","text","matInput","","name","contactFaxNumber","formControlName","contactFaxNumber"],["type","email","matInput","","name","contactEmail","formControlName","contactEmail"]],template:function(t,e){1&t&&(d.Wb(0,"section",0),d.Wb(1,"div",1),d.Ec(2,G,2,1,"h1",2),d.Ec(3,ht,57,17,"div",3),d.Wb(4,"div",4),d.Rb(5,"img",5),d.Vb(),d.Vb(),d.Vb()),2&t&&(d.Db(2),d.oc("ngIf",e.userInfo),d.Db(1),d.oc("ngIf",e.userInfo))},directives:[o.m,S.w,S.o,S.h,c.c,c.f,i.b,S.c,S.n,S.f,U.a,b.a,$.j,o.l,s.b,c.b],styles:["",".App_Loign[_ngcontent-%COMP%], .app_register[_ngcontent-%COMP%]{position:relative;width:100%;height:100vh}.App_Loign[_ngcontent-%COMP%]   .auth_heading[_ngcontent-%COMP%], .app_register[_ngcontent-%COMP%]   .auth_heading[_ngcontent-%COMP%]{margin:5% 0 3%;display:inline-block}.App_Loign[_ngcontent-%COMP%]   .auth_heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .app_register[_ngcontent-%COMP%]   .auth_heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:45px;text-transform:uppercase;letter-spacing:3px}.App_Loign[_ngcontent-%COMP%]   .auth_heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .app_register[_ngcontent-%COMP%]   .auth_heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:rgba(31,40,54,.5)}.App_Loign[_ngcontent-%COMP%]   .input_form[_ngcontent-%COMP%], .app_register[_ngcontent-%COMP%]   .input_form[_ngcontent-%COMP%]{width:35%}.App_Loign[_ngcontent-%COMP%]   .input_form[_ngcontent-%COMP%]   .Btn_action[_ngcontent-%COMP%], .app_register[_ngcontent-%COMP%]   .input_form[_ngcontent-%COMP%]   .Btn_action[_ngcontent-%COMP%]{margin-top:60px}.App_Loign[_ngcontent-%COMP%]   .input_form[_ngcontent-%COMP%]   .Btn_action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .app_register[_ngcontent-%COMP%]   .input_form[_ngcontent-%COMP%]   .Btn_action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-transform:uppercase;display:block;margin-top:20px}.App_Loign[_ngcontent-%COMP%]   .input_form[_ngcontent-%COMP%]   .Btn_action[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], .app_register[_ngcontent-%COMP%]   .input_form[_ngcontent-%COMP%]   .Btn_action[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{text-transform:capitalize}.App_Loign[_ngcontent-%COMP%]   .input_form[_ngcontent-%COMP%]   .Btn_action[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .app_register[_ngcontent-%COMP%]   .input_form[_ngcontent-%COMP%]   .Btn_action[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-transform:uppercase;color:#ef8216!important}.App_Loign[_ngcontent-%COMP%]   .auth_img[_ngcontent-%COMP%], .app_register[_ngcontent-%COMP%]   .auth_img[_ngcontent-%COMP%]{position:absolute;z-index:-1;bottom:0;right:0;width:50%;overflow:hidden}.App_Loign[_ngcontent-%COMP%]   .auth_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .app_register[_ngcontent-%COMP%]   .auth_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}.App_Loign[_ngcontent-%COMP%]   .auth_header_logo[_ngcontent-%COMP%], .app_register[_ngcontent-%COMP%]   .auth_header_logo[_ngcontent-%COMP%]{width:100%;height:60px;overflow:hidden;line-height:60px}.App_Loign[_ngcontent-%COMP%]   .auth_header_logo[_ngcontent-%COMP%]   .auth_logo[_ngcontent-%COMP%], .app_register[_ngcontent-%COMP%]   .auth_header_logo[_ngcontent-%COMP%]   .auth_logo[_ngcontent-%COMP%]{width:78px;height:60px;overflow:hidden;display:inline-block}.App_Loign[_ngcontent-%COMP%]   .auth_header_logo[_ngcontent-%COMP%]   .auth_logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .app_register[_ngcontent-%COMP%]   .auth_header_logo[_ngcontent-%COMP%]   .auth_logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.App_Loign[_ngcontent-%COMP%]   .auth_header_logo[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .app_register[_ngcontent-%COMP%]   .auth_header_logo[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{float:right;border:none;background:transparent;outline:transparent}.App_Loign[_ngcontent-%COMP%]   .auth_header_logo[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .app_register[_ngcontent-%COMP%]   .auth_header_logo[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{text-align:right;line-height:60px;color:#ef8216;font-size:20px}.App_Loign[_ngcontent-%COMP%]   .registering_type[_ngcontent-%COMP%], .app_register[_ngcontent-%COMP%]   .registering_type[_ngcontent-%COMP%]{display:flex;margin:50px auto;justify-content:center}.App_Loign[_ngcontent-%COMP%]   .registering_type[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .app_register[_ngcontent-%COMP%]   .registering_type[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:350px;height:200px;border:4px solid #ef8216;border-radius:15px;padding:15px;margin-left:20px;text-align:center;opacity:.5;transition:.8s;position:relative}.App_Loign[_ngcontent-%COMP%]   .registering_type[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .app_register[_ngcontent-%COMP%]   .registering_type[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:70px;margin-top:20px}.App_Loign[_ngcontent-%COMP%]   .registering_type[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .app_register[_ngcontent-%COMP%]   .registering_type[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin-top:15px!important;font-weight:900}.App_Loign[_ngcontent-%COMP%]   .registering_type[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .app_register[_ngcontent-%COMP%]   .registering_type[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#fff;box-shadow:3px 5px 16px #9c9b9b}.App_Loign[_ngcontent-%COMP%]   .registering_type[_ngcontent-%COMP%]   a.hover[_ngcontent-%COMP%], .app_register[_ngcontent-%COMP%]   .registering_type[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{opacity:1}.page_2[_ngcontent-%COMP%]   .Btn_action[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-transform:uppercase;color:#ef8216!important}.page_2[_ngcontent-%COMP%]   .Btn_action[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]{text-decoration:none!important}"]}),t})();var _t=n("xHqg");const yt=["stepper"];function Ft(t,e){1&t&&(d.Wb(0,"mat-icon"),d.Fc(1,"done"),d.Vb())}function Ct(t,e){1&t&&(d.Wb(0,"td"),d.Fc(1," Pending "),d.Vb())}function Nt(t,e){1&t&&(d.Wb(0,"td"),d.Fc(1," Processing "),d.Vb())}function Pt(t,e){1&t&&(d.Wb(0,"td"),d.Fc(1," Collected"),d.Vb())}function Ot(t,e){if(1&t&&(d.Wb(0,"tbody",13),d.Wb(1,"td"),d.Fc(2),d.Vb(),d.Ec(3,Ct,2,0,"td",14),d.Ec(4,Nt,2,0,"td",14),d.Ec(5,Pt,2,0,"td",14),d.Wb(6,"td"),d.Fc(7),d.jc(8,"date"),d.Vb(),d.Vb()),2&t){const t=e.$implicit;d.Db(2),d.Gc(t.orderNumber),d.Db(1),d.oc("ngIf",1==t.newStatus),d.Db(1),d.oc("ngIf",2==t.newStatus),d.Db(1),d.oc("ngIf",3==t.newStatus),d.Db(2),d.Hc("",d.kc(8,5,t.timeStamp)," ")}}const Vt=[{path:"",component:T},{path:"edit",component:ft},{path:"track-order",component:(()=>{class t{constructor(t,e,n){this.fb=t,this._profileServ=e,this.route=n,this.isLinear=!1,this.stepOneIsCompleted=!1,this.stepTwoIsCompleted=!1,this.stepThreeIsCompleted=!1,this.trackData=[],this.stepComplete=!1}get trackIdCtrl(){return this.myForm.get("trackId")}ngOnInit(){this.trackId=this.route.snapshot.paramMap.get("trackId"),console.log(this.trackId),this.trackId?(this.createTrackIdForm(),this.trackIdCtrl.setValue(this.trackId),this.getAllTracks()):this.createTrackIdForm()}createTrackIdForm(){this.myForm=this.fb.group({trackId:[""]})}trackIdSearch(t){console.log(t),this._profileServ.getAllTrackOrder(t.value.trackId).subscribe(t=>{this.trackData=t.data,console.log("here",this.trackData),this.trackData.map(t=>{this.stepper.selected.completed=!0;for(let e=1;e<t.newStatus;e++)this.stepper.next()})})}getAllTracks(){this._profileServ.getAllTrackOrderinfo(this.trackId).subscribe(t=>{console.log("resssss",t),this.trackData=t.data,console.log("here",this.trackData),this.trackData.map(t=>{this.stepper.selected.completed=!0;for(let e=1;e<t.newStatus;e++)this.stepper.next()})})}}return t.\u0275fac=function(e){return new(e||t)(d.Qb(S.d),d.Qb(y),d.Qb(p.a))},t.\u0275cmp=d.Kb({type:t,selectors:[["app-track-myorder"]],viewQuery:function(t,e){var n;1&t&&d.Kc(yt,!0),2&t&&d.uc(n=d.fc())&&(e.stepper=n.first)},decls:21,vars:1,consts:[[1,"track_track","mb-5","pb-5","track_track"],[1,"container","py-2","my-2"],["labelPosition","bottom"],["stepper",""],["matStepperIcon","edit"],["label","Pending","state","chat"],["label","Processing"],["label","Collected"],[1,"container","col-md-8"],[1,"py-2","my-2"],[1,"table","text-center"],[1,"bg-light"],["class","border border-white","id","tablebody",4,"ngFor","ngForOf"],["id","tablebody",1,"border","border-white"],[4,"ngIf"]],template:function(t,e){1&t&&(d.Wb(0,"section",0),d.Wb(1,"div",1),d.Wb(2,"mat-horizontal-stepper",2,3),d.Ec(4,Ft,2,0,"ng-template",4),d.Rb(5,"mat-step",5),d.Rb(6,"mat-step",6),d.Rb(7,"mat-step",7),d.Vb(),d.Vb(),d.Wb(8,"div",8),d.Wb(9,"div",9),d.Wb(10,"h5"),d.Fc(11," Order Event log "),d.Vb(),d.Vb(),d.Wb(12,"table",10),d.Wb(13,"thead",11),d.Wb(14,"th"),d.Fc(15," Order Number "),d.Vb(),d.Wb(16,"th"),d.Fc(17," Event "),d.Vb(),d.Wb(18,"th"),d.Fc(19," Event Date "),d.Vb(),d.Vb(),d.Ec(20,Ot,9,7,"tbody",12),d.Vb(),d.Vb(),d.Vb()),2&t&&(d.Db(20),d.oc("ngForOf",e.trackData))},directives:[_t.a,_t.c,_t.b,o.l,g.a,o.m],pipes:[o.f],styles:[".mat-step-header[_ngcontent-%COMP%]   .mat-step-icon[_ngcontent-%COMP%]{background-color:#f56c2f}td[_ngcontent-%COMP%]{color:#f56c2f}  .mat-horizontal-stepper-header{pointer-events:none!important}"]}),t})()}];let Wt=(()=>{class t{}return t.\u0275mod=d.Ob({type:t}),t.\u0275inj=d.Nb({factory:function(e){return new(e||t)},imports:[[p.e.forChild(Vt)],p.e]}),t})(),vt=(()=>{class t{}return t.\u0275mod=d.Ob({type:t}),t.\u0275inj=d.Nb({factory:function(e){return new(e||t)},imports:[[o.c,Wt,r.a,g.b,u.a,i.c,l.b,s.c,m.c,b.b,a.a,_t.d],c.e,i.c,l.b,s.c,m.c,b.b]}),t})()}}]);
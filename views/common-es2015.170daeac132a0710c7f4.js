(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{NpXs:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var s=r("fXoL"),i=r("tk/3");let a=(()=>{class t{constructor(t){this.http=t,this.baseUrl="http://mazenebada-001-site1.itempurl.com/api",this.prefix="Account"}login(t){return this.http.post(`${this.baseUrl}/${this.prefix}/authenticate`,t,{observe:"body"})}forgetPassword(t){return this.http.post(`${this.baseUrl}/${this.prefix}/forgot-password`,t)}resetPassword(t){return this.http.post(`${this.baseUrl}/${this.prefix}/reset-password`,t)}register(t){return this.http.post(`${this.baseUrl}/${this.prefix}/register`,t)}registerBusiness(t){return this.http.post(`${this.baseUrl}/${this.prefix}/register-business`,t)}confirmEmail(t){return this.http.get(`${this.baseUrl}/${this.prefix}/confirm-email?userId=${t.userId}&code=${t.code}`)}}return t.\u0275fac=function(e){return new(e||t)(s.ac(i.b))},t.\u0275prov=s.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},xtiZ:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var s=r("AytR"),i=r("fXoL"),a=r("tk/3");let n=(()=>{class t{constructor(t){this.http=t}getAllBrands(){return this.http.get(s.a.baseUrl+"DeviceBrand")}getAllModels(){return this.http.get(s.a.baseUrl+"DeviceModel")}getAllModelsById(t){return this.http.get(`${s.a.baseUrl}DeviceModel/${t}`)}getAllProblems(t){return this.http.get(`${s.a.baseUrl}DeviceProblemClassification?FilterValue[DeviceModelId]=${t}`)}getAllBranshes(){return this.http.get(s.a.baseUrl+"Branch")}checkAppointment(t){return this.http.post(s.a.baseUrl+"RepairRequest",t)}getAllTrackRequest(t){return this.http.get(`${s.a.baseUrl}RepairRequestInfo?FilterValue[repairRequestNumber]=${t}`)}getAllUserRequests(t){return this.http.get(`${s.a.baseUrl}RepairRequest?FilterValue[userId]=${t}`)}}return t.\u0275fac=function(e){return new(e||t)(i.ac(a.b))},t.\u0275prov=i.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{hs9o:function(e,t,c){"use strict";c.r(t),c.d(t,"HttpLoaderFactory",(function(){return ee})),c.d(t,"VisitorCheckinModule",(function(){return ce}));var n=c("2kYt"),a=c("nIj0"),r=c("sEIs"),o=c("vobO"),i=c("R3Ii"),s=c("D57K"),l=c("jOdJ"),b=c("cvcL"),h=c("EM62"),u=c("s2Ay"),d=c("29Wa"),m=c("Cd2c"),p=c("PBFl"),f=c("ukpX"),g=c("csyo");const v=["checkin-details",""],y=function(){return["/welcome"]};function P(e,t){if(1&e){const e=h.cc();h.bc(0,"form",3),h.qc(1,"async"),h.bc(2,"h3",4),h.Pc(3),h.qc(4,"translate"),h.ac(),h.bc(5,"div",5),h.bc(6,"label",6),h.Wb(7,"i",7),h.Pc(8),h.qc(9,"translate"),h.ac(),h.bc(10,"mat-form-field",8),h.Wb(11,"input",9),h.bc(12,"mat-error"),h.Pc(13),h.qc(14,"translate"),h.ac(),h.ac(),h.ac(),h.bc(15,"div",5),h.bc(16,"label",10),h.Wb(17,"i",11),h.Pc(18),h.qc(19,"translate"),h.ac(),h.bc(20,"mat-form-field",8),h.Wb(21,"input",12),h.ac(),h.ac(),h.bc(22,"div",5),h.bc(23,"label",13),h.Wb(24,"i",7),h.Pc(25),h.qc(26,"translate"),h.ac(),h.bc(27,"mat-form-field",8),h.Wb(28,"input",14),h.bc(29,"mat-error"),h.Pc(30),h.qc(31,"translate"),h.ac(),h.ac(),h.ac(),h.bc(32,"div",5),h.bc(33,"label",10),h.Wb(34,"i",15),h.Pc(35),h.qc(36,"translate"),h.ac(),h.bc(37,"mat-form-field",8),h.Wb(38,"input",16),h.bc(39,"mat-error"),h.Pc(40),h.qc(41,"translate"),h.ac(),h.ac(),h.ac(),h.bc(42,"div",5),h.bc(43,"label",10),h.Wb(44,"i",11),h.Pc(45),h.qc(46,"translate"),h.ac(),h.bc(47,"mat-form-field",8),h.Wb(48,"input",17),h.ac(),h.ac(),h.bc(49,"div",5),h.bc(50,"label",10),h.Wb(51,"i",18),h.Pc(52),h.qc(53,"translate"),h.ac(),h.bc(54,"mat-form-field",8),h.Wb(55,"input",19),h.ac(),h.ac(),h.bc(56,"button",20),h.lc("click",(function(){return h.Cc(e),h.pc().updateGuest()})),h.Pc(57),h.qc(58,"translate"),h.ac(),h.bc(59,"a",21),h.bc(60,"app-icon",22),h.Pc(61),h.qc(62,"translate"),h.ac(),h.ac(),h.ac()}if(2&e){const e=h.pc();h.vc("formGroup",h.rc(1,14,e.form)),h.Jb(3),h.Qc(h.rc(4,16,"Confirm Details")),h.Jb(5),h.Rc(" ",h.rc(9,18,"Host"),""),h.Jb(5),h.Rc(" ",h.rc(14,20,"The email address of your host is required")," "),h.Jb(5),h.Rc(" ",h.rc(19,22,"Host Phone Number"),""),h.Jb(7),h.Rc(" ",h.rc(26,24,"Name"),""),h.Jb(5),h.Qc(h.rc(31,26,"Please enter your full name")),h.Jb(5),h.Rc(" ",h.rc(36,28,"Email"),""),h.Jb(5),h.Qc(h.rc(41,30,"A valid email address is required")),h.Jb(5),h.Rc(" ",h.rc(46,32,"Guest Phone Number"),""),h.Jb(7),h.Rc(" ",h.rc(53,34,"Organisation/ Company"),""),h.Jb(5),h.Rc(" ",h.rc(58,36,"Next")," "),h.Jb(2),h.vc("routerLink",h.xc(40,y)),h.Jb(2),h.Qc(h.rc(62,38,"Close"))}}function k(e,t){1&e&&(h.bc(0,"div",23),h.Wb(1,"mat-spinner",24),h.bc(2,"div",25),h.Pc(3),h.qc(4,"translate"),h.ac(),h.ac()),2&e&&(h.Jb(1),h.vc("diameter",48),h.Jb(2),h.Rc(" ",h.rc(4,2,"Updating data and checking in...")," "))}let w=(()=>{class e{constructor(e,t,c){this._checkin=e,this._router=t,this.translateService=c,this.form=this._checkin.form,this.loading=!1,this.translateService.setDefaultLang("en"),this.translateService.use(localStorage.getItem("lang")||"en")}ngOnInit(){this.form.pipe(Object(l.a)()).subscribe(e=>e?"":this.previous())}updateGuest(){return Object(s.a)(this,void 0,void 0,(function*(){this.loading=!0,yield this._checkin.updateGuest(),yield this._checkin.checkinGuest();var e=this._checkin.eventend,t=history.state.data.qrepoc;this.loading=!1,!1===this._checkin.entry||t>e?(console.log(this._checkin.entry),this._router.navigate(["/checkin","error"])):this._router.navigate(["/checkin","photo"])}))}previous(){this._router.navigate(["/checkin","scan"])}}return e.\u0275fac=function(t){return new(t||e)(h.Vb(b.a),h.Vb(r.d),h.Vb(u.d))},e.\u0275cmp=h.Pb({type:e,selectors:[["","checkin-details",""]],attrs:v,decls:6,vars:4,consts:[["rel","stylesheet","href",h.Uc("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css")],["class","bg-white rounded shadow overflow-hidden relative flex flex-col items-center my-4 mx-auto",3,"formGroup",4,"ngIf","ngIfElse"],["load_state",""],[1,"bg-white","rounded","shadow","overflow-hidden","relative","flex","flex-col","items-center","my-4","mx-auto",3,"formGroup"],[1,"text-2xl","m-4"],["field","",1,"flex","flex-col"],["form","host"],[1,"glyphicon","glyphicon-user"],["appearance","outline"],["matInput","","name","host","formControlName","host","id","host","placeholder","Host's Email Address"],["form","email"],[1,"glyphicon","glyphicon-phone"],["matInput","","type","text","name","hostphone","formControlName","hostphone","id","hostphone","placeholder","Phone Number"],["form","name"],["matInput","","type","text","name","name","formControlName","name","id","name","placeholder","Full Name"],[1,"glyphicon","glyphicon-envelope"],["matInput","","type","text","name","email","formControlName","email","id","email","placeholder","Email Address"],["matInput","","type","text","name","phone","formControlName","phone","id","phone","placeholder","Phone Number"],[1,"glyphicon","glyphicon-briefcase"],["matInput","","type","text","name","organisation","formControlName","organisation","id","organozation","placeholder","Organisation / Company"],["mat-button","",3,"click"],["mat-icon-button","",1,"absolute","top-0","right-0",3,"routerLink"],["className","material-icons"],[1,"flex","flex-col","items-center","m-auto"],[3,"diameter"],[1,"my-4","text-lg","text-white"]],template:function(e,t){if(1&e&&(h.bc(0,"head"),h.Wb(1,"link",0),h.ac(),h.Nc(2,P,63,41,"form",1),h.qc(3,"async"),h.Nc(4,k,5,4,"ng-template",null,2,h.Oc)),2&e){const e=h.Ac(5);h.Jb(2),h.vc("ngIf",h.rc(3,2,t.form)&&!t.loading)("ngIfElse",e)}},directives:[n.n,a.t,a.m,a.g,d.c,m.b,a.c,a.l,a.e,d.b,p.b,p.a,r.f,f.a,g.b],pipes:[n.b,u.c],styles:["[_nghost-%COMP%] {\n                position: absolute;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                background-color: rgba(0, 0, 0, 0.5);\n            }\n\n            form[_ngcontent-%COMP%] {\n                width: 40rem;\n                max-width: calc(100vw - 2rem);\n            }\n\n            [field][_ngcontent-%COMP%] {\n                width: calc(100% - 2rem);\n            }\n\n            .absolute[_ngcontent-%COMP%] {\n                position: absolute;\n            }\n\n            button[_ngcontent-%COMP%] {\n                margin-bottom: 1rem;\n                width: 8rem;\n            }"]}),e})(),_=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=h.Pb({type:e,selectors:[["checkin-group"]],decls:0,vars:0,template:function(e,t){},styles:[""]}),e})();var x=c("20lr"),q=c("DZJm");const J=function(){return["/welcome"]};function C(e,t){if(1&e){const e=h.cc();h.bc(0,"div",2),h.bc(1,"h3",3),h.Pc(2),h.qc(3,"translate"),h.ac(),h.bc(4,"a-take-photo",4),h.lc("photoAccepted",(function(t){return h.Cc(e),h.pc().handlePhoto(t)})),h.ac(),h.bc(5,"a",5),h.bc(6,"app-icon",6),h.Pc(7),h.qc(8,"translate"),h.ac(),h.ac(),h.ac()}2&e&&(h.Jb(2),h.Rc(" ",h.rc(3,3,"Take a photo to continue")," "),h.Jb(3),h.vc("routerLink",h.xc(7,J)),h.Jb(2),h.Qc(h.rc(8,5,"Close")))}function O(e,t){1&e&&(h.bc(0,"div",7),h.Wb(1,"mat-spinner",8),h.bc(2,"div",9),h.Pc(3),h.qc(4,"translate"),h.ac(),h.ac()),2&e&&(h.Jb(1),h.vc("diameter",48),h.Jb(2),h.Rc(" ",h.rc(4,2,"Printing guest pass...")," "))}let I=(()=>{class e{constructor(e,t){this._checkin=e,this._router=t}handlePhoto(e){return Object(s.a)(this,void 0,void 0,(function*(){if(!e)return Object(x.j)("Error saving image, please try again");this.loading=!0,this._checkin.setPhoto(e),yield this._checkin.printPass().catch(e=>{throw this.loading=!1,Object(x.j)(e),e}),this.loading=!1,this._router.navigate(["/checkin","covid"])}))}}return e.\u0275fac=function(t){return new(t||e)(h.Vb(b.a),h.Vb(r.d))},e.\u0275cmp=h.Pb({type:e,selectors:[["checkin-photo"]],decls:3,vars:2,consts:[["class","bg-white rounded shadow overflow-hidden relative flex flex-col items-center p-4",4,"ngIf","ngIfElse"],["load_state",""],[1,"bg-white","rounded","shadow","overflow-hidden","relative","flex","flex-col","items-center","p-4"],[1,"text-xl","mb-4"],[3,"photoAccepted"],["mat-icon-button","",1,"absolute","top-0","right-0",3,"routerLink"],["className","material-icons"],[1,"flex","flex-col","items-center","m-auto"],[3,"diameter"],[1,"my-4","text-lg","text-white"]],template:function(e,t){if(1&e&&(h.Nc(0,C,9,8,"div",0),h.Nc(1,O,5,4,"ng-template",null,1,h.Oc)),2&e){const e=h.Ac(2);h.vc("ngIf",!t.loading)("ngIfElse",e)}},directives:[n.n,q.a,p.a,r.f,f.a,g.b],pipes:[u.c],styles:["[_nghost-%COMP%] {\n                position: absolute;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                background-color: rgba(0, 0, 0, 0.5);\n            }\n\n            .absolute[_ngcontent-%COMP%] {\n                position: absolute;\n            }"]}),e})();function M(e,t){if(1&e&&h.Wb(0,"form",6),2&e){const e=h.pc();h.vc("formGroup",e.form)}}const Q=function(){return["/welcome"]};let R=(()=>{class e{constructor(e){this._router=e}next(){this._router.navigate(["/welcome"])}}return e.\u0275fac=function(t){return new(t||e)(h.Vb(r.d))},e.\u0275cmp=h.Pb({type:e,selectors:[["checkin-preferences"]],decls:9,vars:3,consts:[[1,"bg-white","rounded","shadow","overflow-hidden","relative","flex","flex-col","items-center","my-4","p-4","mx-auto"],[1,"text-xl"],[3,"formGroup",4,"ngIf"],["mat-button","",3,"click"],["mat-icon-button","",1,"absolute","top-0","right-0",3,"routerLink"],["className","material-icons"],[3,"formGroup"]],template:function(e,t){1&e&&(h.bc(0,"div",0),h.bc(1,"h3",1),h.Pc(2,"Would you like a drink?"),h.ac(),h.Nc(3,M,1,1,"form",2),h.bc(4,"button",3),h.lc("click",(function(){return t.next()})),h.Pc(5,"Update"),h.ac(),h.bc(6,"a",4),h.bc(7,"app-icon",5),h.Pc(8,"close"),h.ac(),h.ac(),h.ac()),2&e&&(h.Jb(3),h.vc("ngIf",t.form),h.Jb(3),h.vc("routerLink",h.xc(2,Q)))},directives:[n.n,p.b,p.a,r.f,f.a,a.t,a.m,a.g],styles:[".absolute[_ngcontent-%COMP%] {\n                position: absolute;\n            }"]}),e})();var N=c("Nhx6");const W=["video"],V=["checkin-qr-scan",""],j=function(){return["/welcome"]};let E=(()=>{class e{constructor(e,t,c){this._checkin=e,this._router=t,this.translateService=c,this.translateService.setDefaultLang("en"),this.translateService.use(localStorage.getItem("lang")||"en")}ngOnInit(){this._reader=new N.BrowserQRCodeReader,this.setupQRReader()}ngOnDestroy(){var e;if(null===(e=this._video_el)||void 0===e?void 0:e.nativeElement.srcObject){const e=this._video_el.nativeElement.srcObject.getTracks()[0];e&&e.stop()}}checkQRCode(e){return Object(s.a)(this,void 0,void 0,(function*(){const t=e.split(",");if(this.qrepoc=parseInt((Date.now()/1e3).toString()),t.length<2)return Object(x.j)("Invalid QRCode"),void this.setupQRReader();yield this._checkin.loadGuestAndEvent(t[0],t[1]).catch(e=>{throw this.handleError(e.message||e),e}),this._router.navigate(["/checkin","details"],{state:{data:{qrepoc:this.qrepoc}}})}))}checkEmail(e){return Object(s.a)(this,void 0,void 0,(function*(){!e||!e.includes("@")||e.length<5||(yield this._checkin.loadGuestAndEvent(e).catch(e=>{throw this.handleError(e.message||e),e}),this._router.navigate(["/checkin","details"]))}))}setupQRReader(){this._reader.listVideoInputDevices().then(e=>{this._reader.decodeOnceFromVideoDevice(e[0].deviceId,"qr-stream").then(e=>this.checkQRCode(e.getText())).catch(e=>console.error(e))}).catch(e=>console.error(e))}handleError(e){this._checkin.setError(e),this._router.navigate(["/checkin","error"])}}return e.\u0275fac=function(t){return new(t||e)(h.Vb(b.a),h.Vb(r.d),h.Vb(u.d))},e.\u0275cmp=h.Pb({type:e,selectors:[["","checkin-qr-scan",""]],viewQuery:function(e,t){if(1&e&&h.Vc(W,!0),2&e){let e;h.zc(e=h.mc())&&(t._video_el=e.first)}},attrs:V,decls:18,vars:15,consts:[[1,"bg-white","rounded","shadow","overflow-hidden","relative","flex","flex-col","items-center"],[1,"mt-6","mb-4"],["appearance","outline"],["matInput","","placeholder","Enter email...","type","email","autocomplete","off",3,"ngModel","ngModelChange","blur","keyup.enter"],["id","qr-stream","playsinline","","width","640","height","480","autoplay","",1,"rounded","m-4","bg-gray-200","border","border-gray-500"],["video",""],["mat-icon-button","",1,"absolute","top-0","right-0",3,"routerLink"],["className","material-icons"]],template:function(e,t){1&e&&(h.bc(0,"div",0),h.bc(1,"h1"),h.Pc(2),h.qc(3,"translate"),h.ac(),h.bc(4,"p",1),h.Pc(5),h.qc(6,"translate"),h.ac(),h.bc(7,"mat-form-field",2),h.bc(8,"input",3),h.lc("ngModelChange",(function(e){return t.email=e}))("blur",(function(){return t.checkEmail(t.email)}))("keyup.enter",(function(){return t.checkEmail(t.email)})),h.ac(),h.bc(9,"mat-error"),h.Pc(10),h.qc(11,"translate"),h.ac(),h.ac(),h.Wb(12,"video",4,5),h.bc(14,"a",6),h.bc(15,"app-icon",7),h.Pc(16),h.qc(17,"translate"),h.ac(),h.ac(),h.ac()),2&e&&(h.Jb(2),h.Qc(h.rc(3,6,"Check In")),h.Jb(3),h.Rc(" ",h.rc(6,8,"Please enter your email address or scan your QR code")," "),h.Jb(3),h.vc("ngModel",t.email),h.Jb(2),h.Qc(h.rc(11,10,"Invalid email format")),h.Jb(4),h.vc("routerLink",h.xc(14,j)),h.Jb(2),h.Qc(h.rc(17,12,"Close")))},directives:[d.c,m.b,a.c,a.l,a.o,d.b,p.a,r.f,f.a],pipes:[u.c],styles:["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                align-items: center;\n                justify-content: center;\n                height: 100%;\n                width: 100%;\n                background-color: rgba(0, 0, 0, 0.5);\n            }\n\n            video[_ngcontent-%COMP%] {\n                width: 36rem;\n                height: 27rem;\n            }\n\n            mat-form-field[_ngcontent-%COMP%] {\n                width: 36rem;\n            }\n\n            a[_ngcontent-%COMP%] {\n                position: absolute;\n            }"]}),e})();function L(e,t){1&e&&(h.Zb(0),h.Pc(1),h.qc(2,"translate"),h.Yb()),2&e&&(h.Jb(1),h.Rc(" ",h.rc(2,1,"Please wait in the lobby.")," "))}function D(e,t){1&e&&(h.Zb(0),h.Pc(1),h.qc(2,"translate"),h.Yb()),2&e&&(h.Jb(1),h.Rc(" ",h.rc(2,1,"Please use the vistor access lift over there.")," "))}const S=function(){return["/checkin","preferences"]};function G(e,t){if(1&e&&(h.bc(0,"div",1),h.bc(1,"h3",2),h.Pc(2),h.qc(3,"translate"),h.ac(),h.bc(4,"p",3),h.Pc(5),h.qc(6,"translate"),h.qc(7,"date"),h.qc(8,"async"),h.qc(9,"translate"),h.qc(10,"async"),h.Wb(11,"br"),h.Pc(12),h.qc(13,"async"),h.qc(14,"translate"),h.Nc(15,L,3,3,"ng-container",4),h.qc(16,"async"),h.Nc(17,D,3,3,"ng-container",4),h.qc(18,"async"),h.ac(),h.bc(19,"a",5),h.Pc(20),h.qc(21,"translate"),h.ac(),h.ac()),2&e){const e=h.pc();let t=null,c=null,n=null;h.Jb(2),h.Qc(h.rc(3,11,"You are checked in!")),h.Jb(3),h.Tc(" ",h.rc(6,13,"Welcome, you have a meeting at")," ",h.sc(7,15,(null==(t=h.rc(8,18,e.event))?null:t.event_start)||"","shortDate")," ",h.rc(9,20,"with")," ",(null==h.rc(10,22,e.event).organiser?null:h.rc(10,22,e.event).organiser.name)||"","."),h.Jb(7),h.Sc(" ",(null==h.rc(13,24,e.event).organiser?null:h.rc(13,24,e.event).organiser.name)||""," ",h.rc(14,26,"has been notified and will be with you shortly."),"\xa0 "),h.Jb(3),h.vc("ngIf",!(null!=(c=h.rc(16,28,e.event))&&c.can_access_lift)),h.Jb(2),h.vc("ngIf",null==(n=h.rc(18,30,e.event))?null:n.can_access_lift),h.Jb(2),h.vc("routerLink",h.xc(34,S)),h.Jb(1),h.Rc(" ",h.rc(21,32,"Done")," ")}}let A=(()=>{class e{constructor(e,t){this._checkin=e,this._router=t,this.event=this._checkin.event,this.guest=this._checkin.guest}ngOnInit(){this.event.pipe(Object(l.a)()).subscribe(e=>e?"":this.previous())}previous(){this._router.navigate(["/checkin"])}}return e.\u0275fac=function(t){return new(t||e)(h.Vb(b.a),h.Vb(r.d))},e.\u0275cmp=h.Pb({type:e,selectors:[["checkin-results"]],decls:2,vars:3,consts:[["class","bg-white rounded shadow overflow-hidden relative flex flex-col items-center my-4 p-4 mx-auto",4,"ngIf"],[1,"bg-white","rounded","shadow","overflow-hidden","relative","flex","flex-col","items-center","my-4","p-4","mx-auto"],[1,"text-xl"],[1,"text-center","my-4"],[4,"ngIf"],["button","","mat-button","",3,"routerLink"]],template:function(e,t){1&e&&(h.Nc(0,G,22,35,"div",0),h.qc(1,"async")),2&e&&h.vc("ngIf",h.rc(1,1,t.event))},directives:[n.n,p.a,r.f],pipes:[n.b,u.c,n.e],styles:["[_nghost-%COMP%] {\n                position: absolute;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                background-color: rgba(0, 0, 0, 0.5);\n            }\n\n            [_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n                width: 32rem;\n                max-width: calc(100vw - 2rem);\n            }\n\n            [button][_ngcontent-%COMP%] {\n                min-width: 8rem;\n            }"]}),e})();function T(e,t){if(1&e&&(h.bc(0,"p",5),h.Pc(1),h.qc(2,"async"),h.ac()),2&e){const e=h.pc();h.Jb(1),h.Rc(" ",h.rc(2,1,e.error)," ")}}const F=function(){return["/welcome"]};let H=(()=>{class e{constructor(e){this._checkin=e,this.error=this._checkin.error}}return e.\u0275fac=function(t){return new(t||e)(h.Vb(b.a))},e.\u0275cmp=h.Pb({type:e,selectors:[["checkin-error"]],decls:12,vars:14,consts:[[1,"bg-white","rounded","shadow","overflow-hidden","relative","flex","flex-col","items-center","my-4","mx-auto","p-4"],[1,"text-xl","mb-4"],["class","mb-2",4,"ngIf"],[1,"mb-4"],["button","","mat-button","",3,"routerLink"],[1,"mb-2"]],template:function(e,t){1&e&&(h.bc(0,"div",0),h.bc(1,"h3",1),h.Pc(2),h.qc(3,"translate"),h.ac(),h.Nc(4,T,3,3,"p",2),h.qc(5,"async"),h.bc(6,"p",3),h.Pc(7),h.qc(8,"translate"),h.ac(),h.bc(9,"a",4),h.Pc(10),h.qc(11,"translate"),h.ac(),h.ac()),2&e&&(h.Jb(2),h.Rc(" ",h.rc(3,5,"Please see reception.")," "),h.Jb(2),h.vc("ngIf",h.rc(5,7,t.error)),h.Jb(3),h.Rc(" ",h.rc(8,9,"Our staff at reception will assist you.")," "),h.Jb(2),h.vc("routerLink",h.xc(13,F)),h.Jb(1),h.Qc(h.rc(11,11,"Back")))},directives:[n.n,p.a,r.f],pipes:[u.c,n.b],styles:["[_nghost-%COMP%] {\n                position: absolute;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                background-color: rgba(0, 0, 0, 0.5);\n            }\n\n            [_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n                width: 28rem;\n                max-width: calc(100vw - 2rem);\n            }"]}),e})();var Y=c("F1o0");const B=["checkin-covid",""],U=function(){return["/welcome"]};let Z=(()=>{class e{constructor(e,t){this._router=e,this._checkin=t}confirm(){if(!this.symptoms||!this.contact)return Object(x.j)("Please select yes or no for each question");this._checkin.updateGuest({covid:"true"===this.contact,symptoms:"true"===this.symptoms}),"false"===this.symptoms&&"false"===this.contact?this._router.navigate(["/checkin","results"]):(this._checkin.setError("Please get tested for COVID-19 and self-isolate at home for 14 days"),this._router.navigate(["/checkin","error"]))}}return e.\u0275fac=function(t){return new(t||e)(h.Vb(r.d),h.Vb(b.a))},e.\u0275cmp=h.Pb({type:e,selectors:[["","checkin-covid",""]],attrs:B,decls:77,vars:71,consts:[[1,"bg-white","rounded","p-4","relative","overflow-y-auto","overflow-x-hidden"],[1,"text-xl","font-medium","mb-4"],[1,"list-decimal","list-inside"],[1,"list-disc","list-inside","px-4","mb-4"],["aria-label","Has Symptoms",3,"ngModel","ngModelChange"],["value","true"],["value","false",1,"ml-4"],[1,"my-4"],["aria-label","COVID contact or self-isolated",3,"ngModel","ngModelChange"],["mat-button","",3,"click"],["mat-icon-button","",1,"absolute","top-0","right-0",3,"disabled","routerLink"],["className","material-icons"]],template:function(e,t){1&e&&(h.bc(0,"div",0),h.bc(1,"h3",1),h.Pc(2),h.qc(3,"translate"),h.ac(),h.bc(4,"ol",2),h.bc(5,"li"),h.Pc(6),h.qc(7,"translate"),h.Wb(8,"br"),h.Wb(9,"br"),h.bc(10,"ul",3),h.bc(11,"li"),h.Pc(12),h.qc(13,"translate"),h.ac(),h.bc(14,"li"),h.Pc(15),h.qc(16,"translate"),h.ac(),h.bc(17,"li"),h.Pc(18),h.qc(19,"translate"),h.ac(),h.bc(20,"li"),h.Pc(21),h.qc(22,"translate"),h.ac(),h.bc(23,"li"),h.Pc(24),h.qc(25,"translate"),h.ac(),h.bc(26,"li"),h.Pc(27),h.qc(28,"translate"),h.ac(),h.bc(29,"li"),h.Pc(30),h.qc(31,"translate"),h.ac(),h.bc(32,"li"),h.Pc(33),h.qc(34,"translate"),h.ac(),h.bc(35,"li"),h.Pc(36),h.qc(37,"translate"),h.ac(),h.bc(38,"li"),h.Pc(39),h.qc(40,"translate"),h.ac(),h.bc(41,"li"),h.Pc(42),h.qc(43,"translate"),h.ac(),h.bc(44,"li"),h.Pc(45),h.qc(46,"translate"),h.ac(),h.bc(47,"li"),h.Pc(48),h.qc(49,"translate"),h.ac(),h.ac(),h.bc(50,"mat-radio-group",4),h.lc("ngModelChange",(function(e){return t.symptoms=e})),h.bc(51,"mat-radio-button",5),h.Pc(52),h.qc(53,"translate"),h.ac(),h.bc(54,"mat-radio-button",6),h.Pc(55),h.qc(56,"translate"),h.ac(),h.ac(),h.ac(),h.Wb(57,"hr",7),h.bc(58,"li"),h.Pc(59),h.qc(60,"translate"),h.Wb(61,"br"),h.Wb(62,"br"),h.bc(63,"mat-radio-group",8),h.lc("ngModelChange",(function(e){return t.contact=e})),h.bc(64,"mat-radio-button",5),h.Pc(65),h.qc(66,"translate"),h.ac(),h.bc(67,"mat-radio-button",6),h.Pc(68),h.qc(69,"translate"),h.ac(),h.ac(),h.ac(),h.ac(),h.bc(70,"button",9),h.lc("click",(function(){return t.confirm()})),h.Pc(71),h.qc(72,"translate"),h.ac(),h.bc(73,"a",10),h.bc(74,"app-icon",11),h.Pc(75),h.qc(76,"translate"),h.ac(),h.ac(),h.ac()),2&e&&(h.Jb(2),h.Rc(" ",h.rc(3,26,"COVID Disclaimer")," "),h.Jb(4),h.Rc(" ",h.rc(7,28,"Do you have any of the following symptoms?"),""),h.Jb(6),h.Qc(h.rc(13,30,"Fever")),h.Jb(3),h.Qc(h.rc(16,32,"Cough")),h.Jb(3),h.Qc(h.rc(19,34,"Shortness of breath")),h.Jb(3),h.Qc(h.rc(22,36,"Chills")),h.Jb(3),h.Qc(h.rc(25,38,"Body aches")),h.Jb(3),h.Qc(h.rc(28,40,"Sore or scratchy throat")),h.Jb(3),h.Qc(h.rc(31,42,"Headache")),h.Jb(3),h.Qc(h.rc(34,44,"Runny nose")),h.Jb(3),h.Qc(h.rc(37,46,"Muscle pain")),h.Jb(3),h.Qc(h.rc(40,48,"Vomitting")),h.Jb(3),h.Qc(h.rc(43,50,"Nausea")),h.Jb(3),h.Qc(h.rc(46,52,"Diarrhoa")),h.Jb(3),h.Qc(h.rc(49,54,"Loss of taste or smell")),h.Jb(2),h.vc("ngModel",t.symptoms),h.Jb(2),h.Qc(h.rc(53,56,"Yes")),h.Jb(3),h.Qc(h.rc(56,58,"No")),h.Jb(4),h.Rc(" ",h.rc(60,60,"Have you been in contact with a COVID-19 case in the last 14 days or been asked to self-isolate by a health offical?"),""),h.Jb(4),h.vc("ngModel",t.contact),h.Jb(2),h.Qc(h.rc(66,62,"Yes")),h.Jb(3),h.Qc(h.rc(69,64,"No")),h.Jb(3),h.Rc(" ",h.rc(72,66,"Confirm")," "),h.Jb(2),h.vc("disabled",!t.symptoms&&!t.contact)("routerLink",h.xc(70,U)),h.Jb(2),h.Qc(h.rc(76,68,"Close")))},directives:[Y.b,a.l,a.o,Y.a,p.b,p.a,r.f,f.a],pipes:[u.c],styles:["[_nghost-%COMP%] {\n                position: absolute;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                background-color: rgba(0, 0, 0, 0.5);\n            }\n\n            [_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n                width: 32rem;\n                max-width: calc(100vw - 2rem);\n                max-height: calc(100% - 2rem);\n            }\n\n            .absolute[_ngcontent-%COMP%] {\n                position: absolute;\n            }\n\n            button[_ngcontent-%COMP%] {\n                margin: 1rem 11rem 0;\n                width: 8rem;\n            }"]}),e})();var z=c("/dba");const K=["app-checkin",""];let X=(()=>{class e{constructor(e,t){this._settings=e,this.translateService=t,this.translateService.setDefaultLang("en"),this.translateService.use(localStorage.getItem("lang")||"en")}get background(){return this._settings.get("app.home.background")}}return e.\u0275fac=function(t){return new(t||e)(h.Vb(x.e),h.Vb(u.d))},e.\u0275cmp=h.Pb({type:e,selectors:[["","app-checkin",""]],attrs:K,decls:3,vars:2,consts:[[1,"w-full"],[1,"flex-1","w-full","bg-center","bg-cover","relative"]],template:function(e,t){1&e&&(h.Wb(0,"a-topbar-header",0),h.bc(1,"div",1),h.Wb(2,"router-outlet"),h.ac()),2&e&&(h.Jb(1),h.Kc("background-image","url("+t.background+")"))},directives:[z.a,r.h],styles:["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n                width: 100%;\n            }"]}),e})();var $=c("i8O3");function ee(e){return new $.a(e)}const te=[{path:"",component:X,children:[{path:"scan",component:E},{path:"details",component:w},{path:"group",component:_},{path:"preferences",component:R},{path:"photo",component:I},{path:"results",component:A},{path:"error",component:H},{path:"covid",component:Z},{path:"**",redirectTo:"scan"}]},{path:"**",redirectTo:""}];let ce=(()=>{class e{}return e.\u0275mod=h.Tb({type:e}),e.\u0275inj=h.Sb({factory:function(t){return new(t||e)},imports:[[n.c,a.h,a.q,i.a,o.b,r.g.forChild(te),u.b.forRoot({loader:{provide:u.a,useFactory:ee,deps:[o.a]}})]]}),e})()}}]);
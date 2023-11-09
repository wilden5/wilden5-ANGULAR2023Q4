"use strict";(self.webpackChunkyoutube_client_app=self.webpackChunkyoutube_client_app||[]).push([[886],{1886:(y,m,e)=>{e.r(m),e.d(m,{AuthModule:()=>P});var d=e(6814),s=e(6223),h=e(6208),g=e(2058),l=e(9788);function c(r){const{value:a}=r;return a.length<8?{hasLength:!0}:/^(?=.*[a-z]).+$/.test(a)?/^(?=.*[A-Z]).+$/.test(a)?/^(?=.*[a-zA-Z]).+$/.test(a)?/^(?=.*\d).+$/.test(a)?/^(?=.*[^A-Za-z0-9]).+$/.test(a)?null:{hasSpecialCharacter:!0}:{hasDigit:!0}:{hasAnyLetter:!0}:{hasUpperCaseLetter:!0}:{hasLowerCaseLetter:!0}}var t=e(5879),f=e(2764),E=e(8447),S=e(617),A=e(2296),u=e(9157),L=e(2032),p=e(3569);function w(r,a){if(1&r&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&r){const n=t.oxw();t.xp6(1),t.hij(" ",n.getErrorMessageForEmail()," ")}}function C(r,a){if(1&r&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&r){const n=t.oxw();t.xp6(1),t.Oqu(n.getErrorMessageForPassword())}}function v(r,a){if(1&r&&(t.TgZ(0,"mat-error",9)(1,"span"),t._uU(2,"Your password isn't strong enough:"),t.qZA(),t._UZ(3,"br"),t.TgZ(4,"span"),t._uU(5),t.qZA()()),2&r){const n=t.oxw();t.xp6(5),t.Oqu(n.getErrorMessageForPassword())}}const Z=[{path:"",component:(()=>{class r{constructor(n,i,o){this.loginService=n,this.loggerService=i,this.fb=o,this.hidePassword=!0,this.loginForm=this.fb.group({email:["",[s.kI.required,s.kI.email]],password:["",[s.kI.required,c]]})}get email(){return this.loginForm.get("email")}get password(){return this.loginForm.get("password")}getErrorMessageForEmail(){return this.email?.hasError("required")?l.W.EMPTY_EMAIL_FIELD_MESSAGE:this.email?.hasError("email")?l.W.INVALID_EMAIL_FIELD_MESSAGE:""}getErrorMessageForPassword(){return this.password?.hasError("required")?l.W.EMPTY_PASSWORD_FIELD_MESSAGE:this.password?.hasError("hasLength")?l.W.PASSWORD_LENGTH_MESSAGE:this.password?.hasError("hasLowerCaseLetter")||this.password?.hasError("hasUpperCaseLetter")?l.W.PASSWORD_UPPER_LOWER_CASE_MESSAGE:this.password?.hasError("hasDigit")||this.password?.hasError("hasAnyLetter")?l.W.PASSWORD_DIGITS_LETTERS_MESSAGE:this.password?.hasError("hasSpecialCharacter")?l.W.PASSWORD_SPECIAL_SYMBOLS_MESSAGE:""}onLoginButtonClick(){this.loggerService.logMessage(l.W.CLICK_ON_LOGIN_BUTTON),this.loginService.login(this.loginForm.value)}static#t=this.\u0275fac=function(i){return new(i||r)(t.Y36(f.r),t.Y36(E.m),t.Y36(s.qu))};static#r=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-login"]],decls:20,vars:9,consts:[[1,"login-container"],[1,"login-header"],[1,"login-form",3,"formGroup","ngSubmit"],[4,"ngIf"],["id","email","formControlName","email","matInput","","placeholder","pat@example.com","autocomplete","user-email"],["class","specific-error-message",4,"ngIf"],["id","password","formControlName","password","matInput","","autocomplete","current-password",3,"type"],["type","button","mat-icon-button","","matSuffix","",3,"click"],["customClass","login-button button",1,"login-button",3,"disabled"],[1,"specific-error-message"]],template:function(i,o){1&i&&(t.TgZ(0,"div",0)(1,"h2",1),t._uU(2,"Login"),t.qZA(),t.TgZ(3,"form",2),t.NdJ("ngSubmit",function(){return o.onLoginButtonClick()}),t.TgZ(4,"mat-form-field")(5,"mat-label"),t._uU(6,"Email"),t.qZA(),t.YNc(7,w,2,1,"mat-error",3),t._UZ(8,"input",4),t.qZA(),t.TgZ(9,"mat-form-field")(10,"mat-label"),t._uU(11,"Password"),t.qZA(),t.YNc(12,C,2,1,"mat-error",3),t.YNc(13,v,6,1,"mat-error",5),t._UZ(14,"input",6),t.TgZ(15,"button",7),t.NdJ("click",function(){return o.hidePassword=!o.hidePassword}),t.TgZ(16,"mat-icon"),t._uU(17),t.qZA()()(),t.TgZ(18,"app-custom-button",8),t._uU(19,"Login"),t.qZA()()()),2&i&&(t.xp6(3),t.Q6J("formGroup",o.loginForm),t.xp6(4),t.Q6J("ngIf",(null==o.email?null:o.email.invalid)&&(null==o.email?null:o.email.dirty)||(null==o.email?null:o.email.touched)),t.xp6(5),t.Q6J("ngIf",(null==o.password?null:o.password.invalid)&&!(null!=o.password&&o.password.dirty)),t.xp6(1),t.Q6J("ngIf",(null==o.password?null:o.password.invalid)&&(null==o.password?null:o.password.dirty)),t.xp6(1),t.Q6J("type",o.hidePassword?"password":"text"),t.xp6(1),t.uIk("aria-label","Hide password")("aria-pressed",o.hidePassword),t.xp6(2),t.Oqu(o.hidePassword?"visibility_off":"visibility"),t.xp6(1),t.Q6J("disabled",o.loginForm.invalid))},dependencies:[d.O5,S.Hw,A.RK,u.KE,u.hX,u.TO,u.R9,L.Nt,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,p.x],styles:["[_nghost-%COMP%]{display:flex;justify-content:center;position:fixed;z-index:1;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:#00000080}.login-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;width:35rem;height:35rem;margin-top:10rem;background-color:#f2f2f2;border-radius:.5rem}.login-form[_ngcontent-%COMP%]{display:flex;flex-direction:column}.login-header[_ngcontent-%COMP%]{padding-top:2rem}.login-button[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:5rem}"]})}return r})()}];let M=(()=>{class r{static#t=this.\u0275fac=function(i){return new(i||r)};static#r=this.\u0275mod=t.oAB({type:r});static#o=this.\u0275inj=t.cJS({imports:[g.Bz.forChild(Z),g.Bz]})}return r})(),P=(()=>{class r{static#t=this.\u0275fac=function(i){return new(i||r)};static#r=this.\u0275mod=t.oAB({type:r});static#o=this.\u0275inj=t.cJS({imports:[d.ez,h.m,M,s.UX,p.x,s.u5]})}return r})()}}]);
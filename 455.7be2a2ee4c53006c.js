"use strict";(self.webpackChunkyoutube_client_app=self.webpackChunkyoutube_client_app||[]).push([[455],{1455:(D,p,o)=>{o.r(p),o.d(p,{YoutubeModule:()=>O});var a=o(6814),y=o(6208),m=o(2058),c=o(9788),t=o(5879),f=o(3453),g=o(7025);let b=(()=>{class s{constructor(e){this.snackBar=e}setSnackBar(e){this.snackBar.open(e,"",{duration:1e3,horizontalPosition:"right",verticalPosition:"top"})}static#t=this.\u0275fac=function(r){return new(r||s)(t.LFG(g.ux))};static#e=this.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var v=o(1042),_=o(346),h=o(1274),l=o(3569),C=o(617),d=o(5195),S=o(6307);function B(s,u){if(1&s){const e=t.EpF();t.TgZ(0,"div")(1,"mat-card",1),t._UZ(2,"img",2),t.TgZ(3,"div",3)(4,"span",4)(5,"mat-icon",5),t._uU(6,"remove_red_eye"),t.qZA(),t._uU(7),t.qZA(),t.TgZ(8,"span",4)(9,"mat-icon",5),t._uU(10,"thumb_up"),t.qZA(),t._uU(11),t.qZA(),t.TgZ(12,"span",4)(13,"mat-icon",5),t._uU(14,"thumb_down"),t.qZA(),t._uU(15),t.qZA(),t.TgZ(16,"span",4)(17,"mat-icon",5),t._uU(18,"comment"),t.qZA(),t._uU(19),t.qZA()(),t.TgZ(20,"mat-card-title",6),t._uU(21),t.qZA(),t.TgZ(22,"app-custom-button",7),t.NdJ("buttonClickRequested",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.onMoreButtonClick(i.searchItem.id.videoId))}),t._uU(23,"more..."),t.qZA(),t._UZ(24,"div",8),t.qZA()()}if(2&s){const e=t.oxw();t.xp6(2),t.s9C("src",e.searchItem.snippet.thumbnails.medium.url,t.LSH),t.xp6(5),t.hij(" ",e.searchItem.statistics.viewCount," "),t.xp6(4),t.hij(" ",e.searchItem.statistics.likeCount," "),t.xp6(4),t.hij(" ",e.searchItem.statistics.dislikeCount," "),t.xp6(4),t.hij(" ",e.searchItem.statistics.commentCount," "),t.xp6(2),t.Oqu(e.searchItem.snippet.title),t.xp6(3),t.Q6J("appColoredBorder",e.searchItem.snippet.publishedAt)}}let w=(()=>{class s{constructor(e){this.router=e}onMoreButtonClick(e){this.router.navigate(["/item",e])}static#t=this.\u0275fac=function(r){return new(r||s)(t.Y36(m.F0))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-search-item"]],inputs:{searchItem:"searchItem"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"video-item-container"],["alt","video-thumbnail","height","123","width","223",1,"item-image",3,"src"],[1,"item-icons-container"],[1,"item-stat"],[1,"item-icon"],[1,"item-title"],["customClass","more-button button",1,"more-custom-button",3,"buttonClickRequested"],[1,"item-border",3,"appColoredBorder"]],template:function(r,i){1&r&&t.YNc(0,B,25,7,"div",0),2&r&&t.Q6J("ngIf",i.searchItem)},dependencies:[a.O5,l.x,C.Hw,d.a8,d.n5,S.Y],styles:[".video-item-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:26.3rem;height:32.7rem;background-color:#e5e5e5;border-radius:.5rem;margin-right:2.8rem;margin-bottom:2.8rem}.item-icons-container[_ngcontent-%COMP%]{display:flex;margin:2.1rem;font-size:1.3rem}.item-icon[_ngcontent-%COMP%]{font-size:2rem}.item-stat[_ngcontent-%COMP%]{font-size:1.2rem;display:flex;margin-right:.5rem}.item-title[_ngcontent-%COMP%]{margin:.5rem;text-align:center;font-size:1.5rem;font-style:normal;font-weight:700;line-height:normal;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical}.item-image[_ngcontent-%COMP%]{margin-top:2rem}.more-custom-button[_ngcontent-%COMP%]{margin-top:auto;margin-bottom:1rem}.item-border[_ngcontent-%COMP%]{width:100%;height:.5rem;border-bottom-left-radius:.5rem;border-bottom-right-radius:.5rem}"]})}return s})(),A=(()=>{class s{constructor(){this.sortByViewsRequested=new t.vpe,this.sortByDateRequested=new t.vpe,this.sortByKeyWordRequested=new t.vpe}onSortByViewsButtonClick(){this.sortByViewsRequested.emit()}onSortByDateButtonClick(){this.sortByDateRequested.emit()}onSortByKeywordInputChange(e){this.sortByKeyWordRequested.emit(e.target.value)}static#t=this.\u0275fac=function(r){return new(r||s)};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-filter"]],outputs:{sortByViewsRequested:"sortByViewsRequested",sortByDateRequested:"sortByDateRequested",sortByKeyWordRequested:"sortByKeyWordRequested"},decls:10,vars:0,consts:[[1,"sort-container"],[1,"sort-label"],[3,"buttonClickRequested"],[1,"by-word-or-sentence"],["type","text",1,"filter-input",3,"keyup"]],template:function(r,i){1&r&&(t.TgZ(0,"div",0)(1,"span",1),t._uU(2,"Sorting by:"),t.qZA(),t.TgZ(3,"app-custom-button",2),t.NdJ("buttonClickRequested",function(){return i.onSortByDateButtonClick()}),t._uU(4,"date"),t.qZA(),t.TgZ(5,"app-custom-button",2),t.NdJ("buttonClickRequested",function(){return i.onSortByViewsButtonClick()}),t._uU(6,"count of views"),t.qZA(),t.TgZ(7,"span",3),t._uU(8,"by word or sentence"),t.qZA(),t.TgZ(9,"input",4),t.NdJ("keyup",function(k){return i.onSortByKeywordInputChange(k)}),t.qZA()())},dependencies:[l.x],styles:[".sort-container[_ngcontent-%COMP%]{padding-right:25rem}.sort-label[_ngcontent-%COMP%]{color:#929292;font-size:1.2rem;font-style:normal;font-weight:400;line-height:normal}.by-word-or-sentence[_ngcontent-%COMP%]{font-size:1.4rem;margin-right:1rem;color:#3f51b5}"]})}return s})();var R=o(5043);function T(s,u){if(1&s){const e=t.EpF();t.TgZ(0,"mat-toolbar")(1,"mat-toolbar-row")(2,"app-filter",1),t.NdJ("sortByViewsRequested",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.sortByViewsCount())})("sortByDateRequested",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.sortByDate())})("sortByKeyWordRequested",function(i){t.CHM(e);const n=t.oxw();return t.KtG(n.searchTerm=i)}),t.qZA()()()}}function I(s,u){if(1&s&&(t.TgZ(0,"div"),t._UZ(1,"app-search-item",4),t.qZA()),2&s){const e=u.$implicit;t.xp6(1),t.Q6J("searchItem",e)}}function Z(s,u){if(1&s&&(t.TgZ(0,"div")(1,"div",2),t.YNc(2,I,2,1,"div",3),t.ALo(3,"sortByKeyword"),t.qZA()()),2&s){const e=t.oxw();t.xp6(2),t.Q6J("ngForOf",t.xi3(3,1,e.filteredItemsArray,e.searchTerm))}}const x=[{path:"",component:(()=>{class s{constructor(e,r,i,n){this.youtubeItemService=e,this.snackBarService=r,this.filtersVisibilityService=i,this.searchService=n,this.itemsArray=[],this.filteredItemsArray=[],this.isSortAscViews=!0,this.isSortAscDate=!0,this.searchTerm=""}ngOnInit(){this.searchQuerySubscription=this.searchService.getSearchQueryObservable().subscribe(e=>{this.youtubeItemService.getYoutubeItemsBySearchQuery(e).subscribe(r=>{this.itemsArray=r,this.filteredItemsArray=r})})}ngOnDestroy(){this.searchQuerySubscription&&this.searchQuerySubscription.unsubscribe()}sortByViewsCount(){const e=this.filteredItemsArray.slice();this.isSortAscViews?(e.sort((r,i)=>Number(r.statistics.viewCount)-Number(i.statistics.viewCount)),this.snackBarService.setSnackBar(c.W.SORT_BY_VIEWS_ASC)):(e.sort((r,i)=>Number(i.statistics.viewCount)-Number(r.statistics.viewCount)),this.snackBarService.setSnackBar(c.W.SORT_BY_VIEWS_DESC)),this.isSortAscViews=!this.isSortAscViews,this.filteredItemsArray=e}sortByDate(){const e=this.filteredItemsArray.slice();this.isSortAscDate?(e.sort((r,i)=>new Date(r.snippet.publishedAt).getTime()-new Date(i.snippet.publishedAt).getTime()),this.snackBarService.setSnackBar(c.W.SORT_BY_DATE_ASC)):(e.sort((r,i)=>new Date(i.snippet.publishedAt).getTime()-new Date(r.snippet.publishedAt).getTime()),this.snackBarService.setSnackBar(c.W.SORT_BY_DATE_DESC)),this.isSortAscDate=!this.isSortAscDate,this.filteredItemsArray=e}static#t=this.\u0275fac=function(r){return new(r||s)(t.Y36(f.R),t.Y36(b),t.Y36(v.d),t.Y36(_.o))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-search-results"]],decls:3,vars:4,consts:[[4,"ngIf"],[3,"sortByViewsRequested","sortByDateRequested","sortByKeyWordRequested"],[1,"search-results-container"],[4,"ngFor","ngForOf"],[3,"searchItem"]],template:function(r,i){1&r&&(t.YNc(0,T,3,0,"mat-toolbar",0),t.YNc(1,Z,4,4,"div",0),t.ALo(2,"async")),2&r&&(t.Q6J("ngIf",i.filtersVisibilityService.isFiltersVisible),t.xp6(1),t.Q6J("ngIf",t.lcZ(2,2,i.searchService.getSearchQueryObservable())))},dependencies:[a.sg,a.O5,h.Ye,h.rD,w,A,a.Ov,R.p],styles:[".search-results-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;margin-top:3.1rem;min-width:90rem}.mat-toolbar[_ngcontent-%COMP%]{min-width:120rem}.mat-toolbar-row[_ngcontent-%COMP%]{justify-content:center}"]})}return s})()}];let q=(()=>{class s{static#t=this.\u0275fac=function(r){return new(r||s)};static#e=this.\u0275mod=t.oAB({type:s});static#s=this.\u0275inj=t.cJS({imports:[m.Bz.forChild(x),m.Bz]})}return s})(),O=(()=>{class s{static#t=this.\u0275fac=function(r){return new(r||s)};static#e=this.\u0275mod=t.oAB({type:s});static#s=this.\u0275inj=t.cJS({imports:[a.ez,l.x,q,y.m]})}return s})()}}]);
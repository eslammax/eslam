/*<![CDATA[*/

standingApi.includes("notExist")||fetch(standingApi).then(a=>a.json()).then(a=>{getitemsTopage(a)}),standingApi2.includes("notExist")||fetch(standingApi2).then(a=>a.json()).then(a=>{getitemsTopage2(a)});function getitemsTopage2(a){for(var c="",d=0;d<a.standing.length;d++){var e="Group "+["A","B","C","D","E","F"][d];c+=`<table class="standings"><tbody> <tr class="headT"> <td colspan="2"><span>`+e+`</span></td> <td><span>لعب</span><span class='none'>ل</span></td> <td><span>فاز</span><span class='none'>ف</span></td> <td><span>تعادل</span><span class='none'>ت</span></td> <td><span>خسر</span><span class='none'>خ</span></td> <td class="ahdaf" colspan="3"><div>اهداف</div> <span>له</span><span class='none'>ل</span> <span>عليه</span><span class='none'>ع</span><span>الفرق</span><span class='none'>ف</span></td> <td><span>نقاط</span></td> </tr>`;for(var f,g=0;4>g;g++)f=a.standing[d][g],c+=`<tr class="bodyT bodyTa"><td>`+f.position+`</td> <td> <span>`+f.team.name_ar+`</span> </td> <td><span>`+f.overall_gp+`</span></td> <td><span>`+f.overall_w+`</span></td> <td><span>`+f.overall_d+`</span></td> <td><span>`+f.overall_l+`</span></td> <td><span>`+f.overall_gs+`</span></td> <td><span>`+f.overall_ga+`</span></td> <td><span>`+f.total_gd+` </span></td> <td><span>`+f.total_p+`</span></td> </tr>`;c+=`</tbody></table>`}document.querySelector(".gettarteb").innerHTML=c,gethdafen(a)}function getitemsTopage(a){for(var c,d=`<table class="standings"><tbody> <tr class="headT"> <td colspan="2"><span>الترتيب</span><span class='none'>ت</span></td> <td><span>لعب</span><span class='none'>ل</span></td> <td><span>فاز</span><span class='none'>ف</span></td> <td><span>تعادل</span><span class='none'>ت</span></td> <td><span>خسر</span><span class='none'>خ</span></td> <td class="ahdaf" colspan="3"><div>اهداف</div> <span>له</span><span class='none'>ل</span><span>عليه</span><span class='none'>ع</span><span>الفرق</span><span class='none'>ف</span></td> <td><span>نقاط</span><span class='none'>نقاط</span></td> </tr>`,e=0;e<a.standing.length;e++)c=a.standing[e],d+=`<tr class="bodyT bodyTa"><td>`+c.position+`</td> <td> <span>`+c.team.name_ar+`</span> </td> <td><span>`+c.overall_gp+`</span></td> <td><span>`+c.overall_w+`</span></td> <td><span>`+c.overall_d+`</span></td> <td><span>`+c.overall_l+`</span></td> <td><span>`+c.overall_gs+`</span></td> <td><span>`+c.overall_ga+`</span></td> <td><span>`+c.total_gd+` </span></td> <td><span>`+c.total_p+`</span></td> </tr>`;d+=`</tbody></table>`,document.querySelector(".gettarteb").innerHTML=d,gethdafen(a)}function gethdafen(a){for(var c=`<table class="standings"><tbody> <tr class="headT headT2"> <td><span>الترتيب</span></td> <td><span>اسم اللاعب</span></td> <td><span>الاهداف</span></td> <td><span>الفريق</span></td></tr>`,d=0;d<a.topscore.length;d++){console.log(a.topscore);var e=a.topscore[d];c+=`<tr class="bodyT bodyTa2"><td>`+e.pos+`</td><td>`+e.player.name_ar+`</td><td>`+e.goals+`</td><td>`+e.team.name_ar+`</td></tr>`}c+=`</tbody></table>`,document.querySelector(".gethdafen").innerHTML=c,document.querySelector(".apititlelog").innerHTML=`<img  width='60' height='60'  src='`+a.league.image_path.replace("http","https")+`' alt='`+a.league.name_ar+`'/><span>`+a.league.name_ar+`</span>`}document.querySelector(".hdafen").addEventListener("click",function(){document.querySelector(".dawry").classList.remove("active"),document.querySelector(".hdafen").classList.add("active"),document.querySelector(".gettarteb").style.display="none",document.querySelector(".gethdafen").style.display="block"}),document.querySelector(".dawry").addEventListener("click",function(){document.querySelector(".hdafen").classList.remove("active"),document.querySelector(".dawry").classList.add("active"),document.querySelector(".gethdafen").style.display="none",document.querySelector(".gettarteb").style.display="block"});

/*]]>*/

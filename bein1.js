  <!-- ============================ Main Content Start ================================= -->
 
                <center>
                                  </center>
              </div>

              <div class="col-md-12">
                <center>
                              <ul class="filter-days">
                      <li class="active" data-show="panel-2" onclick="set_tab('2')">
              <a onclick="set_tab('2')" >متوسطة  </a>
            </li>
                            <li class="" data-show="panel-3" onclick="set_tab('3')" >
                  <a onclick="set_tab('3')" >ضعيف | Zenex</a>
                </li>
                            <li class="" data-show="panel-4" onclick="set_tab('4')" >
                  <a onclick="set_tab('4')" >ضعيفة | Bay247</a>
                </li>
                            <li class="" data-show="panel-5" onclick="set_tab('5')" >
                  <a onclick="set_tab('5')" >متوسطة | EzCast</a>
                </li>
                            <li class="" data-show="panel-6" onclick="set_tab('6')" >
                  <a onclick="set_tab('6')" >جودة عالية | LiveFlash</a>
                </li>
                        </ul>
              <div class="col-md-12" id="ch_tab_com"><iframe width="100%" height="400" frameborder="0" allowfullscreen="" src="http://showsport-tv.com/embedplayer.php?ch=bein1" scrolling="no"></iframe></div>
                          </center>
              </div>

                  <div class="live-code col-md-12" style="margin-top: 10px;">
        <center>
          <h3 class="title-live" style="width:97%;" >كود القناة</h3>
          <textarea dir="ltr" onclick="this.select();" style="width:97%;" readonly="readonly" rows="1"><iframe width="100%" height="100%" frameborder="0" allowfullscreen="" src="http://super-kora.tv/iframe/channels/1" scrolling="no"></iframe>

</textarea>
        </center>
    </div>
    

              
            </div>
          </div>
          <!--Blog Post End -->



        </div>



      </div>
    </div>

    
<div class="ads col-md-12">
  <center>
      </center>
</div>

<div class="ads col-md-12" style="display:none;">
  <center>
      </center>
</div>



  </div>


</div>
<!-- Main Wrapper End here -->



<script>
$(".tbl-item").mouseover(function() {
  $(this).find('.shahed-div').show();
});
$(".tbl-item").mouseleave(function() {
  $(this).find('.shahed-div').hide();
});
</script>

      <script>
    function set_tab(pr1)
    {
      var val= ["1"];
          val[2]= '<iframe width="100%" height="400" frameborder="0" allowfullscreen="" src="http://cast.coolkora.com/bein-sports-hd-channels/bein-hd1" scrolling="no"></iframe>';
    
      val[3]= '<iframe width="100%" height="610" frameborder="0" allowfullscreen="" src="http://channel.kooralive.info/beINSportHD1.htm" scrolling="no"></iframe>';
    
      val[4]= '<iframe width="100%" height="610" frameborder="0" allowfullscreen="" src="http://kora-live.tv/live/beinsports1.html" scrolling="no"></iframe>';
    
      val[5]= '<iframe width="100%" height="610" frameborder="0" allowfullscreen="" src="http://www.yalla-shoot.com/ch/bein1/brocast-med.php?width=700&amp;height=400" scrolling="no"></iframe>';
    
      val[6]= '<iframe width="100%" height="610" frameborder="0" allowfullscreen="" src="" scrolling="no"></iframe>';
    
      val[8]= '<iframe width="560" height="315" src="" frameborder="0" allowfullscreen></iframe>';
    
      val[9]= '<video controls="" height="300" poster="http://3.bp.blogspot.com/-r8iwHAJc4uY/Vqy_PLk_3rI/AAAAAAAADUo/3KlfMha90KM/s1600/555555555555555%2B%25281%2529.png" src="http://107.174.61.143:8081/live/stream1/chunks.m3u8" width="100%" __idm_id__="846942209"></video><br />';
    
      val[10]= '<video controls="" height="300" poster="http://3.bp.blogspot.com/-r8iwHAJc4uY/Vqy_PLk_3rI/AAAAAAAADUo/3KlfMha90KM/s1600/555555555555555%2B%25281%2529.png" src="http://107.174.61.143:8081/live/stream1/chunks.m3u8" width="100%" __idm_id__="846942209"></video><br />';
    

    document.getElementById("ch_tab_com").innerHTML = "";
    document.getElementById("ch_tab_com").innerHTML = val[pr1];
    }
    </script>
    
  <script>
    var timer ; var timer_show;
    function count(what="")
    {
      var max= document.getElementById("counter").innerHTML*1+1-1 ;
      timer = setInterval( function()
      {
        if(max >0)
        {
          max=max-1;
          document.getElementById("counter").innerHTML=max;
        }
        else if(max == 0)
        {
          document.getElementById("two").innerHTML='';
          count_show();
          clearInterval(timer);
        }
      } , 1000 )
    }
    function count_show()
    {
          clearInterval(timer);
          var max_show= "0" *1+1-1;
          timer_show = setInterval( function()
          {
              max_show=max_show-1;
              if(max_show == 0)
              {
                alert("done");
                document.getElementById("two").innerHTML= "<center><h3 id='counter'>0<\/h3><\/center>" ;
                count();
                clearInterval(timer_show);
              }
          } , 1000 )
    }
  </script>

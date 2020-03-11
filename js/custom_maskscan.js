$(document).ready(function(){        
        
        //우클릭 방지
        /*
        $(document).on("contextmenu",function(e){
            console.log("c"+e);
            return false;
        });
        //드래그 방지
        $(document).on("dragstart",function(e){
            console.log("d"+e);
            return false;
        });
        
        //선택 방지 
        $(document).on("selectstart",function(e){
            console.log("s"+e);
            return false;
        });        
        */        

        //다음과 같이 이벤트를 한번에 등록가능
        $(document).on("contextmenu dragstart selectstart",function(e){
            return false;
        });
        //참고. IE에서는 텍스트컨트롤박스의 내용을 드래그해서 선택할수없었음
        //      또한 파이어폭스에서는 selectstart 시 이벤트가 발생되지 않았음.


        //disableSelection($("body")[0])
    });
    
    //선택 방지. (파이어폭스도 적용됨)
    function disableSelection(target)
    {
        //For IE This code will work
        if (typeof target.onselectstart!="undefined") 
        target.onselectstart=function(){return false}
        
        //For Firefox This code will work
        else if (typeof target.style.MozUserSelect!="undefined") 
        target.style.MozUserSelect="none"
        
        //All other  (ie: Opera) This code will work
        else 
        target.onmousedown=function(){return false}
        target.style.cursor = "default";
    }
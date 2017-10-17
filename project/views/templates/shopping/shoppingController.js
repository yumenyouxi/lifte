app.controller('shoppingController',['$scope','API', 'loadTips','$location',function($scope,API, loadTips,$location){
    $scope.isSky=false;
    loadTips.showLoadTips();
    API.fetchGet('/shopping?act=select', null)
        .then(function (data) {
            loadTips.hideLoadTips();
            $scope.shoppingdata = data.data;
            for(var i=0;i< $scope.shoppingdata.length;i++){
                $scope.shoppingdata[i].isExplanatory=true;
                $scope.shoppingdata[i].isComile=false;
                $scope.shoppingdata[i].isFinish=false;
                $scope.shoppingdata[i].isChange=false;
                $scope.shoppingdata[i].text='编辑';
            }
            if($scope.shoppingdata.length===0){
                $scope.isSky=true;
            }else{
                $scope.isSky=false;
            }
            //总金额
            $scope.allMoney=function(){
                $scope.allnum={
                    allmoney:'',
                    allm:''
                };
                var allmoney=0;
                var allm=0;
                for(var n=0;n<$scope.shoppingdata.length;n++){
                    if($scope.shoppingdata[n].isChange===true){
                        allmoney+=$scope.shoppingdata[n].money*$scope.shoppingdata[n].num;
                        allm++
                    }
                }
                if(allm==0){
                    money=0
                }
                $scope.allnum.allmoney=allmoney
                $scope.allnum.allm=allm;
                return  $scope.allnum;
            }
        })
        .catch(function (err) {
            console.log('出错啦');
        })


    //单选
    
    $scope.mycheck=function(index){  
        if($scope.shoppingdata[index].isChange===true){
            $scope.shoppingdata[index].isChange=false;
        }else{
            $scope.shoppingdata[index].isChange=true;
        }
        var all=0;
        for(var i=0;i<$scope.shoppingdata.length;i++){
            if($scope.shoppingdata[i].isChange===true){
                all++;
            }
            if(all==$scope.shoppingdata.length){
                $scope.isAll=true;
            }else{
                $scope.isAll=false;
            }
        }       
    }
    //全选
	$scope.isAll=false;
    $scope.allCheck=function(){
        if($scope.isAll===false){
            for(var k=0;k<$scope.shoppingdata.length;k++){
                $scope.shoppingdata[k].isChange=true;
                $scope.isAll=true;   
            }
        }else{
            for(var j=0;j<$scope.shoppingdata.length;j++){
                 $scope.shoppingdata[j].isChange=false; 
                 $scope.isAll=false;  
            }      
        }
    }
    //单编辑
    $scope.comile=function(index){
        if($scope.shoppingdata[index].isExplanatory===true){
            $scope.shoppingdata[index].isComile=true;
            $scope.shoppingdata[index].isFinish=true;
            $scope.shoppingdata[index].text='完成';
            $scope.shoppingdata[index].isExplanatory=false;

        }else{
            $scope.shoppingdata[index].isComile=false;
            $scope.shoppingdata[index].isFinish=false;
            $scope.shoppingdata[index].text='编辑';
            $scope.shoppingdata[index].isExplanatory=true;
        }
    }
    //完成
    $scope.finish=function(index){
        $scope.shoppingdata[index].isComile=false;
        $scope.shoppingdata[index].isFinish=false;
        $scope.shoppingdata[index].isExplanatory=true;
        $scope.shoppingdata[index].text='编辑';
    }
    //总的编辑
    $scope.isAmeds=false;
    $scope.isClo=true;
    $scope.isRem=false;
    $scope.scopeText='编辑';
    $scope.amends=function(){
        if($scope.isAmeds===false){
            for(var m=0;m<$scope.shoppingdata.length;m++){
                $scope.shoppingdata[m].isExplanatory=false;
                $scope.shoppingdata[m].text='编辑';
                $scope.shoppingdata[m].isFinish=false;
                $scope.shoppingdata[m].isComile=true;
            }
            $scope.isClo=false;
            $scope.isRem=true;
            $scope.scopeText='完成';
            $scope.isAmeds=true;
        }else{
            for(var m=0;m<$scope.shoppingdata.length;m++){
                $scope.shoppingdata[m].isExplanatory=true;
                $scope.shoppingdata[m].isComile=false;
                $scope.shoppingdata[m].isFinish=false;

            }
            $scope.isClo=true;
            $scope.isRem=false;
            $scope.scopeText='编辑';
            $scope.isAmeds=false;
        }
    }
    //减
    $scope.minus=function(index){
        if($scope.shoppingdata[index].num!=1){
            $scope.shoppingdata[index].num--
        }else{
            $scope.shoppingdata[index].num=1;
            loadTips.showMessage('亲！不能在少了',1000);
        }
       
    }
    //加
     $scope.pull=function(index){
        $scope.shoppingdata[index].num++ 
    }
    //删除购物车
     
    $scope.deleteshopping=function(){
        var kk=0;
        for(var i=0; i<$scope.shoppingdata.length;i++){
           
            if($scope.shoppingdata[i].isChange===true){
                kk++
                API.fetchGet('/shopping?act=delete&id='+$scope.shoppingdata[i].id, null)
                    .then(function (data) {
                        API.fetchGet('/shopping?act=select', null)
                        .then(function (data) {
                            $scope.shoppingdata = data.data;
                            for(var i=0;i< $scope.shoppingdata.length;i++){
                                $scope.shoppingdata[i].isExplanatory=true;
                                $scope.shoppingdata[i].isComile=false;
                                $scope.shoppingdata[i].isFinish=false;
                                $scope.shoppingdata[i].isChange=false;
                                $scope.shoppingdata[i].text='编辑';
                            }
                             if($scope.shoppingdata.length===0){
                                    $scope.isSky=true;
                                }else{
                                    $scope.isSky=false;
                                }
                        })
                        .catch(function (err) {
                            console.log('出错啦');
                        })
                    })
                    .catch(function (err) {
                        console.log('出错啦');
                    })
            }

        }
        if (kk===0) {
            loadTips.showMessage('亲,请选择再操作',1500);
        }else if(kk===$scope.shoppingdata.length){
            $scope.isClo=true;
            $scope.isRem=false;
            $scope.scopeText='编辑';
            $scope.isAmeds=false;
        } 
    }
    $scope.closeJump=function(){
        var aa=0;
        for(var i=0; i<$scope.shoppingdata.length;i++){
            if($scope.shoppingdata[i]===true){
              aa++  
            }
            
        }
        if(aa===0){
            loadTips.showMessage('亲,还没选择商品',1500);
            return;
        }
        $location.path('confirmOrder');
    }
}])
     
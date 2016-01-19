function onclick_1()
{
	var a=getchar();
	alert(a);
}
function onclick_2()
{
	var arr4=new Array();
	var arr5=new Array("a","x","b","d","m","a","k","m","p","j","a");
    var a=getchar();
	for(var i=0;i<arr5.length;i++){
	 	if(a==arr5[i]){
        	arr4.push(i);
	 	}
	}		 
    alert(arr4);
}
function getchar(){
	var arr=new Array("a","x","b","d","m","a","k","m","p","j","a");
	var arr1=arr.sort();
	var arr2=new Array();
	var arr3=new Array();
	var n=1;
	var maxnum=0;
	for(var i=0;i<arr1.length;i++){
	  	if(arr1[i]==arr1[i+1]){
	    	n++;
	  	}else{
	  		arr2.push(arr1[i]);
	  		arr3.push(n);
	  		n=1;
	  	}     
	}
	 	var max=arr3[0]
	    for(var i=0;i<arr3.length;i++){
	 		if (arr3[i] > max) { 
        		max = this[i]; 
        		maxnum=i
	 	}
	}
	return arr2[0];
}
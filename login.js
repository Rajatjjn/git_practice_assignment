for(i=1;i<=13;i++){
    count=0;
    let num =13;
    for(j=1;j<=num;j++){
        if(i%j==0){
            count++;
        }
    }
    }if(count==2){
        console.log("Yes");
        
    }else{
        console.log("No");
    }
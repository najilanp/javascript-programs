for(row=1;row<=4;row++){
    row_content=""
    for(col=1;col<=7;col++){
        if(row==4 || row+col==5 || col-row==3){
            row_content+="*"
        }
        else{
           row_content+=" "  
        }
    }
    console.log(row_content);
}
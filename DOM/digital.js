function getclock(){
    let time=new Date()
    let hrs = time.getHours()
    let mins=time.getMinutes()
    let secs=time.getSeconds()
    result.innerHTML=(hrs+":"+mins+":"+secs)
    setTimeout(()=>{
        getclock()
    },1000)
}
getclock()



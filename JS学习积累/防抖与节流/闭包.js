function foo(){
    debugger
    let local=1
    function bar(){
        local++;
        console.log(local)
        return local
    }
    return bar
}

var func=foo()
func()
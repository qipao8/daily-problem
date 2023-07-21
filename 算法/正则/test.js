
process.stdin.on('data', input => {
    let str = input.toString().trim()
    if (str == '') process.exit()
    const reg=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[.#?!@$%^&*-]).{8,16}$/.test(str)
    console.log(reg)
})
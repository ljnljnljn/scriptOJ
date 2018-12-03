const centerPad = (str, len, pad) => {
    return str.padStart(~~(len - str.length) / 2 + str.length, pad).padEnd(len, pad)
}
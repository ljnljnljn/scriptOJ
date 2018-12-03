const extname = (filename) => {
    /* TODO */
    return filename.lastIndexOf('.') > 0 ? filename.slice(filename.lastIndexOf('.')) : ''
}
  
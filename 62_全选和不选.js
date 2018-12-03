function initCheckBox () {
    /* TODO */
    var checkAll = document.querySelector('#check-all')
    var options = Array.from(document.querySelectorAll('.check-item'))
    checkAll.addEventListener('change', function() {
        options.forEach((x) => {
            x.checked = checkAll.checked
        })
    })
    options.forEach((op) => {
        op.addEventListener('change', function() {
            checkAll.checked = options.every((x) => x.checked)
        })
    })
}
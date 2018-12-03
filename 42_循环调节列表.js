// 点击 UP 按钮会使得该 li 元素在列表中上升一个位置，点击 DOWN 按钮会使得该 li 元素下降一个位置。
// 点击最后的元素的 DOWN 按钮会使得元素回到第一个位置，
// 点击第一个元素的 UP 按钮会使其回到最后的位置。
const initAdjustableList = function() {
    let ul = document.getElementById('adjustable-list')
    ul.addEventListener('click', upOrDown)
    function upOrDown(e) {
        let event = e || window.event
        let target = event.target
        target.classList.contains('up') ? up() : ''
        target.classList.contains('down') ? down() : ''
        function up() {
            let li = target.parentElement
            ul.insertBefore(li, li.previousElementSibling)
        }
        function down() {
            let li = target.parentElement
            let next = li.nextElementSibling
            li === ul.lastElementChild ? 
                ul.insertBefore(li, ul.firstElementChild) : ul.insertBefore(next, li)
        }
    }
}
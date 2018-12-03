function renderFatCats (cats) {
    /* TODO */
    cats.sort((obj1, obj2) => {
        return obj2.weight - obj1.weight
    })
    let catsList = document.getElementById('cats-list');
    // 清空数据，防止反复调用出现渲染问题
    catsList.innerHTML = '';
    let catDiv, catNameSpan, catWeightSpan
    cats.map(item => {
        catDiv = document.createElement('div');
        catNameSpan = document.createElement('span');
        catWeightSpan = document.createElement('span');
        catDiv.classList.add('cat')
        catNameSpan.classList.add('cat-name')
        catNameSpan.innerText = item.name
        catWeightSpan.classList.add('cat-weight')
        catWeightSpan.innerText = item.weight
        catDiv.appendChild(catNameSpan)
        catDiv.appendChild(catWeightSpan)
        catsList.appendChild(catDiv)
    })
}  
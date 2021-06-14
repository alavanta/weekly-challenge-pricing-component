const dom = document;
const packages = dom.querySelectorAll('.package');
const prices = dom.querySelectorAll('.price');
const periodButtons = Array.from(dom.getElementsByClassName('periode-toggle')[0].children);

packages.forEach((p,idx) => {
    p.addEventListener('click', (e) => handleOnClick(e,idx));
})

periodButtons.forEach((p,idx) => {
    p.addEventListener('click', (e) => handlePeriodClick(e,idx));
})

function handleOnClick(e,idx){
    const selected = e.target.closest('.package')
    const isSelected = selected.classList.contains('selected-package');
    packages.forEach((p,i) => {
        if(i !== idx){
            p.classList.remove('selected-package');
            p.classList.add('nonselected-package');
        }
    });
    if(isSelected){
        selected.classList.remove('selected-package');
        return;
    }
    selected.classList.add('selected-package');
}

const annualPriceList = ['£99.99','£179.99','£199.99'];
const monthlyPriceList = ['£9.99','£17.99','£19.99'];

function handlePeriodClick(e,idx){
 const period = e.currentTarget.innerText
 e.currentTarget.classList.add('periode-toggle-active');
 if(period === 'Annually'){
      prices.forEach((x,i) => {
         x.children[0].innerText = annualPriceList[i];
         x.children[1].innerText = "year";
      })
 }
 if(period === 'Monthly'){
    prices.forEach((x,i) => {
       x.children[0].innerText = monthlyPriceList[i];
       x.children[1].innerText = "month";
    })
}
 periodButtons.forEach((p,i) => {
    i !== idx && p.classList.remove('periode-toggle-active');
 });
}
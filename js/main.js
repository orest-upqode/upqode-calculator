function rangeFuncEvents(rangeSelector, firstLabel, secondLabel, thirdLabel, fourthLabel) {
    const rangeInput = document.getElementById(rangeSelector);
    rangeInput.nextElementSibling.children[1].innerHTML = secondLabel;
    rangeInput.nextElementSibling.nextElementSibling.style.right = `246px`;

    rangeInput.addEventListener('input', (e) => {
        const target = e.target;
        target.nextElementSibling.style.left = `calc(${50}% - ${58}px)`;

        switch (Number(target.value)) {
            case 25:
                target.nextElementSibling.children[1].innerHTML = `${firstLabel}`;
                target.nextElementSibling.children[0].style.opacity = 0;
                target.nextElementSibling.children[2].style.opacity = 0.7;
                target.nextElementSibling.nextElementSibling.style.right = `358px`;
                target.nextElementSibling.nextElementSibling.style.right = `408px`;
                target.nextElementSibling.style.left = `calc(${0}% + ${15}px)`;
                break;
            case 50:
                target.nextElementSibling.children[1].innerHTML = `${secondLabel}`;
                target.nextElementSibling.children[0].style.opacity = 0.7;
                target.nextElementSibling.children[2].style.opacity = 0.7;
                target.nextElementSibling.nextElementSibling.style.right = `246px`;
                target.nextElementSibling.style.left = `calc(${50}% - ${58}px)`;
                break;
            case 75:
                target.nextElementSibling.children[1].innerHTML = `${thirdLabel}`;
                target.nextElementSibling.children[0].style.opacity = 0.7;
                target.nextElementSibling.children[2].style.opacity = 0.7;
                target.nextElementSibling.nextElementSibling.style.right = `124px`;
                target.nextElementSibling.style.left = `calc(${75}% - ${33}px)`;
                break;
            case 100:
                target.nextElementSibling.children[1].innerHTML = `${fourthLabel}`;
                target.nextElementSibling.children[0].style.opacity = 0.7;
                target.nextElementSibling.children[2].style.opacity = 0;
                target.nextElementSibling.nextElementSibling.style.right = `-5px`;
                target.nextElementSibling.style.left = `calc(${100}% - ${18}px)`;
                break;
            default:
                target.nextElementSibling.innerHTML = 'Loading...';
        }
    });
}
rangeFuncEvents('range-style', 'No design needed', 'Simple yet attractive', 'Moderately stylized', 'World class');
rangeFuncEvents('range-copywriting', 'None', '5-10', '10-25', '25-50');
rangeFuncEvents('range-seo', 'None', '30 keywords', '80 keywords', '150 keywords');
rangeFuncEvents('range-database', 'None', 'Basic', 'Advanced', 'Full development');
rangeFuncEvents('range-eccomerce', 'None', 'Basic', 'Advanced', 'Enterprise');
rangeFuncEvents('range-animation', 'None', 'Basic', 'Advanced', 'Enterprise');
rangeFuncEvents('range-cms', 'None', 'Standart', 'Advanced', 'Enterprise');

function numberFuncEvents() {
    let numberInput = document.getElementById('input-number');
    let plus = document.querySelector('.number-plus');
    let minus = document.querySelector('.number-minus');
    
    minus.addEventListener('click', (e) => {
        console.log(numberInput.value);
    });
    
    plus.addEventListener('click', (e) => {
        console.log(numberInput.value);
    });
    
    numberInput.addEventListener('input', (e) => {
        const target = e.target;
        const maxValue = +numberInput.getAttribute('max');
        const minValue = +numberInput.getAttribute('min');

        if (target.value.match(/[^0-9]|^0{1}/g)) {
            target.value = target.value.replace(/./g, '');
        }
        
        if (target.value > maxValue) {
            target.value = maxValue;
        }
        if (target.value < minValue) {
            target.value = minValue;
        }
    });
}
numberFuncEvents();

function nextPrevButtons() {
    const nextBtn = document.querySelector('.calculator-form__button');
    const prevBtn = document.querySelector('.calculator-results__button');

    const formWrapper = document.querySelector('.calculator-form');
    const resultsWrapper = document.querySelector('.calculator-results');
    const formWrapperDescription = document.querySelector('.calculator-description');

    const lowPriceDesc = document.querySelector('.calculator-results__description-price.low-price');
    const highPriceDesc = document.querySelector('.calculator-results__description-price.high-price');

    const calcTitle = document.getElementById('calculator-title');
    const calcTableTitle = document.getElementById('calculator-results-table');

    nextBtn.addEventListener('click', (e) => {
        e.preventDefault();

        createPriceTable();
        showQuoteDetails();
        setTimeout(() => {
            resultsWrapper.classList.remove('hidden-block');
            formWrapperDescription.classList.add('hidden-block');
            formWrapper.classList.add('hidden-block');
    
            calcTableTitle.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }, 500);
    });

    prevBtn.addEventListener('click', (e) => {
        e.preventDefault();

        formWrapperDescription.classList.remove('hidden-block');
        formWrapper.classList.remove('hidden-block');
        resultsWrapper.classList.add('hidden-block');

        calcTitle.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });

    function createPriceTable() {
        const table = document.getElementById('calculator-results-table');
        let htmlRowsPrice = '';
        let lowSum = 0;
        let highSum = 0;
        let lowPrice = 0;
        let highPrice = 0;

        function calculatePagePrice(inputId, inputWrapperTitle, pagePrice) {
            const inputEl = document.getElementById(inputId);
            let lowItemPrice = 0;
            let highItemPrice = 0;

            lowItemPrice += inputEl.value * pagePrice;
            highItemPrice = lowItemPrice * 1.5;

            return [
                `<tr class="service-row">
                    <th class="service">${inputWrapperTitle}</th>
                    <td class="item">${inputEl.value}</td>
                    <td class="low">$${lowItemPrice.toLocaleString()}</td>
                    <td class="high">$${highItemPrice.toLocaleString()}</td>
                </tr>`,
                lowItemPrice,
                highItemPrice
            ];
        }

        function calculatePriceForRange(rangeId, rangeWrapperTitle, lowPrice, mediumPrice, highPrice) {
            const rangeEl = document.getElementById(rangeId);
            let lowItemPrice = 0;
            let highItemPrice = 0;

            switch (Number(rangeEl.value)) {
                case 25:
                    lowItemPrice = 0;
                    highItemPrice = 0;
                    break;
                case 50:
                    lowItemPrice = Number(lowPrice);
                    highItemPrice = Number(lowPrice) * 1.5;
                    break;
                case 75:
                    lowItemPrice = Number(mediumPrice);
                    highItemPrice = Number(mediumPrice) * 1.5;
                    break;
                case 100:
                    lowItemPrice = Number(highPrice);
                    highItemPrice = Number(highPrice) * 1.5;
                    break;
            }
            
            lowSum += lowItemPrice;
            highSum += highItemPrice;

            return [
                `<tr class="service-row">
                    <th class="service">${rangeWrapperTitle}</th>
                    <td class="item">${rangeEl.nextElementSibling.children[1].innerText}</td>
                    <td class="low">$${lowItemPrice.toLocaleString()}</td>
                    <td class="high">$${highItemPrice.toLocaleString()}</td>
                </tr>`,
                lowSum,
                highSum
            ];
        }

        const [inputPageRowHtml, lowPriceInputs, highPriceInputs] = calculatePagePrice('input-number', 'Number of pages', 20);
        const rangeStyleRow = calculatePriceForRange('range-style', 'Style of design', 2000, 3000, 10000);
        const rangeCopywriteRow = calculatePriceForRange('range-copywriting', 'Copywriting number of pages', 1000, 1500, 3750);
        const rangeSeoRow = calculatePriceForRange('range-seo', 'SEO', 2000, 3000, 6000);
        const rangeDatabaseRow = calculatePriceForRange('range-database', 'Database Integration', 2000, 4000, 10000);
        const rangeEccomerceRow = calculatePriceForRange('range-eccomerce', 'Ecommerce Functionality', 2000, 4000, 10000);
        const rangeAnimationRow = calculatePriceForRange('range-animation', 'Animation', 2000, 4000, 10000);
        const [rangeCmsRowHtml, lowPriceRanges, highPriceRanges] = calculatePriceForRange('range-cms', 'CMS', 2000, 4000, 10000);

        htmlRowsPrice = `
            ${inputPageRowHtml}
            ${rangeStyleRow[0]}
            ${rangeCopywriteRow[0]}
            ${rangeSeoRow[0]}
            ${rangeDatabaseRow[0]}
            ${rangeEccomerceRow[0]}
            ${rangeAnimationRow[0]}
            ${rangeCmsRowHtml}
        `;

        lowPrice = (lowPriceInputs + lowPriceRanges).toLocaleString();
        highPrice = (highPriceInputs + highPriceRanges).toLocaleString();

        lowPriceDesc.innerHTML = `$${lowPrice}`;
        highPriceDesc.innerHTML = `$${highPrice}`;

        if (table.children[0]) {
            table.children[0].innerHTML = `<tr class="top">
                <th colspan="2">&nbsp;</th>
                <th class="low">Low</th>
                <th class="high">High</th>
            </tr>
            ${htmlRowsPrice}
            <tr class="total">
                <th colspan="2">Total Estimated Quote</th>
                <td class="low">$${lowPrice}</td>
                <td class="high">$${highPrice}</td>
            </tr>`;
        }
    }

    function showQuoteDetails() {
        const textarea = document.getElementById('calculator-textarea');
        let itemRows = document.querySelectorAll('.service-row');
        let arr = [];
        textarea.innerHTML = '';
        itemRows.forEach(item => {
            arr.push(`${item.children[0].innerText}: ${item.children[1].innerText}`);
        });
        arr.forEach(item => {
            textarea.innerHTML += `${item}; `; 
        });
    }
}
nextPrevButtons();
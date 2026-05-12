document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById('tableBody');
    const statsElem = document.querySelector('.stats');
    const categoryTabs = document.getElementById('categoryTabs');

    const categories = ['Todas', 'Palabras importantes', ...new Set(vocabData.map(item => item.category))];
    let activeCategory = 'Todas';
    let searchTerm = '';

    const savedAssocs = JSON.parse(localStorage.getItem('campayo_assocs')) || {};
    const savedLiterals = JSON.parse(localStorage.getItem('campayo_literals')) || {};

    function renderTabs() {
        categoryTabs.innerHTML = categories.map(cat => `
            <button class="tab-button ${cat === activeCategory ? 'active' : ''}" data-category="${cat}">
                ${cat}
            </button>
        `).join('');

        // Staggered tab animation
        const buttons = categoryTabs.querySelectorAll('.tab-button');
        buttons.forEach((btn, i) => {
            btn.style.animationDelay = `${0.15 + i * 0.05}s`;
            btn.style.animation = `tabSlideIn 0.4s cubic-bezier(0.22, 1, 0.36, 1) ${0.15 + i * 0.05}s forwards`;
        });

        document.querySelectorAll('.tab-button').forEach(btn => {
            btn.addEventListener('click', (e) => {
                activeCategory = e.target.getAttribute('data-category');
                renderTabs();
                renderTable();
            });
        });
    }

    // Search input handling
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchTerm = e.target.value.trim().toLowerCase();
            renderTable();
        });
    }

    function renderTable() {
        let htmlContent = '';
        let count = 0;
        const visibleItems = [];

        vocabData.forEach((item) => {
            const isMatchCategory = (activeCategory === 'Todas') || 
                            (activeCategory === 'Palabras importantes' && item.isImportant) || 
                            (activeCategory !== 'Palabras importantes' && item.category === activeCategory);

            // Search matches either spanish, pinyin or chinese
            const lowerEs = (item.es || '').toLowerCase();
            const lowerPinyin = (item.pinyin || '').toLowerCase();
            const lowerZh = (item.zh || '').toLowerCase();
            const matchesSearch = !searchTerm || lowerEs.includes(searchTerm) || lowerPinyin.includes(searchTerm) || lowerZh.includes(searchTerm);

            if (isMatchCategory && matchesSearch) {
                count++;
                const assocVal = savedAssocs[item.es] || '';
                const literalVal = savedLiterals[item.es] || '';
                visibleItems.push({
                    item,
                    assocVal,
                    literalVal,
                    index: count
                });
            }
        });

        htmlContent = visibleItems.map(({ item, assocVal, literalVal, index }) => `
            <tr style="animation-delay: ${0.35 + (index - 1) * 0.03}s">
                <td class="col-es">${item.es}</td>
                <td class="col-pinyin">${item.pinyin || ''}</td>
                <td class="col-literal">
                    <input type="text" 
                           class="literal-input" 
                           data-key="${item.es}" 
                           placeholder="Tu pronunciación..." 
                           value="${literalVal}">
                </td>
                <td class="col-assoc">
                    <input type="text" 
                           class="assoc-input" 
                           data-key="${item.es}" 
                           placeholder="Ingresa tu asociación aquí..." 
                           value="${assocVal}">
                </td>
                <td class="col-zh">${item.zh || '...'}</td>
            </tr>
        `).join('');

        tableBody.innerHTML = htmlContent;
        statsElem.textContent = activeCategory === 'Todas' 
            ? `${count} palabras totales` 
            : `${count} palabras en ${activeCategory}`;

        const assocInputs = document.querySelectorAll('.assoc-input');
        const literalInputs = document.querySelectorAll('.literal-input');

        function attachSaver(inputsNodeList, savedObj, storageKey) {
            let timeout;
            inputsNodeList.forEach(input => {
                input.addEventListener('input', (e) => {
                    clearTimeout(timeout);
                    timeout = setTimeout(() => {
                        const key = e.target.getAttribute('data-key');
                        const val = e.target.value.trim();
                        if (val) {
                            savedObj[key] = val;
                        } else {
                            delete savedObj[key];
                        }
                        localStorage.setItem(storageKey, JSON.stringify(savedObj));
                    }, 500);
                });
            });
        }

        attachSaver(assocInputs, savedAssocs, 'campayo_assocs');
        attachSaver(literalInputs, savedLiterals, 'campayo_literals');
    }

    renderTabs();
    renderTable();
});

// Add keyframes for tab animation
const style = document.createElement('style');
style.textContent = `
    @keyframes tabSlideIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

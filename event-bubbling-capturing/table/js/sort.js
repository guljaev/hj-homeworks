'use strict';

function handleTableClick(event) {
    let target = event.target;
    const table = event.currentTarget;

    // if (target.tagName !== 'TH') {
    //     return;
    // }
    // target.dataset.dir === '1' ? target.dataset.dir = '-1' : target.dataset.dir = '1';
    // table.dataset.sortBy = target.dataset.propName;
    // sortTable(target.dataset.propName, Number(target.dataset.dir));

    // ниже решение, предусматривающее возможность включения дополнительных тегов в ячейки th с развитием сайта
    while (target !== table) {
        if (target.tagName === 'TH') {
            target.dataset.dir = (target.dataset.dir === '1') ? '-1' : '1';
            table.dataset.sortBy = target.dataset.propName;
            sortTable(target.dataset.propName, Number(target.dataset.dir));
            break;
        }
        target = target.parentElement;
        console.log(target.tagName);
    }
}

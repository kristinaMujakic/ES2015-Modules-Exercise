
function choice(items) {
    let idx = Math.floor(Math.random() * items.length);
    return items[idx];
}


function remove(item, items) {
    const idx = items.findIndex(it => it === item);
    if (idx !== -1) {
        items.splice(idx, 1);
        return item;
    } else {
        return undefined;
    }
}

export { choice, remove };
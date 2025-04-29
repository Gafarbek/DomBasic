export function render(data, place, component) {
    if (Array.isArray(data)) {
        for (let item of data) {
            const element = component(item);
            place.append(element);
        }
        return;
    }

    const element = component(data);
    place.append(element);
}

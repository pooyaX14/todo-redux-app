export function compareValues(key: string, order = 'ascending') {
    return function innerSort(obj1: any, obj2: any) {
        if (!obj1.hasOwnProperty(key) || !obj2.hasOwnProperty(key)) {
            return 0;
        }

        const varA = (typeof obj1[key] === 'string')
            ? obj1[key].toUpperCase() : obj1[key];
        const varB = (typeof obj2[key] === 'string')
            ? obj2[key].toUpperCase() : obj2[key];

        let comparison = 0;
        if (varA > varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }
        return (
            (order === 'descending') ? (comparison * -1) : comparison
        );
    };
}
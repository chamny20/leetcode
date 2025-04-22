/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    const record = [];


    for (let i=0; i<operations.length; i++) {
        const s = operations[i];

        switch (s) {
            case 'C':
                record.pop();
                break;
            case 'D': 
                const num = record.at(-1);
                record.push(num * 2);
                break;
            case '+':
                const sum = record[record.length-1] + record[record.length-2];
                record.push(sum);
                break;
            default:
                record.push(Number(s));
                break;
        }
    }

    console.log(record);

    return record.length > 0 ? record.reduce((sum, num) => sum += num) : 0;
};
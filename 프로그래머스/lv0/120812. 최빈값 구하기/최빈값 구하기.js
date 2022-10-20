
function solution(array) {
    const freq = {};

    for (const n of array) {
        freq[n] = (freq[n] || 0) + 1;
    }

    const keys = Object.keys(freq);

    keys.sort((a,b) => freq[b] - freq[a]);

    const max = keys[0];

    return freq[keys[0]] === freq[keys[1]] ? -1 : +max;
}

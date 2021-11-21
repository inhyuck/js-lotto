export const MIN_LOTTO_NUMBER = 1;
export const MAX_LOTTO_NUMBER = 45;
export const COUNT_LOTTO_NUMBERS_PER_TICKET = 6;

/**
 * @param count
 * @return {Ticket[]}
 */
function autoGenerateLottoNumbers(count) {
    return Array(count)
        .fill(null)
        .map(_ => {
            const randomNumbers = makeNonDuplicatedRandomNumbers(COUNT_LOTTO_NUMBERS_PER_TICKET, MIN_LOTTO_NUMBER, MAX_LOTTO_NUMBER);
            return {
                normalNumbers: randomNumbers.slice(0, randomNumbers.length),
            };
        });
}

function makeNonDuplicatedRandomNumbers(count, min, max) {
    const numbers = Array.from({length: max - min + 1}, (_, i) => (min + i));
    return shuffle(numbers).slice(0, count);
}

function shuffle(numbers) {
    return numbers.slice().sort(() => Math.random() - 0.5);
}

export default {
    autoGenerateLottoNumbers,
};

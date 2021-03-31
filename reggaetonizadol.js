import silabas from 'silabas'
import jsTokens from 'js-tokens';

export default function reggaetonize(text) {
    return Array.from(
        // separate text into words
        jsTokens(text), token => {
            return Array.from(
                // separate words into syllables
                silabas(token.value).syllables(), syllab => {
                    let nextSyb = syllab;
                    // if syllable ends with r, change to l to reflect puerto rican spanish
                    if (syllab.length > 1 && syllab.endsWith('r')) {
                        nextSyb = syllab.replace(/r$/, 'l');
                    }
                    return nextSyb;
                }
            ).join('');
        }
    ).join('');
}
/*
----------------------------------------------------
experienceHelper.js

Responsibilities:
1. Parse experience values from job cards.
2. Compare job experience with user criteria.
3. Return true if job matches configured experience.

Examples:
5-8 Yrs
3-5 Yrs
10-15 Yrs
----------------------------------------------------
*/

function isExperienceMatch(
    experience,
    minExp,
    maxExp
) {
    try {
        const numbers =
            experience.match(/\d+/g);

        if (!numbers || numbers.length < 2)
            return false;

        const min =
            parseInt(numbers[0]);

        const max =
            parseInt(numbers[1]);

        return (
            min <= maxExp &&
            max >= minExp
        );
    } catch {
        return false;
    }
}

module.exports = {
    isExperienceMatch
};
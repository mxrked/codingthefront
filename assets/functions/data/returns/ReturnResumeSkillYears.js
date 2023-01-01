/*/**
 *
 *  This is used to get the skills respected year
 *
 */

export default function ReturnResumeSkillYears(startingYears) {
  const PAST_YEAR = 2022;
  const CURRENT_YEAR = new Date().getFullYear();
  let newYears;
  var skillYears = startingYears;

  if (CURRENT_YEAR > PAST_YEAR) {
    newYears = Number(CURRENT_YEAR) - PAST_YEAR;
    skillYears = skillYears + newYears;
  }

  return Math.round(Number(skillYears));
}

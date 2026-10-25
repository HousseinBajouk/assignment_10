let score = 75;
let has_submitted_assignments = true;
let grade = undefined;
let statu = undefined; // status is deprecated so it's replaced with statu without 's'
console.log(`Score: ${score}`);
score >= 0 && score <= 100
  ? score >= 90
    ? (grade = "A")
    : score >= 80
      ? (grade = "B")
      : score >= 70
        ? (grade = "C")
        : score >= 60
          ? (grade = "D")
          : (grade = "F")
  : console.log("Wrong Number");
score >= 0 && score <= 100 ? console.log(`Grade: ${grade}`) : "";

score >= 60 && score <= 100
  ? has_submitted_assignments == true
    ? (statu = "Passed with all homework submitted.")
    : (statu = "Passed, but missing homework penalty applies.")
  : score > 50 && score < 60
    ? (statu = "Failed, but eligible for a re-test.")
    : score >= 0 && score <= 50
      ? (statu = "Failed completely. Must retake the course.")
      : (statu = "NO STATUS-WRONG NUMBER");
console.log(`Status: ${statu}`);

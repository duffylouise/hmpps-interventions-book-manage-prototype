const express = require("express");
const router = express.Router();
const moment = require("moment");
const staticData = require("../../data/sprint-3/managerManageStaticData");

router.use(function (req, res, next) {
  res.locals.serviceName = "Receive intervention referrals";
  next();
});

router.get("/referrals", (req, res) => {
  res.render("sprint-3/book-and-manage/manage-a-referral/manager/referrals", {
    probationPractitioners: staticData.probationPractitioners,
  });
});

router.get("/referrals/:referralIndex", (req, res) => {
  const serviceUser = staticData.serviceUsers[req.params.referralIndex];

  res.render("sprint-3/book-and-manage/manage-a-referral/manager/referral", {
    serviceUser,
  });
});

router.get(
  "/referrals/:referralIndex/:interventionType/assign-caseworker",
  (req, res) => {
    const caseworkers = staticData.caseworkers;
    const interventionType = req.params.interventionType.replace("-", " ");

    res.render("sprint-3/book-and-manage/manage-a-referral/manager/assign-caseworker", {
      caseworkers,
      interventionType: interventionType,
    });
  }
);

router.get("/referrals/:referralIndex/caseworker-confirmation", (req, res) => {
  res.render(
    "sprint-3/book-and-manage/manage-a-referral/manager/caseworker-email-confirmation"
  );
});

router.get("/referrals/:referralIndex/send-email", (req, res) => {
  res.render("sprint-3/book-and-manage/manage-a-referral/manager/send-email");
});

router.get(
  "/referrals/:referralIndex/probation-practitioner-email-confirmation",
  (req, res) => {
    res.render(
      "sprint-3/manage-a-referral/manager/probation-practitioner-email-confirmation"
    );
  }
);

module.exports = router;

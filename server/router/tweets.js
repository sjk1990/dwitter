import express from "express";
import "express-async-errors";
import { body } from "express-validator";
import * as tweetController from "../controller/tweet.js";
import { validate } from "../middleware/validator.js";

const router = express.Router();

// validation
// 저장 전 수행, 서버 로직에서 앞쪽에 해줄수록 좋음
// + sanitization과 함께(data의 표준화)
// (심화) -> Contract Testing: Client-Server && Proto-base
const validateTweet = [
  body("text")
    .trim()
    .isLength({ min: 3 })
    .withMessage("3글자 이상 되어야 합니다!"),
  validate,
];

// GET /tweets
// GET /tweets?username=:username
router.get("/", tweetController.getTweets);

// GET /tweets/:id
router.get("/:id", tweetController.getTweet);

// POST /tweeets
router.post("/", validateTweet, tweetController.createTweet);

// PUT /tweets/:id
router.put("/:id", validateTweet, tweetController.updateTweet);

// DELETE /tweets/:id
router.delete("/:id", tweetController.deleteTweet);

export default router;

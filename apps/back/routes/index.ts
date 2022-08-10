import { Router } from "express";

import user from "./user";
import board from "./board";
import room from "./room";

const router = Router();

router.post("/user/all", user.showAllUser);
router.post("/user/signup", user.signUpUser);

router.get("/board/allArticle", board.showAllArticle);
router.post("/board/writeArticle", board.writeArticle);
router.post("/board/editArticle", board.editArticle);
router.post("/board/acceptArticle", board.acceptArticle);
router.post("/board/cancleArticle", board.cancleArticle);
router.post("/board/proofreadArticle", board.proofreadArticle);

router.get("/room/all", room.showAllRoom);

export default router;

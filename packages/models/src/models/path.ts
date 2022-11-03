export type UrlKey =
  | "LOCAL_SOCKET"
  | "REAL_SOCKET"
  | "LOCAL_SERVER"
  | "REAL_SERVER"
  | "LOCAL_FRONT"
  | "REAL_FRONT";

export type SocketKey =
  | "END"
  | "CONNECT"
  | "MESSAGE"
  | "ROOM_DATA"
  | "DISCONNECT"
  | "ERROR";

export type UserApiKey =
  | "all"
  | "signUp"
  | "signUpEditor"
  | "logIn"
  | "logout"
  | "authCheck"
  | "checkedEmail"
  | "setUpEditorProfile"
  | "setUpAssignments"
  | "setUpCertificates";

export enum UserApiEndPoint {
  all = "/user/all",
  signUp = "/user/signUp",
  signUpEditor = "/user/signUpEdiitor",
  logIn = "/user/logIn",
  logout = "/user/logout",
  authCheck = "/user/authCheck",
  checkedEmail = "/user/checkedEmail",
  setUpEditorProfile = "/user/setUpEditorProfile",
  setUpAssignments = "/user/setUpAssignments",
  setUpCertificates = "/user/setUpCertificates",
}

export type BoardApiKey =
  | "one"
  | "all"
  | "write"
  | "edit"
  | "delete"
  | "accept"
  | "cancel"
  | "proofread"
  | "complete"
  | "listByUser"
  | "editingListByUser"
  | "hitUp"
  | "changeBoardState";

export enum BoardApiEndPoint {
  one = "/board/article",
  all = "/board/articleList",
  write = "/board/writeArticle",
  edit = "/board/editArticle",
  delete = "/board/deleteArticle",
  accept = "/board/acceptArticle",
  cancel = "/board/cancelArticle",
  proofread = "/board/proofreadArticle",
  complete = "/board/completeArticle",
  listByUser = "/board/myArticleList",
  editingListByUser = "/board/myEditingList",
  hitUp = "/board/hitUpArticle",
  changeBoardState = "/board/changeBoardState",
}

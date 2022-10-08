import {
  getCandidate,
  postCandidate,
} from "@controllers/todo"

export const defineRoutes = (app) => {
  app.get("/login", getCandidate)
  app.post("/Home", postCandidate)
}

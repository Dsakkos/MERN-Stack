const JokerController = require("../controllers/joker.controller");

module.exports = (app) => {
    app.get("/api/joker", JokerController.getAllJoker);
    app.post("/api/joker", JokerController.createNewJoke);
    app.get("/api/joker/:_id", JokerController.getJokerById);
    app.put("/api/joker/:_id", JokerController.updateJoker);
    app.delete("/api/joker/:_id", JokerController.deleteJoker);
};
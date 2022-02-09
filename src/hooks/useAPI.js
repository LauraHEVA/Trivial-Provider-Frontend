import { useCallback, useContext } from "react";
import { loadQuestionsAction } from "../store/actions/trivial/actionsCreators";
import TrivialContext from "../store/contexts/TrivialContext";

const useAPI = () => {
  const getTrivialUrl = (category, difficulty) =>
    `https://opentdb.com/api.php?amount=20&category=${category}&difficulty=${difficulty}`;

  const gamesAPIurl = "https://trivial-provider.herokuapp.com/games";
  const { allQuestionsDispatch } = useContext(TrivialContext);

  const loadQuestionsAPI = useCallback(
    async (difficulty) => {
      const idCategory = [21, 27, 15, 18, 22];
      let allQuestions = [];

      const responseSports = await fetch(getTrivialUrl(21, difficulty));
      const questionsSports = await responseSports.json();
      const questionsListSports = questionsSports.results;
      allQuestions.push([...questionsListSports]);

      allQuestionsDispatch(loadQuestionsAction(allQuestions));
    },
    [allQuestionsDispatch]
  );
  return loadQuestionsAPI;
};

export default useAPI;

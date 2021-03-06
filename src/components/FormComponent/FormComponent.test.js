import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormComponent from "./FormComponent";

describe("Given FormComponent", () => {
  describe("When it is rendered", () => {
    test("Then it should render 2 inputs, 1 select with 3 options and a button", () => {
      const expectedOptions = 3;
      const name = { name: "", setName: () => {} };
      const creator = { creator: "", setCreator: () => {} };
      const difficulty = { difficulty: "", setDifficulty: () => {} };

      render(
        <FormComponent
          name={name}
          creator={creator}
          difficulty={difficulty}
          onSubmit={() => {}}
        />
      );

      const creatorInput = screen.queryByPlaceholderText("Input your name");
      const nameInput = screen.queryByPlaceholderText("Input the game's name");
      const submitButton = screen.queryByRole("button");
      const selectsDifficulty = screen.queryAllByRole("option");

      expect(creatorInput).toBeInTheDocument();
      expect(nameInput).toBeInTheDocument();
      expect(submitButton).toBeInTheDocument();
      expect(selectsDifficulty.length).toBe(expectedOptions);
    });
  });

  describe("When it is instanciated passing an onSubmit action", () => {
    test("Then it should call the onSubmit action when the button is pressed", () => {
      const action = jest.fn();
      const name = { name: "", setName: () => {} };
      const creator = { creator: "", setCreator: () => {} };
      const difficulty = { difficulty: "", setDifficulty: () => {} };

      render(
        <FormComponent
          name={name}
          creator={creator}
          difficulty={difficulty}
          onSubmit={action}
        />
      );

      const submitButton = screen.queryByRole("button");

      userEvent.click(submitButton);
      expect(action).toHaveBeenCalled();
    });
  });

  describe("When it is instanciated as editing", () => {
    test("Then it should render a button with the text 'Edit'", () => {
      const name = { name: "", setName: () => {} };
      const creator = { creator: "", setCreator: () => {} };
      const difficulty = { difficulty: "", setDifficulty: () => {} };
      const action = () => {};
      const expectedText = "Edit";

      render(
        <FormComponent
          name={name}
          creator={creator}
          difficulty={difficulty}
          onSubmit={action}
          editing
        />
      );

      const submitButton = screen.queryByRole("button");

      expect(submitButton.textContent).toBe(expectedText);
    });
  });

  describe("When it is instanciated and some inputs change value", () => {
    test("Then it should call the correspondant setter", () => {
      const setName = jest.fn();
      const setCreator = jest.fn();

      const name = { name: "name", setName };

      const creator = {
        creator: "creator",
        setCreator,
      };

      const difficulty = { difficulty: "Easy", setDifficulty: () => {} };
      const action = () => {};

      render(
        <FormComponent
          name={name}
          creator={creator}
          difficulty={difficulty}
          onSubmit={action}
          editing
        />
      );

      const creatorInput = screen.getByPlaceholderText("Input your name");
      fireEvent.change(creatorInput, {
        target: { value: "newCreator" },
      });
      expect(setCreator).toHaveBeenCalledTimes(1);

      const nameInput = screen.getByPlaceholderText("Input the game's name");
      fireEvent.change(nameInput, {
        target: { value: "newName" },
      });
    });
  });

  describe("When it is the value of the difficulty is changed", () => {
    test("Then it should call the setDifficulty action", () => {
      const name = { name: "", setName: () => {} };
      const creator = { creator: "", setCreator: () => {} };
      const setDifficulty = jest.fn();
      const difficulty = { difficulty: "Easy", setDifficulty };

      const action = () => {};

      render(
        <FormComponent
          name={name}
          creator={creator}
          difficulty={difficulty}
          onSubmit={action}
        />
      );

      const difficultyInput = screen.getByRole("combobox");
      fireEvent.change(difficultyInput, {
        target: { value: "Difficult" },
      });

      expect(setDifficulty).toHaveBeenCalledTimes(1);
    });
  });
});

import { rest } from "msw";

export const handlers = [
  rest.get(`${process.env.REACT_APP_API_HEROKU_URL}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: "pruebamsw",
          creator: "sdfg",
          difficulty: "easy",
          questions: [],
          id: 4,
        },
        {
          name: "jhg",
          creator: "ghj",
          difficulty: "easy",
          questions: [],
          id: 7,
        },
      ])
    );
  }),

  rest.post(`${process.env.REACT_APP_API_HEROKU_URL}`, (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json([
        {
          name: "pruebamsw",
          creator: "sdfg",
          difficulty: "easy",
          questions: [],
          id: 1,
        },
      ])
    );
  }),

  rest.delete(`${process.env.REACT_APP_API_HEROKU_URL}`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({}));
  }),
];

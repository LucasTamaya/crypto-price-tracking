// /* eslint-disable testing-library/prefer-screen-queries */
// import { screen } from "@testing-library/react";
// import "@testing-library/jest-dom";
// import { rest } from "msw";

// import { renderWithClient } from "../msw/helpers";
// import { server } from "../msw/setupTests";
// import CryptoDetails from "../../pages/CryptoDetails";

// describe("CryptoDetails Page", () => {
//   //   it("should renders the page", () => {
//   //     renderWithClient(<CryptoDetails />);

//   //     expect(screen.getByRole("main")).toBeInTheDocument();
//   //   });

//   //   it("should renders some crypto items if there is no error during the fetch req", async () => {
//   //     const { findAllByRole } = renderWithClient(<Home />);

//   //     expect(await findAllByRole("heading", { level: 3 })).toHaveLength(3);
//   //     expect(await findAllByRole("img")).toHaveLength(3);
//   //   });

//   it("should renders an error message if there is an error during the fetch req", async () => {
//     server.use(
//       rest.get("*", (_, res, ctx) => {
//         return res(ctx.status(500));
//       })
//     );

//     const { findByText } = renderWithClient(<CryptoDetails />);

//     expect(await findByText("Error")).toBeInTheDocument();
//   });
// });

export {};

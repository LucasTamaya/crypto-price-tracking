import { setupServer } from "msw/node";

import { handlers } from "./helpers";

export const server = setupServer(...handlers);

import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { Signale } from "signale";
import "./constants";
import settings from "./settings.json";

const developmentEnvPath = resolve(__rootname, ".env.development");

const dev = existsSync(developmentEnvPath);

const processEnv = { ...(process.env as NodeJS.ProcessEnv), dev };

const log = new Signale({
  types: {
    successComamnd: { badge: "√", color: "blue", label: "Command" },
    successEvent: { badge: "√", color: "yellow", label: "Event" },
    successComponent: { badge: "√", color: "cyan", label: "Component" },
  },
});

export { log, processEnv, settings };

import { z } from "zod";

const EnvSchema = z.object({
  NODE_ENV: z.string(),
  SPOTIFY_REFRESH_TOKEN: z.string(),
  SPOTIFY_CLIENT_CREDENTIALS: z.string(),
});

export type EnvSchema = z.infer<typeof EnvSchema>;

// eslint-disable-next-line node/no-process-env
export default EnvSchema.parse(process.env);

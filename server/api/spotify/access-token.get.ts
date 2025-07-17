import { useStorage } from "#imports";

import type { AccessTokenState } from "~/types/spotify";

import env from "~/lib/env";

export default defineEventHandler(async () => {
  const cachedAccessTokenState = await useStorage().getItem("access_token_state");

  if (cachedAccessTokenState) {
    if (isAccessTokenExpired(cachedAccessTokenState)) {
      return await refreshAccessToken();
    }

    return cachedAccessTokenState;
  }
  else {
    return await refreshAccessToken();
  }
});

async function refreshAccessToken() {
  const refreshAccessTokenHeaders = {
    "Content-Type": "application/x-www-form-urlencoded",
    "Authorization": `Basic ${env.SPOTIFY_CLIENT_CREDENTIALS}`,
  };

  const refreshAccessTokenParams = {
    grant_type: "refresh_token",
    refresh_token: env.SPOTIFY_REFRESH_TOKEN,
  };

  const response = await $fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: refreshAccessTokenHeaders,
    params: refreshAccessTokenParams,
  });

  const current_ts = Date.now();
  await useStorage().setItem("access_token_state", { access_token_response: response, added_ts: current_ts });

  return { access_token_response: response, added_ts: current_ts };
}

function isAccessTokenExpired(token: AccessTokenState) {
  return Date.now() < token.access_token_response.expires_in + token.added_ts;
}

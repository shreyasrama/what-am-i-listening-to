import type { AccessTokenState, CurrentlyPlayingTrack } from "~/types/spotify";

export default defineEventHandler(async () => {
  const accessTokenState: AccessTokenState = await $fetch("/api/spotify/access-token", {
    method: "GET",
  });

  const authHeader = {
    Authorization: `Bearer ${accessTokenState.access_token_response.access_token}`,
  };

  const response: CurrentlyPlayingTrack = await $fetch("https://api.spotify.com/v1/me/player/currently-playing", {
    method: "GET",
    headers: authHeader,
  });

  if (response) {
    return response;
  }
  else {
    return {
      is_playing: false,
      item: { name: "" },
    };
  }
});

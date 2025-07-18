import type { AccessTokenState, CurrentlyPlayingTrack } from "~/types/spotify";

const emptyResponse: CurrentlyPlayingTrack = {
  is_playing: false,
  item: {
    name: "",
    album: {
      name: "",
      images: [
        {
          url: "",
        },
      ],
    },
    artists: [
      {
        name: "",
      },
    ],
  },
};

export default defineEventHandler(async () => {
  try {
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

    if (response && response.item) {
      return response;
    }

    return emptyResponse;
  }
  catch {
    return {
      ...emptyResponse,
      error: true,
      message: "Failed to fetch currently playing track.",
    };
  }
});

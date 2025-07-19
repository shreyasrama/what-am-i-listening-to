import type { AccessTokenState, RecentlyPlayedTracks } from "~/types/spotify";

const emptyResponse: RecentlyPlayedTracks = {
  items: [
    {
      track: {
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
    },
  ],
};

export default defineEventHandler(async () => {
  try {
    const accessTokenState: AccessTokenState = await $fetch("/api/spotify/access-token", {
      method: "GET",
    });

    const authHeader = {
      Authorization: `Bearer ${accessTokenState.access_token_response.access_token}`,
    };

    const recentlyPlayedParams = {
      limit: 10,
    };

    const response: RecentlyPlayedTracks = await $fetch("https://api.spotify.com/v1/me/player/recently-played", {
      method: "GET",
      headers: authHeader,
      params: recentlyPlayedParams,
    });

    if (response && response.items) {
      return response;
    }

    return emptyResponse;
  }
  catch {
    return {
      ...emptyResponse,
      error: true,
      message: "Failed to fetch recently played tracks.",
    };
  }
});

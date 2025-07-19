export type AccessTokenResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
};

export type AccessTokenState = {
  access_token_response: AccessTokenResponse;
  added_ts: number;
};

export type CurrentlyPlayingTrack = {
  is_playing: boolean;
  item: {
    name: string;
    album: {
      name: string;
      images: [
        {
          url: string;
        },
      ];
    };
    artists: [
      {
        name: string;
      },
    ];
  };
};

export type RecentlyPlayedTracks = {
  items: [
    {
      track: {
        name: string;
        album: {
          name: string;
          images: [
            {
              url: string;
            },
          ];
        };
        artists: [
          {
            name: string;
          },
        ];
      };
    },
  ];
};

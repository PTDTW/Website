// import type { APIRoute } from "astro";

// interface SpotifyCurrentlyPlaying {
// 	is_playing: boolean;
// 	item?: {
// 		name: string;
// 		artists: Array<{ name: string }>;
// 		album: {
// 			name: string;
// 			images: Array<{ url: string; height?: number; width?: number }>;
// 		};
// 		external_urls: {
// 			spotify: string;
// 		};
// 	};
// }

// export const GET: APIRoute = async ({ request }) => {
// 	const refreshToken = import.meta.env.SPOTIFY_REFRESH_TOKEN;
// 	const clientId = import.meta.env.SPOTIFY_CLIENT_ID;
// 	const clientSecret = import.meta.env.SPOTIFY_CLIENT_SECRET;

// 	if (!refreshToken || !clientId || !clientSecret) {
// 		return new Response(
// 			JSON.stringify({ error: "Spotify credentials not configured" }),
// 			{ status: 500, headers: { "Content-Type": "application/json" } },
// 		);
// 	}

// 	try {
// 		// Get access token
// 		const authResponse = await fetch("https://accounts.spotify.com/api/token", {
// 			method: "POST",
// 			headers: {
// 				"Content-Type": "application/x-www-form-urlencoded",
// 				Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
// 			},
// 			body: new URLSearchParams({
// 				grant_type: "refresh_token",
// 				refresh_token: refreshToken,
// 			}).toString(),
// 		});

// 		if (!authResponse.ok) {
// 			throw new Error("Failed to refresh Spotify token");
// 		}

// 		const authData = await authResponse.json();
// 		const accessToken = authData.access_token;

// 		// Get currently playing track
// 		const trackResponse = await fetch(
// 			"https://api.spotify.com/v1/me/player/currently-playing",
// 			{
// 				headers: {
// 					Authorization: `Bearer ${accessToken}`,
// 				},
// 			},
// 		);

// 		// Handle 204 No Content (nothing playing)
// 		if (trackResponse.status === 204) {
// 			return new Response(JSON.stringify({ is_playing: false, item: null }), {
// 				status: 200,
// 				headers: { "Content-Type": "application/json" },
// 			});
// 		}

// 		if (!trackResponse.ok) {
// 			throw new Error("Failed to fetch currently playing track");
// 		}

// 		const data: SpotifyCurrentlyPlaying = await trackResponse.json();

// 		if (!data.item || !data.is_playing) {
// 			return new Response(JSON.stringify({ is_playing: false, item: null }), {
// 				status: 200,
// 				headers: { "Content-Type": "application/json" },
// 			});
// 		}

// 		// Extract relevant data
// 		const response = {
// 			is_playing: data.is_playing,
// 			track: data.item.name,
// 			artist: data.item.artists.map((a) => a.name).join(", "),
// 			album: data.item.album.name,
// 			image: data.item.album.images[0]?.url || null,
// 			url: data.item.external_urls.spotify,
// 		};

// 		return new Response(JSON.stringify(response), {
// 			status: 200,
// 			headers: { "Content-Type": "application/json" },
// 		});
// 	} catch (error) {
// 		console.error("Spotify API error:", error);
// 		return new Response(
// 			JSON.stringify({ error: "Failed to fetch Spotify data" }),
// 			{ status: 500, headers: { "Content-Type": "application/json" } },
// 		);
// 	}
// };

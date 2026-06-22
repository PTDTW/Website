import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
	const clientId = import.meta.env.SPOTIFY_CLIENT_ID;
	const redirectUri =
		import.meta.env.SPOTIFY_REDIRECT_URI ||
		"https://127.0.0.1:4321/api/spotify/callback/";
	const scopes = ["user-read-currently-playing"];

	if (!clientId) {
		return new Response(
			`
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Configuration Error</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; padding: 40px; }
    .error { color: #d32f2f; }
    .container { max-width: 600px; margin: 0 auto; }
  </style>
</head>
<body>
  <div class="container">
    <h1 class="error">Missing Configuration</h1>
    <p>Please set <code>SPOTIFY_CLIENT_ID</code> in your .env file first.</p>
  </div>
</body>
</html>
			`,
			{
				status: 500,
				headers: { "Content-Type": "text/html; charset=utf-8" },
			},
		);
	}

	const authUrl = new URL("https://accounts.spotify.com/authorize");
	authUrl.searchParams.append("client_id", clientId);
	authUrl.searchParams.append("response_type", "code");
	authUrl.searchParams.append("redirect_uri", redirectUri);
	authUrl.searchParams.append("scope", scopes.join(" "));

	return new Response(
		`
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Spotify Authorization</title>
  <style>
    body { 
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; 
      padding: 40px; 
      background: linear-gradient(135deg, #1DB954 0%, #191414 100%);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .container { 
      background: white; 
      padding: 40px; 
      border-radius: 8px; 
      box-shadow: 0 8px 24px rgba(0,0,0,0.2);
      max-width: 500px;
      text-align: center;
    }
    h1 { 
      color: #191414; 
      margin: 0 0 10px 0;
    }
    .spotify-icon {
      font-size: 48px;
      margin-bottom: 20px;
    }
    p { 
      color: #666; 
      line-height: 1.6;
      margin: 15px 0;
    }
    .auth-url {
      background: #f5f5f5;
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 12px;
      margin: 20px 0;
      word-break: break-all;
      font-size: 12px;
      font-family: monospace;
      text-align: left;
      max-height: 100px;
      overflow-y: auto;
    }
    a.button {
      display: inline-block;
      background: #1DB954;
      color: white;
      padding: 12px 32px;
      border-radius: 24px;
      text-decoration: none;
      font-weight: bold;
      margin: 20px 0;
      transition: background 0.3s;
    }
    a.button:hover {
      background: #1ed760;
    }
    .secondary-button {
      display: inline-block;
      background: #f5f5f5;
      color: #191414;
      padding: 10px 20px;
      border-radius: 24px;
      text-decoration: none;
      font-size: 12px;
      margin-left: 10px;
      cursor: pointer;
      border: 1px solid #ddd;
    }
    .secondary-button:hover {
      background: #e0e0e0;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="spotify-icon">🎵</div>
    <h1>Connect to Spotify</h1>
    <p>Click the button below to authorize this app to access your currently playing track.</p>
    
    <a href="${authUrl.toString()}" class="button">
      Authorize with Spotify
    </a>
    
    <p style="font-size: 12px; color: #999; margin-top: 30px;">
      You'll be redirected to Spotify's login page, then back to this site with your Refresh Token.
    </p>

    <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
    
    <details>
      <summary style="cursor: pointer; color: #1DB954; font-weight: bold;">Show Authorization URL</summary>
      <div class="auth-url">${authUrl.toString()}</div>
      <button class="secondary-button" onclick="copyUrl()">Copy URL</button>
    </details>
  </div>

  <script>
    function copyUrl() {
      const url = document.querySelector('.auth-url').textContent;
      navigator.clipboard.writeText(url).then(() => {
        alert('URL copied to clipboard!');
      }).catch(err => {
        alert('Failed to copy: ' + err);
      });
    }
  </script>
</body>
</html>
		`,
		{
			status: 200,
			headers: { "Content-Type": "text/html; charset=utf-8" },
		},
	);
};

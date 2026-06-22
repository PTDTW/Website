import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ request, url }) => {
	const code = url.searchParams.get("code");
	const error = url.searchParams.get("error");

	// Check for errors from Spotify
	if (error) {
		return new Response(
			`
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Spotify Authorization Error</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; padding: 40px; }
    .error { color: #d32f2f; }
    .container { max-width: 600px; margin: 0 auto; }
  </style>
</head>
<body>
  <div class="container">
    <h1 class="error">Authorization Error</h1>
    <p><strong>Error:</strong> ${error}</p>
    <p><a href="https://developer.spotify.com/dashboard">Return to Spotify Dashboard</a></p>
  </div>
</body>
</html>
			`,
			{
				status: 400,
				headers: { "Content-Type": "text/html; charset=utf-8" },
			},
		);
	}

	if (!code) {
		return new Response(
			`
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Spotify Authorization Failed</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; padding: 40px; }
    .error { color: #d32f2f; }
    .container { max-width: 600px; margin: 0 auto; }
  </style>
</head>
<body>
  <div class="container">
    <h1 class="error">Authorization Failed</h1>
    <p>No authorization code received from Spotify.</p>
  </div>
</body>
</html>
			`,
			{
				status: 400,
				headers: { "Content-Type": "text/html; charset=utf-8" },
			},
		);
	}

	const clientId = import.meta.env.SPOTIFY_CLIENT_ID;
	const clientSecret = import.meta.env.SPOTIFY_CLIENT_SECRET;
	const redirectUri =
		import.meta.env.SPOTIFY_REDIRECT_URI ||
		"http://localhost:3000/api/spotify/callback";

	if (!clientId || !clientSecret) {
		return new Response(
			`
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Server Configuration Error</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; padding: 40px; }
    .error { color: #d32f2f; }
    .container { max-width: 600px; margin: 0 auto; }
  </style>
</head>
<body>
  <div class="container">
    <h1 class="error">Server Configuration Error</h1>
    <p>Missing Spotify API credentials.</p>
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

	try {
		// Exchange authorization code for access token and refresh token
		const tokenResponse = await fetch(
			"https://accounts.spotify.com/api/token",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
					Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
				},
				body: new URLSearchParams({
					grant_type: "authorization_code",
					code: code,
					redirect_uri: redirectUri,
				}).toString(),
			},
		);

		if (!tokenResponse.ok) {
			const errorData = await tokenResponse.text();
			console.error("Token exchange failed:", errorData);
			throw new Error("Failed to exchange authorization code");
		}

		const tokenData = (await tokenResponse.json()) as {
			access_token: string;
			refresh_token?: string;
			expires_in: number;
			token_type: string;
		};

		const refreshToken = tokenData.refresh_token || "Not provided";

		// Display the refresh token to the user
		return new Response(
			`
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Spotify Authorization Success</title>
  <style>
    body { 
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; 
      padding: 40px; 
      background: #f5f5f5;
    }
    .success { color: #1DB954; }
    .container { 
      max-width: 600px; 
      margin: 0 auto; 
      background: white; 
      padding: 40px; 
      border-radius: 8px; 
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    .token-box {
      background: #f0f0f0;
      border: 2px solid #1DB954;
      border-radius: 4px;
      padding: 16px;
      margin: 20px 0;
      word-break: break-all;
      font-family: monospace;
      font-size: 12px;
    }
    .instructions {
      background: #e8f5e9;
      border-left: 4px solid #1DB954;
      padding: 16px;
      margin: 20px 0;
      border-radius: 4px;
    }
    button {
      background: #1DB954;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 24px;
      cursor: pointer;
      font-size: 14px;
    }
    button:hover {
      background: #1ed760;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1 class="success">✓ Authorization Successful!</h1>
    
    <div class="instructions">
      <h3>Next Steps:</h3>
      <ol>
        <li>Copy the Refresh Token below</li>
        <li>Create or update your <code>.env.local</code> file</li>
        <li>Add the following environment variables:
          <pre>SPOTIFY_CLIENT_ID=${clientId}
SPOTIFY_CLIENT_SECRET=${clientSecret}
SPOTIFY_REFRESH_TOKEN=&lt;paste the token below&gt;</pre>
        </li>
        <li>Restart your development server</li>
      </ol>
    </div>

    <h3>Your Refresh Token:</h3>
    <div class="token-box" id="token">${refreshToken}</div>
    
    <button onclick="copyToken()">📋 Copy Token</button>
    
    <p style="margin-top: 20px; color: #666; font-size: 12px;">
      <strong>⚠️ Keep this token secret!</strong> Do not commit it to version control.
    </p>
  </div>

  <script>
    function copyToken() {
      const token = document.getElementById('token').textContent;
      navigator.clipboard.writeText(token).then(() => {
        alert('Refresh Token copied to clipboard!');
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
	} catch (error) {
		console.error("Spotify callback error:", error);
		return new Response(
			`
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Authorization Error</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; padding: 40px; }
    .error { color: #d32f2f; }
    .container { max-width: 600px; margin: 0 auto; }
  </style>
</head>
<body>
  <div class="container">
    <h1 class="error">❌ Authorization Failed</h1>
    <p>An error occurred while processing your authorization.</p>
    <p><small>${error instanceof Error ? error.message : "Unknown error"}</small></p>
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
};

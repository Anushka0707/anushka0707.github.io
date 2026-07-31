# Anushka Singhee - Personal Portfolio

A dependency-free responsive portfolio built with semantic HTML, CSS and a small configuration script. It can be deployed directly to Netlify or GitHub Pages.

## Configure

Open `site-config.js` and replace:

```js
githubUsername: "YOUR_GITHUB_USERNAME",
email: "your.email@example.com",
linkedInUrl: "",
resumeUrl: "",
```

Repository links are generated from the GitHub username and the repository names used in the project cards. Change each `data-repo` value in `index.html` when a repository uses a different name.

## Preview

```bash
python -m http.server 8080
```

Open `http://localhost:8080`.

## Deploy to Netlify

1. Push this folder to a GitHub repository.
2. In Netlify, choose **Add new site → Import an existing project**.
3. Select the repository.
4. Leave the build command empty and set the publish directory to `.`.
5. Deploy.

A `netlify.toml` file is included, so Netlify can also detect the publish directory automatically.

## Project repositories expected by default

- `rover-wall-finder`
- `dynamic-pricing-bandits`
- `bee-routed-chatbot`
- `gremlins-game`
- `disease-prediction-system`
- `processing-video-frame-extractor`

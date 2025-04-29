import { css } from '@emotion/react';

export const globalStyles = css`
  :root {
    --background-color: #ffffff;
    --text-color: #333333;
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --border-color: #dee2e6;
  }

  [data-theme='dark'] {
    --background-color: #1a1a1a;
    --text-color: #ffffff;
    --primary-color: #0d6efd;
    --secondary-color: #adb5bd;
    --border-color: #495057;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    line-height: 1.6;
    background-color: var(--background-color);
    color: var(--text-color);
  }

  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  section {
    padding: 4rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  a {
    color: var(--primary-color);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: var(--secondary-color);
    }
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
  }
`; 
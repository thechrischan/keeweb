import { FunctionComponent } from 'preact';
import { KeeWebLogo } from 'const/inline-images';
import { Locale } from 'util/locale';

export const StorageOauthResult: FunctionComponent = () => {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <title>KeeWeb</title>
                <meta name="viewport" content="width=device-width" />
                <style>{`
body {
    height: 100vh;
    min-height: 100vh;
    background: #ffffff;
    color: #242424;
    font-family: -apple-system, 'BlinkMacSystemFont', 'Helvetica Neue', 'Helvetica',
    'Roboto', 'Arial', sans-serif;
    font-size: 16px;
    line-height: 1.6;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
@media (prefers-color-scheme: dark) {
    body {
        background-color: #1e1e1e;
        color: #fcfcfc;
    }
}
img {
    width: 96px;
    height: 96px;
}
h1 {
    padding: 20px;
    font-size: 32px;
}`}</style>
            </head>
            <body>
                <img src={KeeWebLogo} alt="KeeWeb" />
                <h1>{Locale.appBrowserAuthComplete}</h1>
            </body>
        </html>
    );
};

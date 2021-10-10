import Document, {DocumentContext, Html, Head, Main, NextScript} from "next/document";

export default class MyDocument extends Document<{}> {
    static async getInitialProps(ctx: DocumentContext) {
        const originalRenderPage = ctx.renderPage;
        ctx.renderPage = () => originalRenderPage({
            enhanceApp: (App) => App,
            enhanceComponent: (Component) => Component
        })
        const initialProps = await Document.getInitialProps(ctx);
        return initialProps;
    }

    public render() {
        return (
            <Html lang="th">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

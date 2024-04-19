import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <title>Venu Mallik</title>
      </Head>
      <body>
        <Main />
        <NextScript />
        <script async id="slcLiveChat" src="https://widget.sonetel.com/SonetelWidget.min.js" data-account-id="208509834"></script>
        <script async id="sntlcallusat"
            account-id="208509834"
            default-number="13025202689"
            add-numbers="919885920369"
            exclude-numbers="EXCLUDE-THESE-NUMBERS"
            src="https://widget.sonetel.com/SonetelCallUsAt.min.js"></script>

      </body>
    </Html>
  )
}

<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:output method="html" indent="yes"/>

  <xsl:template match="/">
    <html>
      <head>
        <title>Notícias da tradução</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link href="elements.css" rel="stylesheet" type="text/css" media="all" />

        <meta content="A Casa-Do-Contra" property="og:title" />
        <link rel="icon" type="image/x-icon" href="https://file.garden/aPLVV7Bv-XUF9QCk/a%20casa%20do%20contra/ch1/favicon.png" />
        <meta content="Notícias" property="og:description" />
        <meta content="https://lucastheguy.nekoweb.org/TheBackwardsHouse/ch1" property="og:url" />
        <meta content="https://file.garden/aPLVV7Bv-XUF9QCk/a%20casa%20do%20contra/ch1/favicon.png" property="og:image" />

        <style>
          * {
            box-sizing: border-box;
          }

          body {
            margin: 0;
            padding: 10px;
            font-family: system-ui, sans-serif;
            background: black;
            color: white;
          }

          ul {
            padding: 0;
            margin: 0;
          }

          li {
            list-style: none;
          }

          /* Page container centers header + cards */
          .page-container {
            max-width: 1000px;
            margin: 0 auto;
            width: 100%;
          }

          .page-container h1 {
            text-align: center;
            margin: 20px 0 25px 0;
          }

          .pre-pre-post {
            width: 100%;
            margin-bottom: 15px;
          }

          .post-box {
            width: 100%;
            background: #111;
            border-radius: 6px;
            color: white;
            border: 4px solid #222;
          }

          .post-box-inner {
            padding: 14px;
          }

          .post-date {
            font-size: 0.85rem;
            opacity: 0.8;
          }

          .post-title {
            font-size: 1.2rem;
            margin: 8px 0;
            word-wrap: break-word;
          }

          .post-description {
            font-size: 1rem;
            line-height: 1.4;
            word-wrap: break-word;
          }

          .post-link {
            display: inline-block;
            margin-top: 10px;
            color: inherit;
            text-decoration: none;
          }

          /* Link grid button */
          .link-grid {
            max-width: 1000px;
            margin: 20px auto;
            padding: 0 10px;
          }

          .link-grid a {
            display: block;
            padding: 1rem 2rem;
            background-color: #222;
            color: white;
            text-decoration: none;
            border-radius: 8px;
            text-align: center;
            transition: background 0.2s;
          }

          .link-grid a:hover {
            background-color: #555;
          }

          /* Mobile tweaks */
          @media (max-width: 600px) {
            .page-container h1 {
              font-size: 1.5rem;
            }

            .post-title {
              font-size: 1.1rem;
            }

            .post-description {
              font-size: 0.95rem;
            }
          }
        </style>
      </head>

      <body>
        <div class="page-container">
          <h1>Notícias</h1>

          <ul>
            <xsl:for-each select="rss/channel/item">
              <li>
                <div class="pre-pre-post">
                  <div class="post-box">
                    <div class="post-box-inner">
                      <span class="post-date">
                        <xsl:value-of select="pubDate" />
                      </span>

                      <h4 class="post-title">
                        <xsl:value-of select="title" />
                      </h4>

                      <p class="post-description">
                        <xsl:value-of select="description" />
                      </p>

                      <a href="{link}" class="post-link" target="_blank" rel="noopener ugc">
                        <small class="post-author">lucastheguy.nekoweb.org</small>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </xsl:for-each>
          </ul>
        </div>

        <div class="link-grid">
          <a href="chlist.html">Lista de capítulos</a>
        </div>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>

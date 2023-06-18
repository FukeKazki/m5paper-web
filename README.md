# 構成

```mermaid
sequenceDiagram
  participant m5paper
  participant scrapingサーバー
  participant webサーバー
  m5paper->>scrapingサーバー: GET
  scrapingサーバー->>webサーバー: Scraping
  webサーバー->>scrapingサーバー: screenshot.png
  scrapingサーバー->>scrapingサーバー: convert
  scrapingサーバー->>m5paper: output.jpg
```

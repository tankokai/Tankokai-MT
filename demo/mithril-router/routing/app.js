//  tankokai.com/mt | Demo - Mithril Router routing | v0.0.0 

var Nav1 =
 m("header.bg-black-90.w-100.ph3.pv3.pv4-ns.ph4-m.ph5-l",
  m("nav.f6.fw6.ttu.tracked", [
  
  m("a.link.dim.white.dib.h2.w2.br-100.mr3.[href='https://tankokai.com/mt/']",
    m("svg[data-icon='facebook'][viewBox='0 0 32 32']", { style: { "fill": "currentcolor" } }, [
     m("title", "Tankokai MT" ),
     m("path[d='m16.264 1.8688c-4.1008 0-7.7186 2.3761-9.3317 6.1282-0.34356 0.79911-0.6604 1.931-0.74812 2.6742-0.05161 0.43714-0.06768 0.45925-0.58247 0.79385-3.614 2.3487-5.3575 6.8036-4.2924 10.968 0.43102 1.6853 1.2437 3.1367 2.5018 4.4671 2.9654 3.1352 7.4287 4.0207 11.461 2.2737l0.67934-0.29443 0.40256 0.19918c0.96258 0.47619 2.1952 0.85471 3.2584 1.0006 0.78225 0.10734 2.5146 0.0423 3.2881-0.12321 3.5813-0.76733 6.4264-3.282 7.5893-6.708 0.89504-2.6364 0.59471-5.8228-0.77076-8.179-0.71112-1.2271-1.9549-2.6086-2.9874-3.3179-0.36-0.24719-0.4114-0.32013-0.4114-0.58916 0-0.97165-0.63708-3.0419-1.2748-4.1424-1.8564-3.2033-5.1757-5.15-8.7818-5.15zm0.01637 1.4514c0.97588 0.002 1.3114 0.0389 2.0343 0.22715 2.0119 0.52434 3.6864 1.6461 4.9059 3.2856 0.7431 0.99898 1.3153 2.2876 1.5281 3.4412l0.07377 0.39965-0.70073-0.23811c-1.8502-0.62839-4.0018-0.68485-5.9331-0.15572-0.35464 0.0971-0.98072 0.32202-1.3914 0.5003l-0.74688 0.32429-0.55563-0.27969c-2.0665-1.0389-4.7275-1.2773-7.0768-0.63409-0.34938 0.0956-0.65859 0.15004-0.68731 0.1217-0.09557-0.0956 0.32551-1.3784 0.71165-2.168 0.94905-1.9407 2.7447-3.5745 4.7093-4.2853 1.1853-0.4289 1.8335-0.54089 3.1288-0.53843zm-5.8587 9.2236h11.156v2.0913l-4.3922-0.17537 0.33254 11.147h-3.0369l0.33255-11.147-4.3922 0.16668zm-4.362 0.31748c0.03538 0 0.1133 0.31975 0.17319 0.71079 0.38578 2.5201 1.8768 4.9799 3.9542 6.5231l0.61437 0.45627 0.05412 0.63405c0.24593 2.5311 1.8442 4.992 3.6077 6.7624 0 0.0797-1.0576 0.40162-1.7617 0.53636-1.4701 0.2812-3.3124 0.10204-4.774-0.46421-2.1436-0.83044-3.9719-2.6364-4.8461-4.7879-1.1517-2.8341-0.71611-6.1607 1.1184-8.5448 0.3806-0.49455 1.7367-1.8262 1.8598-1.8262zm20.239 0.30312 0.72881 0.73554c1.209 1.2203 1.8992 2.4402 2.3287 4.1171 0.23287 0.90925 0.28123 2.7619 0.09478 3.6295-0.29803 1.3867-0.83256 2.5685-1.656 3.6613-1.2555 1.6663-3.1937 2.8614-5.2823 3.2575v-0.00046c-0.86454 0.16441-2.4141 0.16366-3.2458-0.00053-0.33323-0.0658-0.90286-0.22299-1.2656-0.34885l-0.65915-0.18898c2.0309-2.0084 3.4014-4.001 3.8929-7.205l0.61183-0.3896c0.7996-0.50918 2.1732-1.8644 2.7191-2.683 0.82319-1.2343 1.3923-2.6093 1.6237-3.9236z']")
    ])
   ),
  
  m("a.link.dim.white.dib.h2.w2.br-100.mr3.[href='https://tachyons.io/components/']",
    m("svg[data-icon='twitter'][viewBox='0 0 32 32']", {
     style: {
      "fill": "currentcolor"
     }
    }, [
     m("title",
      "Tachyons.io Components"
     ),
     m("path[d='m13.456 20.59c0.08802 0.28226-0.95188 2.1046-1.098 2.3603-1.1413 2.0179-2.7141 3.7139-3.5039 3.2551-0.94732-1.0089-0.20544-3.8806 0.11185-5.2981 0.90728-4.0092 1.8336-5.9446 3.1113-9.6855 0.12098-0.36066 0.20772-0.99525 0.53872-1.2258 0.33099-0.23055 0.87427-0.22827 1.2372-0.29447 5.7267-1.2449 12.225-0.63641 17.798-1.8513 0.30132-0.08902 0.38806-0.26479 0.33327-0.50676-0.03232-0.30848-0.08957-0.61384-0.1712-0.91308-0.14838-0.3561-1.7189-0.15751-2.5498-0.08218-5.3828 0.61794-11.375 0.77265-16.209 1.7668 0.32871-0.72818 0.66655-1.518 0.50904-2.3032-0.01899-0.09387-0.04493-0.18619-0.07761-0.2762-0.26708-0.73731-0.96558-1.2372-1.6983-1.4518-0.61404-0.18033-0.52958 0.24196-0.77612 0.73046-0.49701 0.94724-0.95112 2.0661-1.2783 3.0314-0.011377 0.07469-0.034488 0.1471-0.068481 0.21457-0.12036 0.14664-0.30685 0.22226-0.49534 0.20088-2.7822-0.00769-5.3241 0.5412-7.9643 0.81492-0.22827 0.0137-0.45654 0-0.68481 0.02283-0.15018-0.02337-0.30146 0.03488-0.39719 0.15294-0.34697 0.28077 0.13011 0.87427 0.34012 1.1413 0.45654 0.58665 0.72818 0.49078 1.3924 0.39491 1.9766-0.44349 4.122-0.41352 6.1313-0.46338 0.14153 0 0.37436-0.12098 0.45654 0.05022 0.029309 0.2322 0.025466 0.46739-0.011414 0.6985-1.4891 4.6418-3.0385 9.901-2.6867 14.267 0.10044 1.098 0.42915 1.4883 1.3902 2.1868 0.58209 0.4223 1.5568 0.5136 2.2599 0.36523 1.1137-0.25195 2.0545-0.99237 2.5612-2.0156l2.3352-4.5311z']")
    ])
   ),
  
  m("a.link.dim.white.dib.br-100.h2.w2.mr3.[href='https://flems.io/#0=N4IgZglgNgpgziAXAbVAOwIYFsZJAOgAsAXLKEAGhAGMB7NYmBvEAXwvW10QICsEqdBk2J4A9GIAEk4hjQBrWvIwR8dLGKzFJAH0kARGFlqSAtJICyEYoQBO0SQCVaAV0a3Jt18QhoA5rqSAG4ADPhhIZIAOmgxQRgeAHIYQQCMkgC8MZJYABRRIIQwGAAmMLb4AEZ+ppVQGNTypgCcYQDupqkhYQAOhADM+D1Bg8MALKZocEOEE1gzAKymUAUU2Tn5IJhB+GAAbLttB8TELvjEtg3yMCWrksjr63kFGPhQvvL4JRDzbYTWMC+EEqRAATPg2uDKrZOt18FhbINkHYYGAMgByEjEHpwRASWQKJQqNS0DRaMTogC6q3W0meIDgQT8yBKGFkpggQgxYAaMEqtCUVOQQQgMDaACFaAAPDGRSL9UGSBVUu7ASRwYgAT1giEkaoKkCgKyQ0RoLlsthEdCgtFsBUkrAdFHutLpmx8xFgdwKABU5IplBBLD77QBKNZoaRR+k9NmEFkYrCpA6gvZjSSpfAADj2Waz1FMY3wXRCWckIVMAHZ8JXUjnJOD+pW9qkWvh+v1UpXJAdUqCs6DTGF+mN+gs9uWa81mqlW2E9nsQunM81O0Oa2Ms32G-g9pWxoOIgtk+kwqPaxMInvc5OxgtmqClmEFgOxt2wpXV1mloMW+nG5ulamAs7YLJWCw9tmIT9Hshb4KCD7LmEzQ3menYhIqma5gs-QZvB55KsWMHduCCwhHWkhFmMe7pOCKELOmgypGOirVgeWbdkWGEhN2s74NRtHwZWTZQPOn4juuCFjKOt4YeOk6pNOdbUMheyPmWZ7NopO6KQsiphN+b7pIM6nLuE3QTh+A6PgpPEjjux7UZOS6grhJl5nOxauaCxn4C+zHrs2wm4QcB5pqY7msX5WarqYByVqWk4xWREzgnsMHps+zRGcB2agv2gUJc2phZsWn6BbOfadPBoK1tVzQMc0phpaWsF0RxEyDJ25XDrBYSgkZTVnrOl7tqC5H9OuYwjeuL4zpZ67NLWexPruTalhF4TTU1ma1ZucGpAeEyZt+4UmdBk0gV2YG5akSylZWW5ZrdCwAF5YBEyZNnhd6HSp+BLS+GnmZh7Yjc5-QxTu0Eyf1tV3dDs7NJOemjoxu45mZaYtpRAMhPehH9vJH6jqeAPNDFZaZp2OE7v2zZ4XpW6EdJfaieEwmVu+7bTitgXdMJkmQ7OBYnWRh67v2-RNVx5HPfOWabksIGrmuYR3WBEtjtRmXhEtnkUzx+ljeNg7UzOutkdBUCBdReaTgqB5DX5CzjpN-WfnszQFuCIQLksmbQTFcGVrVAdCYL1Y8bm67pWMITOyOX7OQ1fW7i+BPq1bo25sJZN9l264J67QERKnDuPse1VNork61smSzgsmwPZa04fZTxO77m+m1gXeuMJbFRZE7hmZ1jhU39sjJ0dqtDGlsjTH9vLfmQ6O725d+HGSM0NUwYQfF3XsQS+zO-Q20W0v5eu13fcOCoMRmY9voQm3QV77MdpXnTP0Bl8PsbZMC4swb0vmpB2XZNz-WgjhDSClmK4WHIpcCCk87Iw-F0T8DtvyPQcuNdIJ1mxliLEtachEGoHkgnpTs7M-x334uOWqzkGLbnnCOfG-0Br3lwqRTsBDszSUVCQh8hFFxc0gs2Aa5ZnKfiAoHMCll+LkTUtVLS3McLpVgpmN85FJz9iql1PsusujjQmEWLmo0dY+WasWUcacsz9CXJ1AGtYmppQynBRWLYQ4cR2sWY8QFwQOOmhVFsrZexiLwrORWJU-LSWBpDP2U1squzwsJPc1UBzgLFhTTJqZQTvXGvBaWDtoKsJrMvMmwlXZjGoLtBOeF8rQTwjFER4JpIYR3AqbeRZZy1j0d07mrQHwQX6luVyXcWzoL1m+Msv4EKrQQlmZp1Mcyl2zA-CcpFsLVRWhOX8LZJq7VdhBLCC5JpMVXCRbMf5cr9gmSZMCCwghF26NRAsBk0yP3VmmEJ7TDr500bBEyd4V7dHxu7dsX9IV+xfItDCOZJL5WnNVVM451wjjzAsG2857x3RvnmCm1BfaOLceZWugx46HTgt0XyMUEJVngvjWh0TIWQxQv9T8KFZoJwok3YSZsbnSS7opVsaUHFJVcopVFI5R481cjYxcq48JqSbJtB8MFXoqhAKGV0lJdWRmkOGR4hr6SvHeAoIEvx-iMCBCCQg4JIRVBhCWeEiJ8DIktGiTEJwcR4jELIaghBNT0GmBAWgYh1A9HoCIOAFJqSUFdPSRkzJWTsk5PQDExA2jWHcEKEUYpJQynRHKJUiplQJudMAV06otQ6j1DW00hpjS6gKNQc0loGDWltAUGtrBXTsBdIa6M7prBekTcOqMvoGjBtDfgcNkgADCpJo1oFjb2ydkhjWbpjHGBM6IkyUvkkU+80C8ydLGflNODU6xlibkuLRes73tkXEc2xzFEblXBBeXytZpa92goveCrsDZvgVNVbowd+r42kptc9ijKrfjuRTMmrRQ7PVliImeMFcrZSckxWck1d7YVGV5BOK8YJ+0UeNLmEtpx6VI7A0OqL1IO1Jc7Vy+NSMdVqkigcvFinMf6nh7sIFQ4ZN2tJae4J8qrU0dNDM1ZPzPTFh+4cE0JYLwve2eDkk0xYPvgqdZZFrxFwVOB9TiswXJXWYcmJ6tax0eYhtdWm5IYYvHK2TMtYoP+PAmKuJuSIgDjrLlSG-ZJwtk-MdamKCPziYDimBp3ngEVw4p5dDFF5z+3DseYGZFWipXbNBTTdYUVl0huspxsV1Y5mlRELm3iPYqP6nuFzNYmxqwBitOFu0myCq9g46qv0V5-iXASi6s0FnAwGopNOjXynCQfckhKqG3wDUWsebcvsFxeaEhKwYZTRrkWYuIhr1FnYw03MDQ6dUrxWbJj5O86y+zvwUtRcK6nsJ6PyqmZJOFdbjVLM9b91lXnNiaiBR2ZMWGDmrChWG2ZDoPj40wz6aqzzjm+bHB7zl8pDaznLIurkMfFcOoomGeYMX62mXdKSGKLvc37DxbmznZxJX3Gj9sVLQYAsQQwlalscwrTrvo4GYw0NU3lbraWEv+FLQXFNNGyNenX2GixSCzEApnnSpDd7d1EEO33Dh9W40Ka3ix7rfGGFjYYVXA0-qCpbePg+7ePc-7PoAt1oN8Om4Zy4zTKFw7kMIK71aAF3Me4MzDyj+rN5ZlyO3gQgjbReY5XS06U3HM+WBwO-4vlOVrtUJ+WYls4DZDerUKiadySx4GrQwYqtacrlrmecHL7I+UBGwsTgjhWcWqE0GqjJIfVtJt3SCeJsc1HwrUQhtYCb4IJoSwjCA6iE4IERIhRN6gAxNqiMw-k1MhZGyDAHIuToj8NYQgLhKj5tFBKaUsppEKjLfvhtm6NTahgLqatm6m3QAtqmjtoWhWi0A2h2ggB9oDrOgPA7qjqegwA0j-4GiwBYDTC0BBgAAK9QmofgXgLgaAtwUBm64+h+mwsYNg+6WAnYq8E4h02YQ21YXCjKXCHytiQmHBWsek5EQsMEnk44tKfBLYr8BkyyGEosxYS45YNirUpGRU187SCo-C4EuYNs1MC46YquEu7BXQxMY0tKCknYxsK09yt4CUCmuK9ya+o434-0HYi4p4KMmWFcKEZM1EocZM2MB4OKLiZhdEnY-QuhwOFcyhU0CcOMz4HSGWPBxsDEVKr8aU3C7BI4s2Mh84VieiXY82sRKM0R6hAML46YKsS4qQ7Bjh2SUE+0K4ekhEdYISByCmgwue0yTYrMRu7RYkekxsa8uiyEr2PRis5EhAUcHY+Y-Us4Pk0iw0+iRcDicRi4vBju-BUAfEMEAcGhCw-0YSauu4h0lC84kxA2fYYKfsRWnGb0WAnQpUak6MIW-0ehGKhc6sFmu4o4U0n2bx-QiROmwkKRqYlhs0ixnkCoQhmOWkscjiPhyEzYGENi2UfxceVOw43k7hERAh0RdcsRs00Ra+QM3sw4R0ThGRaYEsPkDMH42JURVKqxhRekm8Z8-094isgqyyUuDUg4lyXsoi7ucGHY6ybRISw43cnke43RGKQxBsAxEpCRcU5M+U7BPkBc6R-EJxZMpYrxghfRxSKxP8L6vEGhoI5R2RJhJpscJpKqik+kdMMEzQUAzB-cDpWxrmoc72rpw4PBj2DhKMwJAy+8Bka8RpY8Rs0ivsOYq0tYLkO4o4E8KWA+BQQ+UYo+w6ZB0QhqyZW6MQWZaA8QHgAAMh8JkDEPSN8DsMQNQEMJUP0HcHAW6C8G8DPt8PMKyLYE0JaCULsAcGAEsFMHam6v0J6qiBiDvgAITxrIAeiwAYgAASpIMA++tIBQs5OAG6RqB+Gw9ZFqnwTZXwCQbZNwnZuwPZ0wi+-Zg5u+Y5GA-IbgQok5MAGIAAgtecQAucOgUE+d4KuVuuuWag2ZajuS2fuR2fsEeZMCecCGedvsOWORqLaPOZSBOWOveeiAAMrEBwWvlTogBoVwVflkG-lbmz6AWmDtmHndlgV2rnnQWRr0CBovkIV3kYjLoMAND0XIFYXMV0V4XZDJlxAJCSDLkwBFloD0jbBDAYCjAYATBTA1nZAEWNk-BVD1CNBVC7CZhgCmBFClAWowAUXllfAghYBVnwiVDSVwBUXoh74MVIUzlzmYWmiCWSBYEYB+BIEkFrnrAFkKDOgT5oC8WxA5n8UfluDCWiUpDiWSVmWyWRjyX-mKV1BXCqVgDqWaXFAlA6V6UVklCGXGVGVmUWVWWIWIG2U4D2XvnPlOUuVuXZDj5eXyARj+V8UeA4WWihWbBiWxiRVgXRUbkgDT5xXzAJUqUgjJW7CpXaW+C6W9n6XZUmWDB5VgUFW3k2XoiCVlXYXoWtXOWuWrm1UfANUGrZm5lLq0WsVtUFAdUSXiVRWUBDq9X9XbnxXKWfAjUpVaXpWTWZUGVzUmX5VQWWXLXFWrV2WVqPAgCcVnXbXVWRh7XeUxCNUBUSDSB5kYAhpuBwAGBGC0BNWVWuXpAZAf7BAP66hgCEHUA+D0C5ChiE2eAwCnC2AxWbBYAqCxC3W1nSDJBpDrkCVznrkZn9poAC1HX8VQ2KgE1-5E1igk1k0U1oBU002Wj02M0FDM2+A9Uc0pCpDc3BXEB81D4C1C0BXHVQ24Ti3ZAFptDS1oDk3hpy3U0S201K29Wq2s2wG0ic1a20gtUwB63ZAG3Zk41Q3phm2RgW1W022U323rCK3mjK0gAu3q2SAe3c0Q3k2+2Rj+0BUxBI3OBuDlDFn4AEGMC5AlC0Dto4AMBVC0AlCajOgFBiCqiuj10FC6hQ2e2Tr11Xmfkmii3c2mhiCwWWgt240wD9B9311CBcU91VVjAxCsCHVoCUAMgwCwAR1TB4CHQLCIAhBsAcBbBcB4BqBwACA0C0UiAsCsCUhUBbkIAoCcA4B4BYDX72BQD4D8BL3mjkA8BYh+oSCEE9DyB+AkhkjP3QAAACY8u4mgoDr979VAWoPQ3ADI1A9gPQog7A99SDgas6vZT9aAR9J9n9eAP9uIf9aAADQD6gAaM6IaUwYDvSEQkax91DQatD0weDBDS9CDSDX+sAbAV9+9D9PABIAYxIVDWggQhgxgZglgMDTg3g5Qng3gvgAQegoQ4Q4QkgbAQAA']",
    m("svg[data-icon='github'][viewBox='0 0 32 32']", {
     style: {
      "fill": "currentcolor"
     }
    }, [
     m("title",
      "flems.oi Playground"
     ),
     m("path[d='m31.536 14.883-7.245-7.245c-0.1472-0.1472-0.35201-0.23361-0.56001-0.23361h-0.88002c-1.104 0-2.0865 0.70722-2.4321 1.7568l-1.3664 4.1249c-0.1056 0.32001 0.1312 0.65282 0.47041 0.65282h2.4385c0.33601 0 0.57281 0.32961 0.46721 0.64642l-0.97282 2.9313c-0.1088 0.32321-0.40961 0.54401-0.75202 0.54401h-2.6593c-0.34241 0-0.64642 0.2176-0.75202 0.54401l-1.9584 5.9041c-0.60162 1.8048-1.952 3.1841-3.6641 3.8209 0.37441 0.37441 0.67522 0.38401 0.91202 0.38401h7.0338c0.21121 0 0.41281-0.0832 0.56001-0.23361l11.365-11.365c0.61122-0.61442 0.61122-1.6128-0.0064-2.2305zm-18.624 3.821c0.105-0.317-0.132-0.643-0.464-0.643h-2.3873c-0.32641 0-0.56001-0.32001-0.45761-0.63042l0.97602-2.9473c0.1088-0.32321 0.40961-0.54401 0.75202-0.54401h2.5889c0.34241 0 0.64642-0.2176 0.75202-0.54401l1.9552-5.8913c0.59842-1.808 1.952-3.1969 3.6673-3.8337-0.37441-0.37441-0.67522-0.38401-0.91202-0.38401h-6.9922c-0.21121 0-0.41281 0.0832-0.56001 0.23361l-11.367 11.362c-0.61762 0.61762-0.61762 1.6192 0 2.2369l7.245 7.245c0.1472 0.1472 0.35201 0.2336 0.56001 0.2336h0.83842c1.1072 0 2.0865-0.71042 2.4353-1.76z']")
    ])
   ),
   
  ])
 )


var Link =
m("div.tc.pb3", [
  m("a.link.dim.dark-red.f6.f5-ns.dib.mr3[href='#!/'][title='Home']",
   "Home"
  ),
  m("a.link.dim.dark-red.f6.f5-ns.dib.mr3[href='#!/about'][title='About']",
   "About"
  ),
  m("a.link.dim.dark-red.f6.f5-ns.dib.mr3[href='#!/store'][title='Store']",
   "Store"
  ),
  m("a.link.dim.dark-red.f6.f5-ns.dib[href='#!/contact'][title='Contact']",
   "Contact"
  )
 ])

var Home =
m("nav.pa3.pa4-ns", [
 m("a.link.dim.black.b.f1.f-headline-ns.tc.db.mb3.mb4-ns[href='#'][title='Home']",
  "Home Page"
  ),
  Link,   
])


var About =
m("nav.pa3.pa4-ns", [
 m("a.link.dim.black.b.f1.f-headline-ns.tc.db.mb3.mb4-ns[href='#'][title='Home']",
  "About Page"
 ),
 Link,
])


var Store =
m("nav.pa3.pa4-ns", [
 m("a.link.dim.black.b.f1.f-headline-ns.tc.db.mb3.mb4-ns[href='#'][title='Home']",
  "Store Page"
 ),
 Link,
])


var Contact =
m("nav.pa3.pa4-ns", [
 m("a.link.dim.black.b.f1.f-headline-ns.tc.db.mb3.mb4-ns[href='#'][title='Home']",
  "Contact Page"
 ),
 Link,
])



//  Layouts Demo
var Page1 = {
 view: function() {
  return m("main", [
   Nav1,
   Home,
  ])
 }
}


var Page2 = {
 view: function() {
  return m("main", [
   Nav1,
   About,
  ])
 }
}


var Page3 = {
 view: function() {
  return m("main", [
   Nav1,
   Store,
  ])
 }
}


var Page4 = {
 view: function() {
  return m("main", [
   Nav1,
   Contact,
  ])
 }
}


// Router
m.route(document.body, "/", {
    "/": Page1,
    "/about": Page2,
    "/store": Page3,
    "/contact": Page4
})

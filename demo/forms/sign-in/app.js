//  tankokai.com/mt | Demo - Forms Sign In | v0.0.0 

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
  
  m("a.link.dim.white.dib.br-100.h2.w2.mr3.[href='https://flems.io/#0=N4IgZglgNgpgziAXAbVAOwIYFsZJAOgAsAXLKEAGhAGMB7NYmBvEAXwvW10QICsEqdBk2J4A9GIAEk4hjQBrWvIwR8dLGKzFJAH0kARGFlqSAtJIBitAE5Y4kgMoQA5mkkBJN3oBuABnz+vpIAOmih3hjWkgByGN4AjJIAvKGSWAAUwSCEMBgAJjDW+ABGzqbFUBjU8qYAnP4A7qbxvv4ADoQAzPht3t29ACymaHA9hENYYwCsplBZFKlpmSCY3vhgAGzrDVvExACu+MTWVfIwefOSyIuLGVkY+FAQCvh5EJMNhBCMrxDFRAAmfANIHFazNVr4LDWbrIQjWGBgJIAchIxDacEQElkCiUKjUtA0WjEyIAuvNFtI7iA4N5nMg8hhZKYIEIUWAqjBirQlGTkN4IDAGgAhWgADxRQSCnQBkhlZMuwEkcGIAE9YIhJEqspAoHMkCEaPtrAiGHQoDYspJWNaKFdKVTlsRvrBLlkACpyRTKCCSACy7qtAEoFm5pI6sm0mYQGSisPEtgCNgNJPF8AAODbp9PUUwDfAtXzpyS+UwAdnwZfimckQM6ZY28Tq+E6nXiZckW3iAPTANM-k6A06Uw2JcrtVq8Sb-g2G18KbTtTb-crA3T3dr+A2ZYGfcCUwTiX8Q6rQ0C26zY4GU1qAJm-imvYGHf8ZaX6Zm3UbKbra7LpimFspjLKZOwzXxOg2PN8ABW8F38WpL2PNtfFlNMsymTpUxgk85QLSCOyBKZfGrSR8wGbdEiBRCphTbp4mHWUK13dMO3zVDfA7Kd8AoqiYLLesoBnN9BxXWCBiHK9UJHMd4gnatqAQjY72LY8Gzkzc5KmWV-A-Z9Em6FSFwCVpR1fXs71kzjB03A8KLHecASwwzs2nAsnIBAz8EfBiVwbASsK2Xdk1MFymO89Ml1MLYyyLMdIuIoYgQ2SCUwfWp9IAjMAR7PzYobUx0wLN8-KnbtmhggEqwq2paNqUxkqLKDqNYoZujbEqByg-wAX0+rjynM8WwBEjOhXAZBpXR9JzMldairDZ7y3esi1CgIJvqtMqrXaD4l3IY0w-ELDIgsbAPbYCsviGYirLdd0yuqYAC8sECBN62w689sU-B5sfVSTLQltBoczpIs3CDJJ6qrrohqdajHbShzordM2M5NGzI37fBvPCexk18hyPX7aki4s0zbTDNx7BtsO09c8Ik7shICASyxfFsJ0WvzWgEsSwanXNDuIvctx7Tp6vYkiHpndM1xmQCl2XfxruA0XhwotKAnmtzSc4nThpGvsKcnLXiIgqA-Io7MxxlXd+u8qYRzGnq3w2WpcyBXxZxmNMIMi6Cyyq33+L5itOKzFcUoGXwHcHd8HNq7qt0fXGVfNoaswE4nu3bFdY6d-9AiT227wPCr6zlscqwTGYgQTAGMvqEOMs4zcd2fNbgOvLHYqi-N8awtNq0w8aewRw7WyW2iiwR+iexl7ywaHF6so-VjJFqSrIMIbjro2bwvcnTpLfzCWcpXC6PoHGVaNTYfn0INaIPdlnWzL5oH--M-bwNhNZ3TKvM+ylbbtjXD9CCmFVKyQYlhAcckQKyWzgjV8LQ3y2w-HdWyI1EiHQbMWfM80Jx4VqruMC2k2ws2-NfHiI4qoOVohuGcg4cY-V6jeLCRE2y4IzBJWUhDbx4TnOzMCDZeolgcm+f8ftgJmR4iRZSFV1Ic0wilKCaZnwkTHD2cq7VuxaxaCNIY+Z2ZDU1p5BqBYhzJ3TJ0ecbVfpVnqslVK0E5aNkDqxTaBYDz-iBLYiapVGxNi7MI7CU45aFW8hJAGYNvbjQyk7bCAltwVV7CA4WpM0lJgBC9EaMEJa2wgkwysC9iYCSdgMagW1Y7YRyhBbCkVBFAgkqhTcMoN75inFWbRHSOb1FvKBHq64nLt0bCg7Wz5ixflgktWC6YGkU0zEXDMt9RxEQwhVRao4vyNjGltJ2oF0KzjGvRJchEMzfiyj2UZhlgJTG8PnVoFFcy6WTHfFWyZAktL2jnNRUFDLXkXq0HGLsWzvzBd7R8c1UKZjEjlCcFUkwjhXIObMUxLYzhvNdS+2ZSbUC9nY5xJkq7dBjntaCrQvKRVguWGCOMqERLBWDRCP03yISmrHUi9cBLG0uRJduckmzJVsfFJyckkWDiHpzJyli5xLmwspesa1byQSegqEAQYHSki1WGSQIYbhhmpA8J4Lw3gfC+D8N4-xCBAhBCUcEhYoQwnwHCBESJUR7AxFiMQshqCEFVPQUYEBaBiHUG0egIg4AknJJQB01JaT0kZMyVk9AUTEAaN8Rg1g+QCiFKKCUyIpRyllPKWNdpgAOmVGqDUWoq2Gl1PqTUWRqDGlNMQc0loQBVtYA6dg9o9URhAM6Ygro42DukB6KoAag34BDZIAAwoSCNaAo1ZCrQaid1IozEBjHkOMDFaHrPShA7MbThk5WTrVasxZ67znUdrW9LY5z7KsQxOGJUgSni8lWCWXcIJzxgk7XWz4ZQVVaAHHqOMJJrTPXIsqH5rmk2JvUIOD0paCMnpBLKGV7L0SnGNLeGEhnuVjovSC3s5EjXZqLCc2kSNQKDkilStsiUOycjjEjrUqrwt7FxApTGeq4Y7IBIOqStoSQnkCHKS01ETVTBWN8D1hbvoHKNUWs9z0tjg2JZM6Cb4yhWcRC8+cZRgbU3LYFCUVl7MiSrKstGGKrRVmuMGqKRxNjTFWSDPiQLCuiVkwIvZqxZTBj2McjY3wHQpog18YnfaJlqV5gBpdWJuTQ6RGcPsQ4HgBsReoSUWwQQ09WRFxcwYrPsVFFWmYJWBHZh412iierbmc5WesytfqLWhVtesfL3a2Iql9Re355y4tOlNWZANepyWTg1kpAl70JNiih58vU5oHg3F7Wcnn+Kiu6MUoaJEGIiPqxRB2kM1wAz2tVc8lniaeWvCs7sL9ZIURCmpjC2icpJgSZhLWI0iwPS-RZJ5DZ6qATtsTRhfYKyIShhmPat5eP0Lesq48I4PlR3uw5HKg307S3zk5dHRW9pyMhtmVFOsJnXXEqi87HMeycQ5k5qc8Udyo5bOSoGvy4FHo+RFH21cdEAwGKh8mMqtYSzFzw+as5xrIwRl0i+A1GJgQYr5Y8KUwZveunA22O5sMqxGqTK8mOtY41QgbVCS5ak9RlNbu872rzbj-W9X5WsBshzXJOLGyYQsHbBqBLe9R-NZm3KmAeEeVbPOMmRq8sFYYaOzNKiWbT66Zjy72O3PEcrSqdkhbyDF1lAeIV1Ch4STtiQPLVCGtEloTichcjzfYvb7ygHWRi0FMJTnVbG3V4ZJA6spJuydRrlgmuePIX4FrvgwF+P8MEEJ-C2uBECaEsJ4SIhRAAYg1aGQfCa6QMiZBgFkbJkTOG+IQfYxRc2ChFOKSUEiZQlv33WidKp1QwE1JWidDboAm1DRW0TQRBO1rB10J1e1B1+1rgt0nQXQYAKR-8dRYA7B8BaBfQAAFSoVUZwawWgfYNAC4btCdUfQ-ZYHdPdOMNsJeUcPaDMQbCsdhOldhV5KxQTDg9WbSEifmSCNyEcKlPgxsJ+XSBZVCIWAsecEsSxJqEjfKC+FpGUHhECLMS2CmWcFMZXMXdgloAmYaKlWSNsA2RaG5K8WKeTLFG5VfIcD8H6VsOcI8RGDLUuRCYmCiIOYmDGXcTFRxMw6iNsToXQoHUuZQ8aWOTGB8VpdLHgg2WiclJ+ZKDhdgwcGbGQmccxbRdsObWIxGaI9Q36R8FMRWeceIdgxwjJcCHaRcbSPCasQJXZeTbobPCZesJmA3do4SbSA2ZeLRBCF7HouWEiQgcOVsHMHqKcTyCRAaHRfOWxOIucXg+3fgqAbiSCX2DQqYH6YJFXLcPaMhGcSY-rbsYFb2QrDjZ6LAZoIqZSFGYLH6PQ1FPOFWczLcIccaD7N4zoRI7TASFIpMSwqaRYtyGUIQjHdSKOOxHwhCBsVCSxDKP4mPSnAcDydwiIgQ6I6uWIqaaI1ff6D2AcfaJwjI5MUWTyWmV8bEqI8lVYwo7SNeY+H6G8OWPlBZCXWqPsM5d2IRV3WDVsFZNowJAcDuNybcbo1FIY3WAYiUhI6KEmHKdgzyXOdIniE44mIsV4wQvogpFYz+Z9LiDQgEco7Ikwk0qOE0xVOSHSamSCWoKAZgnuB0rYlzION7V0gcHgh7BwxGYE3pHeXSZeI04efWCRL2TMJaKsRyTcIcUeZLPvLIAfcMYfPVcgkIMMZM-VUILMsINACIKIQwYwZIUIakLAFQNAHoDAfMCoU4QqfwLQKYZApYHUGwSYHADAOAY0efagEQQoS4OAodSAGAKAPIOAGAYgEoB4YoUwUwY4OQOAKMdtMYOswgXwZACAfdZEOAFwNAAAfX2DaHf37KHVgGcCYDyHWHzDAB2CXKhBXMbPDCyCcFcA8DCFIPDFTOpDeDWC0E6D7PjWWEqGKCHNeH+CvK2CgCfjoDaFVHWA2GQDABsBRCMBUEtnyDyARDgDgH3yrSyAAFFSzoBIDB9UymyQBng2h9hxyowgRyLKLTAMKxyJySgyhZyRgFyRAiBaBvBChygyhqzqhOLuLwRPg59gRl9kA1Q2gYAkKCKoA+RMAcAZKULTA0KMKsLSQ1yNzkLoAVK8h0L4B1KEzKQdUD8h0vyoQ+g-zB1qRALgK8hQLryILTAoKYLNh4LELkQoxMKGgbA8hsKJ0sgsD2y4AfLrASCHQSLqRaLxz-hqK500AKLiB6L4BGLihJyWKTg2LIgOLCAuKeLShyhKgBLcqhLTARKfgmhCwJLVQpKUQvKQrfL5KuA6rgrQq-KNL1yWrvLGr+9jKPyAKMAgKoAKy6yMB-AnKXLYKehMDhAIDKAB0KCshorqrarkR-UYBqhuQxQNUSKsgAAlIwIwICqIHAIi6QDMofcgz8iAbwe80i6KkoMYfoQ+eKxK5K0cmKyc6c-i6fAq1i+c7KhgfAfA2gBoaa54bNKa61Fa6Szc2-LAb4XNDAKAfYWGp8twZ4HaxYK65Ycyia2gaCqEYgX8+ao80ih4TYR4KfGfEoIq6feyt1bfZEHfXwfywfR87cyQfcs6-VUy8mqa01em94Wm04ECxmj1Fmtmh8kAKwawZwWgbQQNY0SQeqtqgAfh5sTIzOTN1WzIkGkAABkMAlbiB7ACzaBwhIhJAgrTzkgP9JA80GhNQwAiDqBnR6B0ggx7bJAEQDhrA3ASyyyrLwxYgEg+bzbTKMzoDoC9apA9rCDs1iz8ACDKKYB0g8haBW0cAgbuQ8hVQ7QsgxBFRUhC6shNQbaYBQxWBda0BKAaQhyNr3aRg8AJxEBfA2AOAVguA8A1BMK66hBGBmAeA2BSQqBBaEAUBOAcA8AEbd1rBoB8B+A67jRyAeA0RvUJAiC2h5BnACQiRr956oAAABYeLcTQA+hepeqgSS7gGkageetoUQdgKe2+v1GdEYKEZ4XugQEAFevAdezETehKneve31adQNEYI+rpQIMNTCsB-1CB0YBG8s6gPu6+mq2+r-WAEeqgBS1+r0PEVQdQTQbQPQc2swSwFs+wdGl83QB2wIAISQNgIAA']",
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



var Demo =
m("main.pa4.black-80.mt5",
 m("form.measure.center", [
  m("fieldset.ba.b--transparent.ph0.mh0[id='sign_up']", [
   m("legend.f4.fw6.ph0.mh0",
    "Sign In"
   ),
   m("div.mt3", [
    m("label.db.fw6.lh-copy.f6[for='email-address']",
     "Email"
    ),
    m("input.pa2.input-reset.ba.bg-transparent.hover-bg-black.hover-white.w-100[type='email'][name='email-address'][id='email-address']")
   ]),
   m("div.mv3", [
    m("label.db.fw6.lh-copy.f6[for='password']",
     "Password"
    ),
    m("input.b.pa2.input-reset.ba.bg-transparent.hover-bg-black.hover-white.w-100[type='password'][name='password'][id='password']")
   ]),
   m("label.pa0.ma0.lh-copy.f6.pointer", [
    m("input[type='checkbox']"),
    "Remember me"
   ])
  ]),
  m("div",
   m("input.b.ph3.pv2.input-reset.ba.b--black.bg-transparent.grow.pointer.f6.dib[type='submit'][value='Sign in']")
  ),
  m("div.lh-copy.mt3", [
   m("a.f6.link.dim.black.db[href='#0']",
    "Sign up"
   ),
   m("a.f6.link.dim.black.db[href='#0']",
    "Forgot your password?"
   )
  ])
 ])
)


//  Layouts Demo
var Page = {
 view: function() {
  return m("main", [
   Nav1,
   Demo,
  ])
 }
}


// Router
m.route(document.body, "/", {
 "/": Page,
})


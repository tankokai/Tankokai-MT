//  tankokai.com/mt | Demo - Layout Five Column | v0.0.0 

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
  
  m("a.link.dim.white.dib.br-100.h2.w2.mr3.[href='https://flems.io/#0=N4IgZglgNgpgziAXAbVAOwIYFsZJAOgAsAXLKEAGhAGMB7NYmBvEAXwvW10QICsEqdBk2J4A9GIAEk4hjQBrWvIwR8dLGKzFJAH0kARGFlqSAtJIAyGAJ60ArtoBiEAG4xJAYVpQ7WNLskXAAZ8EKDJAB00KJcMACdJADkMFwBGSQBeKMksAAoIkEIYDAATGDj8ACMAc1NKqAxqeVMAThCAd1NUoJCAB0IAZnxelyGRgBZTNDhhwkmsWYBWUygCimyc-JBMF3wwADY99sPiYjt8YjjG+RgStclkDY28gox8KAgFfBKIBfbCCCMb4QSpEABM+HaEMqcS6PXwWDiQ2QhDiMDAGQA5CRiL04IgJLIFEoVGpaBotGJMQBdNYbaQvEBwFzVZAlDCyUwQIRYsCNGCVWhKGnIFwQGDtABCtAAHljwuEBmDJEqafdgJI4MRrLBEJINQVIFBVkhIjQ7HE0Qw6FBaHECpJWI6KA96QytsRAbB7gUACpyRTKCCSACyvodAEp1v5pO6Cr0OYQ2VisKlDmD9uNJKl8AAOfa53PUUzjfDdIK5yRBUwAdnwNdS+ckEIGNf2qVa+AGA1SNckh1SYNzYNMIQG4wGi32VfrLRaqQ7IX2+yCWZzLR7o-r41zg+b+H2NfGI7CizT6RCE4bkzCh4LM-GixaYOWIUWw-GfZCNY3ueWQ3bLMWx3GtTEWLtFhrRZ+zzIIBn2Et8DBZ81xCFp70vHsgmVHMC0WAZsyQq8VTLeC+whRYgkbSRS3GQ90ghdDFizIZUknZU62PXM+1LbCgj7Bd8DohikJrVsoCXH9xy3ZDxgnB9sKnGdUjnRtqDQ-YX0rS82xU-cVMWZUQj-T90iGLS11CHpp2-YcX2U-jx33M86JnVcwQI8zC0XMsPLBMz8HfNitzbMSCMOY9M1MLyOMC3MN1MQ4awrGd4soyYIX2eCszfFpTLAvMwSHELkrbUxczLH8QoXQcuiQsEGzqlpmJaUxMorBDGO4yYhh7KqxwQkIwVM1rLwXG8uzBKiBi3cZxq3d95xsrcWgbfZXwPVsK2i0I5tanMGp3RDUmPSYcz-KLzLgmbwN7SCCtSZYKprXdcwexYAC8sDCNNW0Ix8TvU-BVvfbSrJwrtxrcgZ4v3OD5KGhrHrhhcWhnQyJxYg980szN2xo4GgifEihyU78JwvYGWniyscx7fD9yHNtCMM3cSLkwcJNCMSay-Ls53WkKejEmSYYXYtzsok8DyHAZWt4qi3qXXMd2WcCN03EJHsg6XJzonLQlWnzqf4ozJqmkc6fnA3KLgqAQrowsZyVY9RsCxYpxmoaf32FpiwhIJl2WHM4PixCawa4PRJFut+ILLcsvGII3fHX83OawaD3fYmtdtiaCzEynB17Ldk490Cwgz52XzPOrWxVmcGzTZYITTMG8raKO8v4-cj0-HbIMfAnkoS0tSYInNG3w2ahzR87uw25iKzR1ihyVwKYYnL6Cr-bjJBaer4MIQTHv2FwA-nAZ7dLOWiq3O6-rHJVmOzSfP0IHa4N9rnuxrro39AjfZ8Zs0zLlzNvG+mlna9h3EDOC+FtLKTYgRMcKkoLKULmjb83QfzOz-C9ZyU10jnTbJWUsq05wkWaseGChkexc0Ao-ISU4GpuWYnuJc44iZA2Gk+AiFEezELzHJZU5DnwkRXLzGCbZhpVjcj+UCIdII2SElRTSdVdJ83wllBCOZPxURnEOWqvVBwG26FNSYpZeYTX1v5NqZYJyZ1zAMVcPVgYNlaplbKiEVbtnDtxfaZYzygQhM4ua1V2wdgHJIwiC4VblUCnJMGMNA6zTyh7QiYlDx1WHFAyW1MckZjBF9KaSE5bOzghw+sa9KZiQ9uMagB1k6ESKnBQi8VxEQjkthfcSo96lgXA2QxfS+ZtGfNBIau4PK93bFgw2n5KwAWQhtZCuY2l03zBXPMz9pwUTwnVda04ALthmgdD20FcLLhmqxDc5E8yAQKkOaZ5lIKLBcKXHodFizGUzC-LWmZwldJOkXHRCFzKPnXj0ImXsuy-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']",
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
m("div.cf", [
 m("div.fl.w-20.tc.pv5.bg-black-05",
  "1"
 ),
 m("div.fl.w-20.tc.pv5.bg-black-10",
  "2"
 ),
 m("div.fl.w-20.tc.pv5.bg-black-05",
  "3"
 ),
 m("div.fl.w-20.tc.pv5.bg-black-10",
  "4"
 ),
 m("div.fl.w-20.tc.pv5.bg-black-05",
  "5"
 )
])



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


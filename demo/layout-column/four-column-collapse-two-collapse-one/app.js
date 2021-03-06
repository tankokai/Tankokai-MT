//  tankokai.com/mt | Demo - Layout Four Column Collapse Two Collapse One | v0.0.0 

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
  
  m("a.link.dim.white.dib.br-100.h2.w2.mr3.[href='https://flems.io/#0=N4IgZglgNgpgziAXAbVAOwIYFsZJAOgAsAXLKEAGhAGMB7NYmBvEAXwvW10QICsEqdBk2J4A9GIAEk4hjQBrWvIwR8dLGKzFJAH0kARGFlqSAtJIAyGAJ60ArtoBi9gE6SAwrSh2saD16gMAAc4GEkAFQB3E08oQJCwgHk0ML0ANwAGfCyMyQAdNAK0jDcAOQw0gEZJAF4CySwACjyQQhgMABMYF3wAIwBzU17A6nlTAE4syNNKjKygwgBmfCC05dWAFlM0OBXCLaw9gFZTKBaKeobmkEw0-DAANnvIp+JiO3xiFwxRmA7zyTIS6XJotDD4KAQBT4DoQQ6RQgQRgwiC9IgAJnwkUxvRcMzm+CwLmWyEILhgYBqAHISMQQogJLIFEoVGpaBotGIqQBdc6XaSgkBwNL9ZAdDCyUwQITUsA-GC9WhKHnINIQGCRABCtAAHtTcrlFujJEaeQDgJI4MRrLBEJILS1IHEWnaWtQ7C5yQw6FBaC4WpJWIGKID+QLrsQkbAAS1wnJFMoIJIALLhAMASgufmk4ZaQQlhDF1KwlSe6IeG0klXwAA4HjWa9RTBt8LMMjXJBlTAB2fDdyp1ySYxbdh6VCb4RaLSrdyRPSromvo0xZRYbRZHB6dvvjcaVcdZB4PDKV6vjacrvsbGsLof4B7djbLnJHUvVLLr-tbHIP+vbjZHOM6InFkRxLhss5ZN2541icyxjpWw7Xt2phHJORzdkcc61hkiwPM2+DokBp5ZOMf4ftOGTGtW9ZHIsVaEZ+Jqtnhs6YkcGQDpILYbA+1SYmRRyVsslQbsavZPjWs4tlRGSzvu+C8fxhHdiOUCHtBa6XkRGzrv+VGbtulS7gO1CkQ8wEdh+o7GXexlHMaWSwRB1TLJZp7ZHMW5QUuwFGXJa53q+vHbie6L0W5DYHq24Xoq5+BgaJl6jqp9FPE+FamJF4kJTW56mE83bttueUcVsmIPHhlageMLmobW6KLslRWjqYNattByX7guMyEei-a9eMQnjKYFXtvhAlSVsyzTp1q74Vk6IuSNH77t+k7opxiyXhsa2XmBe7eZe4z9g8IH3iO7ZZdku0jdW-XXgRlRPls1awZlbm4dtaEzhh9WVCc7XdjeNb-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-4qf20ZlRV2VFzxDMWkaH3wEIf-gfPB6GSL7aLcztePc9MKypce9jLC99JgJfrA+Ksq9M+WwhR5dj-4iJE1sQ2A1utpkjzrPVpc-vFKNQNeHciCVRI3OQxw+avCcmve0q+IauMhLnV3OFX5kXlzxxflAYcYkCJ0X3DagtTqcySEdfyK9O73XXE9VCeQKJfVIhgCiNEuJ8RZCDViTERISRkgpNSAAxLarMS-i0ijFBKDAUoZRUn6EiQgdhegNvVC1F1H1F0SNHbQf0HW3StBtBgDtB7W3WHSdDHVdBoA9C9GIBnX9BAHnUXRDCBGvQjCjBgD5AQMdFgCwF2FoCTAAAVAhrB+gXB7A0B-hsDL1H8n9rhb171ixpxz4txnpawltewZFhUZEoV-ElMJCbYHJOIVY8JopNx+U5CxxwEnJTkqJ1ZWwTxOw-FxpWMWpf5JkjRFFMJ6w-ZeYjxKwTd1dxDZhWYNp+UjJpxXYzpAV-wioDN6VAUz91xYJEYpxjx3wyZKsu4yIOZeJ04OZaYnw6Uwk3CBJpxFhbDkcu5jCdoi46ZQIpkKsZDXYhIeVwEKpZFxC1xdsdDDwfEHEZx9tciyZsjzCkYwJKwzYTxKhxDAjakcJHozwHJmIBw0knkDNlga9dkRxxZHdxiNIHJXYL57FSJQcZjjZOJCAc4pxGxFp9w4pdFVpHEW4gk8jjxZCA95CoAFI8Ik4LCjhEYMlTd7xnpuFDxNiFsFwMUE4mtJMIYsAZh2oLJKYUtEY7CqVm5LYPN7x1wdpIcwTFhCibNVISjyxPD9pDjoojQlDKcbJ85gkYjSJRwqI-Fao4Tc8udVxYpwiMiFDsiB5cj9psiz8UZY5VwXogiKiKwtY4ohYoJqSsieVTjGiHJr4P5EZAJjZlVTlNchplxvkY51Ew88MpxLkxi0lVxZ5ooHxpiqUlinYFiNSCiCpOZGpxC4om5yjFIXiOZ2xQTFC5jWkTi4EQN5ILD0R2jqiXCXT84XSzVjJHIBY8JxgoBhDF4AyrjQt05wdQzVwZDAcAiyZkSllH4nIL4nSN4XZdF446xzp+wwo7x1wt4St58WhF8cwV9nU1919pBiyXUCgqzCgazig3BDBjBagChi0YBqBIx6A1AwAAR8CrgWhYQ7gwAoAsQT9hyOJTB4RRoTghyBghgRgxhZhPhqAVg0gNgSCd0QBKgL0XVH9BR+z7ghzphw1pgxyJzgJTg+hBhhgfgxhGZFzlzVyt11z0Qty19dyIAByDyRzjyuxTypyLzZzrzRosgMD7y1zh1FgXydzrg9zBzhyjzUIfzhyzzpzLy5yspgKlzNgwKWgHz6gnVHUl9qyCgJBpArBbAHA4ADAjBaAigShJBqCMB+gwgahIDJBG1Ig7QwA7A0A2z000BGh0xWLJByR3gXA-BBQsAVBChKBl0cxygqh2CqLjB2CKyF00A1LqySKAAlewOtZs-ARghwGARoDoWgd0HABgPoWgDoawEMFoMQc0eoeyl0eiximALMVgJ1AoSgIUGAWAXi+gBAHgYGRADINgDgG4LgPANQOAAQGgegRgZgHgNgbkKgL1eQIK1ASKnAPALAH-FwaAfAfgHyj0cgHgWkBNMQbioIeQfoNkDkfK6AAAAQ3nvE0EaqHOKqoGtCCG4CFGoAKqCFEHYE4Byp4FkGoGTUCsJChBiritKrwAqrgAZCqrQBqrqvUDEAmqmp2CavmRyEzViq2r3WmryrQDmp8p6r6ugNgBSqoEwDGrXXjBZFUE2q0F0CUpMHMDIt0skGcA9H8G8F8EBviFCAiGiBBuCDBuSFSDYpyGyEkDYCAA']",
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
m("section.cf", [
 m("div.fl.w-100.w-50-m.w-25-l.bg-black-10.tc.pv4",
  "1"
 ),
 m("div.fl.w-100.w-50-m.w-25-l.bg-black-05.tc.pv4",
  "2"
 ),
 m("div.fl.w-100.w-50-m.w-25-l.bg-black-20.tc.pv4",
  "3"
 ),
 m("div.fl.w-100.w-50-m.w-25-l.bg-black-30.tc.pv4",
  "4"
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


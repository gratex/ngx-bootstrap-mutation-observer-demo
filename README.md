# NgxBootstrapSmartformsDemo

## Start app

```
npm install
npm start
```

### Test demo

- Browse http://localhost:4200/
- Click in date input field
- Date picker will be shown

- Go to src/app/app.ts
- Uncomment the code which adds MutationObserver.
- Click in date picker will now cause infinite loop.

## Popis problemu

Angular pouziva zone.js na detekciu zmien.
Tato kniznica sa hookne na vsetky mozne async operacie v JS (xhr, setTimeout, MutationObserver...), resp. wrappne ich, a vykonava svoj change detection pri akejkolvek takejto operacii.

Zaroven pouzivame kniznicu ngx-bootstrap, co su UI angularove komponenty s bootstrap stylmi.
Problem na robi datepicker z tejto kniznice, ktory je kodnty tak, ze ked sa nieco udeje "v zone", tak prepocita svoju poziciu, aby bol po akejkolvek cinnosti pouzivatela, na spravnom mieste.
Avsak pri tom prepocitavani, sa najskor presunie na "neutralne miesto", aby vypocet spravnej polohy nebol ovplyvneni jeho samotnou aktualnou polohou.

A prave tato docasna zmena datepicker dropdownu vyvola vas MutationObserver, cim sa to zacykli.

V skratke

- datepicker component pocuva na akykolvek async kod (aj mutation observer)
- prepocita svoju polohu
- to docasne zmeni dom
- to vyvola mutation observer

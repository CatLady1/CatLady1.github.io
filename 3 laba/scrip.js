strany=["italy", "france", "switzerland","hungary","romania",
  "japan","afghanistan","india","brazilia","canada",
"argentina","kolumbia","england","mexico"]


function makeTableFromCountry (num,i){
	let div= "<div "+"id="+'"'+strany[i]+'"'+"class="+'"bg"'+" >";
	let tab="<table width=100%>";
    let tr="<tr>";
    let td="<td>";
    let h1="<h1>";
    let tab1="<table width=75%>"
    h1+=num[0];
    h1+="-";
    h1+=num[1];
    h1+="</h1>";
    td+=h1;
    tr+=td;
    tr+="</tr>"
    tab+=tr;
    for (let i=2;i<6;i++)
    {
        tr="<tr>";
        td="<td>";
        let txt1=about[i];
        let txt2=num[i];
        td+=txt1;
        tr+=td;
        td="<td>";
        td+=txt2;
        tr+=td;
        tab+=tr;

    }
	 let count1=num[6].length;
    for (let i=0;i<count1;i++)
    {
        tr="<tr>";
        td="<td>";
        let txt1=about[6];
        let txt2=num[6][i];
        if (i===2)
        {
            td+=txt1;
        }
        tr+=td;
        td="<td>";
        td+=txt2;
        tr+=td;
        tab+=tr;

    }
	tr='<tr id="col">';
    tab+=tr;
    count1=num[7].length;
    for (let i=0;i<count1;i++)
    {
        tr="<tr>";
        td="<td>";
        txt1=about[7];
        txt2=num[7][i];
        if (i===0)
        {
            td+=txt1;
        }
        tr+=td;
        td="<td>";
        td+=txt2;
        tr+=td;
        tab+=tr;

    }
	let count=0;
    for ( let key in num[8])
    {
        let length=Object.keys(num[8]).length;
        tr="<tr>";
        td="<td>";
        txt1=about[8];
        txt2=num[8][key];
        count++;
        if (count===Math.floor(length/2))
        {
            td+=txt1;
        }
        tr+=td;
        td="<td>";
        td+=key;
        td+="-";
        td+=txt2;
        tr+=td;
        tab+=tr;

    }
	
    /* 
       формирование таблицы, отображающей 
       информацию о городе country 
    */
    tab+="</table>";
	div+=tab;
    div+="</div>";
    return div;
    
}




var aper=countries.map((num,i)=>{return makeTableFromCountry(num,i)});

aper.forEach(function(info, i, arr) {
    document.write(info);
    document.write("<br>");
});

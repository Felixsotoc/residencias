





window.addEventListener('load', async () => {



    const form = document.querySelector('#form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();


        let text3= document.getElementById('text3').value;
        let text4= document.getElementById('text4').value;
        let text5= document.getElementById('text5').value;
        let text6= document.getElementById('text6').value;
        let text7= document.getElementById('text7').value;
        let text8= document.getElementById('text8').value;
        let text9= document.getElementById('text9').value;
        let text10= document.getElementById('text10').value;
        let text11= document.getElementById('text11').value;
        let text12= document.getElementById('text12').value;
        let text13= document.getElementById('text13').value;
        let text14= document.getElementById('text14').value;
        let text15= document.getElementById('text15').value;
        let text16= document.getElementById('text16').value;
        let text17= document.getElementById('text17').value;
        let text18= document.getElementById('text18').value;
        let text19= document.getElementById('text19').value;
        let text20= document.getElementById('text20').value;
        let text21= document.getElementById('text21').value;
        let text22= document.getElementById('text22').value;
        let text23= document.getElementById('text23').value;
        let text24= document.getElementById('text24').value;
        let text25= document.getElementById('text25').value;


        generatePDF(text3, text4, text5, text6, text7, text8, text9, text10, text11, text12, text13, text14, text15, text16, text17, text18, text19, text20, text21, text22, text23, text24, text25);
    })

});

async function generatePDF(text3, text4, text5, text6, text7, text8, text9, text10, text11, text12, text13, text14, text15, text16, text17, text18, text19, text20, text21, text22, text23, text24, text25) {
    const image = this.logoData;

    const pdf = new jsPDF('p', 'pt', 'letter');

    pdf.addImage(image, 'PNG', 0, 0, 565, 792);

    pdf.setFontSize(12);

  /*  const date = new Date();
    pdf.text(date.getUTCDate().toString(), 235, 150);
    pdf.text((date.getUTCMonth() + 1).toString(), 275, 150);
    pdf.text(date.getUTCFullYear().toString(), 320, 150);
*/
    pdf.setFontSize(10);
    pdf.text(text3, 170, 213);
    pdf.text(text4, 170, 200);
    pdf.text(text5, 170, 400);
    pdf.text(text6, 170, 456);
    pdf.text(text7, 170, 475);
    pdf.text(text8, 170, 200);
    pdf.text(text9, 170, 400);
    pdf.text(text10, 170, 456);
    pdf.text(text11, 170, 475);
    pdf.text(text12, 170, 200);
    pdf.text(text13, 170, 400);
    pdf.text(text14, 170, 456);
    pdf.text(text15, 170, 475);
    pdf.text(text16, 170, 200);
    pdf.text(text17, 170, 400);
    pdf.text(text18, 170, 456);
    pdf.text(text19, 170, 475);
    pdf.text(text20, 170, 200);
    pdf.text(text21, 170, 400);
    pdf.text(text22, 170, 456);
    pdf.text(text23, 170, 475);
    pdf.text(text24, 170, 200);
    pdf.text(text25, 170, 400);


    pdf.setFillColor(0, 0, 0);


    pdf.save("POLIZA.pdf");

}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';
import { Directory } from '@capacitor/filesystem';

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'page-polizas',
  templateUrl: './polizas.html',
  styleUrls: ['./polizas.scss']
})
export class PolizaPage implements OnInit {
  myForm: FormGroup;
 //pdfObj = null;
  base64Image = null;
  logoData = null;

  constructor(
    private fb: FormBuilder,
    private plt: Platform,
    private http: HttpClient,
    private fileOpener: FileOpener) { }

  ngOnInit() {

    this.myForm = this.fb.group({
      showLogo: true,

      f1: '',
      f2: '',
      f3: '',
      f4: '',
      f5: '',
      f6: '',
      f7: '',
      f8: '',
      f9: '',
      f10: '',
      f11: '',
      f12: '',
      f13: '',
      f14: '',
      f15: '',
      f16: '',
      f17: '',
      f18: '',
      f19: '',
      f20: '',
      f21: '',
      f22: '',
      f23: '',
      f24: '',
      f25: '',
      f26: '',
      f27: '',






    });
    this.loadLocalAssetToBase64();


  }

  loadLocalAssetToBase64() {
    this.http.get('./assets/img/polizaimg/reportemensual3.png', { responseType: 'blob' })
      .subscribe(res => {
        const reader = new FileReader();
        reader.onloadend = () => {
          this.logoData = reader.result;
        }
        reader.readAsDataURL(res);
      });
  }




  DescargarPdf() {
    const formValue = this.myForm.value;
    const pdf = new jsPDF('p', 'pt', 'letter');
    pdf.addImage(this.logoData, 'PNG', 0, 0, 615, 800);



    //  ( lado    altura   )
    pdf.setFontSize(12);
    pdf.setFont('arial');
    pdf.text('Jardín de niños Club 20-30 #1043', 93, 110);
    
    //zona escolar
    pdf.text('100', 400, 110);
    //mes
    pdf.text(formValue.f3, 500, 110);

    //no de poliza y saldo inicial
    pdf.text(formValue.f4, 200, 134);
    pdf.text(formValue.f5, 500, 135);
    //tabla ingresos
    pdf.text(formValue.f6, 490, 178);
    pdf.text(formValue.f7, 490, 199);
    pdf.text(formValue.f8, 490, 219);
    pdf.text(formValue.f9, 490, 239);
    //total ingresos
    pdf.text(formValue.f10, 490, 257);
    //poliza de egresos no.
    pdf.text(formValue.f11, 200, 288);
    //tabla egresos
    pdf.text(formValue.f12, 490, 330);
    pdf.text(formValue.f13, 490, 350);
    pdf.text(formValue.f14, 490, 370);
    pdf.text(formValue.f15, 490, 390);
    pdf.text(formValue.f16, 490, 410);
    pdf.text(formValue.f17, 490, 430);
    pdf.text(formValue.f18, 490, 450);
    pdf.text(formValue.f19, 490, 470);
    pdf.text(formValue.f20, 490, 490);
    pdf.text(formValue.f21, 490, 507);

//total de egresos
    pdf.text(formValue.f22, 490, 524);

//saldo final

pdf.text(formValue.f26, 490, 544);


//LOCALIDAD
    pdf.text(formValue.f23, 150, 570);

//dia mes y anio
    pdf.text(formValue.f24, 280, 570);
    pdf.text(formValue.f3, 360, 570);
    pdf.text(formValue.f25, 460, 570);



    pdf.save(formValue.f27);
  }




}


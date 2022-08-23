import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
/*import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';*/
import { DocumentScanner, DocumentScannerOptions, DocumentScannerSourceType } from '@ionic-native/document-scanner/ngx';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.page.html',
  styleUrls: ['./docs.page.scss'],
})
export class DocsPage implements OnInit {

  ruta: string='';
  texto: string='';

  constructor(private documentScanner: DocumentScanner) {
   }

  ngOnInit() {
  }
  async tomarFoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });

    this.ruta = image.webPath;

  }

  scan(){
    let opts: DocumentScannerOptions = {
      sourceType: DocumentScannerSourceType.CAMERA,
            fileName: 'ticketScan.png',
            quality: 100,
            returnBase64: true
    };
this.documentScanner.scanDoc(opts)
  .then((res: string) => console.log(res))
  .catch((error: any) => console.error(error));

    /*this.qr.scan().then(info => {
      this.texto = info['text'];
    })*/
  }

}

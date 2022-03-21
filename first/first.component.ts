import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  Telefonos:string[]=[];
  claves:any[]=[]
  Notificaciones:string[]=[];
  Tabla:any[]=[];
  telefono:string = '';
  respuestas:any[]=[]
  constructor(private http: HttpClient) { }

  isNotificacion:boolean=false;

  ngOnInit(): void {
  }

  ramdomNotificacion(){

  }

  addTelefono(){
    if(this.telefono.trim() != ''){
      this.Telefonos.unshift(this.telefono);
      let tempClave = Math.floor((Math.random() * (9999-1000)) +1000);
      this.claves.unshift(tempClave);
      this.Tabla.unshift({
        telefono: this.telefono,
        notificacion:''
      });
    }
  }

  Notificacion(){
    this.isNotificacion = true;
    this.Tabla = []
    this.claves=[];
    this.Tabla = this.Telefonos.map(t=>{
      let tempClave = Math.floor((Math.random() * (9999-1000)) +1000);
      this.claves.unshift(tempClave);
      return {
        telefono: t,
        notificacion: `Para su clave ${tempClave}, se ha registrado la gestión ${Math.floor((Math.random() * (999999-100000)) +100000)} en las oficinas principales`
      }
    })
  }

  fecha(){
    this.isNotificacion = false;
    this.Tabla = []
    this.claves=[];
    this.Tabla = this.Telefonos.map(t=>{
      let consumo = Math.floor((Math.random() * (999-100)) +100);
      let time = Date.now() + 15;
      let tempClave = Math.floor((Math.random() * (9999-1000)) +1000);
      this.claves.unshift(tempClave);
      return {
        telefono: t,
        notificacion: `Se ha realizado la facturación del mes de marzo para su clave ${tempClave}, su consumo es de ${consumo} kWh el monto a pagar es de Lps ${(consumo>150)? consumo*6:consumo*2} fecha máxima de pago ${time}`
      }
    })
  }

  mensaje(){
    // const url='https://747a-190-5-111-244.ngrok.io/api/test';
    // this.Telefonos.forEach(t => {
    //   this.http.post(url, {}).subscribe(res=>console.log(res))
    // })
    this.respuestas = this.Telefonos.map(t => {
      return {
        telefono: t,
        Result : this.uuidv4()
      }
    })
  }

  uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}

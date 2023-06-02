import { Component } from '@angular/core';

import { PrimeNGConfig } from 'primeng/api';
import {ImageModule} from 'primeng/image';
import { MessageService } from 'primeng/api';
declare var require: any
const FileSaver = require('file-saver');
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
export interface Tutorial {
  title?: String;
  image?: String;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {
  tiles: Tile[] = [
    {text: 'Intro', cols: 3, rows: 2, color: 'white'},
    {text: 'Pic', cols: 3, rows: 2, color: 'white'},
    {text: 'Slideshow', cols: 2, rows: 1, color: '#DDBDF1'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},

  ];


  tutorials: Tutorial[]=[ {
    title: 'Web MH ',
    image:
'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420155051/WebMH.png',
},
{
    title: 'Interview Experience ',
    image:
'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420112859/IntExp.png',
},
{
    title: 'GeeksforGeeks Logo ',
    image:
'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210419113249/gfg-new-logo-min.png',
},
{
    title: 'GeeksforGeeks Carnival ',
    image:
'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210418122505/132_00_00_Mailheader-min.png',
},
{
    title: 'Python Course ',
    image:
'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20211028203138/GeeksforGeeks-Python-Foundation-Course-Learn-Python-from-Scratch-in-Hindi.png',
},];

    constructor(private primengConfig: PrimeNGConfig) { }

    ngOnInit() {

    }

    downloadPdf() {
      const pdfUrl = './assets/Resume.pdf';
      const pdfName = 'Denil_Resume';
      FileSaver.saveAs(pdfUrl, pdfName);
    }
}

